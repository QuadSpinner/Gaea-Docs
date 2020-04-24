---
uid: nodes
title: Node Workflow
---


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