---
layout: project
title:  "Snake3d"
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

I've always liked sci-fi because of the way it stretched my imagination as a kid. In Ender's Game this a scene where Ender tries out a space battle simulator:

>The game was a holographic display, and his fighter was represented only by a tiny light. The enemy was
another light of a different color, and they danced and spun and maneuvered through a cube of space that
must have been ten meters to a side.

A 3D display that actually occupies three dimensions. Woah. How would people respond to and explore a 3D display?

We explored this question by creating a 3D version of the game Snake. Given people's existing knowledge of the game, we were curious to what would happen when exploring in 3 dimensions.

### Implementation

The physical implementation was done with a <a href="https://docs.particle.io/datasheets/photon-datasheet/">Particle Photon</a> and 256 <a href="https://cdn.sparkfun.com/datasheets/Components/LED/COM-12877.pdf">RGB addressable LEDS</a> connected in a single daisy chain. The game itself was written in node.js.

![Alt](/img/snake3d/rhinojig.jpg)

We built a jig that allowed for modular construction.

![Alt](/img/snake3d/realjig.jpg)

![Alt](/img/snake3d/soldering.jpg)

8 * 8 * 8 LEDs * 4 solder points per LED = nightmare

![Alt](/img/snake3d/glowing.jpg)

![Alt](/img/snake3d/controller.jpg)

We rigged up a (susprisingly!) ergonomic controller with two joysticks on a breadboard.

![Alt](/img/snake3d/player.jpg)

The project was demoed at the Ithaca Science Center April 2016.

The formal report can be found <a href="https://drive.google.com/file/d/0B0yplDYU2H-pUjBubnFuNzRIN1k/view?usp=sharing">here</a>.

