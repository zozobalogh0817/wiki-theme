---
layout: page
title: Index
exclude: true
---
<h1>Welcome page</h1>

<p>
    Pages :
</p>

{% for page in site.pages %}
<div>
    <a href="{{ site.path }}{{ page.url }}">{{ page.title }}</a>
</div>

{% endfor %}