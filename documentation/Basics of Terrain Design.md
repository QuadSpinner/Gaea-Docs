---
uid: Basics-of-Terrain-Design
title: Basics of Terrain Design
---

# The Basics
There are 3 steps you must take to achieve any terrain: create, modify, export.

The *Create* phase requires you to use nodes that are known as Primitives. In normal 3D applications, primitives can include  box, sphere, plane, and so on. In Gaea, a primitive is a basic geological element of a terrain. For example, @"Mountain" and @"Dunes" are two such basic elements.

`// TODO: Image`

The *Modify* phase requires you to take the basic primitive shape and make it more natural by adding filters and erosion. An example of this would be adding a @"Terrace" node to create even stratification on the terrain, and then adding the @"Erosion" node to add natural erosion.

`// TODO: Image`

The *Export* phase is the easiest. You take the last node in your graph and mark it to save, then build it using the @Build-Manager.

`// TODO: Image`

# Choosing your Workflow

Gaea provides two different workflows for creating terrains. You can choose the method that best suits your needs, and also switch between the two while working on the terrain.

## Layers

`// TODO: Image`

Layers are a deceptively simple way to craft terrains. You can stack nodes like Photoshop&reg; layers. This is a great technique to quickly prototype a terrain or explore different ideas, without worrying about managing nodes.

Layers are limited to one-to-one relationships, unlike a graph. Graphs can have one-to-many relationships, where you can create two different "chains" of creation and blend them together in myriad ways.

Read more about this workflow in the @Layers-Mode section.

## Graph

`// TODO: Image`

The Graph provides a sophisticated workflow that is very flexible. Like any other graph-based workflow, you get both simple and complex functions packed into nodes which you can connect to each other to create a network that produces a terrain.

Read more about this workflow in the @Graph-Mode section

# Next steps

Familiarize yourself with the different tools and interfaces available in Gaea in @Getting-around, and start exploring some of the @quickstarts examples to see how terrains can be made.
