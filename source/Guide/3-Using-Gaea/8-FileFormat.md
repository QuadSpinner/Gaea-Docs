---
uid: file-format
title: Gaea File Format
---

Gaea saves files in the following formats:
- .TOR file
- .TORX file
- .RESOURCE file
- .SCULPT file


## .TOR/.TORX file

Gaea terrain projects are saved as a `.TOR` file. All Gaea editions can read this format.

The `.TORX` format is available in the Enterprise Edition only. When saving in this format, Gaea saves the project as an XML file. This is useful for direct manipulation.

## .RESOURCE file

When using hand drawn nodes such as @Mask, @Draw, or @Islands, the binary data generated will be stored in a `.tor.resource` or `.torx.resource` file. So if you have a file called `BigMountain.tor`, the resource file will be called `BigMountain.tor.resource`.

{.WARNING}
> If the `.resource` file for a project is missing, all hand drawn nodes will become empty. When running a build on a project with missing resource, the @build-swarm will throw a warning and exit.


## .SCULPT file

Erosion Studio projects will be saved as a `.SCULPT` file. 
