---
layout: page
title: Projects
permalink: /makes/
class: "projects" 
---
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script>
    var sourceSwap = function () {
        var thisImg = $('img', this);
        var newSource = thisImg.data('alt-src');
        thisImg.data('alt-src', thisImg.attr('src'));
        thisImg.attr('src', newSource);
    }
    $(function () {
        $('a.link').hover(sourceSwap, sourceSwap);
    });</script> -->



{% for project in site.projects reversed%}
{% if project.title%}{% if project.ignore != "yes" %}
  <div class="thumbnail size-1-1">
  	 <!--  <div class="thumbnail size-{% if project.size%}{{project.size}}{% else %}1-1{% endif %}"> -->
    
  	<div class="resource">
    
       {% if project.altlink %}<a class="link" href="{{ project.altlink }}">{% else %}  <a class="link" href="{{ project.url | prepend: site.baseurl }}">{% endif %}
  	
  			<img class="image" src="/img/{{ project.imgName }}" width="100%" onmouseover="this.src='/img/{{ project.imgName2 }}';" onmouseout="this.src='/img/{{ project.imgName }}';">


  			<div><span class="title">{% if project.alttitle %}{{project.alttitle | upcase}}{% else %}{{project.title | upcase}}{% endif %}</span></div>
  	 	</a>
  	</div>

    <div class="caption">
	<p class="small">{{project.description}}</p></div>
</div>
{% endif %}{% endif %}
{% endfor %}