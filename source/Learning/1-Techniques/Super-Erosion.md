---
uid: tut-super-erosion
title: Super Erosion
---

With this technique, you can emphasis rocky erosion to a very high degree. The key element here is not use the output directly, but to use the @Erosion output to modify the terrain.

![](/images/tut/super-erosion-1.webp)

First we start with an eroded mountain that has been terraced. We use the terracing to create obstacles for the erosion process. As it erodes the terraces, specific sediment shapes will be formed.

![](/images/tut/super-erosion-2.webp)

Next we erode the terrain using very high settings. Random Sedimentation is quite important. We use Selective Processing so only the top gets eroded completely, while ejecta from up there falls all the way down in rocky lumps.

Then we turn on the `Diff` blend mode in the @postprocess so the output is the difference between the original terraced terrain and the erosion output. This gives us a terrain formed of just the rocky material and broken terraces.

![](/images/tut/super-erosion-3.webp)

Finally, we use @Combine to subtract the erosion output from the terraced terrain. This leaves us with a rocky, craggy mountain which still exposes some terraces, but also features a lot of rocky deposits.