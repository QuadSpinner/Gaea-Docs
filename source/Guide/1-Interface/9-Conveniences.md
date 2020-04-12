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

### Search

When you press `Tab` when the Graph surface is focused, or if you start typing while the context menu for the Graph is open, the Search feature will present itself. Search also shows up if you drag a connection from a port, but drop it in empty space, and then start typing when the node creation menu appears.

By default, it shows the last few nodes that were used. If you start typing, it will give you a list of nodes that match your search.

If you click a search result, the node will be created where your cursor is.

If a node is a selected, then you press `Tab`, and then press a shortcut, or click a node, the desired node will be created and connected (Primary Out to Primary In) to the selected node.

Shortcuts:
- `ENTER` creates the first (or selected) node.
- `Ctrl` + `1` through `9` create the subsequent.

### MultiMix

Select two or more nodes and click the MultiMix button. Alternatively, you can press `F8`. This will instantly create a sequence of Combine nodes to mix the selected nodes together. For more detailed control, you can select two at a time and MultiMix the results.

### Auto Layout

Even the most complicated graphs can be automatically organized. Just press `F4` in the graph.

Pressing `F4` once will layout the graph in a linear pattern. Pressing `F4` again lays out the graph in a waterfall pattern. In the waterfall pattern, Gaea will intelligently try to figure out the junctions in the graph and stagger the subsequence nodes accordingly.



## Toolbox Conveniences

### Favorites

Favorite nodes are shown at the top of the Graph. To add a node to favorites, right-click on the tool in the Toolbox and check **Show in favorites**. To remove a node from favorites, right-click on the tool in the Favorites bar on top of the Graph and uncheck **Show in favorites**. You can also choose to show/hide Favorites bar. Open the preferences dialog from Gaea Main Menu. Under the **Workspace** tab, you can check/uncheck the **Show Favorites in Graph** to show/hide the Favorites bar on top of Graph.

Nodes marked as favorites appear a bit brighter than the other nodes when 

### Learning and Predictive Services

Gaea's internal (and fully local) Predictive Service learns your node creation and connection patterns as you work. When the Quick Create menu shows up (see above), it will attempt to detect if any patterns exist and try to suggest nodes that you are likely to use.

For example, if you find yourself connecting Autolevel to the Flow output of the Erosion node, dragging a connection out from the Flow port and dropping it into empty space on the Graph surface will bring up the Quick Create menu and Autolevel may be one of the suggested nodes.

In the Toolbox's menu, you can select "Show most-used nodes only". This will hide the nodes you don't use frequently from the toolbox, giving you more screen space and making it easier to find the nodes you do use. The other nodes are still available in the Quick Create menu and Search box.



## Node Properties Conveniences

### Flux Markers

When you move the slider, the last 3 positions are marked with little dots in decreasing opacity levels. These handy little guides can be helpful when exploring settings. They reset every time you unselect that node.

### Revert Node and Save State

Unlike undo, which needs to be done per setting, the Revert node feature is a time saving facility added to all nodes. Whenever you select a node, the "state" of that node is saved to memory. If you change several settings and decide you want to go back to what you had, you can just go to the Node Properties menu and select "Revert Node". This will revert the node back to the saved state.

Be careful, when you select another node, the state of the previous node will be forgotten. But if you want to preserve the state for longer periods of time, you can manually select "Save State" in the same menu for any node. Now that node state is saved in memory until you close the file. You can go back and load the saved state anytime.

### Copy/Paste Settings

You can right-click a node to copy its settings. Then right-click another node of the same type and click Paste Settings to apply those settings to that node.

## Build Conveniences

### Get Name from Parent
Sometimes you have many outputs and you have to spend time naming them properly. Then you need to add auxiliary outputs for those such as normals or data maps, and it can become a giant chore to name them all.

The new `Get name from parent` command in the node context menu can get the name of the parent and add the node's own name as a suffix. For example, Slope becomes "Erosion_Slope".

### Export from Cache

Gaea can preview up to 4K. Often you will work in 2K for high definition previews, and want to save out the entire exportable node set at 2K for testing in your DCC application or game engine before firing off a full build. To do this, you run the Build Manager which rebuilds the whole world. But you already have the world built at 2K from your preview!

When your preview resolution and the export resolution are the same, the Build Manager will ask you if you wish to just save the preview cache instead. This will save you time from having to rebuild an already built terrain.

