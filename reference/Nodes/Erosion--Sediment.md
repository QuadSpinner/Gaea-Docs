---
uid: Sediment
title: Sediment
---

The Sediment node creates a thick layer of sedimentation on top of the terrain. The sediment is very generic and based on your usage, can create sand or snow.

| Setting      | Values      | Description                                                                |
| :----------- | :---------- | :------------------------------------------------------------------------- |
| **Power**    | 1 - 50      | The power of sedimentation layers.                                         |
| **Amount**   | 0.00 - 1.00 | The amount of sedimentation on each layer.                                 |
| **Drift**    | On / Off    | Add a superficial multi-directional drift or buildup to the sedimentation. |
| **Strength** | 0.00 - 1.00 | The strength or offset of the drift.                                       |
| **Seed**     | 0 - 128000  | The randomization pattern or seed for the node's process.                  |

> [!TIP] 
> The Drift mode creates an extremely large buildup of sedimentation (be it snow, sand, etc.) offset to the main terrain. This can be great for creating snow buildup, glaciers, etc.

> [!WARNING] 
> If the Drift looks too detached from the main terrain, try changing the Seed or lowering the Strength.