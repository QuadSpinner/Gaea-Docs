---
title: Build Swarm
uid: build-swarm
---

The Build Swarm is the command line building engine for Gaea. Whenever a large scale build is needed, Gaea launches the Build Swarm to build the terrain. You can also launch it manually if needed. The Build Swarm can be found in the Gaea installation folder as `Gaea.Build.exe`.

The Build Swarm writes status messages to StdOut and can be monitored remotely if needed. You MUST use the `--silent` argument when capturing StdOut data otherwise it may overload your application and slow down the build itself.

{.WARNING}
> Using the Build Swarm manually or through automation is recommended for advanced users only.

## Command Line Arguments

{.NOTE}
> Gaea uses double dashes `--` instead of a single dash for command line arguments.
> For paths, always encapsulate them in double quotes to avoid path truncation.

Simple example of a command line build:
```vb
Gaea.Build.exe "C:\Users\Me\Documents\Gaea\MyFile.tor" 
```

### Modes

`--silent` 

**Silent Mode** disables all console output. This is useful for batch or unattended builds where you do not need visual readouts for progress or build information.


`--automata` or `--automation` 

**Automation Mode** is used when automating Gaea from another application. The output is limited to simple status messages which can be read by another software and displayed to end users as needed. For more information on how to use Gaea from other applications, see @create-bridge.


### Management Switches

| Switch       | Description                                                |
| :----------- | :--------------------------------------------------------- |
| `--savetor`  | Saves a copy of the current file in the build folder.      |
| `--buildlog` | Saves the build log to `buildlog.txt` in the build folder. |
| `--open`     | Opens the build folder after the build is complete.        |
| `--close`    | Immediately closes the window after build is complete.     |
| `--beep`     | Plays a short beep at the end of a build.                  |

### Build Modification Switches

| Switch             | Description                                                                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--unclamped`      | Forces the build to use Natural Elevation. See @scale.                                                                                                                          |
| `--forcescale`     | Forces the build to use force Full Range scaling. See @scale.                                                                                                                   |
| `--mutate##`       | Repeats the build and randomizes the seeds of every node to create variations with each build. <br> Valid options for the `##` portion are numbers from 1 to 99. See @building. |
| `--nodemap`        | Creates an XML node map file for any exposed properties.                                                                                                                        |
| `--resolution####` | Sets the resolution of the build. <br> Valid options for the `####` portion are 512, 1024, 2048, 4096, and 8192.                                                                |
| `var:value`        | Sets the 'value' property of the 'var' exposed node property. <br> See @automation for details. Any such variable arguments must come after all switches.                       |

Complex example of a command line build automation:
```vb
Gaea.Build.exe 
 "C:\Users\Documents\Gaea\sidefx_erosion_automata.tor" 
 --silent 
 --resolution0512 
 filein:"Z:\mountain.exr"  
 fileout:"Z:\mountain_out.exr" 
 duration:0.518 
 rocksoftness:0.271 
 strength:0.184 
 inhibition:1.0 
 baselevel:0.0 
 realscale:true 
 featurescale:2000 
 seed:0 
 aggressivemode:true
```

See @automation for details.

## Batch Building

You can run a batch build by executing a batch (.bat) file as shown below.

```bat
REM Change drive, just to be sure
C: 
REM Go to the Gaea install folder
cd %programfiles%\QuadSpinner\Gaea

SET vars = --silent --savetor

REM List all files to build in quotes
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-001.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-002.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-003.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-004.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-005.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-006.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-007.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-008.tor" vars
Gaea.Build.exe "C:\Users\Documents\Gaea\ErosionB-009.tor" vars
```

{.TIP} 
> In the future, you will be able to drag and drop multiple files on Gaea.Build.exe to run a batch build.

## Build Logs

Build Swarm logs are both machine and human readable. All values are tab separated.

```vb
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
