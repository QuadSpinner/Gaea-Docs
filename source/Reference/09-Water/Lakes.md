---
uid: Lakes
title: Lakes
---

The Lakes node simulates rainfall on the terrain and creates physically accurate lakes. Even when overriding with custom masks for precipitation, the physics simulation ensures your lakes are as physically accurate as possible using Gaea's erosion engine.

^hiddenports

### Outputs

There are multiple outputs to help you with the post-generation tasks such as colorization, surface separation, and more.

The main output is a heightfield with the lake surface embedded into the terrain.

![](/images/ref/Lakes/Lakes--Normal.webp){.ui .image .medium}

The Lakes mask gives you an exact hard mask of the water.

![](/images/ref/Lakes/Lakes--Mask-Lakes.webp){.ui .image .medium}

The Depth mask gives you the depth of the water bodies. You may sometimes need to use Autolevel to see the depth as it can be quite subtle with smaller water bodies. However, if you use CLUTer to colorize it, using the built in Autolevel option should suffice.

![](/images/ref/Lakes/Lakes--Mask-Depth.webp){.ui .image .medium}

The Shore mask gives you the full coverage of the shore surrounding all water bodies. To avoid mask overlap (which can create aliasing artifacts) the Shore mask contains the water bodies as well. When coloring, you can layer the shore first then the water. (See @tut-color-water) Or if you wish to get a shore only mask, then you can subtract the Lakes mask from the Shore output.

![](/images/ref/Lakes/Lakes--Mask-Shore.webp){.ui .image .medium}

The Surface output is not a mask but a heightfield. It is a hidden port only available by dropping a connection on the center of the node and selecting it from the ports menu that pops up.

It gives you just the surfaces of the lakes at their exact altitude. This can be used to create a separate mesh or displacement map for further usage in other applications. Or advanced control (see @tut-lake-control). 

![](/images/ref/Lakes/Lakes--Mask-Surface.webp){.ui .image .medium}

If this is the normal output,

![](/images/ref/Lakes/Lakes--Surface1.webp){.ui .image .medium}

then this is the Surface output visualized as a heightfield.

![](/images/ref/Lakes/Lakes--Surface2.webp){.ui .image .medium}

### Flooding

Flood Control creates a constant amount of water from the bottom up before running the precipitation simulation. This can be used to add extra water to the terrain more efficiently than simply increasing the rainfall. You can also use it bolster the water level of lower lakes while preserving the size of lakes at higher altitudes.

You can Flood Control to create a sea shore as well.

For example, this is our standard Lakes output.

![](/images/ref/Lakes/Lakes--Flood1.webp){.ui .image .medium}

By enabling Flood Control our terrain is flooded first, then additional rainfall occurs adding to the existing water.

![](/images/ref/Lakes/Lakes--Flood2.webp){.ui .image .medium}

If you set Precipitation to 0, and just use Flood Control, you can create lakes in the lower parts of the terrains.

![](/images/ref/Lakes/Lakes--Flood3.webp){.ui .image .medium}


### Custom Lake Positions
The optional Rain input allows you define where rainfall occurs. However, since we are dealing with a physics simulation, the mask position needs to be uphill of where you want the lakes to form instead of simply painting a mask of that final destination itself.

If you place a mask up on the tallest peak, the rainfall simulation will occur only here.

![](/images/ref/Lakes/Lakes--Custom1.webp){.ui .image .medium}

And the water will flow downhill and automatically rest in a position where a lake could naturally form with such precipitation.

![](/images/ref/Lakes/Lakes--Custom2.webp){.ui .image .medium}

If you place a mask up in the lowest area with no major slopes:

![](/images/ref/Lakes/Lakes--Custom3.webp){.ui .image .medium}

Then the lake is formed in that low area only. You can see it still goes downhill a bit to a natural resting spot dictated by gravity.

![](/images/ref/Lakes/Lakes--Custom4.webp){.ui .image .medium}

Remember, you can use Flood Control to bolster smaller lake bodies instead of modifying your mask shape or increasing the precipitation simulation.

![](/images/ref/Lakes/Lakes--Custom5.webp){.ui .image .medium}

