---
uid: conveniences
title: Convenience Features
---

Quality of life for the user is the baseline for all we do. Gaea features a large array of unobtrusive (and sometimes even hidden) features that can go a long way towards making your workflow more efficient.

## Node Conveniences

### Drop Create

All graph applications require you to drop the node, connect it manually, and then organize as needed. Gaea does that for you! Just drop the node on another node and they'll be connected and auto-organized. 

Dragging a node from the @toolbox and dropping it on an existing node will automatically connect it to that node's primary output. If another node already exists, the new node will be automatically organized for you.

### Interject Node

**Drop Interject**

If you hold `Shift` and drop a node on an existing node, the new node will interject itself between the node's all outgoing primary output connections.

**Drag Interject**

If you hold `Shift` then drag an independent node (not connected to any other node) over a connection and release the mouse, the node will be interject itself between the two nodes of the existing connections.

**Interject Portal via Menu**


**Interject Node via Menu**



### Quick Create

Rather than setting up a node and then connecting it, you can drag a connection into empty space and use the quick create menu. You can click on a particular node name from the quick create menu, or you can type in a node name which will show the list of matching nodes. Selecting a node from this list connects to it.

The Quick Create menu can also show suggestions based on your previous patterns.

See below for further details on the Search and Predictive features.

### MultiMix

Select two or more nodes and click the MultiMix button. Alternatively, you can press `F8`. This will instantly create a sequence of Combine nodes to mix the selected nodes together. For more detailed control, you can select two at a time and MultiMix the results.

### Auto Layout

Even the most complicated graphs can be automatically organized. Just press `F4` in the graph.

Pressing `F4` once will layout the graph in a linear pattern. Pressing `F4` again lays out the graph in a waterfall pattern. In the waterfall pattern, Gaea will intelligently try to figure out the junctions in the graph and stagger the subsequence nodes accordingly.


## Node Bookmarks