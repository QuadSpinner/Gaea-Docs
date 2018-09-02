---
uid: Fault
title: Fault
---

The Fault primitive creates a fault in the terrain. It can be shaped to be anything from a crack to a valley based on the settings.

If the Fault node is used by itself, it will create a fault in a flat terrain. To get a fault in your existing terrain, attach it to another node.

| Setting    | Values      | Description                                                                    |
| :--------- | :---------- | :----------------------------------------------------------------------------- |
| **Width**  | 0.00 - 0.40 | The width of the fault.                                                        |
| **Depth**  | 0.00 - 1.00 | The depth of the fault.                                                        |
| **Shrink** | 0.00 - 0.50 | Contraction of the fault from the two ends.                                    |
| **Scale**  | 0.10 - 0.75 | The scale of the shapes and features of the fault.                             |
| **Chaos**  | 0.25 - 0.90 | The randomness of features of the fault.                                       |
| **X**      | 0.00 - 1.00 | The horizontal position of the fault. Only available when Shrink is above 0.0. |
| **Y**      | 0.00 - 1.00 | The vertical position of the fault.                                            |
| **Angle**  | 0 - 360     | The direction of the fault.                                                    |
| **Seed**   | 0 - 128000  | The randomization pattern or seed for the node's process.                      |

> [!TIP] 
> To create a "multi-fault", duplicate a Fault node, attach it to the original Fault node and change a few settings. For example, changing the depth, width, or even seed, can create interesting results.