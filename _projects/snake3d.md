---
layout: project
title:  "SNAKE 3D"
imgName: "snake1.png"
imgName2: "snake2.png"
description: "The classic Nokia game, now with one added dimension."
date:   2016-5-14 12:00:00 +0800
technologies: Photon, Particle Dev, Node.js
category: game
tags: physical computing
role: developer, solder monkey
collaborators: <a href="https://github.com/octref">Pine Wu</a> and Linna Li
size: 0-0
---

In Ender's Game this a scene where Ender tries out the space battle simulator for the first time:

>The game was a holographic display, and his fighter was represented only by a tiny light. The enemy was
another light of a different color, and they danced and spun and maneuvered through a cube of space that
must have been ten meters to a side.

A 3D display that actually occupies three dimensions. Woah. How would people respond to and explore a 3D display?

We explored this question by creating a 3D version of the game Snake. Given people's existing knowledge of the game, we were curious to what would happen when exploring in 3 dimensions.

Construction
----------

The physical implementation was done with a <a href="https://docs.particle.io/datasheets/photon-datasheet/">Particle Photon</a> and 256 <a href="https://cdn.sparkfun.com/datasheets/Components/LED/COM-12877.pdf">RGB addressable LEDS</a> connected in a single daisy chain. The code is comprised of a node.js program wrapped in a Chrome app and a Photon program. The Photon program takes care of the input and output, while the game state runs on the Chrome app.

![Alt](/img/snake3d/rhinojig.jpg)

We built a jig that allowed for modular construction.

![Alt](/img/snake3d/realjig.jpg)

![Alt](/img/snake3d/soldering.jpg)

![Alt](/img/snake3d/glowing.jpg)

![Alt](/img/snake3d/controller.jpg)

![Alt](/img/snake3d/player.jpg)

The project was demoed at the Ithaca Science Center April 2016.

The final report can be found <a href="https://drive.google.com/file/d/0B0yplDYU2H-pUjBubnFuNzRIN1k/view?usp=sharing">here</a>.

