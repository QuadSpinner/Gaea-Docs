---
uid: Fault
title: Fault
---

The Fault primitive creates a fault in the terrain. The shape can be anything from a crack to a valley, based on the settings.

When the Fault node is used by itself, it will create a fault in a flat terrain. To produce a fault in your existing terrain, attach it to another node.

{.TIP} 
> To create a "multi-fault": duplicate a Fault node, attach it to the original Fault node, and change a few settings. For example - changing the depth, width, or even the seed can produce interesting results.

![](/images/ref/Fault/Fault.webp)


### Preventing over-cutting

If your Fault shape becomes a flat shape because it has hit the bottom of the terrain, you can increase the Clamp Minimum of the incoming