---
uid: artifacts
title: Fix Artifacts
---

## Fixing Artifacts

#### What are artifacts?

#### Why do we get artifacts?

---

## Fix Stairstepping Artifacts

#### Problem

Sometimes when you export terrains at 16-bit, you may get a stepping pattern. This is because 16-bit data is limited to `65,536` values. In terrain terms, you can think of this as a "grade" of the slope. Each shift between the angle of the slope, no matter how small, would consume one of those 65k values.


#### Workaround: Use 32-bit formats

The easiest alternative is to use a 32-bit format. 32-bit formats can store ~16,777,216 values, or 16-million grades of a slope. This is significantly higher than the 65k of the 16-bit format.

See @save-formats for more information 32-bit Raw (.r32), OpenEXR, and TIFF formats.

However, may game engines still don't use 32-bit floats for storage, and use `half` or 16-bit floats.


#### Workaround: Normalize the Output

As explained in @scale, your terrains may often use only a portion of the 16-bit range. If your terrain's defined limit is `2500m`, however the tallest point in your terrain is only `800m` then you are only using approximately 30% of the available range (in other words, you use only 20k out of the 65k range).

However, before you go and change your terrain definition to use a lower limit, it is much easier to use the full range. When building your terrain, set your Output Range to `Normalized` in @buildmanager.

When importing into your target application, you will need to scale down on the vertical axis after importing. This will ensure the proportions can be preserved while tricking the use of the full 16-bit range. For the vertical scaling ration see "Important Readouts" in @scale.


## Fix Grid-like Artifacts

#### Problem



#### Workaround: Edge Blending or Chunk Size

#### Workaround: Disable Parallel Processing

If you see grid-like artifacts in your output, use higher values for Edge Blending. If that does not help, try increasing Chunk Size. If either does not help, you can disable Parallel Processing. This may result in slower builds, but the result will be accurate and error free.

