---
uid: Recurve
title: Recurve
---

Recurve is a curvature-based expander node. It can inflate and/or deflate the terrain to create stronger slopes and larger, softer formations from a given noise or terrain.

| Setting               | Values      | Description                                                                                           |
| :-------------------- | :---------- | :---------------------------------------------------------------------------------------------------- |
| **Power**             | 0 - 100% | The strength of the inflate/deflate operation. Higher values cause drastic shifts in shape formation. |
| **Scale**             | 0 - 100% | The amount of details to preserve. Higher values cause more prominent shapes to form.                 |
| **Duration**          | 1 - 15      | Number of operations to repeat.                                                                       |
| **Degrees**           | 0 - 360     | The angle of the recurve.                                                                             |
| **Inflate**           | On / Off    | Whether to inflate the terrain. Off deflates the terrain.                                             |
| **Preserve Fidelity** | On / Off    | This creates a fixed recurve shape at any resolution.                                                 |


> [!TIP] 
> Despite appearances, Recurve's output is very sensitive to subtle changes in the source heightfield. For example, if prior to Recurve you apply MicroErosion or Breaker, then Recurve will create a very specific flow pattern on those grooves and valleys.

***

<!--examples-->