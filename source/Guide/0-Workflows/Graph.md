---
uid: graph-mode
title: Graph Workflow
---

## Understanding the Advanced Graph
The graph may look complicated, but follows a simple pattern. Each node represents a specific function, and has two types of "ports"; namely, Input ports and Output ports. These ports are used to connect one node to another to create a sequence of functions, which result in a terrain.

There are certain nodes that may not have both port types, or that may have special ports specific to that node. For a better understanding of those nodes, please see the documentation for those specific nodes under `Reference`.

---

## Masking
Masking is a very important part of creating sophisticated terrains. By default, when you apply an effect or process on a terrain, it is applied uniformly across the entire surface. By using the Mask port, you can contain the effect in a specific area.

You can use any shape/terrain to mask a node, or you can draw it with @Mask

---

## Managing Nodes
When a graph becomes large, there are many ways you can manage nodes for specific purposes. The options below are available through a keyboard shortcut or from the context menu of the node by right-click.

### Bypass
Bypassing a node (press `B`) keeps it in the graph and maintains its relationships, but does not include it in the processing. This is very useful for experimentation.

### Pinned Preview
Pinning a preview (press `F`) is a convenient way to see the end-result of a chain of nodes. When a node is pinned, you can move to other nodes and see their properties; however, the visual is only that of the pinned node. 

If the pinned node is in the chain of nodes for which you are modifying properties, you will see the effect those changes have on the pinned node without having to move your focus.

If you pin another node, the current pinned node is released. If you pin the same node again, it will release the pin.

### Pinned Visual
Pinning the visual (press `G`) is the same as a pinned preview, but it only works for Color nodes. When you fix the visual and move between different color production nodes, the color texture will change in concert with the node you select. However, the base heightfield upon which the texture is applied will be the Fixed Visual. If you move to a non-color node, it will show you its default preview.

### Mark for Export
When a node is marked for export (press `F3`), it will emit the output as a file when the terrain is built. Any nodes that are marked for export will be available in the Build Manager.

See the article `Building` for details.

---
