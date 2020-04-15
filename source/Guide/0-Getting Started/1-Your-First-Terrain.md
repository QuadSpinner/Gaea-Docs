---
uid: first-terrain
title: Your first terrain
---

There are three steps you must take to achieve any terrain: create, modify, export.

The *Create* phase requires you to use nodes that are known as Primitives. In normal 3D applications, primitives can include  box, sphere, plane, and so on. In Gaea, a primitive is a basic geological element of a terrain. For example, @Mountain and @Dunes are two such basic elements.

`// TODO: Image`

The *Modify* phase requires you to take the basic primitive shape and make it more natural by adding filters and erosion. An example of this would be adding a @Terrace node to create even stratification on the terrain, and then adding the @Erosion node to add natural erosion.

`// TODO: Image`

The *Export* phase is the easiest. You take the last node in your graph, mark to save by right-clicking the node and selecting Mark to Export, then build it using the @build-manager.

`// TODO: Image`


## Step by Step

1. Start Gaea, and in the @startup select "Graph" as your workflow option.
2. A default scene will open. Select all the nodes by dragging a rectangle over them, and press `Del` to delete them.
3. In the @toolbox, find the @Mountain node. Drag it from the Toolbox and drop it on the main graph area.
4. Once the node is created and selected, on the right hand side, in the @properties Panel you will be able to modify the settings. Each node has its own distinct settings. You can read more about them in the @reference section.
5. Now, the next step is to create a second node - this time we will use @Terrace. Like with the first one, drag and drop the node from the Toolbox and onto the graph surface.
6. To connect the `Output` (the small ports on the right side of the node) of the Mountain node to the `Input` (the small ports on the left side of the node), click and drag a line from the Mountain's Output port to the Terrace's Input port. This will create a solid line between the two nodes, denoting that the two ports are connected.
7. Go to the @properties for the Terrace node and select the Process `Residual`. Play with the settings to see how they work.
8. Once done, drag and create an @Erosion node from the Toolbox and attach the Terrace node's Output port to the Erosion node's Input port.
9. Change the Erosion node's `Downcutting` property to 40%. You can do this by dragging the slider, or clicking the numeric value shown and modifying it by typing. You will notice that the effect of the change is not shown immediately. This is because Erosion is a "heavy" node. To prevent it from freezing your interface while it repeatedly re-processes itself, a heavy node needs to be updated manually. You can do this by clicking the `Apply` button at the bottom. If you find this manual updating is not required for your purposes, you can simply 'Lock' the update by clicking the lock icon next to the Apply button. You can always unlock it afterwards.
10. Your basic terrain is ready. All that remains is to export the assets. To do this you must mark a node for export. In this case, it is the Erosion node. Right-click the Erosion node and select `Mark for export`.
11. In the top toolbar, click the `Build` button. This will bring up the @build-manager. Here you can choose the export format and other settings. For our purposes, we can leave the resolution to `2048 x 2048`. If you are using the Community Edition, change it to `1024 x 1024`.
12. If you wish to export the terrain as a Mesh, in the main list, next to Erosion, select `.obj` in the dropdown. If you wish to export it as a displacement/height map instead, select `.exr`.
13. Once you are satisfied with your settings, select `Start Build`. This will launch the Gaea Build Swarm, Gaea's build engine. In a moment or two, the build will finish and the build folder will open with the final assets.