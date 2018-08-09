---
uid: Basics-of-Terrain-Design
title: Basics of Terrain Design
---

# The Basics
There are 3 things you must do for any terrains: create, modify, export.

The *Create* phase requires you to use nodes that are known as Primitives. In normal 3D applications, we are used to primitives such as box, sphere, plane, and so on. In Gaea, a primitive is a basic element of a terrain. For example, @"Mountain" and @"Dunes" are two examples of geological elements.

// TODO: Image

The *Modify* phase requires you to take the basic primitive shape and make it more natural by adding filters and erosion. An example of this would be adding a @"Terrace" node to create even stratification on the terrain, and then adding the @"Erosion" node to add natural erosion.

// TODO: Image

The *Export* phase is the easiest. You take the last node in your graph and mark it for saving, then build it using the @Build-Manager.

// TODO: Image

# C

# Next steps

Familiarize yourself with the different tools and interfaces available in Gaea in @Getting-around, and start exploring some of the Quickstart examples to see how terrains can be made.