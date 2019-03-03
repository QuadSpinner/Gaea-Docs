---
uid: CLUTer
title: CLUTer
---

Coloration in Gaea is based on CLUTs, or color lookup tables. As 2D heightfields are essentially a grid of numbers ranging from 0.0 (lowest) to 1.0 (highest), CLUTs are represented as gradients which are mapped to those heights.

The lowest part of a gradient corresponds to the lowest part of the terrain. The highest part of a gradient corresponds to the highest part of the terrain. Everything in between is evenly distributed.

The CLUTer nodes let you take any grayscale input (such as @Curvature, @Slope, @Surface, @flow) and map it onto a gradient.

### Gradient Editor
Click anywhere in the gradient to create a new stop. Drag the stop to position it. Select the stop and press `DEL` to delete the stop.

![CLUTer](../../images/CLUT-sample.png)

