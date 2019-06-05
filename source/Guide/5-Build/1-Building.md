---
uid: building
title: Building Terrains
---

# Building Terrains

The output from your project must be saved to a file in order to use it elsewhere. To do this, you must build the output. When you build the output, Gaea will create it at your target resolution. This may take a while to build depending on the complexity of your terrain, and the effects used.

<div class="small-image">

![Mark for export](/images/ui/Build-Progress.png)

This image shows the Build Swarm building your terrain project.

Over the course of a complex project, saving and managing the appropriate outputs can become a tedious task. Managing outputs for several different nodes, especially those with multiple outputs like the Erosion node, can make it even worse.

The Build Manager simplifies how builds are saved, organized, and managed for future use.

## Mark for Export

Instead of creating a dedicated "Output" node and then specifying the file to save, you can mark a node for automatic output.

![Mark for export](/images/ui/Build-Mark.png)

To mark a node for export, right-click the node and select `Mark for Export`. You can also use the Graph Toolbar button. In the @layers-mode you can right-click a layer in the Layers List.

![Mark for export](/images/ui/Build-Marked.png)

</div>
Once a node is marked for saving, it displays this icon underneath the node.


## The Build Manager

![Mark for save](/images/ui/Build-Manager.png)


You can choose the file format to use for all outputs, modify a node's output name by clicking on the node's label, choose unclamped (formerly called "Full Range"), and +1 output (where 512 x 512 becomes 513 x 513 — necessary for some game engines).

You can also use the Build Manager for version control and file organization.


# Build Options

## Node List

Any node marked for export shows up in the Build Manager list. You can also add other nodes directly using the **Add Node** button.

Each node will expose its savable filename, the format in which it will export, and the different outputs it exposes.

## Build Destination

This is the path where the built output will be saved. By default it is saved in a version controlled path in the Builds repository. You can always enter a normal path directly, or pick from presets in the dropdown.

For additional information see the **Organizing Builds** below.

## Build Definition

### Resolution

The output resolution of the build. Higher resolutions give you better detail at the cost of longer processing times.

{.WARNING}
> 16k and 32k builds are experimental at this stage and will be optimized over the next several builds.

### Format

This dropdown allows you to choose the the format in which your output is saved. You can also select per-node file formats in the node list. If you change the selection here, all nodes will default to the selection made here.

{.NOTE}
> Mesh Formats are not available globally, but must be chosen per-node.

### Ignore Vertical Scaling

Ignores the vertical scale set in the Terrain Definition popup. Use this if you want to manage the vertical scale manually when using the output, or if you are getting stairstep artifacts in your output.

<!-- #### What's the difference?

Here you can see the two outputs: Clamped and Full Range. The main difference is that Clamped is limited to the height set in the Terrain Definition, while Full Range ignores both the Base and Height settings, and exports the entire gradient range in its natural form (32-bit floating point).

#### When should I use Full Range?

Most of the time, you won't need to use Full Range. It can be useful in rare cases: when you intend to manually scale the terrain vertically later; or when you want to manually edit or sculpt the terrain in Photoshop, ZBrush or Mudbox and need as much detail as possible.

If you do use the Full Range export, it is best to use the OpenEXR (.exr) format to preserve the values as best as possible.

You can always export a copy with Clamped values, and use that as a guide for vertically resizing the externally edited Full Range output. -->

## Tiled Output

{.WARNING}
> Tiled output is experimental at this stage. It will be stabilized in future updates.

## Mesh Options

These options govern the mesh output of nodes in the list that are exporting to a mesh based format such as OBJ, FBX, or XYZ.

### Scale

You can choose from multiple scale options:

- **Normalized**: The vertices are stored between 0.0 and 1.0. This is helpful when you want to rescale it during import in your target application.
- **1 unit = 1 meter**: The mesh is stored in meters as dictated by the terrain definition you have set in Gaea.
- **1 unit = 1 kilometer**: The mesh is stored in kilometers as dictated by the terrain definition you have set in Gaea.

### LOD

Gaea can automatically generate multiple LODs (Level of Detail) models for you in a single pass. 

For example, if you are exporting 4 LODs:
- Base mesh = 2048 vertices
- LOD 1 = 1024 vertices
- LOD 2 = 512 vertices
- LOD 3 = 256 vertices
- LOD 4 = 128 vertices

{.NOTE}
> Each LOD is half of the previous vertex count.

### Vertex Count

This is the vertex count of either dimension. Higher density creates more detailed meshes at the expense of speed and memory.

The total number of vertices is the square of the vertex count specifed. So for example, **512** vertex count is: 512 x 512 = 262,144 vertices.

The estimate of vertex and face count is shown below the settings.

### Force Quads

Force all faces to be quads instead of triangles.

## Additional Options

### Resample

This option is for builds that need to be taken to Unreal Engine, and is turned off by default. Unreal engine requires particular dimensions for ingesting terrains. To meet Unreal's requirements, Gaea will build the terrain at its own fixed resolutions and then faithfully downsample to the Unreal friendly resolution. 

Pick the nearest Gaea resolution in the main Resolution dropdown, then select the Unreal friendly resolution in the Resample dropdown.

### Color Space

You can choose to save color maps in RGB, sRGB, or scRGB color spaces.

### Increase output scale by +1

Some software require heightfields to be one pixel larger than the normal dimension. For example, 4096 is required to be 4097. Check this option to increase the dimensions by one pixel.

This option is ignored when the Resample option is used.


## Build Options

### Save a copy of this .TOR file

Saves a copy of the current .TOR or .TORX file in the build folder.

### Close Gaea UI

The Gaea interface - especially when using high resolution previews - can consume enough RAM to cause an impact on high resolution builds. To conserve memory, you can check this option to close Gaea when the build starts.

### Open folder after build

Check this option to open the build destination folder when the build completes.

### Generate Build Log

Generate a machine and human readable build log in .txt format at the build location.

### Beep when done

Checking this option will sound a beep when the build is complete.

## Version Control and Organization

### Organizing Builds

The Location field in the Build Manager provides two built-in options for storing your builds.

The first option is the central build repository, which is stored in My Documents\Gaea\Builds\[Filename] by default, but can be changed to any location — even to a local network or an online shared folder with OneDrive, Dropbox, GDrive, etc. This can be useful in team situations.

![Mark for save](/images/Build-ExportedFiles.png)

The other option is to have it stored alongside the file in a Builds folder. So if your file is called MyTerrain.tor, a folder called MyTerrain_Builds will be placed next to it.

In both cases, inside the Builds folder, a subfolder with the build timestamp is created. The build output files, a build.info file, and the .tor copy are stored inside this subfolder.

### Example paths

Central Repository:
`C:\Users\Username\Documents\Gaea\Builds\EastRiver\2018–06–22_22–55–31\`

Local File:
`D:\Work\Terrains\EastRiver_Builds\2018–06–22_21–55–31\`

But these are not the only options. You can explicitly specify a location instead of choosing a template, or you can create your own combinations using an absolute path and variables such as:
* `[FileLocation]` Location of the currently open file.
* `[Builds]` Central build repository.
* `[Filename]` Name of the current file without extension.
* `[Resolution]` Current resolution (eg. 8192).
* `[Timestamp]` Sortable timestamp in `yyyy-MM-dd_HH-mm-ss` format.
* `[Username]` Your local network identity.
* `[Machine]` Your local network machine name.
* `[Date]` Current date in `yyyy-MM-dd` format.
* `[Time]` Current time in `HH-mm-ss` format.
* `[+++]` Increments a 3 digit number when an existing path exists.

So you could create your own path template such as:

```[Builds]\[Filename]\[Timestamp]\[Resolution]\``` 

which would create:

```~\Documents\Gaea\Builds\EastRiver\2018–06–22_21–55–31\8192\```

Or something more specific such as:

```\\00.00.00.00\Team\Terrains\[Username]_[Timestamp]\ ```

which would create:

```\\00.00.00\Team\Terrains\Bob_2018–06–22–55–31\```

### Version Controlling Terrains

Gaea's Build Manager and Build Stack give you low level version control without additional overhead.

The "Save copy of .TOR" option is useful when you want to manage different versions of your actual project file. When turned on, every time your build finishes, a copy of the .tor file in the exact state of that particular build is stored alongside the build output. You can easily go back to any older build state for your file, and save it as new file.

You can also map the folder to almost any modern version control system (Git, Mercurial, Visual Studio Team Services, etc.), or share on a network folder with your team.

***

# Build Swarm
For advanced use, see @build-swarm.