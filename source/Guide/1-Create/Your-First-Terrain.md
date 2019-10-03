---
title: Your first terrain
uid: first-terrain
---

# The Basics

There are three steps you must take to achieve any terrain: create, modify, export.

The *Create* phase requires you to use nodes that are known as Primitives. In normal 3D applications, primitives can include  box, sphere, plane, and so on. In Gaea, a primitive is a basic geological element of a terrain. For example, @Mountain and @Dunes are two such basic elements.

`// TODO: Image`

The *Modify* phase requires you to take the basic primitive shape and make it more natural by adding filters and erosion. An example of this would be adding a @Terrace node to create even stratification on the terrain, and then adding the @erosion node to add natural erosion.

`// TODO: Image`

The *Export* phase is the easiest. You take the last node in your graph, mark to save, then build it using the @build-manager.

`// TODO: Image`
