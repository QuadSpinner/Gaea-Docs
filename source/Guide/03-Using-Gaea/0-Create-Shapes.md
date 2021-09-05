---
uid: primitives
title: Create with Primitives
---

CG applications use primitives, such as cubes and spheres, to create basic geometry. Gaea being a terrain software uses geological primitives such as @Mountain, @Range, and @Crater.

## Procedural Primitives

Most of Gaea's Primitives fall into this category. They generate basic geological shapes that can then be processed and eroded to look like a realistic terrain. Procedural generation allows you to create an infinite number of variations from the same node.

`TODO: Image`

Primitives expose a property called Seed. Changing this property randomizes the shape. This allows you to create multiple primitives that follow the same general paradigm but are distinctly different shapes.

Primitives come in 2 forms: basic Primitives and Geo Primitives.

#### Primitives
These nodes provide low-level, direct access to the most rudimentary procedural shapes, such as fractal noises and simple geometry. @Perlin, @Voronoi, and @Gradient are common Primitives.

By themselves, they only create basic shapes. When combined with other Primitives and processed properly with shape modifiers, such as @Erosion and @lookdev nodes, they can be transformed into realistic terrains.
 
Multiple Primitives can be put together using the @Combine node. When multiple Primitives are combined, they can produce sophisticated shapes.

#### Geo Primitives
Geological Primitives, or Geo Primitives for short, are a more detailed, specific type of creator node. One of the key aspects of Geo Primitives is to provide shapes that require very little erosion.

While normal primitives create basic shapes, Geo Primitives create complete geological elements, such as @Ridge, @Badlands, @Dunes, @Crater, and so on. This can be a very useful timesaver because you get near-complete shapes with a single node.

When processed with @Erosion or one or more @lookdev nodes, you can produce a complete terrain without having to create elaborate node networks for these tasks.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/1A1xXfTlKqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

This video continues in @tut-color.


#### Hand Drawn Primitives

The @Draw and @Islands nodes allow you to draw shapes which serve as guides upon which further processing is performed. For example, Islands will turn guides into a complex archipelago.

The @Mask node can also act as a Primitive even though it is categorized as a Data Map in the toolbox. However, it will not process the shape you draw.

## File Import

To import a heightfield in any major 32, 16, or 8-bit image format, create a @File node and load the desired file. You can simply drag and drop a valid file on the graph and a @File node will be created for you.

#### Importing Meshes and Geospatial Data

Support for importing meshes as heightmaps, and satellite data, such as DEM, SRTM, and other formats, will be available soon.
