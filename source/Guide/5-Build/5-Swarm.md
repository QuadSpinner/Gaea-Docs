---
title: Build Swarm
uid: build-swarm
---

# Build Swarm

{.WARNING}
> Using the Build Swarm manually or through automation is recommended for advanced users only.

The Build Swarm is the command line building engine for Gaea. Whenever a large scale build is needed, Gaea launches the Build Swarm to build the terrain. You can also launch it manually if needed. The Build Swarm can be found in the Gaea installation folder as `Gaea.Build.exe`.

The Build Swarm writes status messages to StdOut and can be monitored remotely if needed. You MUST use the `--silent` argument when capturing StdOut data otherwise it may overload your application and slow down the build itself.

## Command Line Arguments

{.NOTE}
> Gaea uses double dashes `--` instead of a single dash for command line arguments.
> For paths, always encapsulate them in double quotes to avoid path truncation.

Simple example of a command line build:
```vb
"C:\Program Files\QuadSpinner\Gaea\Gaea.Build.exe" "C:\Users\Me\Documents\Gaea\MyFile.tor" 
```

`--silent` - Disables all non-essential console output.

`--savetor` - Saves a copy of the current file in the build folder.

`--open` - Opens the build folder after the build is complete.

`--close` - Immediately close the window after build is complete. Disables the 3 second wait timer.

`--beep` - Play a short beep at the end of a build.

`--unclamped` - Forces the build to use Natural Elevation. See @building

`--forcescale` - Forces the build to use force Full Range scaling. See @building.

`--mutate##` - Repeats the build and randomizes the seeds of every node for each build to create variations. Valid options for the `##` portion are numbers from 1 to 99. See @variations.

`--nodemap` - Creates an XML node map file for any exposed properties.

`--resolution####` - Sets the resolution of the build. Valid options for the `####` portion are 512, 1024, 2048, 4096, and 8192.

`var:value` - Sets the 'value' property of the 'var' exposed node property. See @automation for details. Any such variable arguments must come after `--` switches.

Complex example fo a command line build automation:
```vb
Z:\Git\Gaea\Gaea\Distribution\Obfuscated\Gaea.Build.exe "C:\Users\Dax\Documents\Gaea\sidefx_erosion_automata.tor" --silent --resolution0512 filein:"Z:\WM1.png" fileout:"Z:\WM_out.png" duration:0.518 rocksoftness:0.271 strength:0.184 inhibition:1.0 baselevel:0.0 realscale:true featurescale:2000 seed:0 aggressivemode:true
```

{.NOTE}
> You must have the Professional or Enterprise edition to take advantage of automation features.

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

{.TIP} 
> In the future, you will be able to drag and drop multiple files on Gaea.Build.exe to run a batch build.

## Build Logs

Build Swarm logs are both machine and human readable. All values are tab separated.

### Format

```dsconfig
STARTLOG                // Denotes start of a log
GAEA    <VERSION>       // Gaea version stamp

START   <TIME>          // Build start time (yyyy-MM-dd HH:mm:ssz)
END     <TIME>          // Build end time (yyyy-MM-dd HH:mm:ssz)
TOTAL   <TIME>          // Total time taken (HH:mm:ss.ms)

RESOLUTION  <RES>       // Total build resolution
BUCKET SIZE <RES>       // Tiled build bucket resolution

NODE    <NAME>  <TIME>  // Node name and time taken to build  (HH:mm:ss.ms)

OUTPUT  <PATH>          // Build destination directory
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