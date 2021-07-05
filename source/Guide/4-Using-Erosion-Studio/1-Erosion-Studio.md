---
uid: erosion-studio
title: Erosion Studio
---

## What is Erosion Studio?

Erosion Studio is a powerful, erosion-sculpting module in Gaea. It is separate from the main Gaea application, as it follows a very different workflow.

#### Sculpting Workflow

While Gaea focuses on chaining nodes to generate and process terrains, Erosion Studio allows you to sculpt erosion by adding "hits" with a mouse on an existing terrain. However, it is still a procedural process - each hit is recorded and if the underlying terrain is modified, every single hit is reapplied. This gives you deeply art directable erosion in a non-destructive workflow.

Erosion Studio provides several @sculpting-tools that let you erode, add sediments, and create surface effects. As everything in Erosion Studio is powered by erosion, gravity and slope play an important role. See @basic-sculpting to become familiar with Erosion Studio's distinct tooling.

What makes Erosion Studio quite unique is that lets you work with very high resolution terrains (up to 128k [131,072 x 131,072], given adequate RAM) in 1:1 resolution in realtime.

#### Preparing a Terrain

Erosion Studio requires an existing terrain. You can use any terrain as long as it is a `.r32` (Binary array of 32-bit floats) format heightfield. Gaea can export any heightfield to `.r32`. If you original source is from elsewhere, you can load that file in Gaea using the @File node and export it to `.r32`, then load it in Erosion Studio.