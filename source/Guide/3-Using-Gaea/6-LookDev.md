---
uid: lookdev
title: Look Dev
---

LookDev or Look Development nodes are composite nodes that allow you to quickly achieve specific geological formations out of simple shapes with minimum effort. You can even achieve complete, sophisticated environments from simple shapes with these specialized nodes. 

Each LookDev node targets a specific type of "look", reducing the need for you to custom build a processing network.

## Fast Look Development

![](/images/lookdev/stacks.webp)

Usually, procedural artists have to use trial and error to come up with specific techniques that can shape terrains for particular "looks". For example, a realistic stratified mesa formation in Gaea would require anywhere between 12 to 20 nodes. However, the @Stacks LookDev node can create the very look by itself.

LookDev nodes use composite algorithms that are not directly possible by using a set of nodes, so you get an extra level of quality and detail.

![](/images/lookdev/shatter.webp)

The @Shatter node can take any terrain, whether a simple shape or a complex construct, and create surface impacts by breaking down the terrain in various ways.

![](/images/lookdev/canyonizer.webp)

The @Canyonizer node can create canyon networks on a terrain. At low-yield, it can be used to add lots of semi-superficial detail to an existing shape. See the @tut-shattered-mountain-lake tutorial for a full example.

For more information on the specific LookDev nodes, see the individual node pages in @reference.

## Usage Strategies

In most cases, a single LookDev node is enough to get the desired shape. However, adding the same node afterwards and maintaing low strength in both can create more elaborate effects. For example, two low strength @Canyonizer nodes can create a more complex canyon system than either node can create by themselves.

It is often useful to add a mild Erosion node after using strong LookDev nodes such as @Stacks to add a bit of residual erosion afterwards. In such a situation, using the Max effect in the @postprocess is also useful if you want to avoid changing the shape too much.

LookDev nodes are primarily for creating terrains, however, nodes like @Canyonizer, @Anastomosis, and @Shear can also be useful when creating textures masks. For example, adding a @Shear node to a @Texture node's output can create distinct variations.

Most importantly, you can use LookDev nodes to take basic shapes and turn them into elaborate terrains in minutes. A great example of such a process is shown in the @tut-rugged-outcrops tutorial.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/c8g4AYPm2XA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

{.NOTE}
> LookDev nodes are fast for the amount of work they do, but depending on the shape of the incoming terrain and the node in question, it may take a little bit of time to process. These nodes should be used sparingly, otherwise they may become overkill - both for build speed and the unnecessary amounts of detail they can add. The latter can sometimes even create unwanted shapes at very high resolutions.
> If you do end up using several LookDev nodes, @cache are great ways to keep your workflow swift.