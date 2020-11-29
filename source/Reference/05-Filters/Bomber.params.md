| Setting              | Description                                                                                      |
| :------------------- | :----------------------------------------------------------------------------------------------- |
| **Distribution**     | The method of distribution                                                                       |
|                      | *Random* : A randomized distribution that results in pure chaotic patterns.                      |
|                      | *Poisson* : A discrete probability distribution function that results in a natural distribution. |
|                      | *Grid* : A normalized grid distribution function that results in a systematic pattern.           |
| **Clusters**         | The number of independent distribution clusters.                                                 |
| **Density**          | The density of the independent clusters, and the instances within each cluster.                  |
| **Variations**       | The number of variations to create. These variations will then be randomly repeated on the surface. Higher numbers take longer to process but creates more varied results.                                                                                        |
| **Jitter**           | The random offset applied to each instance while distributing.                                   |
| **Blend Mode**       | How the base terrain and bombed instances are merged.                                            |
|                      | *Add* : Adds the two values together.                                                            |
|                      | *Screen*  : Adds the two inputs without overexposing the output.                                 |
|                      | *Max*  : Selects the higher of the two.                                                          |
|                      | *Min*  : Selects the lower of the two.                                                           |
|                      | *Difference* : Creates the difference of the two inputs.                                         |
| **Proportional**     | Enforce proportional scaling, or allow non-proportional modifications.                           |
| **Strength**         | The minimum contribution level in overlapping instances.                                         |
| **Strength Max**     | The maximum contribution level in overlapping instances.                                         |
| **Minimum Scale**    | The smallest randomized instance size.                                                           |
| **Maximum Scale**    | The largest randomized instance size.                                                            |
| **Minimum Rotation** | The minimum randomized rotation angle.                                                           |
| **Maximum Rotation** | The maximum randomized rotation angle.                                                           |
| **Seed**             | The randomization pattern or seed for the node's process.                                        |