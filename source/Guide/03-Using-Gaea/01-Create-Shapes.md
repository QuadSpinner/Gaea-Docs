---
uid: primitives
title: Create with Primitives
---

Gaea is a terrain software that utilizes geological primitives, such as @Mountain, @Ridge, and @Crater, to create basic geometry. Unlike traditional CG applications that rely on geometric primitives like cubes and spheres, Gaea allows users to generate more natural, realistic landscapes through the use of geological primitives. This unique approach to terrain creation allows users to easily create stunning, complex environments that are full of detail
and variation.

## Procedural Primitives

Most of Gaea's Primitives fall into this category. They generate basic geological shapes that can then be processed and eroded to look like a realistic terrain. Procedural generation allows you to create an infinite number of variations from the same node.

![](/images/guide/primitive-01.webp){.ui .image} ![](/images/guide/primitive-02.webp){.ui .image} 
![](/images/guide/primitive-03.webp){.ui .image} ![](/images/guide/primitive-04.webp){.ui .image} 


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

See @first-terrain for a simple example.


#### Hand Drawn Primitives

The @Mask node can double as a shape. Simply press `T` to display the mask as change its preview to a heightfield. You can process it further with the @Fx, @Apex, and @Warp nodes, then apply @Erosion on it to make it into a mountain. You can also Pin the Erosion node, then go to the Draw node and edit the shape and get the eroded result in realtime.

While the @Island node allow you to draw shapes which serve as guides that will be turned into a complex archipelago.

See @tut-draw-modify.


## File Import

To import a heightfield in any major 32, 16, or 8-bit image format, create a @File node and load the desired file. You can simply drag and drop a valid file on the graph and a @File node will be created for you.

#### Importing Meshes

The new heightfield capture tool takes an OBJ file and lets you convert it into a terrain that you can use in Gaea.

![Import any OBJ as heightfield using Obj2Heightfield](/images/guide/obj1.webp)

The workflow is very simple:

- In Gaea's main menu, select Import > Obj2Heightfield.
- Select an OBJ file to load.
- Alt + MouseL to rotate the view. W/E/R to Move/Rotate/Scale the mesh.
- You can see the capture preview in the bottom right. Use the Preview toggle to see a heightfield approximation in the viewport.
- Click Capture to save the heightfield. Repeat to save more captures.
- When finished, click Return to Gaea. Gaea will then let you import the capture.

![Toggle Preview during import to inspect if there is too much vertical tearing.](/images/guide/obj2.webp)

Once imported, the heightfield is just like any other output and you can use any Gaea tool on it.

![The imported heightfield.](/images/guide/obj3.webp)
![With erosion and other effects applied.](/images/guide/obj4.webp)