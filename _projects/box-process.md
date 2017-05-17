---
layout: project
title:  "the making of BOX!"
imgName: "box1.png"
imgName2: "box2.png"
imgPath: "box/"
description: 'BOX! is a fun game.'
date:   2014-11-14 09:37:43 +0800
role: level designer
technologies: Actionscript 3.0
category: art
collaborators: Jeremy Cytryn, Renchu Song, Natalie Diebold, Sam Chen, Will Peck
size: 2-2
ignore: "yes"

---

![Alt](/img/box/intro.jpg)

I was the Lead Designer in a 5 person team that built the puzzle game BOX!

We used flash game websites as a "deployment circuit" to test prototypes and iterate based on player analytics and user feedback.

### The Story


BOX! tells the age-old story of a boy who gets stuck in a floating cube in the sky. Never mind how, it's it's job to get him out.

![Alt](/img/box/rotation.jpg)

Imagine a 2D shape, traveling across the edges of a cube. When it returns to the face it started on, surprise-it's in a different orientation!

What began as a humble sketch became the foundation of our game. We were initially drawn to the idea of of mind-twisting puzzle that challenged players' spatial and logical thinking. It turned out to be a very rewarding project to work on and I'm happy with what we've created.

### The Prototypes

Initially, we knew it was necessary to test some of our more non-conventional ideas--especially the spatial re-orientation aspect of our game-to-be. We created a series of paper prototypes that playtesters held in their hands as they asked us questions and gave feedback.

![Alt](/img/box/paper.jpg)

It turned out that players 'got it' when they moved across an edge and the box rotated. The challenge would now be to translate this understanding to a digital prototype. 

We went with a grid for level design because it allowed for easy subdivision of cube faces. In testing, we found that 14*14 (the player is represented as a 1*1 block) was too large and confusing; a 7*7 grid was much more condusive to player sanity.

![Alt](/img/box/leveldesign.gif)

Thinking about two-dimensional level design in three dimensions is hard! We would revisit our levels time and again, splitting, combining, erasing levels entirely as we learned more about how our players were learning to play the game. 

### The Assets

The next challenge was to create a visual style that complemented the gameplay. At the start, I opted for a pixel art look that I felt would make it easy for the player to distinguish box squares. The look of the game ended up evolving every prototype.

![Alt](/img/box/beforeandafter.png)

The main character was a lot of fun to animate:


![Alt](/img/box/walking.gif){:id: .box-gif}![Alt](/img/box/looking.gif){:id: .box-gif}![Alt](/img/box/makingnbreaking.gif){:id: .box-gif}


I wanted to give our unnamed protagonist quirky, memorable mannerisms, while keeping his appearance simple.

### The Data

Every prototype, we collected and analyzed player data to gauge where and why players were quitting the game. This allowed us to make changes in the next prototype. Average time per level graph in the first prototype came out like this:

![Alt](/img/box/avgtime.png)

What's immediately clear is that early levels were way too easy, and some levels were near impossible (looking at you, 21). When we started to look at other metrics like player fall-off per level and player actions per level, we began to get a much more complete picture of where users were running into the most pain. 

So how did data help us make design decisions? In the below level, the player is required to build a block to jump on after they fall in the small pit.

![Alt](/img/box/heatmap.png)

Average time spent in the pit however, seemed to indicate players did not know how to build a block.

After trying some other solutions, I designed a series of text bubbles that would appear when a player was confronted with a challenge for the first time, or they took too long completing a challenge.

![Alt](/img/box/nothoughtbubble.png)

![Alt](/img/box/thoughtbubble.png)

When the thought bubbles were introduced, there was less time spent on each level, and a smaller player fall off rate per level. By visualizing and graphing our analytics we could look at similar problems differently. 

BOX! was released on <a href="http://www.kongregate.com/games/Casiogre/box">Kongregate</a> to a fairly warm reception. You can also play it <a href="/makes/box/">here</a>.



![Alt](/img/box/coverimage.png)



