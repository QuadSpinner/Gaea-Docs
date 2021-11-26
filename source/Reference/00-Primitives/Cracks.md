---
uid: Cracks
title: Cracks
---

The Cracks primitive creates large, cracked patterns on a flat base. You
can use it to mask other nodes or subtract it from other primitives
using the @Combine node.

![](/images/ref/Cracks/Cracks.webp){.ui .image .large}

## Usage

#### Basic Technique

By using @Combine to subtract out the Cracks output, you can cut out the
pattern in the main terrain.

![](/images/ref/Cracks/usage-1.webp){.ui .image .large}

#### Nested Patterns

The default pattern may seem to geometric and simplistic. This is by
design so you have broad room to make modifications.

Create 3 different nodes, one with large cracks, one with medium cracks,
and one with small and combine them for a more believable effect. As a
rule of thumb, you can take the largest size, right-click the `Scale`
slider and select the `Halve` button. Duplicate the node and halve it
again for the next node.

![](/images/ref/Cracks/usage-2.webp){.ui .image .large}

This may still look too simple for most usage scenarios. So you can add
distortions to the nodes by using the `Displace` option in the
@postprocess. This will create more natural-looking cracks.

![](/images/ref/Cracks/usage-3.webp){.ui .image .large}

{.TIP}

> Remember to modify the `Seed` property under the Displacement post
> process slider to make each node randomized.

When subtracting this pattern out of another terrain, you can get complex, subtle effects.

If you need more elaborate distortions in your patterns, you can add a @Warp node to each Cracks node.

![](/images/ref/Cracks/usage-4.webp){.ui .image .large}
