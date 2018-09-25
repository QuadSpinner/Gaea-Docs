---
uid: Aperture
title: Aperture
---

The Aperture node expands or compacts every single feature on the terrain, similar to bokeh in a camera.

| Setting        | Values     | Description                                                                                                                    |
| :------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **Method**     |            | Choose whether to expand or compact the visuals on the terrain.                                                                |
|                | *Expand*   | Lorem                                                                                                                          |
|                | *Contract* | Lorem                                                                                                                          |
| **Iterations** | 0 - 20     | Number of aperture passes to perform on the terrain. Higher number of passes creates a pronounced effect at the expense of speed. |
| **Kernel**     |            | Kernel is the shape of the aperture. Changing the kernel can change how the features on the terrain are modified.          |
|                | *Disk*     | Large, circular formation.                                                                                                     |
|                | *Diamond*  | Small, diagonal squares.                                                                                                       |
|                | *Cross*    | Small cross pattern. Can create predictable shape. For best results, use with masking.                                          |
|                | *Oct*      | Large, octagonal formation.                                                                                                    |
|                | *Corner*   | Large, diagonal squares.                                                                                                       |
|                | *Ring*     | Small, circular formation with steps/terraces.                                                                                 |
|                | *Sobel*    | Rectangular stretches which retain corner shapes.                                                                              |
| **Random**     | On / Off   | When on, each iteration uses a randomly selected kernel.                                                                       |
| **Seed**       | 0 - 128000 | The randomization pattern or seed for the node's process.                                                                      |



