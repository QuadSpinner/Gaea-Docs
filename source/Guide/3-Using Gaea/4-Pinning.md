---
uid: pinning
title: Pinning Nodes
---

## Pin node for focus

Pinning a node locks the preview to that node. When a node is pinned, changes made to the other nodes will force updates to all nodes between that node and the pinned node. This allows you to see the end result of a change.

To pin a node, right-click it and select `Pin`. You can also select the node and press `F`. Now when you edit any other node before the pinned node, the changes will propagate all the way to the pinned node every time.

The Pinned node can accessed quickly from the Graph Toolbar. It is shown as a green link.

## Pin node as underlay

When viewing 2D masks, Data Maps, or Color nodes the 3D and 2D previews are rendered as flat planes. To see how the same mask or color map would look like on a 3D surface, you have to choose which terrain node to use as the "underlay". In most situations, this will be the last terrain node before you begin your color creation process.

To pin a node as the underlay, right-click the node and select `Pin as Underlay`. You can also select the node and press `G`.

{.WARNING}
> Be mindful when you modify nodes that are before the Underlay. If they are part of the chain that leads up to the Underlay node, then modifying them will cause all the nodes in between to update as well much like normal Pinning. This can make Gaea slow when working in 2K or higher preview resolution.

The Underlay node can accessed quickly from the Graph Toolbar. It is shown as a purple link.


<div class="row">
<div class="col-lg-6">

<figure>

![](/images/ui/underlay_0.jpg){.w-100}

<figcaption>
A color map visualized without an Underlay.
</figcaption>
</figure>
</div>
<div class="col-lg-6">
<figure>

![](/images/ui/underlay_1.jpg){.w-100}

<figcaption>
A color map visualized with the Erosion node marked as Overlay.
</figcaption>
</figure>
</div>
</div>
