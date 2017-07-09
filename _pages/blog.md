---
layout: page
title: blog
permalink: /blog/
class: "post"
---

<div class="contain">

{% for post in site.posts %}

	<div class="col-md-3">
	<div class="blog-thumb">    
	  


	      <a class="link" href="{{ post.url | prepend: site.baseurl }}">


	  		<img class="image" class="blog-photo" src="/img/blog/{{ post.imgName }}">



	  	 	</a>


	 
	  	 </div>
	</div>
	<!-- <div class="col-md-3 col-md-offset-1">
	 <p>{{ post.title | upcase}}</p>
	  <p>{{post.date | date: "%Y-%m-%d"}}</p>
	</div> -->


{% endfor %}
</div>