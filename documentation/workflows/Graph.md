---
uid: GraphMode
title: Graph Workflow
---

## Understanding the Advanced Graph
The graph may look complicated, but follows a simple pattern. Each node represents a specific function, and has two types of "ports"; namely, Input ports and Output ports. These ports are used to connect one node to another to create a sequence of functions, which result in a terrain.

There are certain nodes that may not have both port types, or may have special ports specific to that node. For a better understanding of those nodes, please see the documentation for those specific nodes under `Reference`.

---

## Masking
Masking is a very important part of creating sophisticated terrains. By default, when you apply an effect or process on a terrain, it is applied uniformly across the entire surface. By using the Mask port, you can contain the effect in a specific area.

You can use any shape/terrain to mask a node, or you can draw it with Fluent Masking.

### Fluent Masking
Fluent Masking allows you to paint a mask on your terrain.

To create a Fluent Mask, click the Fluent Mask button in the node's `Properties toolbar`. This will enable the Fluent Mask mode, and give you a small masking toolbar to control the size and intensity of your brush stroke. 

You can paint on the terrain like you would in any paint program. Holding down the `ALT` key will erase the stroke.

Once you are finished, click the "End Masking" button in the toolbar to commit the mask.

---

## Managing Nodes
When a graph becomes large, there are many ways you can manage nodes for specific purposes. The options below are available through a keyboard shortcut or from the context menu of the node by right-click.

### Bypass
Bypassing a node (press `B`) keeps it in the graph, and maintains its relationships, but it is not included in the processing. This is very useful for experimentation.

### Pinned Preview
Pinning a preview (press `F`) is a convenient way to see the end-result of a chain of nodes. When a node is pinned, you can move to other nodes and see their properties; however, the visual is only that of the pinned node. 

If the pinned node is in the chain of nodes for which you are modifying properties, you will see the effect those changes have on the pinned node without having to move your focus.

If you pin another node, the current pinned node is released. If you pin the same node again, it will release the pin.

### Pinned Visual
Pinning the visual (press `G`) is the same as a pinned preview, but it only works for Color nodes. When you fix the visual and move between different color production nodes, the color texture will change in concert with the node you select. However, the base heightfield upon which the texture is applied will be the Fixed Visual. If you move to a non-color node, it will show you its default preview.

### Mark for Save
When a node is marked for save (press `L`), it will emit the output as a file when the terrain is built. Any nodes that are marked for save will be available in the Build Manager.

See the article `Building` for details.

---

## Using Convenience Tools
### Drop Behavior
Drop a node on a connection to have it interject itself between two nodes. Drop it on another node to have it be parented to that node. If another sibling node exists, the new node will be organized automatically.

Alternatively, you can drag an unconnected node, that already exists, on to a connection and it will interject itself.

### Auto Layout
Even the most complicated graphs can be automatically organized. Just press `F4` in the graph.

Pressing `F4` once will layout the graph in a linear pattern. Pressing `F4` again lays out the graph in a waterfall pattern. In the waterfall pattern, Gaea will intelligently try to figure out the junctions in the graph and stagger the subsequence nodes accordingly.

### Quick Create Node
Rather than setting up a node and then connecting it, you can drag a connection into empty space and use the quick create menu.

### Connect to Connection
Drop a connection on another connection to quickly connect to the same source node.

### MultiMix
Select two or more nodes, and click the MultiMix button. This will instantly create a sequence of Combine nodes to mix the selected nodes together. For more detailed control, you can select two at a time and MultiMix the results.
