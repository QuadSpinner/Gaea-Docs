---
uid: scale
title: Terrain Scale
---

Gaea supports setting an arbitrary scale for your terrains through the new Terrain Definition panel. If you're a casual terrain artist, this won't affect your workflow too much — the defaults will be sufficient. But if you're creating precisely scaled terrains, the Terrain Definition is your best friend.

## Terrain Definition

The Terrain Definition popup is found in the main toolbar.

![](/images/ui/Pop-Definition.png)

You can define the Base and Height of your terrain in meters. Both are counted from sea level (0.0m). The Scale determines the extent of the entire terrain. By default, Gaea terrains are set at sea level (Base: 0m), 2.6km tall (Height: 2,600m), and 5 x 5 square kilometers wide (Scale: 5,000m).

```
// Internally, the terrain scale calculation is performed like this:
(height / scale) - base

```

A height of 2.6km is usually more than enough for most terrains. For perspective, Mt. Everest is 8.8km tall! Choosing an extreme height is not recommended unless you know how to handle the side effects of such tall terrains.

{.NOTE}
> Terrain Definition is non-destructive. You can scale your terrain and the update will be immediately applied without the need to rebuild your terrain. You can change the values as often as you like.
