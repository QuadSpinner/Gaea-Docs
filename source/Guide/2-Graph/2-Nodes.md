---
uid: nodes
title: Node Workflow
---




## Build Conveniences

### Get Name from Parent
Sometimes you have many outputs and you have to spend time naming them properly. Then you need to add auxiliary outputs for those such as normals or data maps, and it can become a giant chore to name them all.

The new `Get name from parent` command in the node context menu can get the name of the parent and add the node's own name as a suffix. For example, Slope becomes "Erosion_Slope".

### Export from Cache

Gaea can preview up to 4K. Often you will work in 2K for high definition previews, and want to save out the entire exportable node set at 2K for testing in your DCC application or game engine before firing off a full build. To do this, you run the Build Manager which rebuilds the whole world. But you already have the world built at 2K from your preview!

When your preview resolution and the export resolution are the same, the Build Manager will ask you if you wish to just save the preview cache instead. This will save you time from having to rebuild an already built terrain.