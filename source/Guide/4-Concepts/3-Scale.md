---
uid: scale
title: Terrain Scale
---

Gaea supports setting an arbitrary scale for your terrains through the new Terrain Definition panel. If you're a casual terrain artist, this won't significantly affect your workflow — the defaults will be sufficient. However, if you're creating precisely-scaled terrains, Terrain Definition is your best friend.

## Terrain Definition

The Terrain Definition popup is found in the main toolbar.

![](/images/Philosophy/scale-definition.png)

You define the Height of your terrain in meters. The Scale determines the extent of the entire terrain. By default, Gaea terrains are set to be 2.6km tall (Height: 2,600m), and 5 x 5 square kilometers wide (Scale: 5,000m).

Internally, the terrain vertical ratio is calculated as: `(height / scale)`

A height of 2.6km is usually more than enough for most terrains. For perspective, Mt. Everest is 8.8km tall. Choosing an extreme height is not recommended unless you know how to handle the ramifications of such tall terrains. It is important to note that, while the maximum height is set to 2600m, it does not mean that any shape created will automatically fill the entire height range.

{.NOTE}
> Terrain Definition is non-destructive. You can scale your terrain and the update will be immediately applied without the need to rebuild your terrain. You can change the values as often as you like.

## Scale Philosophy

Scale in all CG is an imaginary construct. With Gaea and heightfields, we have pixels when using an image format, or an array of floats when using a raw format. A Gaea terrain in its most basic form is a cube made of infinite numbers, which must be translated to a fixed size as defined by the output resolution and image format.

For example, if your output resolution is 2048 x 2048, then the size of the terrain in pixels is 2048 on either side - this is uniform across all image and raw formats. The "vertical" capacity is defined by the maximum storage capacity of the format. 32-bit TIFF, EXR, RAW and PFM can store approximately one million levels of vertical "heights".

{.NOTE}
> Gaea stores and processes heightfields as "floats" (a high precision number). Heights are stored in a  `~0.0,000,000` - `1.0,000,000` range. For the more technically minded, this is just a simplification. Gaea uses IEEE 754 format 32-bit floats.

![](/images/Philosophy/scale--5000x2600.png)

This image shows the "cube" of the default terrain size, which is `5000 x 5000` meters wide, and `2600` meters tall. You will notice our cube is not an exact cube; it is shorter than it is wide.

For realistic use, we must visualize the data the way we perceive mountains in the real world. So we force a height-to-width ratio to satisfy the human perception of scale for terrains.

![](/images/Philosophy/scale--5000x5000.png)

If you want a perfect cube, your height and scale must be the same. In this image, our terrain is a `5000 x 5000` meters and `5000` meters tall.

So why don't we use a perfect cube? Because it distorts our perception of terrains.

![](/images/Philosophy/perlin-5000x5000.png)

This is what Perlin noise would look like in the "cube" format.

![](/images/Philosophy/perlin-5000x2600.png)

This is what the same noise looks like with height-to-width ratio applied. As you can see, it fits our perception better.

It is important to note that all these transformations are **imaginary**. The underlying data is still a fixed grid of numbers.

{.NOTE}
> The only place the terrain scale affects *how* your terrain is processed, is when `Real Scale` is turned ON in the Erosion, Snow, or Thermal nodes. Although they can be overridden per node.

This begs the question of how do you, the user, translate this to practical metrics for exporting and usage in other applications or game engines.


## Practical Usage of the Scale Philosophy

When exporting the terrain as an image/heightmap, you must make a fundamental decision:
- Keep the natural scale without applying perceptual ratio.
- Bake the perceptual ratio mentioned above into the pixels.
- Force the terrain to use the entire bit-range of the image format.

These options are known as the **Output Range** options in the Build Manager. See @building for information on setting those options. Below we will discuss the implications of each option.

There is no right or wrong way to scale the output range. It depends on what target application you are using, and how.


### Raw Scale

Technically, this is the most accurate representation of the terrain because the output is exactly what the software itself "sees" when processing. But it will not be *perceptually* accurate. You will need to manually scale the output along the vertical axis.

An easy way in most applications is to create a box of the desired size and match the scale of the terrain asset. Or if you use a heightmap as a displacement source, then you can set the displacement in meters (or appropriate units).

If you need to scale it down vertically, use the Height-Scale ratio explained below.

### Proportional or Baked Scale

This method will bake the ratio you see in the viewport into the heightfield. This is very useful when exporting meshes. You lose a minor amount of vertical fidelity, but unless you are creating closeups of the terrain, it will not affect you.

When bringing the terrain into your target application, you can optionally treat it as a perfect cube and your ratio is already baked into the vertical values.

### Normalized Scale

Forced scaling, in many situations, can give you maximum vertical fidelity. Gaea will force the terrain to use the entire `~0.0,000,000 - 1.0,000,000` heightrange in 32-bit formats. In 16-bit images that would be `0 - 65,534`. In 8-bit, it is `0 - 254`. If you need more vertical fidelity for closeups, this option may help as you get more density in the up-axis than in other methods.

When using forced scaling, you must adjust the vertical size of your output manually in the target application. Like with Natural Scale, use the Height-Scale Ratio.


## Important Readouts for Terrain Scale

![](/images/Philosophy/scale-definition.png)

In the Terrain Definition, you get two readouts: Real Scale and Height-Scale Ratio.

**Real Scale**: This is the pixel-to-meters "density" for your output. It is calculated by dividing your final output resolution (selected in the Build Manager) by the scale in meters set in the Terrain Definition.

For example, `5000 x 5000` meter terrain exported at `2048 x 2048` pixels results in `2.4` meters per pixel. You can change your output resolution to see the exact ratio you get. 

This information is often used by game designers to ensure scale accuracy between the terrain and other game elements.

**Height-Scale Ratio**: Ratio of the Imaginary Cube. If you export using Raw or Normalized Scale, and need to resize your terrain, you can resize it by this ratio. The ratio is simply `height / scale`.
