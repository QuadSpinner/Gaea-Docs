---
uid: fix-stairstepping
title: Fix Stairstepping
---

## Fix Stairstepping in Output

#### Problem

Sometimes when you export terrains at 16-bit, you may get a stepping pattern. This is because 16-bit data is limited to `65,536` values. In terrain terms, you can think of this as a "grade" of the slope. Each shift between the angle of the slope, no matter how small, would consume one of those 65k values.


#### Workaround: Use 32-bit formats

The easiest alternative is to use a 32-bit format. 32-bit formats can store ~16,777,216 values, or 16-million grades of a slope. This is significantly higher than the 65k of the 16-bit format.

See @save-formats for more information on 32-bit Raw (.r32), OpenEXR, and TIFF formats.

However, many game engines still don't use 32-bit floats for storage, and use `half` or 16-bit floats.


#### Workaround: Normalize the Output

As explained in @scale, your terrains may often use only a portion of the 16-bit range. For example, if your terrain's defined limit is `2500m` and the tallest point in your terrain is just `800m`, then you are only using approximately 30% of the available range (in other words, you're using only 20k out of the 65k range).

However, before you change your terrain definition to use a lower limit, it is much easier to use the full range. When building your terrain, set your Output Range to `Normalized` in @buildmanager.

When importing into your target application, you will need to scale down on the vertical axis after importing. This will ensure the proportions can be preserved while tricking the use of the full 16-bit range. For the vertical scaling ration see "Important Readouts" in @scale.
