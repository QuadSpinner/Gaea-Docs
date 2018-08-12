---
uid: Resolutions
Title: Resolutions
---

# Resolutions

This is one of the central precepts of terrain design. When you work on, and especially when you export, the terrain the amount of detail in the final result is calculated based on the size or resolution of the export image. Even if you export as a mesh, the image resolution is critical.

In Gaea, there are two different resolutions you work with: the preview resolution, and the export resolution.

## Preview Resolution
The Preview Resolution controls the quality of detail of your terrain preview in the viewport. You can choose between 512 x 512 (0.5K) to 4096 x 4096 (4K) resolution in cubic increments of 512, 1024, 2048, and 4096.

> [!WARNING]
> The higher the resolution, the more detail you will get. However larger resolutions can take 4x more time to process the image. Switch to higher resolutions only when you need to.

You can switch between preview resolutions as often as you like. When you switch the resolution, the terrain preview is rebuilt. For 0.5K and 1K previews, this is usually a fast process. For 2K and 4K, it can take longer.

> [!TIP]
> The @Preferences have an option to force any file to a 512 preview resolution when opening. This prevents the "first-build" to be very fast and you can always change to a higher resolution. If you start with a high resolution, you have to wait until it is finished before you can do anything. 
> This option is on by default to prevent such lockouts, but you can turn it off if you prefer.

## Export Resolution
The Export Resolution controls the quality of detail in your built/exported terrains. In Gaea, there is no limit for the maximum resolution except what is capable with your hardware. By default, you can export to resolutions of 1024, 2048, 4096, 8192, 16,384 (16K), and 32,768 (32K). 

> [!TIP]
> For resolutions beyond 16K, we recommend using @Tiled-Builds as they can contend with unlimited resolutions on even modest hardware.

As with preview resolutions, high export resolutions can also take much longer than the preview, but that is to be expected with builds. In essence, you create a "template" with your settings when you create a terrain at preview resolutions. When you "build" a terrain, Gaea takes the template of your preview, and uses those settings to build the terrain from scratch using the full export resolution. This results in more detail than is possible in previews.

For more information on building terrains, see @Build-Manager.