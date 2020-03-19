---
uid: building
title: Building Terrains
---

The output from your project must be saved to a file in order to use it elsewhere. To do this, you must build the output. When you build the output, Gaea will create it at your target resolution. This may take a while to build depending upon the complexity of your terrain and the effects used.

Over the course of a complex project, saving and managing the appropriate outputs can become a tedious task. Managing outputs for several different nodes, especially those with multiple outputs like the Erosion node, can make it even worse.

The @buildmanager simplifies how builds are saved, organized, and managed for future use.

## Quick Export: Marking for Export

Instead of creating a dedicated Output node and having to specify the file to save, you can mark a node for automatic output.

Any node can be marked for export by right-clicking a node and selecting `Mark for Export`, or pressing `F3`. When you build the terrain, all nodes marked for export will be saved to file. If a node has more than one output, all outputs will be saved. 

Once a node is marked for export, it displays this icon underneath the node.

By default, the name of the node will be used as the filename. The filename, format, and the outputs/ports to export are modified in the Build Tab. The files are saved in the path set in the Build tab.

## Output Node

If you prefer direct control over where and how the files are saved, you can use an @Output node. It is also useful when you want to save the same output to multiple formats where you can set up an @Output node per format.

