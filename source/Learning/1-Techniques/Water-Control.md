---
uid: tut-lake-control
title: Controlling Water
---

You can use a combination of @Clamp and @Combine (Max mode) to control the water level created by the @Lakes node.

The core concept here is to use the secondary outputs of the Lakes node instead of the primary output so we can modify them before merging it with our terrain. The @Erosion node here is the main terrain upon which Lakes simulates water. We use a @Combine node in Max mode (100%) and merge the Erosion output with the Surface output. But we interject a @Clamp node which helps us control the height of the water level.

{.TIP} 
> Surface is a hidden port, and can only be accessed by dropping a connection on the Lakes node and selecting the Surface option from the popup menu.

Then we enable the Difference mask in the Combine node. This is the new Lakes mask that the Lakes node would have normally given us, but with the clamp influence taken into consideration.

Additionally, just to show the effect we're also combining (50% Blend) the Autolevelled Depth output with the Difference mask, and then pass it to a SatMaps node. Now we when we lower the Clamp nodes Max amount, the water level goes down while leaving a "drying shore". 

![](/images/ref/Lakes/tut-control-1.jpg)

Clamp Max at 100%.

![](/images/ref/Lakes/tut-control-2.jpg)

Clamp Max at 55%.

![](/images/ref/Lakes/tut-control-3.jpg)

Clamp Max at 32%.


You can create a more elaborate texturing setup to show the drying shoreline and more. For example, if you set up two different clamps, you can get a "wet" area outside the water level. That is how this terrain was created:

![](/images/ref/Lakes/lake-clamp.gif)