| Setting        | Description                                                 |
| :------------- | :---------------------------------------------------------- |
| **Strength**   | The strength of noise added to the terrain.                 |
| **Iterations** | The number of noise iterations performed on the terrain.    |
| **Method**     |                                                             |  | *Random* : Random dots. |
|                | *Gaussian* : Softer clustering.                             |
|                | *Poisson* : Wide, distributed clusters.                     |
|                | *Impulse* : Sharp, strong spikes.                           |
|                | *Laplacian* : Sharp, low density clusters.                  |
| **Level**      | How noise is reprocessed when applying to the base terrain. |
|                | *None* : Do not reprocess.                                  |
|                | *Level* : Auto-level to sharpen noise.                      |
|                | *Equalize* : Equalize for sharp, strong noise.              |
|                | *Gamma* : Strong, but soft-edged noise.                     |
| **Seed**       | The randomization pattern or seed for the node's process.   |