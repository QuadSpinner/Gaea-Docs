---
uid: building
title: Build and Export
related: buildmanager build-swarm scale
---

The output from your project must be saved to a file in order to use it elsewhere. To do this, you must build the output. When you build the output, Gaea will create it at your target resolution. This may take a while to build depending upon the complexity of your terrain and the effects used.

![](/images/ui/Intro-Build.webp)

Over the course of a complex project, saving and managing the appropriate outputs can become a tedious task. Managing outputs for several different nodes, especially those with multiple outputs like the Erosion node, can make it even worse.

The @buildmanager simplifies how builds are saved, organized, and managed for future use.

## Export Options

#### Quick Export: Marking for Export

Instead of creating a dedicated Output node and having to specify the file to save, you can mark a node for automatic output.

Any node can be marked for export by right-clicking a node and selecting `Mark for Export`, or pressing `F3`. When you build the terrain, all nodes marked for export will be saved to file. If a node has more than one output, all outputs will be saved. 

Once a node is marked for export, it displays this icon underneath the node.

By default, the name of the node will be used as the filename. The filename, format, and the outputs/ports to export are modified in the Build Tab. The files are saved in the path set in the Build tab.

#### Output Node

If you prefer direct control over where and how the files are saved, you can use an @Output node. It is also useful when you want to save the same output to multiple formats where you can set up an @Output node per format.

#### Mesher Node

If you wish to export your heightfield as a mesh, you can use the @Mesher instead of @Output. Mesher is the only the way to save the output as a mesh.


## Build Mutations

Gaea provides a mutation facility during build to create multiple variations of the same terrain. You can select up to 99 mutations in the Build Manager. This will run the build once per each mutation where seeds of all nodes are randomized. Doing this gives you a unique terrain in every mutation while still following the core recipe of your graph.


![Build Mutations](/images/ui/mutate1.webp)

![Build Mutations](/images/ui/mutate2.webp)

![Build Mutations](/images/ui/mutate3.webp)

![Build Mutations](/images/ui/mutate4.webp)



{.TIP}
> Each mutation's .tor file is stored with the output, so you can manually tweak a specific mutation if desired.

You can also specify mutations in the command line in the @build-swarm.