---
uid: Details
title: Details
---

The Details node allows you to extract higher frequency details to produce Detail Displacement (for lower resolution meshes) or Detail Normals.

Just add the node to your final height node(s), and set the Target Size to your downscaled size. For example, if you are building your world at 8192 x 8192, but your mesh is 2048 x 2048 vertices, then set the Target Size to 2048.

To create Detail Normals, just do the above and attach a Normal Map node to the Details output.

{.TIP}
> The Details output is extremely "microscopic" and may not always be directly visible in the viewport. You should temporarily turn on Autolevel (Lv) in the Post Process options, or use the Eq mode in 2D view to look at the output.