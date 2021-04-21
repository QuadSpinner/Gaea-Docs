#### Parallel Processing

This node uses chunk-based parallel processing where small chunks of the
image are processed separately on different processor cores to speed up
the process. Once processed, they're blended with their neighbors and
combined into a single terrain.

{.TIP}
> If you see grid-like artifacts in your output, use higher values for
> Edge Blending. If that does not help, try increasing Chunk Size. If
> either does not help, you can disable Parallel Processing. This may
> result in slower builds, but the result will be accurate and error
> free.


<table class="ui table blue stackable basic properties-table"><tbody>
<tr><td>Enable</td><td>Toggle parallel processing.</td></tr>
<tr><td>Chunk Size</td><td>The chunk size into which the image is divided forprocessing.</td></tr>
<tr><td>Edge Blending</td><td>The percentage of blending between the edges of neighboring chunks. Higher values require more memory and processing time.</td></tr>
</tbody></table>