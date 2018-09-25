---
uid: Soil
title: Soil
---

Soil Map creates a soil mask, with increased density in crevices or other areas where the slope allows for soil to settle. By increasing the Power value, a higher number of soil settling cycles are simulated. A low value provides a "fresh" sprinkling of dust with very little wind and other simulations to "move" the dust afterwards. High values perform more simulation cycles to sprinkle dust but also move it around (repeatedly).

| Setting    | Values   | Description                                                                                                                                     |
| :--------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Power**  | 5 - 50   | The power of soil deposits. Smaller values create detailed, small deposits. Larger values create less detailed but stronger deposits. |
| **Graded** | On / Off | Creates stacked deposits with geometric progression, which produce softer gradations.                                                                |


> [!TIP] 
> You can combine different Soil Maps using the Combine node set to Max. You can even combine with other Data Maps, such as Flow or Velocity, to create a texture mask upon which color production can take place.
