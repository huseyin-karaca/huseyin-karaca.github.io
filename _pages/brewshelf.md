---
layout: page
title: brewshelf
permalink: /brewshelf/
nav: true
nav_order: 6
description: My journal of specialty coffee explorations, detailing brew recipes and flavor profiles.
---
<div class="library-grid">
  {% assign sorted_brews = site.brewshelf | sort: 'date' | reverse %}
  {% for brew in sorted_brews %}
    {% if brew.hide %}
      {% continue %}
    {% endif %}
    <a href="{{ brew.url | relative_url }}" class="library-card">
      <div class="library-card-info">
        <h4 class="library-card-title">{{ brew.title }}</h4>
        <p class="library-card-author">{{ brew.roaster | default: brew.bean }} - {{ brew.origin }}</p>
        {% if brew.date %}<p class="library-card-date" style="font-size: 0.8rem; opacity: 0.6; margin-top: -0.5rem; margin-bottom: 1rem;">Brewed on: {{ brew.date | date: "%d.%m.%Y" }}</p>{% endif %}
        <div class="library-card-footer">
          <span class="library-status-badge status-{{ brew.process | downcase | replace: ' ', '-' }}"><i class="fas fa-leaf"></i> Process: {{ brew.process }}</span>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
