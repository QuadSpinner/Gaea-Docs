---
uid: Flow
title: Flow
---

The Flow map can be used to create flow data at any point in the graph, rather than relying on an Erosion node output. It simulates rainfall and water accumulation on the terrain.

| Setting               | Values   | Description                                                                                                                                                                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rain Cycles**       | 1 - 200  | The number of rain cycles to calculate. Smaller values create small, detailed flows, while larger values create stronger, wider flows.                                                                                        |
| **Constant Rainfall** | On / Off | When enabled, keeps simulating rainfall beyond the rain cycles to create consistent rainfall values. When disabled, the rainfall tapers off as it nears the end of the cycles creating a weighted average amount of rainfall. |


> [!TIP] 
> There are advantages to both Constant Rainfall options. Average rainfall can be used to highlight stronger flow areas, while Constant rainfall can be used to highlight all flow areas. Combining both can be useful for texture creation.






