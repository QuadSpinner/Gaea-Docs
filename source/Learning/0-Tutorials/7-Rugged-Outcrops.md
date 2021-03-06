---
uid: tut-rugged-outcrops
title: Rugged Rock Outcrops
---

This handy trick can help you emphasize the sharper portions of your terrain to make it look more rugged.

<br>

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/c8g4AYPm2XA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>

This is what an "extra rugged" terrain looks like. It is created by emphasizing a portion of the rocks generated by the @Stacks node.


![](/images/tut/cmix1.webp){.w-100}


To start with, we have a Helix @Gradient eroded by @Erosion.


![](/images/tut/rugged1.webp){.w-100}

Then we use the @Stacks node to create stratified rock outcrops and a strong talus.

![](/images/tut/rugged2.webp){.w-100}

Next we use a @Combine node to merge them using `Max` mode at `100%`{.val}. This gives us the higher values from both the Erosion and Stacks nodes. An alternative is to just use the `Max` option in the @postprocess.

![](/images/tut/rugged3.webp){.w-100}

We use a separate Combine node to merge the same two nodes, but this time us `Difference` mode. This gives just the portions that are different between the two. Because we max-merged the terrains, there is a lot of overlap so we only get the sharper outcrops that Stacks has created.

![](/images/tut/rugged4.webp){.w-100}

Now we use a third Combine node to combine the max-merged output with the diff-merged output. This time we use `Screen` at `100%`{.val}, so the sharp portions are intensified by the relative strength from the difference product. The red mask here shows the areas being affected.

![](/images/tut/rugged6.webp){.w-100}

And this is our final result.

![](/images/tut/rugged5.webp){.w-100}