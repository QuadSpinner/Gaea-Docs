---
uid: parallel
title: Parallel Processing
---

## Parallel Processing

Some nodes use chunk-based parallel processing, where small chunks of the
image are processed separately on different processor cores to speed up
the process. Once processed, they are blended with their neighbors and
combined into a single terrain.

#### Configure Nodes

All nodes that use Parallel Processing will have the following parameters. 

<table class="ui table blue stackable basic properties-table"><tbody>
<tr><td>Enable</td><td>Toggles parallel processing.</td></tr>
<tr><td>Chunk Size</td><td>The chunk size into which the image is divided for processing.</td></tr>
<tr><td>Edge Blending</td><td>The percentage of blending between the edges of neighboring chunks. Higher values require more memory and processing time.</td></tr>
</tbody></table>


#### Deterministic Output

Some like @Wizard and @Erosion will present it in the form a `Deterministic` checkbox, without chunk parameters.

Due to the nature of these algorithms and parallel processing, the erosion flow may differ slightly each time. To ensure 100% exact results every time, you can turn on the `Deterministic` option. However, this will force Gaea to use a single processor core which will result in slower processing.

You can read more in @erosions.


#### Troubleshooting Grid Artifacts

If you see grid-like artifacts in your output, use higher values for Edge Blending. If that does not help, try increasing Chunk Size. If neither helps, you can disable Parallel Processing. This may result in slower builds, but the result will be accurate and error free.
