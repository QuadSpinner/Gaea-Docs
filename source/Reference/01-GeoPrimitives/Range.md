---
uid: Range
title: Range
---

Range does for mountain ranges what @Mountain does for hero mountains. The Range primitive quickly sets up an entire mountain terrain with shapes highly optimized for eroding large scale landscapes.

Range comes in two flavors: *High Altitude*, which generates taller mountains with little to no ground area; and *With Base*, which creates more rugged but expansive areas nearly 4x the size of *High Altitude*. The latter is very useful for heavy erosion to create vast mountainscapes. The former is better suited for being "up in the mountains".

The *With Base* option may not look much, but it can produce beautiful results when processed with @Erosion.

![High Altitude: A closer 'crop' of a mountainous area at higher altitudes. This includes the larger slopes and peaks, but not the base of the mountain.](/images/ref/Range/Range--1.webp)

![With Base: A wider 'crop' of a mountain chain showing multiple peaks and the valleys and fields between them.](/images/ref/Range/Range--2.webp)


{.TIP}
> Range (in both forms) is best eroded with two @Erosion nodes. One that erodes the entire environment lightly with no downcutting, and another that applies erosion with medium downcutting but is Biased to the top 20-30% of the altitude in the Selective Processing options.