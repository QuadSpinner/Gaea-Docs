---
uid: tiled-builds
title: Tiled Builds
---

# Tiled Output vs. Tiled Processing

To begin, let's differentiate between tiled output and tiled processing.

*"Tiled Output"* is when the build results (regardless of how they were built) are saved in a grid - that is, the overall output is split into even tiles. Tiled Output is used for very large terrains, especially in games, where parts of the terrain are "streamed" into memory for efficiency.

*"Tiled Processing"* or Distributed Processing is when a terrain is divided up into a grid of tiles *before* processing. After processing, the final output may be saved as individual tiles or as a single image. Tiled Processing is used to process very large terrains beyond what may be possible within the limits of your current hardware. By dividing the terrain into smaller tiles and processing them one by one, a remarkably smaller amount of RAM is needed for processing.

## Tiled Output

`TODO`

## Tiled Processing

{.NOTE}
> Tiled Processing is scheduled for inclusion in the March-April update cycle.

There is natural limitation of tiled processing: each tile is processed without any relation to the neighboring tiles. This may result in abrupt differences at the borders. To overcome this, a Edge Blend setting is provided. You can choose Low, Medium, High, Overkill. Increasing the blending amount will increase the time taken for processing, and the memory required. However, it will still be quite less than a normal or linear build.

### Avoid Screenspace Effects

Another natural limitation of Tiled Processing is the inability to process screenspace effects. Screenspace effects are nodes such as @Swirl, @Whorl, @Transform, etc. Such effects require processing the image as a whole and will not look correct when processed as tiles.

If you have used any such nodes, there will be a small warning icon in the status bar, and a more comprehensive warning in the @build-manager dialog.
