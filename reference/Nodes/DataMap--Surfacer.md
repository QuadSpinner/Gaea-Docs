---
uid: Surfacer
title: Surfacer
---

Surfacer provides several types of texturing primitives. It should not be used by itself. Instead, multiple Surfacers' output should be combined to create a sophisticated texture mask, and can also be combined with other complex texture masks, such as the Data Maps.


| Setting      | Values   | Description                                                                                    |
| :----------- | :------- | :--------------------------------------------------------------------------------------------- |
| **Mode**     |          |
|              |          | *Sprinkling* : Noisy convexity mask.                                                           |
|              |          | *Peaks* : Slope deposits mask.                                                                 |
|              |          | *Sliders* : TODO                                                                               |
|              |          | *Splotches* : Random splotches on the terrain based on neighboring terrain structures.         |
|              |          | *Trace* :  Traces the most prominent shapes on the terrain.                                    |
|              |          | *Wind Streaks* : Masks areas where winds would swipe across structures. Useful for weathering. |
| **Strength** | 0 - 100% | The strength of the mask.                                                                      |




***

<!--examples-->