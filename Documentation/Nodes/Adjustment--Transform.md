Transform allows you to move, rotate, and scale any terrain. The Transform node can be implemented at any point in your graph as it is a post-process effect.

| Setting       | Values      | Description                           |
| :------------ | :---------- | :------------------------------------ |
| **X** / **Y** | 0.00 - 1.00 | The location of the terrain.          |
| **Scale**     | 0.00 - 1.00 | The size of the terrain.              |
| **Angle**     | 0 - 360     | The angle of rotation of the terrain. |


### Additional Info

If your terrain has a hard edge, try using the `Zero Borders` node before applying the Transform node.