---
uid: Gradient
title: Gradient
---

The Gradient node is a very useful starting primitive, especially when displaced or modified to create randomness. It is also a very useful mask generator.

It creates three distinct types of gradients: Linear, Radial, and Helix. Several properties shown below are unique to each gradient type.

| Setting              | Values      | Description                                                                           |
| :------------------- | :---------- | :------------------------------------------------------------------------------------ |
| **Type**             |             |
|                      | *Linear*    | A ramp going from lowest to heighest.                                                 |
|                      | *Radial*    | A soft, radial "bump".                                                                |
|                      | *Helix*     | A climbing, spiral or helix gradient.                                                 |
| **Scale**            | 0.00 - 1.00 | The scale of the gradient.                                                            |
| **Sawtooth**         | On / Off    | Whether a lower scaled Linear gradient should create a repeating or sawtooth pattern. |
| **Direction**        | 0 - 360     | The angle of the Linear gradient.                                                     |
| **Edge Behavior**    |             |
|                      | *None*      | Edge pixels are left blank.                                                           |
|                      | *Mirror*    | Edge pixels are mirrored.                                                             |
|                      | *Repeat*    | Edge pixels are repeated.                                                             |
|                      | *Edge*      | ???                                                                                   |
| **X** / **Y**        | 0.00 - 1.00 | The center point on the Radial gradient.                                              |
| **Start** /  **End** | 0 - 360     | Where the helix should start and end.                                                 |



