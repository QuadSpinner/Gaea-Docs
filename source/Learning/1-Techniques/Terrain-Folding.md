---
uid: tut-folding
title: Terrain Folding without the Fold Node
---

This is a very simple yet effective method for creating terrain folding without using the @Fold node. The basic concept is to use a highly warped noise to cut grooves in @Voronoi.

![](/images/tut/Fold-1.webp){.w-100}

Create a highly warped @Perlin.

![](/images/tut/Fold-2.webp){.w-100}

Use the @Perlin to mask a @Voronoi (Form P, no Warp, Dual on if you prefer)

![](/images/tut/Fold-3.webp){.w-100}

@Displace with a few iterations for nice long stretches (High Quality off), and then clamp it to get the height down.

![](/images/tut/Fold-4.webp){.w-100}

Erode with default settings.

![](/images/tut/Fold-5.webp){.w-100}

The main image is with a bit of snow added, and Texture + Satmaps (both using Navajo Sandstone presets).