---
layout: project
title:  "HTC"
imgName: "htc1.png"
imgName2: "htc2.png"
img: "htc.jpg"
description: "Internship at HTC, worked on some cool stuff."
date:  2016-08-07 09:37:43 +0800
technologies: Photon, Particle Dev, Node.js
category: Interaction Design
tags: physical computing
role: developer
collaborators: <a href="https://github.com/octref">Pine Wu</a> and Linna Li
size: 2-2
ignore:
---

<img src="{{site.baseurl}}/img/htc/splash.jpg">

<div class="contain-x">
<div class="row">


	<div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 m-t-xl m-b-xl">
	<p><b>What is Emotar?</b></p>
	<p>

	Emotar is a mobile app by HTC Research & Development, that aims to help users create personalized stickers for IM apps.  </p>

<p>Over the past decade, sticker packs have become <a href="http://a16z.com/2016/06/17/stickers/">integral</a> <a href="https://www.wsj.com/articles/line-and-wechat-strike-advertising-gold-1466613181">part</a> of  <a href="https://qz.com/156030/line-is-betting-millions-that-virtual-bears-and-bunnies-will-sweep-the-west/">messaging culture</a>, as well as a large segment of messaging app revenue, particularly in Asian messaging apps such as Wechat, Line and KakaoTalk. </p>

<p>Emotar uses selfies as input to create stickers with the users' faces </p>

<p><b>Background and my role</b></p>

<p>I worked on Emotar as the sole designer. I collaborated closely with our PM, Derrick, and 2 developers to redesign and ship the app over the course of 1 month.</p>

<p>Our biggest constraint was time — with limited technical resources, I had to iterate quickly to get the designs over to the developers!</p>


	</div>

	<div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 m-b-xl">
	<p>
		<b>A People Problem</b>
	</p>
	<p>
		At the onset of the project, our team asked ourselves: why do people use stickers? There are the obvious reasons — convenience and humor.</p>
<p>Then there are more subtle motivations. </p>
<p>Stickers are used to communicate subtext. An “angry” sticker doesn’t necessarily mean (and is rarely if ever used when) the user is angry. Rather, it conveys minor annoyance, or feigned annoyance for comedic effect. Like their static friends emojis, stickers allow for nuanced sub-communication to be added to the message.</p>
<p>
Emotar’s goal is to help users communicate that subtlety with a personal touch. Sending a sticker with one’s own face is a reminder of the relationship between the sender and receiver. It’s saying: “this little guy crying on the floor, this is me”.</p>
<p>
The former iteration of Emotar has features that heavily emphasize random exploration. This is achieved through
	</p>


		<p><blockquote>Design an flexible experience for users that allows for quick creation and sharing.</blockquote></p>


		<p class="m-t-xl">
		<b>Design Goals</b>
		</p><p>Out team determined the following design goals from the onset:</p>
<ul>
		<li>Address existing pain points in the sticker creation flow</li>
		<li>Revise the home page to encourage </li>
		<li>Promote branded sharing by making sharing to social networks integral to the experience</li>

</ul>
	</div>
</div>
</div>

<img src="{{site.baseurl}}/img/htc/wireframes.png">

<div class="row m-t-xl m-b-xl">
	<div class="col-sm-6 col-sm-offset-3 ">
		<p><b>Address pain points in the sticker creation flow</b></p>

		<p>User feedback suggested that the lack of reusable components was discouraging users to create new stickers. I revised the creation flow to accomodate editing and re-use of former 3D models.
		</p>
	</div>
</div>

<img src="{{site.baseurl}}/img/htc/beforeafter.jpg">

<div class="row m-t-xl">
	<div class="col-sm-6 col-sm-offset-3 ">

		<p>A UX researcher and I examined user testing results to discover that the sticker creation model was obfuscated by the existing interface. Affordances like swiping left and right to change stickers are initially unclear. <br><br>In addition, user drop-off was high after creating the first sticker, as users felt like the "Create" button was the only way to make a new sticker.
		</p>
	</div>
</div>

<div class="contain">
<div class="row m-t-xl">
<div class="col-sm-4 col-sm-offset-4">
		<video loop width="100%" height="600" name="Video Name" src="{{site.baseurl}}/img/htc/selection-animation-compressed.mp4" autoplay="autoplay"></video>
	</div>

	<div class="col-sm-6 col-sm-offset-3 m-t-xl">
	<p>I prototyped and tested a solution that makes the entire process modular. Clear delineation is made between the objects and their corresponding interactions. <b>3D avatars</b> are used for the faces of interchangable <b>stickers</b> which are grouped by <b>sets</b>.</p>
	<p>
	The idea is that stickers can be created on-the-fly from components, rather than an arduous linear process. Behaviorally, this is intended to encourage creation and experimentation.
	</p>
	</div>

</div>
<div class="row m-t-xl m-b-xl">
	<div class="col-sm-4 col-sm-offset-4">
		<video loop width="100%" height="600" name="Video Name" src="{{site.baseurl}}/img/htc/sharing-animation-compressed.mp4" autoplay="autoplay"></video>
	</div>
	<div class="col-sm-6 col-sm-offset-3 m-t-xl">
	<p><b>Promote Branded Sharing</b></p>

	<p>Quantitative data revealed the top social networks that our users were attempting to share to. I wanted to make it easier for users to share their stickers on these networks. I protoyped a direct share flow from the home page to various apps. </p>
	</div>

</div>

<div class="row m-t-xl m-b-lg">
