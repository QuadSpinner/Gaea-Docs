---
uid: Adjustment--Denoise
title: Denoise
---

nDenoise is a general purpose noise removal filter.

A single iteration is appropriate in most cases. For extremely noisy terrains that require many passes, it is recommended that the desired area be masked to protect the rest of the terrain from losing important details.

| Setting      | Values      | Description                                                                                                                                          |
| :----------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Strength** | 0.00 - 1.00 | Lorem                                                                                                                                                |
| **Type**     |             |
|              | *Denoise*   | Denoise systematically cleans up random noise, spikes, and extremely sharp edges.                                                                    |
|              | *Despeckle* | Despeckle cleans areas in which noise is noticeable while leaving complex areas untouched. The noise is reduced without severely affecting contours. |

### Additional Info

