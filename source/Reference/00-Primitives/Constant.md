---
uid: Constant
title: Constant
---

The Constant node is the most basic primitive available in Gaea. It can
create three outputs: a flat terrain of a specified height, a flat color
output, or a noise pattern.

Constant is rarely used directly, but rather as a mask or a second input
blended using @Combine with another node.

## Modes

#### Height

The uniform height "block" terrain can be used with @Combine in `Max`
mode to create a flat area at the specified height in a terrain.

![](/images/ref/Constant/Constant.webp)

#### Color

The uniform color output can be used for blending various textures or
combining a flat color on top of an existing color map to modify the
tint via various blend modes.

#### Noise

The noise output can be merged with other nodes' output to add jittery
effects. In most situations, you may want to use the @Noise node
instead. The Noise mode was added to the Constant node to reduce the
need to create a flat Constant and then apply the @Noise node on top of
it to create a flat noise map that could be used elsewhere in the graph.



