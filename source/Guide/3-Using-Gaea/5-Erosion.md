---
uid: erosions
title: Erosion
---

Erosion is the primary process through which we turn abstract and geometric shapes into believable terrains.

## The Erosion Node

The @Erosion node is the primary erosion node in Gaea. However, there are many additional nodes such as @Sediment, @Stratify, @Thermal that provide additional erosion and natural processing options.

### Layering Erosion

Erosion can give you even more complex results when used multiple times. If you simply increase values such as duration or strength, 

### Masked Erosion

While the @Erosion node can be masked using the standard @masking process, the Area mask input gives you additional options.

When an Area mask is connected, you can control the Rock Softness, Precipitation, or Erosion Strength. Unlike the standard mask, this mask allows the processing to be masked but not the shape. For example, you can mask out the top part of a volcano and choose Precipitation as the Area Effect. This forces the erosion-inducing precipitation to occur only within the masked area. But the resulting erosion can flow out and affect the rest of the terrain.

For more information, see Selective Processing in @Erosion.

### Data Output

The Erosion node creates three key data outputs:

- Wear: the portions where erosion removes sediments.
- Deposits: the resting position of those sediments.
- Flow: the path of the sediments from their original location to the final resting position.

These maps can be used for texturing, or for driving other nodes.

{.NOTE}
> In digital terrains, inexperienced artists will often try to use the Flow output too prominently for texturing. While this may work in some situations, it tends to create unrealistic textures and can make your terrain look fake and "CG". Try to at least use a @Texture node to complement the flow map.

## Secondary Forms of Erosion
^wip

## Misconceptions
^wip

### Erosion should be the last step
^wip