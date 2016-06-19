---
layout: page
title: Projects
permalink: /made/
class: "wide"
---

{% for project in site.projects reversed%}
{% if project.title %}
  <div class="thumbnail">
  	<div class="resource">
  		<a href="{{ project.url | prepend: site.baseurl }}">
  			<img src="/img/{{ project.imgName }}" width="100%">
  	 	</a>
  	</div>
    <div class="caption">
    	<h3>{{project.title}}</h3>
	<p class="small">{{project.description}}</p></div>
</div>
{% endif %}
{% endfor %}