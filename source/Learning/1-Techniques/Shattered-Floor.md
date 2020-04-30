---
uid: tut-shatter-floor
title: Shattered Floor
---

Sometimes you may require an overall flat terrain but with lots of detail. @Shatter can help you create that in just 2 steps.

![](/images/tut/shatter-floor-1.jpg)

Create a @Plates node and use the @postprocess to Clamp the output to a level of flatness that you like. In this case we have it set to `33` and `24`.

![](/images/tut/shatter-floor-2.jpg)

Next add the @Shatter node. And that's it - you're done!

You further improve this with other nodes, or use @Texture and @RockMap with @SatMaps to texture the terrain.