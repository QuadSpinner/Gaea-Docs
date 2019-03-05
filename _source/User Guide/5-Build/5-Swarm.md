---
title: Build Swarm
uid: build-swarm
---

# Build Swarm

> [!WARNING]
> Using the Build Swarm manually or through automation is recommended for advanced users only.

The Build Swarm is the command line building engine for Gaea. Whenever a large scale build is needed, Gaea launches the Build Swarm to build the terrain. You can also launch it manually if needed. The Build Swarm can be found in the Gaea installation folder as `Gaea.Build.exe`.

The Build Swarm writes status messages to StdOut and can be monitored remotely if needed. You MUST use the `--silent` argument when capturing StdOut data otherwise it may overload your application and slow down the build itself.

## Command Line Arguments

> [!NOTE]
> Gaea uses double dashes `--` instead of a single dash for command line arguments.
> For paths, always encapsulate them in double quotes to avoid path truncation.

Example Command Line:
```vb
"C:\Program Files\QuadSpinner\Gaea\Gaea.Build.exe" "C:\Users\Me\Documents\Gaea\MyFile.tor" 
```

`--silent` - Disables all non-essential console output.

`--savetor` - Saves a copy of the current file in the build folder.

`--open` - Opens the build folder after the build is complete.

`--beep` - Play a short beep at the end of a build.


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
GAEA    <VERSION>          // Gaea version stamp

START   <TIME>            // Build start time (yyyy-MM-dd HH:mm:ssz)
END     <TIME>              // Build end time (yyyy-MM-dd HH:mm:ssz)
TOTAL   <TIME>          // Total time taken (HH:mm:ss.ms)

RESOLUTION  <RES>       // Total build resolution
BUCKET SIZE <RES>       // Tiled build bucket resolution

NODE    <NAME>  <TIME>  // Node name and time taken to build  (HH:mm:ss.ms)

OUTPUT  <PATH>           // Build destination directory
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
NODE	Displace	0:00:01.133
NODE	Erosion	0:00:19.097
NODE	Terrace	0:00:00.041
NODE	Terrace	0:00:00.059
NODE	Combine	0:00:00.047

OUTPUT	C:\Users\Me\Documents\Gaea\Builds\ErosionB-002\2018-12-30_07-29-16
ENDLOG

```