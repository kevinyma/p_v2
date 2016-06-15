---
layout: page
title: Projects
permalink: /made/
class: "wide"
---

{% for project in site.projects reversed%}
  <div class="thumbnail">
  	<div class="resource">
  		<a href="{{ project.url | prepend: site.baseurl }}">
  			<img src="/img/{{ project.imgName }}" width="100%">
  	 	</a>
  	</div>
    <div class="caption">
    	<p>{{project.title}}</p>
	<p class="small">{{project.description}}</p></div>
</div>
{% endfor %}