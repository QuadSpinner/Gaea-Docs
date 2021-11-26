---
uid: lookdev
title: Look Dev
---

LookDev, or Look Development, nodes are composite nodes that allow you to quickly achieve specific geological formations from simple shapes with minimum effort. You can even create complete, sophisticated environments from simple shapes with these specialized nodes. 

Each LookDev node targets a particular type of "look", reducing the need for you to custom build a processing network.

## Fast Look Development

![](/images/lookdev/stacks.webp)

Usually, procedural artists must rely on trial and error to come up with techniques to shape terrains for specific "looks". For example, a realistic stratified mesa formation in Gaea would require anywhere between 12 to 20 nodes. However, the @Stacks LookDev node can create that exact look by itself.

LookDev nodes use composite algorithms that attain an extra level of quality and detail, not directly possible by using a set of nodes.

![](/images/lookdev/shatter.webp)

The @Shatter node can take any terrain, whether a simple shape or a complex construct, and create surface impacts by breaking down the terrain in various ways.

![](/images/lookdev/canyonizer.webp)

The @Canyonizer node can make canyon networks on a terrain. At low-yield, it can be used to add lots of semi-superficial detail to an existing shape. See the @tut-shattered-mountain-lake tutorial for a full example.

For more information on Gaea's LookDev nodes, see the individual node pages in @reference.

## Usage Strategies

In most cases, a single LookDev node can yield the desired shape. However, adding the same node after and maintaining low strength in both can produce more elaborate effects. For example, 2 low strength @Canyonizer nodes can generate a more complex canyon system than either node can create by itself.

It is often useful to add a mild Erosion node after using strong LookDev nodes, such as @Stacks, to add some residual erosion. In such a situation, using the Max effect in the @postprocess is also useful to avoid changing the shape too much.

Primarily, LookDev nodes are for creating terrains. However, nodes like @Canyonizer, @Anastomosis, and @Shear can also be useful when making textures masks. For example, adding a @Shear node to a @Texture node's output can create distinct variations.

Most importantly, you can use LookDev nodes to take basic shapes and turn them into elaborate terrains in minutes. A great example of this process is shown in the @tut-rugged-outcrops tutorial.

<div class="ui embed" data-source="youtube" data-id="c8g4AYPm2XA">
</div>

{.NOTE}
> LookDev nodes are fast for the amount of work they do. However, depending on the shape of the incoming terrain and the node in question, it may take a little bit longer to process. These nodes should be used sparingly; otherwise, they may become overkill - both for build speed and the unnecessary amount of detail they can add. The latter can sometimes even create unwanted shapes at very high resolutions.
> If you do end up using several LookDev nodes, @cache are great ways to keep your workflow swift.
