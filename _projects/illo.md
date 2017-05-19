---
layout: project
title:  "Illustration"
imgName: "illustrations1.png"
imgName2: "illustrations2.png"
description: 
date:   2016-5-14 12:00:00 +0800
technologies: 
category: physical
tags: 
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<p><img src="/img/illustrations/house1.jpg" 
alt="Growing up we moved around a lot. 10 houses in 10 years. I remember little bits and pieces of each one. The one that came with all the gaudy, horrible lamps. The one where I got a bathroom in my own room but the toilet had bad pipes so it always smelled. The one with the little greenhouse. 

One thing was always constant: the evening sun. Knife cut blocks of light that would fade to a soft orange glow. A harsh reminder of the evanescence of the moment. A gentle reminder that I had, once again, squandered the entire afternoon."
></p>
 
<p><img src='/img/illustrations/house2.jpg'></p>

<!-- <p><img src='/img/illustrations/house3.jpg'></p>
 -->
<p><img src="/img/illustrations/paint1.png" 
alt="I didn’t grow up around the advent of personal computing—I was a bit (read: 20 years) late. But I sure wish I did. There’s something very earnest to me about old computer interfaces. I’m the hugest sucker for vicarious nostalgia. 

And Mac Paint is the bee’s knees."
></p>

<p><img src="/img/illustrations/cat1.png" 
alt="They cannot know who I am, inside."
></p>

<p><img src="/img/illustrations/apartments.jpg" 
alt="We find beauty readily available in isolated objects: a sunlit windowsill, a dying tree, a wet mop. What of an object repeated regularly, indefinitely? 

Patterns draw me in because they tell stories of the mundane. They speak of everyday life and its routines."
></p>

<p><img src="/img/illustrations/engineering.jpg" 
alt="This came from a great idea from middle school or something like that. It's the heartbreaking story of one man's plight to reverse engineer dragon DNA to save his dying girlfriend. Will he save her? Maybe I'll think of an ending someday."
></p>

<p><img src="/img/illustrations/drowning.jpg"
alt="In natural language processing models, the pseudo word 'UNK' is used to stand in for unknown words. If you are like me and have a hard time coding, your language model will only spit out 'UNK's sometimes. When confronted with my code output, this is how I often feel."></p>

<aside class="aside-normal"></aside>

<script>
//set starting text
$('aside').html($("img:first").attr("alt"));

// change class of aside after scroll past point
var firstImgPos = $("img:first").offset().top;
$(window).on('scroll',function(){
    var y = $(this).scrollTop();
    if (y >= firstImgPos+30) {
        $('aside').addClass('aside-top');
        $('aside').removeClass('aside-normal');
    } else {
         $('aside').addClass('aside-normal');
        $('aside').removeClass('aside-top');
    }
});

//if img has alt tag, change contents of alt
$(document).on('scroll', function() {
    var y = $(this).scrollTop();
    $('img').each(function(){
    	if (y >= $(this).position().top-150){
	    	if($(this).attr("alt")){
		    	var text = $(this).attr("alt");
		        $('aside').html(text);
     		}
    	}
	});
})

</script>