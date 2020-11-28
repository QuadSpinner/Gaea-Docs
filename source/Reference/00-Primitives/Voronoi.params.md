| Setting            | Description                                                                   |
| :----------------- | :---------------------------------------------------------------------------- |
| **Scale**          | The perceptual scale of the Voronoi shapes. Higher values create more shapes. |
| **Jitter**         | Control the offset of the Voronoi points between symmetrical and chaotic.     |
| **Seed**           | The randomization pattern or seed for the node's process.                     |
| **Dual**           | Creates two overlapping Voronoi patterns.                                     |
| **Perturb**        |
|                    | *None* : No warping.                                                          |
|                    | *Simple* : Simple, soft warping.                                              |
|                    | *Complex* : Complex, turbulence warping.                                      |
| **Warp Frequency** | Frequency of the warp. Higher numbers create stronger warping.                |
| **Warp Amplitude** | The strength of the warping applied to the base noise.                        |
| **Warp Octaves**   | The complexity of the warping shape.                                          |
| **Scale X**        | The non-uniform scale of the X axis.                                          |
| **Scale Y**        | The non-uniform scale of the Y axis.                                          |
| **Function**       |                                                                               |
|                    | *E* : Euclidean function.                                                     |
|                    | *M* : Manhattan function.                                                     |
|                    | *N* : Natural, geology-friendly version of Euclidean.                         |
| **Form**           |                                                                               |
|                    | *C* : Voronoi cells with height decided by the cells themselves.              |
|                    | *N* : Voronoi cells with height decided by the nearest neighbor.              |
|                    | *R* : TODO                                                                    |
|                    | *P* : The default look for this geo-variant, suitable for creating mountains. |
|                    | *A* : A mix between P and M.                                                  |
|                    | *S* : Individual mountains with fully separated boundaries.                   |
|                    | *M* : Favors the strongest cell; good for creating a big mountain slope.      |
|                    | *D* : Favors ridges over cell centers.                                        |
