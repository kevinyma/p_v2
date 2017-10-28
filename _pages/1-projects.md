---
layout: page
title: projects
permalink: /projects/
class: "post"
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


<!-- <div class="row">
{% for project in site.projects reversed%}
{% if project.title%}{% if project.ignore != "yes" %}

<div class="thumb col-sm-4">    
  	<div class="resource">
      {% if project.altlink %}<a class="link" href="{{ project.altlink }}">{% else %}  <a class="link" href="{{ project.url | prepend: site.baseurl }}">{% endif %}
  		<img class="image" src="/img/{{ project.img }}" width="100%" onmouseover="this.src='/img/{{ project.imgName2 }}';" onmouseout="this.src='/img/{{ project.imgName }}';">
  		<span class="title">{% if project.alttitle %}{{project.alttitle | upcase}}{% else %}{{project.title | upcase}}{% endif %}</span>
  	 	</a>
  	</div>
  <div class="caption"><p class="small">{{project.description}}</p></div>
</div>
{% endif %}{% endif %}
{% endfor %}

</div>
 -->

<div class="contain">
 <div class="row">
{% for project in site.projects reversed%}
{% if project.title%}{% if project.ignore != "yes" %}

<!-- col-md-4 col-sm-6 col-xs-12 m-b-md
 -->

<div class="col-sm-4 col-xs-6">
  {% if project.altlink %}<a class="link" href="{{ project.altlink }}">{% else %}  <a class="link" href="{{ project.url | prepend: site.baseurl }}">{% endif %}   
  <div class="resource">
      <img class="thumbnail-image" src="{{site.baseurl}}/img/sickthumbs/{{ project.img }}">
    </div>
  <div class="color-bar blue-bar"></div>
     </a>
  <div class="caption">
    <p class="project-title">{{project.title}}</p>
    <p class="project-category">{{project.category}}</p>
  </div>
</div>
{% endif %}{% endif %}
{% endfor %}
</div>
</div>

<!-- </div> -->



<!-- <div class="content">

  {% for project in site.projects reversed%}
  {% if project.title%}{% if project.ignore != "yes" %}

      <div class="col-sm-4">
        <a class="link" href="{{ project.url | prepend: site.baseurl }}">
          <img class="image" src="/img/sickthumbs/{{ project.img }}">
        </a>

        <p>{{project.title}}</p>
        <p>{{project.description}}</p>
      </div>

  {% endif %}{% endif %}
  {% endfor %}

</div>
 -->
<script src="//code.jquery.com/jquery-1.12.4.js"></script>
<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script>
$(document).ready(function () {
       $(".projects").animate({right:500}, 1500);
</script>
