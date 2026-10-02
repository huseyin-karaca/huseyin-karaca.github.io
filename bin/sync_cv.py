"""Sync the website CV from the huseyin-karaca-cv repo.

    python bin/sync_cv.py --cv-repo ../huseyin-karaca-cv

Reads <cv-repo>/content/cv.yml and <cv-repo>/content/publications.bib, converts them to
the shape the website's CV layout expects (_data/cv.yml), and copies the built PDF
(<cv-repo>/pdf/cv.pdf) to assets/pdf/. The CV repo's GitHub Action runs this on every
push, so edit the CV there, not here.

Only published work reaches the web page: @unpublished entries (manuscripts under review)
are left out, though they still appear in the downloadable PDF.

Requires pyyaml and bibtexparser<2.
"""
import argparse
import re
import shutil
from pathlib import Path

import bibtexparser
import yaml
from bibtexparser.bparser import BibTexParser
from bibtexparser.customization import splitname

SITE = Path(__file__).resolve().parent.parent
PDF_NAME = 'huseyin-karaca-cv.pdf'          # what _pages/cv.md links as cv_pdf

# CV-repo section name -> website section name (the website layout switches on these).
SECTION_ORDER = ['education', 'research_experience', 'publications', 'teaching_experience',
                 'skills', 'achievements_and_honors', 'activities_and_interests']

# --- LaTeX -> HTML ---------------------------------------------------------------

MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

# "(P2, P3)", "(J1)", "(C1, P1)": cross-references to the PDF's publication labels,
# which mean nothing on the web page.
PUB_LABELS = re.compile(r'\s*\((?:[JCP]\d+(?:,\s*)?)+\)')


def detex(text):
    """The inline LaTeX used in cv.yml, as HTML."""
    if text is None:
        return None
    text = str(text)
    text = re.sub(r'\\href\{([^}]*)\}\{([^}]*)\}', r'<a href="\1">\2</a>', text)
    text = re.sub(r'\\textit\{([^}]*)\}', r'<em>\1</em>', text)
    text = re.sub(r'\\textbf\{([^}]*)\}', r'<strong>\1</strong>', text)
    text = text.replace("``", '“').replace("''", '”')
    text = text.replace('---', '—').replace('--', '–')
    text = re.sub(r'\\([&%$#_])', r'\1', text)
    text = text.replace('~', ' ')
    text = re.sub(r'[{}]', '', text)
    return re.sub(r'\s+', ' ', text).strip()


def fmt_date(value):
    """'YYYY-MM' or 'MM/YY' -> 'Mon YYYY'; anything else ('present') is capitalised."""
    if value is None:
        return None
    text = str(value).strip()
    m = re.fullmatch(r'(\d{4})-(\d{1,2})', text)
    if m:
        year, month = int(m.group(1)), int(m.group(2))
    else:
        m = re.fullmatch(r'(\d{1,2})/(\d{2})', text)
        if not m:
            return text[:1].upper() + text[1:]
        month, year = int(m.group(1)), 2000 + int(m.group(2))
    return f'{MONTHS[month - 1]} {year}'


def highlights(items):
    """Bullets; a '\\quad' inside one (e.g. 'Grade: ... \\quad Advisor: ...') splits it.
    Publication labels are dropped here only: elsewhere '(C1)' can be a language level."""
    out = []
    for item in items or []:
        item = PUB_LABELS.sub('', str(item))
        out += [detex(part) for part in item.split(r'\quad') if part.strip()]
    return out


def clean(d):
    return {k: v for k, v in d.items() if v not in (None, '', [])}

# --- Sections ----------------------------------------------------------------------


def convert_entry(e):
    """Education / experience / activity entry."""
    return clean({
        'institution': detex(e.get('institution')),
        'company': detex(e.get('company')),
        'name': detex(e.get('name')),
        'area': detex(e.get('area')),
        'degree': detex(e.get('degree')),
        'position': detex(e.get('position')),
        'url': e.get('url'),
        'start_date': fmt_date(e.get('start_date')),
        'end_date': fmt_date(e.get('end_date')),
        'date': fmt_date(e.get('date')),
        'location': detex(e.get('location')),
        'summary': detex(e.get('summary')),
        'highlights': highlights(e.get('highlights')),
    })


def convert_teaching(e):
    entry = convert_entry(e)
    entry['courses'] = [clean({'name': detex(c['name']), 'semester': detex(c.get('semester')),
                               'coordinator': detex(c.get('coordinator'))})
                        for c in e.get('courses', [])]
    return entry


def convert_achievements(groups):
    return [clean({'title': detex(g['title']), 'description': detex(g.get('description')),
                   'entries': [{'name': detex(x['name']), 'date': fmt_date(x['date'])}
                               for x in g['entries']]})
            for g in groups]


def short_author(name):
    """'Huseyin Karaca' / 'Karaca, Huseyin' / 'Koc, A. T.' -> 'Karaca, H.' / 'Koc, A.T.'"""
    parts = splitname(name)
    last = ' '.join(parts['von'] + parts['last'])
    initials = ''.join(p.strip('.')[0] + '.' for p in ' '.join(parts['first']).split() if p.strip('.'))
    return f'{last}, {initials}'


def convert_publications(bib_path):
    """Published entries of publications.bib, in file order; @unpublished is skipped."""
    parser = BibTexParser(common_strings=True, ignore_nonstandard_types=False)
    with open(bib_path) as f:
        entries = bibtexparser.load(f, parser).entries
    pubs = []
    for e in entries:
        kind = e['ENTRYTYPE']
        if kind == 'unpublished':
            continue
        if kind == 'article':
            doc_type, venue = 'journal', e.get('journal')
        elif kind == 'inproceedings':
            doc_type, venue = 'conference', e.get('booktitle')
        else:
            doc_type = 'preprint'
            venue = 'arXiv preprint' if e.get('archiveprefix', '').lower() == 'arxiv' else 'Preprint'
        doi = re.sub(r'^https?://(dx\.)?doi\.org/', '', e.get('doi', ''))
        pubs.append(clean({
            'title': detex(e['title']),
            'authors': [detex(short_author(a)) for a in re.sub(r'\s+', ' ', e['author']).split(' and ')],
            'journal': detex(venue),
            'doi': doi,
            'date': e.get('year'),
            'doc_type': doc_type,
        }))
    # Journals first, then conferences, then preprints, as on the PDF.
    order = {'journal': 0, 'conference': 1, 'preprint': 2}
    return sorted(pubs, key=lambda p: order[p['doc_type']])


def convert(cv_repo):
    src = yaml.safe_load((cv_repo / 'content/cv.yml').read_text())['cv']
    sections = src['sections']
    out = {
        'education': [convert_entry(e) for e in sections.get('education', [])],
        'research_experience': [convert_entry(e) for e in sections.get('research_experience', [])],
        'publications': convert_publications(cv_repo / 'content/publications.bib'),
        'teaching_experience': [convert_teaching(e) for e in sections.get('teaching_experience', [])],
        'skills': [{'label': detex(s['label']), 'details': detex(s['details'])}
                   for s in sections.get('skills', [])],
        'achievements_and_honors': convert_achievements(sections.get('achievements_and_honors', [])),
        'activities_and_interests': [convert_entry(e) for e in sections.get('activities_and_interests', [])],
    }
    cv = {k: src[k] for k in ('name', 'email', 'phone', 'website', 'address') if src.get(k)}
    cv['social_networks'] = src.get('social_networks', [])
    cv['sections'] = {k: out[k] for k in SECTION_ORDER if out[k]}
    return {'cv': cv}


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--cv-repo', type=Path, required=True, help='path to a huseyin-karaca-cv checkout')
    args = ap.parse_args()
    cv_repo = args.cv_repo.resolve()

    data = convert(cv_repo)
    header = ('# Generated from the huseyin-karaca-cv repo by bin/sync_cv.py -- do not edit by hand.\n'
              '# Edit content/cv.yml or content/publications.bib there instead.\n')
    body = yaml.safe_dump(data, allow_unicode=True, sort_keys=False, width=120)
    (SITE / '_data/cv.yml').write_text(header + body)
    print(f"✓ _data/cv.yml ({len(data['cv']['sections'].get('publications', []))} publications)")

    pdf = cv_repo / 'pdf/cv.pdf'
    if pdf.exists():
        shutil.copyfile(pdf, SITE / 'assets/pdf' / PDF_NAME)
        print(f'✓ assets/pdf/{PDF_NAME}')
    else:
        print(f'! {pdf} not found; PDF left unchanged')


if __name__ == '__main__':
    main()
