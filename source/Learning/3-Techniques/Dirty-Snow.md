---
uid: tut-dirty-snow
title: Dirty Snow
---

If you need complex snow distribution, it is recommended to chain multiple @Snowfall nodes together. Each node contributes a different type of distribution.

Let's try it out in a practical scenario. For our demo terrain, we want slightly unkempt snow that is uneven and somewhat "dirty", rather than large pristine mounds.

In our first Snowfall node, we will target general "dirty" distribution. To do this, we use `100%`{.val} `Settle-Thaw` and `8%`{.val} `Melt` with a high `Snow Line` of `48%`{.val}. 

To make sure the snow collects in smaller clumps and a bit of rock is exposed in between, we use a somewhat high `Slip-off Angle` value of `60`{.val}, and a slightly high `Adhered Snow Mass` value of `15`{.val}. 

This creates a non-flowing distribution, keeping the snow high up on the mountain and still allowing the physics simulation to work long enough to force the snow into crevices and expose sharp bits of the underlying terrain.

![](/images/ref/Snowfall/SnowA.webp)

For the second pass, we focus on the flowing snow. While overlap between the first and second passes is fine, we want to minimize that overlap so we don't lose the "dirtiness" of the snow.

We use a low `Intensity` of `6%`{.val}, a low `Settle-Thaw` of `2.5%`{.val}, and a `Melt` value of `5%`{.val}. The `Snow Line` is a lot lower than the previous pass at `28%`{.val}. To help the snow to flow more effectively, we use a low `Slip-off Angle` of `14%`{.val}.

This snow is now forced to the flow areas (often defined by previous erosion passes), compared to the previous pass which focused on "resting" snow.

![](/images/ref/Snowfall/SnowB.webp)

Finally, we take the 2 nodes' secondary Snow output mask and use @Combine at `100%`{.val} `Max` mode to merge the masks for use in our texture map creation. 

![](/images/ref/Snowfall/SnowC.webp)
