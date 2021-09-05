---
uid: resolutions
title: Understanding Resolution
section: true
---

Resolution is one of the central precepts of terrain design. When you work on a terrain, and especially when you export, the amount of detail in the final result is calculated based on the size or resolution of the export image. Even when you export as a mesh, the image resolution is critical.

In Gaea, you work with 2 different resolutions: Preview Resolution and Export Resolution.

## Preview Resolution

The Preview Resolution controls the quality of detail of your terrain preview in the viewport. You can choose from 512 x 512 (0.5K) up to 4096 x 4096 (4K) resolution.

{.WARNING}
> The higher the resolution, the more detail you will get. Higher resolutions, however, can take 4x longer to process the image. Switch to higher resolutions only when you need to.

You can change preview resolutions as often as you like. When you switch the resolution, the terrain preview is rebuilt. For 0.5K and 1K previews, the process is usually fast. For 2K and 4K, it can take longer.

{.NOTE}
> 4K resolution previews are still experimental and not fully optimized. This may lead to slower performance with complex graphs.

## Export Resolution

The Export Resolution controls the quality of detail in your built/exported terrains. In Gaea, there is no limit on maximum resolution except for what your hardware allows. By default, you can export to resolutions of `1024`, `2048`, `4096`, `8192`, `16,384` (16K), and `32,768` (32K). 

{.TIP}
> For resolutions beyond 16K, we recommend using @tiled-builds to contend with unlimited resolutions on even modest hardware.

Like with preview resolutions, high export resolutions can take longer than the preview - something to be expected with builds. In essence, when you create a terrain at preview resolution, you're creating a "template" with your settings. When you "build" a terrain, Gaea takes that preview template and uses those settings to build the terrain from scratch using the full export resolution. This results in more detail than is possible in previews.

For more information on building terrains, see @build-manager.


## Resolution Dependence

All terrains/heightfields, no matter how procedural, are still bound to the limits of their resolution. While most aspects of Gaea are resolution-independent - meaning, an effect or shape will remain the same across different resolutions - there is always a chance that certain shapes and effects may change across several nodes when seen at different resolutions.

This is a natural side effect of heightfield-based terrains. To make sure the results are as expected, it is helpful to build and export the terrain at final resolution once in a while. If the shapes change and you are unsure where on the graph it happens, you can mark for export several key nodes in your graph and examine where the changes occur.

#### Forcing a resolution

If you want to enforce a specific resolution, you can do so manually by saving the graph up to the desired node at your desired resolution. Then you can import it to a new graph using the @File node. This will upscale the file to the new final resolution.
