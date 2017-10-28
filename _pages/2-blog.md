---
layout: page
title: blog
permalink: /blog/
class: "post"
---

<div class="contain">

{% for post in site.posts %}

	<div class="col-sm-3 col-xs-4">
	<div class="blog-thumb">    

	      <a class="link" href="{{ post.url | prepend: site.baseurl }}">

	  		<img class="image" class="blog-photo" src="{{site.baseurl}}/img/blog/{{ post.imgName }}">
	  		<div class="color-bar blue-bar"></div>
	  	 </a>



	  	 </div>
	  	 <div class="caption">
	  	 	<p class="project-title">{{post.title}}</p>
	  	 	<p class="project-category">{{post.date | date: "%Y.%m.%d"}}</p>
	  	 </div>
	</div>
	<!-- <div class="col-md-3 col-md-offset-1">
	 <p>{{ post.title | upcase}}</p>
	  <p>{{post.date | date: "%Y-%m-%d"}}</p>
	</div> -->


{% endfor %}
</div>
