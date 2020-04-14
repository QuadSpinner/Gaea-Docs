---
uid: pinning
title: Pinning Nodes
---

## Pin node for focus

Pinning a node locks the preview to that node. When a node is pinned, changes made to the other nodes will force updates to all nodes between that node and the pinned node. This allows you to see the end result of a change.

To a pin, right-click a node and select `Pin`. You can also select the node and press `F`.

The Pinned node can accessed quickly from the Graph Toolbar. It is shown as a green link.

## Pin node as underlay

When viewing 2D masks, Data Maps, or Color nodes the 3D and 2D previews are rendered as flat planes. To see how the same mask or color map would look like on a 3D surface, you have to choose which terrain node to use as the "underlay". In most situations, this will be the last terrain node before you begin your color creation process.

To pin a node as the underlay, right-click the node and select `Pin as Underlay`. You can also select the node and press `G`.

{.WARNING}
> Be mindful when you modify nodes that are before the Underlay. If they are part of the chain that leads up to the Underlay node, then modifying them will cause all the nodes in between to update as well much like normal Pinning. This can make Gaea slow when working in 2K or higher preview resolution.

The Underlay node can accessed quickly from the Graph Toolbar. It is shown as a purple link.