---
uid: Erosion
title: Erosion
---

Gaea introduces a comprehensive erosion node, simply called Erosion. It provides sophisticated erosion with a very easy to use interface. The Erosion node provides control over the scale, where you can choose the size of the largest erosion feature, as well as the overall scale of the terrain.

# [Erosion](#tab/tabid-a)
| Setting           | Values       | Description |
| :---------------- | :----------- | :---------- |
| **Duration**      | 0.001 - 1.00 | TODO        |
| **Rock Softness** | 0.05 - 1.00  | TODO        |
| **Strength**      | 0.001 - 1.00 | TODO        |

# [Downcutting](#tab/tabid-b)
| Setting         | Values   | Description |
| :-------------- | :------- | :---------- |
| **Downcutting** | 0 - 100% | TODO        |
| **Inhibition**  | 0 - 100% | TODO        |
| **Base Level**  | 0 - 100% | TODO        |

# [Scale](#tab/tabid-c)
| Setting           | Values      | Description                               |
| :---------------- | :---------- | :---------------------------------------- |
| **Real Scale**    | On / Off    | TODO                                      |
| **Feature Scale** | 50 - 20000  | TODO                                      |
| **Terrain Scale** | 500 - 20000 | *Available when Real Scale is turned Off* |
| **Verticality**   | 50 - 20000  | *Available when Real Scale is turned Off* |

# [Flow](#tab/tabid-d)
| Setting    | Values   | Description                          |
| :--------- | :------- | :----------------------------------- |
| **Volume** | 0 - 100% | TODO                                 |
| **Debris** | 0 - 100% | TODO                                 |
| **Rivers** | On / Off | TODO                                 |
| **Depth**  | 0 - 100% | *Available when Rivers is turned On* |

# [Other Settings](#tab/tabid-e)
| Setting            | Values            | Description                                                                   |
| :----------------- | :---------------- | :---------------------------------------------------------------------------- |
| **Seed**           | 0 - 128000        | The randomization pattern or seed for the node's process.                     |
| **Process Mode**   |                   | TODO                                                                          |
|                    |                   | *Linear* : TODO                                                               |
|                    |                   | *Hybrid* : TODO                                                               |
|                    |                   | *Parallel* : TODO                                                             |
| **Parallel Speed** | TODO              | * Parallel Speed option is available when Parallel Process Mode is selected.* |
|                    |                   | *1X* : TODO                                                                   |
|                    |                   | *2X* : TODO                                                                   |
|                    |                   | *3X* : TODO                                                                   |
|                    |                   | *4X* : TODO                                                                   |
| **Mask**           | Localization mask | * Mask option is available when Linear Process Mode is selected.*             |
|                    |                   | *Erosion Strength* : TODO                                                     |
|                    |                   | *Rock Softness* : TODO                                                        |
|                    |                   | *Precipitation Amount* : TODO                                                 |
|                    |                   | *None* : TODO                                                                 |
| **Agressive Mode** | On / Off          | TODO                                                                          |


The Erosion node’s algorithm addresses one of the biggest problems in digital erosion: it preserves features across different resolutions. This means that a 512 x 512 preview build will maintain essential parity for all major erosion features with a high resolution 4K or 8K build. You no longer need to guess the output type.

The algorithm also creates exquisite flows with naturalistic curves, never before been seen in digital erosion.

***

<!--examples-->