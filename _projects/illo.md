---
layout: project
title:  "Illustration"
imgName: "illustrations1.png"
imgName2: "illustrations2.png"
description: "Illustrations."
date:   2016-5-14 12:00:00 +0800
technologies: 
category: 
tags: 
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<p><img src="/img/illustrations/house1.jpg" 
alt="Growing up we moved around a lot. 10 houses in 10 years. I remember bits and pieces of each one. The one that came with all the gaudy, horrible lamps. The one time I got a bathroom in my room but the toilet had bad pipes so it always smelled. The one with the little greenhouse. 

But I remember the evening sun flooding into all of them. Harsh blocks of brilliant light that would fade to a soft orange glow. I wish my vocabulary was greater so I could write about it more vividly. I sincerely do."
></p>
 
<p><img src='/img/illustrations/house2.jpg'></p>

<p><img src='/img/illustrations/house3.jpg'></p>

<p><img id="paint" src="/img/illustrations/paint1.png" 
alt="I didn’t grow up around the advent of personal computing—I was a bit late—but I sure wish I did. There’s something very earnest to me about old computer interfaces. I’m the hugest sucker for vicarious nostalgia. 

And Mac Paint is the bee’s knees."
></p>

<p><img id="paint" src="/img/illustrations/cat1.png" 
alt="“They cannot know who I am, inside.”

Maybe we’re all just scared creatures wearing suits and plastic faces. Oh wait only me? Haha…
"
></p>


<aside></aside>

<script>

$(document).on('scroll', function() {
    var y = $(this).scrollTop();
    $('img').each(function(){
    	if (y >= $(this).position().top-100){
    		   console.log($(this));

	    	if($(this).attr("alt")){
		    	var text = $(this).attr("alt");
		        $('aside').html(text);
     		}
    	}
	});
})
// $(document).on('scroll', function() {
//     if($(this).scrollTop()+100 >= $('#paint').position().top){
//     	var text = $('#paint').attr("alt");
//           $('aside').text(text);
//     }
// })
</script>