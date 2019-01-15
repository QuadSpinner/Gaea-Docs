---
uid: Bomber
title: Bomber
---

| Setting              | Values      | Description                                                                           |
| :------------------- | :---------- | :------------------------------------------------------------------------------------ |
| **Distribution**     |             | The method of distribution                                                            |
|                      | *Random*    | A randomized distribution that results in pure chaotic patterns.                     |
|                      | *Poisson*   | A discrete probability distribution function that results in a natural distribution. |
|                      | *Grid*      | A normalized grid distribution function that results in a systematic pattern.         |
| **Clusters**         | 1 - 30      | The number of independent distribution clusters.                                      |
| **Density**          | 0.10 - 0.90 | The density of the independent clusters, and the instances within each cluster.       |
| **Strength**         | 0 - 100     | Lorem                                                                                 |
| **Jitter**           | 0.00 - 0.20 | The random offset applied to each instance while distributing.                        |
| **Minimum Scale**    | 0 - 100% | The smallest randomized instance size.                                                |
| **Maximum Scale**    | 0 - 100% | The largest randomized instance size.                                                 |
| **Minimum Rotation** | 0 - 360     | The minimum randomized rotation angle.                                                |
| **Maximum Rotation** | 0 - 360     | The maximum randomized rotation angle.                                                |
| **Seed**             | 0 - 128000  | The randomization pattern or seed for the node's process.                             |




If your terrain has a hard edge, try using the `Zero Borders` node before applying the Bomber node.
