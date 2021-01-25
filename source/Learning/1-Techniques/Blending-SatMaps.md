---
uid: tut-blending-satmaps
title: Blending SatMaps
---

@SatMaps can give you a complex color maps to colorize your terrains. However, sometimes a map may look good but be just a little bit off, and you may be tempted to force a color change using @ColorFX. While that is an option, it can be problematic as it is a "brute force" solution. An organic, and in many cases - better, method is to blend different SatMaps.

Here is an example. This terrain has a believable red hue which is strong, but not too strong. 

![](/images/tut/cmix1.webp)

This is the original SatMap. A portion of the map `Rocky 207`{.val}. However, by itself it is too red.

![](/images/tut/cmix5.webp)

![](/images/tut/cmix2.webp)

To make the map look more believable, we create a second SatMap node that uses a cooler hue. In this case, it is the map `Blue 107`{.val}.

![](/images/tut/cmix6.webp)

![](/images/tut/cmix3.webp)

When blended using a @Combine node at `100%`{.val} `Max` mode, you get a little bit of blue poking out through the red pixels. To further make this more realistic, the Combine node is masked with a high noise @Perlin.

![](/images/tut/cmix1.webp)



