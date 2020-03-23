---
uid: masking
title: Masking
---

## Masking Nodes
Masking is a core mechanism you will need to rely on when working with procedural shapes in node graphs. At its most basic, masking works exactly like you would use it in a paint program: define an area, and only that part is modified. A mask must always be a heightmap, not a color map. Brighter areas get affected more, darker areas get affected less.

In Gaea, you will most deal with two types of masking - process mask, and blending mask.

### Process Mask

Almost every node contains a "Mask" input port. If you connect a mask to a node, the processing of the node is applied only within the masked area. For example, if you mask a @Terrace node, the terracing effect is applied to the brighter areas.

The @Mask node is often useful in such a situation where you can manually draw a freehand mask.

### Blending Mask

Blending Masks are more useful as they provide extra flexibility. To create a blending mask, two different nodes are connected to a @Combine node, and the mask blends the two terrains as defined by the mask. Brighter areas defined by the mask become terrain A, while darker areas become terrain B. The added advantage with the @Combine node is that instead of simply blending the two terrains, you can instead use one of several different blend modes such as Add, Subtract, Max, etc.

While the @Mask node is useful here too, you will often find yourself using Data Maps such as @Slope or @Height.

{.NOTE}
> It is worth noting that even though a portion of a terrain's surface may be masked, Gaea will process the entire surface and then apply the mask. Internally, the masking is the same as a blending mask, where A is the processed version of the terrain, and B is the unprocessed version.

{.TIP}
> A masked Combine node is much faster to reprocess than an effect or erosion node that is masked. If you find yourself changing your mask frequently, you can achieve Gaea's built-in masking manually. This is done by connecting the processed output to a @Combine node's `Input1` and the original, unprocessed output to `Input2`, and finally setting the Combine node to Blend mode with 100% Ratio.