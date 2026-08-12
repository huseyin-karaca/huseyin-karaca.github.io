---
layout: page
title: Bookshelf
permalink: /bookshelf/
nav: true
nav_order: 5
description: A collection of my books, notes, and highlights.
---

<div class="library-grid">
  {% for book in site.library %}
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
        <div class="library-card-footer">
          <span class="library-status-badge status-{{ book.status | downcase | replace: ' ', '-' }}">{{ book.status }}</span>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
