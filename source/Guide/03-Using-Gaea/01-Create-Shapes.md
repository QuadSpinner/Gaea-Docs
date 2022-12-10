---
uid: primitives
title: Create with Primitives
---

Gaea is a terrain software that utilizes geological primitives, such as @Mountain, @Ridge, and
@Crater, to create basic geometry. Unlike traditional CG applications that rely on geometric
primitives like cubes and spheres, Gaea allows users to generate more natural, realistic
landscapes through the use of geological primitives. This unique approach to terrain
creation allows users to easily create stunning, complex environments that are full of detail
and variation.

## Procedural Primitives

Most of Gaea's Primitives fall into this category. They generate basic geological shapes that can then be processed and eroded to look like a realistic terrain. Procedural generation allows you to create an infinite number of variations from the same node.

`TODO: Image`

Primitives often have a property called a "seed" that can be used to randomize their shape. By changing the seed value, you can create multiple primitives that are based on the same general concept but have distinct and unique shapes. This can be useful for creating a variety of objects that share similar characteristics but are not identical, such as a field of different-shaped rock formations or a mountain with differently shaped ridges. The seed property allows you to easily create variations of a primitive without having to manually adjust its shape each time.

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

The @Mask node can double as a shape. Simply press `T` to display the mask as 

While the @Island node allow you to draw shapes which serve as guides that will be turned into a complex archipelago.


## File Import

To import a heightfield in any major 32, 16, or 8-bit image format, create a @File node and load the desired file. You can simply drag and drop a valid file on the graph and a @File node will be created for you.

#### Importing Meshes and Geospatial Data

Support for importing meshes as heightmaps, and satellite data, such as DEM, SRTM, and other formats, will be available soon.
