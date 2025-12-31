import yaml
from jinja2 import Environment, FileSystemLoader

def bold_name(text, name="Karaca, H."):
    """Bolds the given name in the text."""
    return text.replace(name, f"\\textbf{{{name}}}")

# Load data
with open('cv.yml', 'r') as f:
    data = yaml.safe_load(f)

# Load and render template
env = Environment(loader=FileSystemLoader('.'))

# Register custom filter
env.filters['bold_name'] = bold_name

template = env.get_template('cv_template.tex.j2')
output = template.render(**data)

# Write output
with open('main.tex', 'w') as f:
    f.write(output)

print("✓ Generated main.tex")
