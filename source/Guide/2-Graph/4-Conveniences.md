---
uid: conveniences
title: Convenience Features
---

Quality of life for the user is the baseline for all we do. Gaea features a large array of unobtrusive (and sometimes even hidden) features that can go a long way towards making your workflow more efficient.

## Node Management

### Quick Create

To create your first node, right-click in the graph and type the name of the node you want to create. Then hit `Enter`. The node will be created at the cursor location. You can also press `TAB` to search for nodes.

![](/images/ui/search-nodes.webp){.ui .image .medium}

Next, rather than setting up the next node similarly and then connecting it manually, you can drag a connection into empty space and use the quick create menu. You can click on a particular node name from the quick create menu, or you can type in a node name which will show the list of matching nodes. Selecting a node from this list connects to it.

The Quick Create menu can also show suggestions based on your previous patterns.

See @learning for information on how Gaea suggests nodes.

### Drop Create

<video controls>
  <source src="/mp4/cnv-drop-connect.mp4" type="video/mp4">
</video>

All graph applications require you to drop the node, connect it manually, and then organize as needed. Gaea does that for you! Just drop the node on another node and they'll be connected and auto-organized. 

Dragging a node from the @toolbox and dropping it on an existing node will automatically connect it to that node's primary output. If another node already exists, the new node will be automatically organized for you.

### Interject Node

**Drop Interject**

<video controls>
  <source src="/mp4/cnv-interject.mp4" type="video/mp4">
</video>

If you hold `Shift` and drop a node on an existing node, the new node will interject itself between the node's all outgoing primary output connections.

**Drag Interject**

<video controls>
  <source src="/mp4/cnv-interject-drag.mp4" type="video/mp4">
</video>

If you hold `Shift` then drag an independent node (not connected to any other node) over a connection and release the mouse, the node will be interject itself between the two nodes of the existing connections.


### Replace Node

Right-click any node, select `Replace Node` and type in the name of another node. The selected node will be replaced with that node. If the connections match, they will be kept with the new node. If any port names don't match, a @Chokepoint will be created to temporarily hold the connection so you can reroute them manually.

### Get Name from Parent
Sometimes you have many outputs and you have to spend time naming them properly. Then you need to add auxiliary outputs for those such as normals or data maps, and it can become a giant chore to name them all.

The new `Get name from parent` command in the node context menu can get the name of the parent and add the node's own name as a suffix. For example, Slope becomes "Erosion_Slope".

## Connection Management

### Out-to-out quick connections

<video controls>
  <source src="/mp4/cnv-out-out.mp4" type="video/mp4">
</video>

When you drag an output connection to another output connection, a @Combine node is created with the two ports serving as the inputs for the Combine node.

### MultiMix

<video controls>
  <source src="/mp4/cnv-multimix.mp4" type="video/mp4">
</video>

Select two or more nodes and click the MultiMix button. Alternatively, you can press `F8`. This will instantly create a sequence of Combine nodes to mix the selected nodes together. For more detailed control, you can select two at a time and MultiMix the results.

### Connect Menu

The Connect menu lets you quickly connect any port to an available portal. Select a node and press `C` to bring up the menu.

<video controls> <source src="/mp4/cnv-portal-connect.mp4" type="video/mp4"></video>

### Disconnect Menu

The Disconnect menu lets you quickly disconnect any port or even remove a portal. Select a node and press `X` to bring up the menu.

<video controls>
  <source src="/mp4/cnv-portal-disconnect.mp4" type="video/mp4">
</video>

## Navigation

Navigating a complex graph can be a tedious process. You can use the following conveniences to make this a lot easier.

### Navigate Menu

The Quick Navigate menu can be brought up by selecting a node and pressing `,`. You can then navigate to any connected nodes, including portals from other graphs.

<video controls>
  <source src="/mp4/cnv-navigate.mp4" type="video/mp4">
</video>


### Node Bookmarks

![](/images/ui/graph-menu-bookmarks.webp){.ui .image .medium}

You can bookmark nodes you find yourself going to frequently. Right-click a node and select `Mark as Favorite`. You can then access all bookmarked nodes from the favorites/bookmarks menu in the graph toolbar. You can also use @shortcuts `1-9` to access the top 9 nodes.


## Auto Layout

Even the most complicated graphs can be automatically organized. Just press `F4` in the graph.

Pressing `F4` once will layout the graph in a linear pattern. Pressing `F4` again lays out the graph in a waterfall pattern. In the waterfall pattern, Gaea will intelligently try to figure out the junctions in the graph and stagger the subsequence nodes accordingly. 

You can layout portions of a graph by selecting the nodes you want to organize. If none are selected, the entire graph will be organized.

{.TIP}
>While Gaea will try to organize the graph as efficiently and tightly as possible, it cannot anticipate all patterns. It is recommended that you apply auto-layout to portions of the graph at a time - especially those with separate concerns or plenty of branching - to prevent your entire graph from becoming organized too tightly.

