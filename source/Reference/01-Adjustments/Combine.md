---
uid: Combine
title: Combine
---

The Combine node is one of the most important nodes in Gaea. It allows you to take two terrains (or any node output) and combine them using various mathematical operations, often known as 'Blend Modes'.

In addition, the Combine node also gives you a separation mask for texturing purposes.

This is an example of equally blending (Mode: Blend, Ratio: 50%) @Perlin and @Mountain nodes.
![](/images/ref/Combine/combine--blend.png)

If you switch the mode to Max and Ratio to 100%:
![](/images/ref/Combine/combine--max.png)

If you plug in a shape of any kind to the Mask input of the Combine node, the brighter parts of the mask will be replaced with the first input, while darker areas will be replaced with the second input. If your mask is soft (ie - lots of grays instead of just black and white) then the blending between the two will be soft. This is usually the preferred method.
![](/images/ref/Combine/combine--hardmask.png)
