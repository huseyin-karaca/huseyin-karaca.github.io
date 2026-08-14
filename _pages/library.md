---
layout: page
title: bookshelf
permalink: /bookshelf/
nav: false
nav_order: 5
description: A personal archive of my reading journey on Kobo since last year, featuring unedited highlights, raw notes, and book reviews.
---
<div class="library-grid">
  {% assign sorted_books = site.library | sort: 'last_read' | reverse %}
  {% for book in sorted_books %}
    {% if book.hide %}
      {% continue %}
    {% endif %}
    <a href="{{ book.url | relative_url }}" class="library-card">
      <div class="library-card-cover">
        {% if book.cover %}
          <img src="{{ book.cover | relative_url }}" alt="Cover of {{ book.title }}" loading="lazy">
        {% else %}
          <div class="library-no-cover"><i class="fas fa-book"></i><br>No Cover</div>
        {% endif %}
      </div>
      <div class="library-card-info">
        <h4 class="library-card-title">{{ book.title }}</h4>
        <p class="library-card-author">{{ book.author }}</p>
        {% if book.last_read %}<p class="library-card-date" style="font-size: 0.8rem; opacity: 0.6; margin-top: -0.5rem; margin-bottom: 1rem;">Read on: {{ book.last_read }}</p>{% endif %}
        <div class="library-card-footer">
          <span class="library-status-badge status-{{ book.status | downcase | replace: ' ', '-' }}">{{ book.status }}</span>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
