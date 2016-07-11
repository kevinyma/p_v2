---
layout: page
title: Projects
permalink: /made/
class: "wide" 
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script>
    var sourceSwap = function () {
        var thisImg = $('img', this);
        var newSource = thisImg.data('alt-src');
        thisImg.data('alt-src', thisImg.attr('src'));
        thisImg.attr('src', newSource);
    }
    $(function () {
        $('a.link').hover(sourceSwap, sourceSwap);
    });</script>

{% for project in site.projects reversed%}
{% if project.title %}
  <div class="thumbnail size-1-1">
  	 <!--  <div class="thumbnail size-{% if project.size%}{{project.size}}{% else %}1-1{% endif %}"> -->
  	<div class="resource">
  		<a class="link" href="{{ project.url | prepend: site.baseurl }}">
  			<img class="image" src="/img/{{ project.imgName }}" data-alt-src="/img/{{ project.imgName2 }}" width="100%">
  			<div><span class="title">{{project.title}}</span></div>
  	 	</a>
  	</div>

    <div class="caption">
	<p class="small">{{project.description}}</p></div>
</div>
{% endif %}
{% endfor %}