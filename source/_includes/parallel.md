|   | <hr> |
| **Enable Parallel Processing** | Enable multi-CPU processing of the effect.                                                                                 |
| **Chunk Size**                 | The chunk size into which the image is divided for processing.                                                             |
| **Edge Blending**              | The percentage of blending between the edges of neighboring chunks. Higher values require more memory and processing time. |

{.TIP} 
> If you see grid-like artifacts in your output, use higher values for Edge Blending. If that does not help, try increasing Chunk Size. If either does not help, you can disable Parallel Processing. This may result in slower builds, but the result will be accurate and error free.