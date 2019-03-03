---
uid: building
title: Building Terrains
---

# Building Terrains

The output from your project must be saved to a file in order to use it elsewhere. To do this, you must build the output. When you build the output, Gaea will create it at your target resolution. This may take a while to build depending on the complexity of your terrain, and the effects used.

<div class="small-image">

![Mark for save](/images/ui/Build-Progress.png)

This image shows the Build Swarm building your terrain project.

Over the course of a complex project, saving and managing the appropriate outputs can become a tedious task. Managing outputs for several different nodes, especially those with multiple outputs like the Erosion node, can make it even worse.

The Build Manager simplifies how builds are saved, organized, and managed for future use.

## Mark for Save

Instead of creating a dedicated "Output" node and then specifying the file to save, you can mark a node for automatic output.

![Mark for save](/images/ui/Build-Mark.png)

To mark a node for saving, right-click the node and select Save. You can also use the Graph Toolbar button. In the @layers-mode you can right-click a layer in the Layers List.

![Mark for save](/images/ui/Build-Marked.png)

</div>
Once a node is marked for saving, it displays this icon underneath the node.


## The Build Manager

![Mark for save](/images/ui/Build-Manager.png)


You can choose the file format to use for all outputs, modify a node's output name by clicking on the node's label, choose unclamped (formerly called "Full Range"), and +1 output (where 512 x 512 becomes 513 x 513 — necessary for some game engines).

You can also use the Build Manager for version control and file organization.


## Build Options

### Build Destination

This is the path where the built output will be saved. By default it is saved in a version controlled path in the Builds repository. You can always enter a normal path directly, or pick from presets in the dropdown.

For additional information see the **Organizing Builds** below.

### Resolution

The output resolution of the build. Higher resolutions give you better detail at the cost of longer processing times.

> [!WARNING]
> 16k and 32k builds are experimental at this stage and will be optimized over the next several builds.

### Format

This dropdown allows you to choose the the format in which your output is saved. All files are 16-bit.

To save any output as a mesh, see @exporting and @Mesher.

### Resample

This option is for builds that need to be taken to Unreal Engine, and is turned off by default. Unreal engine requires particular dimensions for ingesting terrains. To meet Unreal's requirements, Gaea will build the terrain at its own fixed resolutions and then faithfully downsample to the Unreal friendly resolution. 

Pick the nearest Gaea resolution in the main Resolution dropdown, then select the Unreal friendly resolution in the Resample dropdown.

### Color Space

You can choose to save color maps in RGB, sRGB, or scRGB color spaces.

### Ignore Vertical Scaling

The new Output node is the primary way to save your output. It automatically saves the specified file when a full Build is initiated from the Export panel.

By default, it exports Clamped values, but you can choose to export a Full Range map by enabling Full Range in the Output node's properties.

#### What's the difference?

Here you can see the two outputs: Clamped and Full Range. The main difference is that Clamped is limited to the height set in the Terrain Definition, while Full Range ignores both the Base and Height settings, and exports the entire gradient range in its natural form (32-bit floating point).

#### When should I use Full Range?

Most of the time, you won't need to use Full Range. It can be useful in rare cases: when you intend to manually scale the terrain vertically later; or when you want to manually edit or sculpt the terrain in Photoshop, ZBrush or Mudbox and need as much detail as possible.

If you do use the Full Range export, it is best to use the OpenEXR (.exr) format to preserve the values as best as possible.

You can always export a copy with Clamped values, and use that as a guide for vertically resizing the externally edited Full Range output.

### Increase output scale by +1

Some software require heightfields to be one pixel larger than the normal dimension. For example, 4096 is required to be 4097. Check this option to increase the dimensions by one pixel.

This option is ignored when the Resample option is used.

### Save a copy of this .TOR file

Saves a copy of the current .TOR or .TORX file in the build folder.

### Close Gaea UI

The Gaea interface - especially when using high resolution previews - can consume enough RAM to cause an impact on high resolution builds. To conserve memory, you can check this option to close Gaea when the build starts.

### Open folder after build

Check this option to open the build destination folder when the build completes.

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
* `[Timestamp]` Sortable timestamp in YYYY-MM-DD_HH-MM-SS format.
* `[Username]` Your local network identity.
* `[Machine]` Your local network machine name.

So you could create your own path template such as:
```[Builds]\[Filename]\[Timestamp]\[Resolution]\``` — which would create ```~\Documents\Gaea\Builds\EastRiver\2018–06–22_21–55–31\8192\```

or something more specific such as:

```\\00.00.00.00\Team\Terrains\[Username]_[Timestamp]\ ```
 which would create ```\\00.00.00\Team\Terrains\Bob_2018–06–22–55–31\```

### Version Controlling Terrains

Gaea's Build Manager and Build Stack give you low level version control without additional overhead.

The "Save copy of .TOR" option is useful when you want to manage different versions of your actual project file. When turned on, every time your build finishes, a copy of the .tor file in the exact state of that particular build is stored alongside the build output. You can easily go back to any older build state for your file, and save it as new file.

You can also map the folder to almost any modern version control system (Git, Mercurial, Visual Studio Team Services, etc.), or share on a network folder with your team.

***

# Build Swarm
For advanced use, see @build-swarm.