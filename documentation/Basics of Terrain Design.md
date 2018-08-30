---
uid: Basics-of-Terrain-Design
title: Basics of Terrain Design
---

# The Basics
There are 3 things you must do for any terrains: create, modify, export.

The *Create* phase requires you to use nodes that are known as Primitives. In normal 3D applications, we are used to primitives such as box, sphere, plane, and so on. In Gaea, a primitive is a basic element of a terrain. For example, @"Mountain" and @"Dunes" are two examples of geological elements.

`// TODO: Image`

The *Modify* phase requires you to take the basic primitive shape and make it more natural by adding filters and erosion. An example of this would be adding a @"Terrace" node to create even stratification on the terrain, and then adding the @"Erosion" node to add natural erosion.

`// TODO: Image`

The *Export* phase is the easiest. You take the last node in your graph and mark it for saving, then build it using the @Build-Manager.

`// TODO: Image`

# Choosing your Workflow

Gaea provides two different workflows for creating terrains. You can choose either based on your needs, and you can even switch between the two while working on the terrain.

## Layers

`// TODO: Image`

Layers are a deceptively simple way to craft terrains. You can stack nodes like Photoshop&reg; layers. This is a great way to quickly prototype a terrain or explore different ideas, without worrying about managing nodes.

Layers are limited with one-to-one relationships, unlike a graph which can have a one-to-many relationships where you can create two different "chains" of creation and blend them together in myriad ways.

Read more about this workflow in the @Layers-Mode section.

## Graph

`// TODO: Image`

The Graph provides a sophisticated workflow that is very flexible. Like any other graph based workflow, you get both simple and complex functions packed into nodes which you can connect to each other to create a network which produces a terrain.

Read more about this workflow in the @Graph-Mode section

# Next steps

Familiarize yourself with the different tools and interfaces available in Gaea in @Getting-around, and start exploring some of the @quickstarts examples to see how terrains can be made.