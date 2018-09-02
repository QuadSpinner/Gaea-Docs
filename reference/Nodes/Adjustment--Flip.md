---
uid: Flip
title: Flip
---

The Flip node flips the terrain horizontally, vertically, or both. It can also invert the X-Y ordering of the individual pixels.

| Setting       | Values          | Description                                         |
| :------------ | :-------------- | :-------------------------------------------------- |
| **Direction** |                 |
|               | *Horizontal*    | Flips the terrain horizontally.                     |
|               | *Vertical*      | Flips the terrain vertically.                       |
|               | *Both*          | Flips the terrain both horizontally and vertically. |
|               | *Inverse Order* | Inverts the X-Y ordering.                           |


### What is X-Y ordering?

Heightfields are stored as grids, with row-priority as the default. Meaning, for a 512 x 512 grid, each pixel is stored as 512 (X) rows of 512 (Y) pixels. When the ordering is inverted, the pixels are reordered as column-first so the grid is created as 512 (Y) columns of 512 (X) pixels.