---
uid: Transform
title: Transform
---

Transform allows you to move, rotate, and scale any terrain. The Transform node can be implemented at any point in your graph as it is a post-process effect.

| Setting          | Values          | Description                           |
| :--------------- | :-------------- | :------------------------------------ |
| **X** / **Y**    | 0 - 100%     | The location of the terrain.          |
| **Scale**        | 0 - 100%     | The size of the terrain.              |
| **Angle**        | 0 - 360         | The angle of rotation of the terrain. |
| **Mirror Edges** | On / Off | TODO                           |



> [!TIP]
> If your terrain has a hard edge, try using the `Zero Borders` node before applying the Transform node.
***

<!--examples-->