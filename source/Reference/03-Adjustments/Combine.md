---
uid: Combine
title: Combine
---

The Combine node is one of the most important nodes in Gaea. It allows you to take two outputs (terrains, masks, or color maps) and combine them using various mathematical operations, often known as 'Blend Modes'.

In addition, the Combine node also gives you a separation mask for texturing purposes when working with terrains and masks.


## Using Combine


#### Color Mixing

With Gaea 1.2, Combine has replaced the @Mixer node. Combine can now handle color map blending to give you additional flexibility.

Combine will switch to color blending mode when the first input is a color map. The second should be a color map too. If the second input is a mask or heightfield it will be converted into an RGB color map.

Inversely, if the first input is a heightmap or mask and the second is a color map, the second map will be converted into a grayscale mask.


#### Example

This is an example of equally blending (Mode: Blend, Ratio: 50%) @Perlin and @Mountain nodes.
![](/images/ref/Combine/combine--blend.webp)

If you switch the mode to Max and Ratio to 100%:
![](/images/ref/Combine/combine--max.webp)

If you plug in a shape of any kind to the Mask input of the Combine node, the brighter parts of the mask will be replaced with the first input, while darker areas will be replaced with the second input. If your mask is soft (ie - lots of grays instead of just black and white) then the blending between the two will be soft. This is usually the preferred method.
![](/images/ref/Combine/combine--hardmask.webp)


## Additional Scenarios

#### Clamped Output

By default, Combine will clamp the output between `0..1`. This is a safety precaution for mixing masks and other values where the value scale is not readily apparent and can cause issues in other nodes.

If you're adding two terrains where the combined output goes beyond `1.0`, it will return flat portions in such areas. To prevent this, you can turn off `Clamp Output`. However, to properly use this data you must bring it within the "acceptable range". To do this, you should enable `Autolevel (Lv)` in the @postprocess and then `Clamp`. This will bring the whole mask or terrain within the safe range.

Alternatively, you can add an @Fx node to the Combine output or other nodes like @Clamp and bring it down manually.