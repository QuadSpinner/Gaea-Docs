---
uid: Terrace
title: Terrace
---

You can modulate the terracing process by attaching a second, optional input.


| Setting          | Values      | Description                                                   |
| :--------------- | :---------- | :------------------------------------------------------------ |
| **Terraces**     | 3 - 256     | The number of terraces to create.                             |
| **Uniformity**   | 0.00 - 1.00 | The uniformity of the vertical space between terraces.        |
| **Steepness**    | 0.00 - 1.00 | The steepness of the terrace edge.                            |
| **Intensity**    | 0.00 - 1.00 | The strength of terracing applied to the terrace.             |
| **Soft Falloff** | On / Off    | Softens the blend of the terrace edges with the base terrain. |
| **Reprocess**    | On / Off    | Applies all processing twice for enhanced effect.             |
| **Seed**         | 0 - 128000  | The randomization pattern or seed for the node's process.     |

> [!TIP] 
> Try using two Terrace nodes: one with fewer terraces but lower uniformity, and another with many terraces but higher uniformity. The combined output can be tweaked using the Soft Falloff and Intensity to avoid over processing.