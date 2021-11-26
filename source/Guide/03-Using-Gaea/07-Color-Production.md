---
uid: color-production
title: Procedural Textures
section: true
---
^wip

## The core concept

All the processes for creating color textures in Gaea are dependent on flowing color ramps/gradients into a black and white mask.

Let's take a look at a basic example. The lowest part of a gradient corresponds to the lowest part of the terrain. The highest part of the gradient corresponds to the highest part of the terrain. Everything in between is distributed as dictated by the gray intensity.

`// TODO: Image`

In this example, you can see how the gradient from a @CLUTer node maps to the heightfield.

`// TODO: Image`

If, however, you take the same CLUT map and use a @FlowMap instead of using the height of the terrain as the input, you get a different type of texture output that follows the flow lines of the FlowMap output.

To help you create complex procedural masks from which you can create color textures, Gaea provides an array of nodes known as "Data Maps".


## What are Data Maps?

Data Maps are special masks. They let you select basic aspects of the terrain (such as slope, angle, curvature), or synthesize complex data through simulations (such as water flow, soil deposits, etc). Additional quick texturing data maps, such as Texture and SurfTex, help create pseudo-random texture masks through which you can quickly achieve color textures with minimal effort.

These nodes break the traditional basic data (slope, angle, etc) + chaos (Perlin noise) method, or the heavy reliance on flow output from erosion. In these situations, you need to find a good seed to make it work. With Data Maps, there is visual randomness, but it's created from systematic analysis of the terrain and follows natural principles. The resulting color maps created from this data look more believable.


## A basic texture with Data Maps

The following tutorial continues from @tut-create.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/4AFDXxYlQMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
