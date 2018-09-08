---
uid: Color-Production
title: Color Production
---

## Lookup Tables
All coloration in Gaea is based on CLUTs, or color lookup tables. As a 2D heightfields are essentially a grid of number ranging from 0.0 (lowest) to 1.0 (highest), CLUTs are represented as gradients which are mapped to those heights.

The lowest part of a gradient corresponds to the lowest part of the terrain, while the highest part of the gradient corresponds to the highest part of the terrain. Everything in between is evenly distributed.

In this example, you can see how the gradient from a CLUTer node maps to the heightfield.

## Node Structure
All color nodes (except Mixer) follow a simple structure: the main input port for mapping the CLUT, and the Visualization port for the 3D heightfield to use for the viewport.

Now, if you take the same CLUT map, and instead of using the height of the terrain as the input, use a FlowMap instead, you get a different type of texture output that follows the flow lines of the FlowMap output.

The latter is not necessary most of the time, but is recommended. Otherwise your input may not look accurate in the preview as it will just assume the first 3D node prior to this node is the heightfield.

This port was created specifically to help visualize terrains while creating complex color maps.

## Using Data Maps

To create color maps using Data Maps, see @Data-Maps.