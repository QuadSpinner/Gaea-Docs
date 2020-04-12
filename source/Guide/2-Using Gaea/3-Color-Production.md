---
uid: color-production
title: Color Production
---

## Lookup Tables
All coloration in Gaea is based on CLUTs, or color lookup tables. As 2D heightfields are essentially a grid of numbers ranging from 0.0 (lowest) to 1.0 (highest), CLUTs are represented as gradients which are mapped to those heights.

The lowest part of a gradient corresponds to the lowest part of the terrain, while the highest part of the gradient corresponds to the highest part of the terrain. Everything in between is evenly distributed.

`// TODO: Image`

In this example, you can see how the gradient from a CLUTer node maps to the heightfield.

If, however, you take the same CLUT map and use a FlowMap instead of using the height of the terrain as the input, you get a different type of texture output that follows the flow lines of the FlowMap output.

## Node Structure
All color nodes (except Mixer) follow a simple structure: the main Input port for mapping the CLUT, and the Visualization port for the 3D heightfield to use for the viewport.

The latter is not necessary most of the time, but is recommended. Otherwise, your input may not look accurate in the preview because it will assume that the first 3D node prior to this node is the heightfield.

This port was created specifically to help visualize terrains while creating complex color maps.


# What are Data Maps?
Data Maps are special masks. While Selector masks generally represent an area or selection (such as slope, angle, or curvature), Data Maps represent a specific type of data of the area (such as water flow, soil deposits, etc.).

These nodes break the traditional basic data (slope, angle, curvature) + chaos (Perlin noise) method used to create pseudo-random masks from which color maps would be generated. In such situations, you need to find a good seed to make it work. With Data Maps, there is visual randomness, but it's created from systematic analysis of the terrain and follows natural principles. The resulting color maps created from such data look more believable.

Data Maps are very useful for creating color maps. For example, water flow can be used to create a Biome texture, or used manually with a CLUTer or SatMaps node to create a texture along water flow areas.

# A basic texture with Data Maps
In this example, we create a simple terrain using a Mountain node, then erode it to get some basic erosion data. On top of the eroded output, we apply a Soil Map node. The Soil Map node is fed to a SatMaps node to create a base texture for the terrain. The Flow and Wear output of the Erosion node are mixed and fed to another SatMaps node to create a second map. The two maps are mixed together to create the final texture.

`// TODO: Image`
