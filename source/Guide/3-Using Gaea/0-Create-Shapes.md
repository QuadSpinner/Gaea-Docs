---
uid: primitives
title: Create with Primitives
---

CG applications use primitives such as cubes and spheres to create basic geometry. Gaea being a terrain software uses geological primitives such as @Mountain, @Range, and @Crater.

## Procedural Primitives

Most of the Primitives fall into this category. They generate basic geological shapes that can then be processed and eroded to look like a realistic terrain. Procedural generation allows you to get an infinite number of variations of the same node.

`TODO: Image`

Primitives expose a property called Seed. Changing this property randomizes the shape. This allows you to create multiple primitives that follow the same general paradigm but are distinctly different shapes.

Primitives can be used by themselves, for example a @Mountain node can help create a "hero mountain" without needing other primitives. Or multiple Primitives can be put together using the @Combine node.

When multiple Primitives are combined, they can create sophisticated shapes.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/1A1xXfTlKqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

This video continues in @tut-color.


## Hand Drawn Primitives

The @Draw and @Islands nodes allow you to draw shapes which serve as guides upon which further processing is performed. For example, Islands will turn guides into a complex archipelago.

The @Mask node can also act as a Primitive even though it is categorized as a Data Map in the toolbox. However, it is will not process the shape you draw.

## File Import

To import a heightfield in any major 32, 16, or 8 bit image format, create a @File node and load the desired file. You can simply drag and drop a valid file on the graph and a @File node will be created for you.

### Importing Meshes and Geospatial Data

Support for importing meshes as heightmaps, and satellite data such as DEM, SRTM, and other formats will be available soon.