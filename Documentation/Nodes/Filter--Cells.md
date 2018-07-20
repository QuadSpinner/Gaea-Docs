This node quantizes the heightfield into discrete cells as defined by the Distance function. The default Euclidian function creates basalt pillar-like shapes.


| Setting      | Values       | Description                                                                                                                                                    |
| :----------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Scale**    | 0.10 - 1.00  | The relative size of the cellular subdivision.                                                                                                                 |
| **Chaos**    | 0.10 - 10.00 | The general randomness of the subdivision. Low values create systematic cells; high values cause the cells to widely differ both in shape and number of sides. |
| **Seed**     | 0 - 128000   | The randomization pattern or seed for the node's process.                                                                                                      |
| **Function** |              | The distance function used to determine the cell shape.                                                                                                        |
|              | *Euclidean*  | Euclidean creates sharp, angular cells.                                                                                                                        |
|              | *Manhattan*  | Manhattan creates slightly unnatural multi-angled shapes, which can be quite useful when processed further.                                                    |
|              | *Shepards*   | Shepards provides stark peaks and sinkholes.                                                                                                                   |
|              | *Hybrid*     | Euclidean-Manhattan hybrid creates merges both distancing functions equally.                                                                                   |

### Additional Info

