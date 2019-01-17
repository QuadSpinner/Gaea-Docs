---
uid: Build-Manager
title: Build Manager
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

To mark a node for saving, right-click the node and select Save. You can also use the Graph Toolbar button. In the @LayersMode you can right-click a layer in the Layers List.

![Mark for save](/images/ui/Build-Marked.png)

</div>
Once a node is marked for saving, it displays this icon underneath the node.


## The Build Manager

Now when you click Build, instead of firing off a build directly, you will see the Build Manager. The Build Manager gives you easy access to crucial output preferences.

![Mark for save](/images/ui/Build-Manager.png)

The node grid shows you all the nodes marked for output. You can temporarily toggle a node by clicking the color circle in the top left corner of the node. This does not affect the build, only the output. This can be useful when you just want to see a few specific outputs, or you need to go back to rebuild an older project for selective output.

When a node has multiple outputs, such as the Erosion and Breaker nodes in this example, you can individually toggle which ports should be saved as files.

You can choose the file format to use for all outputs, modify a node's output name by clicking on the node's label, choose unclamped (formerly called "Full Range"), and +1 output (where 512 x 512 becomes 513 x 513 — necessary for some game engines).

You can also use the Build Manager for version control and file organization.

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


# Build Swarm

The Build Swarm is the command line building engine for Gaea. Whenever a large scale build is needed, Gaea launches the Build Swarm to build the terrain. You can also launch it manually if needed. The Build Swarm can be found in the Gaea installation folder as `Gaea.Build.exe`.

The Build Swarm writes status messages to StdOut and can be monitored remotely if needed. You MUST use the `--silent` argument when capturing StdOut data otherwise it may overload your application and slow down the build itself.

## Command Line Arguments

> [!NOTE]
> Gaea uses double dashes `--` instead of a single dash for command line arguments.

Example Command Line:
```
"C:\Program Files\QuadSpinner\Gaea\Gaea.Build.exe" "C:\Users\Me\Documents\Gaea\MyFile.tor" 
```

`--silent` - Disables all non-essential console output.

`--savetor` - Saves a copy of the current file in the build folder.

`--open` - Opens the build folder after the build is complete.


*The following functionality is scheduled for inclusion soon.*

`--path PATH` - Override the destination path for the build. PATH must be a legal, non-write-protected path supplied in double quotes. Gaea will attempt to create the folder if possible.

`--var(foo, bar)` - Override the value (bar) of a node property (foo) that has been exposed in the file.

`--format EXT` - Override the default output format. Allowed values are PNG, EXR, PSD, HDR, TIF, RAW. Must be entered in CAPITALS.

`--variant N` - Repeats the build and randomizes the seeds of every node for each build to create variations. Variations are stored in own sub-folder named in the pattern of Var1, Var2, etc.

## Batch Building

You can run a batch build by executing a batch (.bat) file as shown below.

```bat
REM Change drive, just to be sure
C: 
REM Go to the Gaea install folder
cd %programfiles%\QuadSpinner\Gaea

SET vars = --silent --savetor

REM List all files to build in quotes
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-001.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-002.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-003.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-004.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-005.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-006.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-007.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-008.tor" vars
Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\ErosionB-009.tor" vars
```

> [!TIP] 
> In the future, you will be able to drag and drop multiple files on Gaea.Build.exe to run a batch build.

## Build Logs

Build Swarm logs are both machine and human readable. All values are tab separated.

### Format

```dsconfig
STARTLOG                // Denotes start of a log
GAEA <VERSION>          // Gaea version stamp

START <TIME>            // Build start time (yyyy-MM-dd HH:mm:ssz)
END <TIME>              // Build end time (yyyy-MM-dd HH:mm:ssz)
TOTAL   <TIME>          // Total time taken (HH:mm:ss.ms)

RESOLUTION  <RES>       // Total build resolution
BUCKET SIZE <RES>       // Tiled build bucket resolution

NODE    <NAME>  <TIME>  // Node name and time taken to build  (HH:mm:ss.ms)

OUTPUT <PATH>           // Build destination directory
ENDLOG                  // Denotes end of the log
```

### Example

```lua
STARTLOG
GAEA	1.0.12.7338

START	2018-12-30 07:29:18Z
END	2018-12-30 07:30:01Z
TOTAL	0:00:37

RESOLUTION	2048x2048
BUCKET SIZE	2048x2048

NODE	Mountain	0:00:00.696
NODE	Displace	0:00:01.12
NODE	Erosion	0:00:07.411
NODE	Convector	0:00:07.72
NODE	Displace	0:00:01.133
NODE	Erosion	0:00:19.097
NODE	Terrace	0:00:00.041
NODE	Terrace	0:00:00.059
NODE	Combine	0:00:00.047

OUTPUT	C:\Users\Dax\Documents\Gaea\Builds\ErosionB-002\2018-12-30_07-29-16
ENDLOG

```