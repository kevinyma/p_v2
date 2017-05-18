---
layout: project
title:  "Snake3D"
imgName: "snakealt1.png"
imgName2: "snakealt2.png"
description: "The classic Nokia game, now with one added dimension."
date:   2016-05-14 12:00:00 +0800
technologies: Photon, Particle Dev, Node.js
category: physical
tags: physical computing
role: developer, solder monkey
collaborators: <a href="https://github.com/octref">Pine Wu</a> and Linna Li
size: 0-0
---

I've always liked sci-fi because of the way it stretched my imagination as a kid. Essentially, I'm still a kid. In Ender's Game there's this scene where Ender tries out a space battle simulator:

>The game was a holographic display, and his fighter was represented only by a tiny light. The enemy was
another light of a different color, and they danced and spun and maneuvered through a cube of space that
must have been ten meters to a side.

A 3D display that actually occupies three dimensions. Woah. 

How would people respond to and explore a three dimensional interface?

We explored this question by creating a 3D arcade game player. Low res arcade games seemed to be the perfect fit for the space we wanted to explore. Given peoples' existing knowledge of classic games, we were curious to see how they would behave with the addition of an extra dimension.

### Implementation

The physical implementation was done with a <a href="https://docs.particle.io/datasheets/photon-datasheet/">Particle Photon</a> and 256 <a href="https://cdn.sparkfun.com/datasheets/Components/LED/COM-12877.pdf">RGB addressable LEDS</a> connected in a single daisy chain. The game itself was written in node.js.

![Alt](/img/snake3d/rhinojig.jpg)

A jig that allowed for modular construction.

![Alt](/img/snake3d/realjig.jpg)

![Alt](/img/snake3d/soldering.jpg)

8 LEDs * 8 LEDs * 8 LEDs * 4 solder points per LED = worst nightmare

![Alt](/img/snake3d/glowing.jpg)

![Alt](/img/snake3d/controller.jpg)

We rigged up a (susprisingly!) ergonomic controller with two joysticks on a breadboard.

![Alt](/img/snake3d/player.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/oSZp3x7AmO0" frameborder="0" allowfullscreen></iframe>


Games:

- Snake3D
- Space Invaders3D
- Frogger3D
- Pacman3D

The formal report can be found <a href="https://drive.google.com/file/d/0B0yplDYU2H-pUjBubnFuNzRIN1k/view?usp=sharing">here</a>.


