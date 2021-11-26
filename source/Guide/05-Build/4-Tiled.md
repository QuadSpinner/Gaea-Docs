---
uid: tiled-builds
title: Preparing Terrains for Tiled Build
---

## Preparing your Terrain

#### Split Build

![Split Build: The terrain is built normally, then split into a uniform grid.](/images/diagrams/build-type-split.png){.ui
.image .large .no-border}

Split Builds require very little special consideration. You can change any terrain from a Normal Build to a Split Build without modification. This is because the terrain is built normally, and then split into chunks. This is usually used when your terrain has to be in chunks (aka tiles) for consumption in your game engine or CG app, but it is just 8192 x 8192 or smaller in size.

If your terrain is 8K or smaller, then this is our recommended method for creating game engine compatible chunks. It is usually faster and produces very accurate results.


#### Tiled Build

![Tiled Build: The terrain is built as seperated buckets which are then blended together.](/images/diagrams/build-type-distributed.png){.ui
.image .large .no-border}

To prepare your terrain for a tiled build, you need to bake all non-tile-friendly nodes. Some of Gaea's nodes are "tile friendly" and others are not. For example, all Primitives are not tile friendly, while Erosion and LookDev nodes are tile friendly.

Let's look at a typical example: a terrain with 3 or 4 primitives which are combined and adjusted using @Fx nodes, @Mask and perhaps an imported heightmap/mask in a @File node. Then it is processed with 2 Erosion nodes and a LookDev node. After that, @Texture, @Flow and other Data Maps are used to create a texture base which is then colored with @SatMaps and other color nodes.

The first portion where the overall shape is created, but not detailed with Erosion yet, is the main sequence of nodes that would be not be tile friendly. As such they would be baked at 4096 x 4096 or 8192 x 8192 as you prefer. The remainder of the nodes are tile friendly and do not need to be baked.

By Baking, you tell Gaea that the shapes produces by these nodes need to be preserved exactly. During the Tiled Build, each chunk derived from these primitives is handled with special algorithms to retain the shape across boundaries and resolutions up to 256k x 256k.

{.NOTE}
> Primitives and adjustments tend to be lighter and faster in terms of processing and memory consumption. They don't gain much from Tiled Processing. Their visual detail is also limited as they are noise based. The real high resolution detail is added through Erosion and LookDev processors which are not baked and therefore provide full quality.

The rest of the nodes such as LookDev, Erosion, Data Maps and Color Production are all specialized to work with separate chunks.

Finally, your terrain is now ready for a Tiled Build. You can choose the number of tiles, and the resolution of each tile in the @buildmanager and fire off a build.

For detailed strategies on how to separate a terrain graph, see @separateprojects.