---
uid: create-bridge
title: Create a Bridge
---

Gaea can be used as a silent processor from other applications from the command line.

{.WARNING}
> The end-user must have a Professional or Enterprise edition of Gaea.

## Core Concept

The Bridge can be created using any programming language, as long as you meet the following requirements:
- Invoke command lines and wait for process to exit
- Read XML file
- Save as PNG (16-bit), raw 32-bit floats, TIFF (32-bit), or OpenEXR (32-bit)
- Redirect and read StdOut stream (optional)

![](/images/seq/bridge.webp){.ui .image .medium}

Gaea must be installed along with prerequisites (see @installing) for the process to work.

The Gaea Bridge workflow consists of the following steps:
1. App invokes `--nodemap` to get an XML map of available settings in the recipe file.
2. App configures its UI according to the XML map.
3. App saves the input heightfield(s) as files.
4. App invokes `Gaea.Build.exe` while passing automation variable values as arguments including input and output paths.
5. App optionally redirects StdOut stream to read and display status messages.
6. When the process exits, App will read the files saved by Gaea in the output path.

To create a recipe file, follow the instructions in @preparing-bridge.

{.NOTE}
> In the future, file based data transfer will be replaced with shared memory buffers for faster data transmission. At that point, you will be able to send and receive data directly as arrays of 32-bit floats.

## The Process

#### Configuring the Interface

Gaea provides the facility to create an XML mapping file containing the details of all the variables exposed, their type, variable name, friendly name, value limits, and default value.

To produce this XML map, pass the `--nodemap` switch. The `.xml` node map file will be created in the same folder as the `.tor` file being passed to `Gaea.Build.exe`.

```vb
Gaea.Build.exe "C:\Gaea\erosion_automata.tor" --nodemap
```

Here is an example of such a node map.


<script src="https://gist.github.com/daxpandhi/6b33d2382e762595b2e68650472b7eae.js"></script>

Your application should use the XML map to configure the UI for the bridge and present those options to the user.

| Property | Description                                                                                                                                                       |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name     | User-facing name of this setting. This can be used to construct the settings UI on your end.                                                                      |
| Type     | Data type. The options are `int`, `double`, `bool`, `choice`, `in`, and `out`. The last two are of `string` type, and used for specifying input and output paths. |
| Variable | The name of variable to be used in the command line when passing values.                                                                                          |
| Choices  | Comma separated list of choices for `choice` type. This is used for creating dropdown lists with choices.                                                         |
| Min      | The minimum accepted value for this setting. Only available for `int`, `double`, and `choice`.                                                                    |
| Max      | The maximum accepted value for this setting. Only available for `int`, `double`, and `choice`.                                                                    |
| Default  | The default value for this setting. Useful for resetting controls.                                                                                                |


#### Invoking Gaea.Build.exe

When you wish to process the heightfield, save it to one of the formats specified above. Also decide on where you want Gaea to save the output so you can read from those files once finished.

Once the files are saved and the paths are prepared, create a command line string you can pass as arguments.

To modify any variables, use the following command line format: `variablename:value`. All variables must be appended to the command line after any switches such as `--open` or `--savetor`.

Here is a full command line example for the above nodemap:

```vb
Gaea.Build.exe "C:\erosion_automata.tor" --automata --resolution0512 
 fileInput:"Z:\input.webp" fileOutput:"Z:\output.webp" 
 duration:0.518 finedetail:true verticality:2000
```

Unless using specific fixed workflows, it is recommended that the `--resolutionXXXX` argument be passed so Gaea forces the build at the desired resolution. See @build-swarm for the complete list of accepted command line arguments and switches.

#### Reading StdOut

When Gaea.Build.exe is executed, you can redirect its Standard Output to read status messages during the build process. You can use these messages to display progress or messages to your end-user.

Sample messages:
- `Property [name] set to [value].`
- `Invalid value for property [name].`
- `Property [name] not found.`
- `Building [current] / [total]...`
- `> Building [node] / [percent]...`

When a single node requires a long time to build, the progress of that node will be sent with the `>` prefix. You can use this to either hide such messages from your end users, or use it display a specific progress message.

Each individual message will be delimited by a line break character. In most Windows environments, this will be `\r\n`.

## Maintain Scale

To ensure both input and output data retains the same level of fidelity, we strongly encourage using a 32-bit format for heightmaps.

See @scale for details on how Gaea handles scale.

#### Raw Data

In most cases, you will want to use Raw Data which is the default option in the @build-manager. This will bring the data within the `0..1` as exported from your application. The scale will be maintained through Gaea's processing and the output will preserve this range. Any @File nodes used should NOT use the `Use Full Range` option otherwise incoming data would become normalized.

#### Normalized Data 

If you prefer to receive normalized data, select the Normalized option in the @build-manager. Any @File node should also use the `Use Full Range` option to normalize the incoming data unless the data is already normalized.

When you receive the data in your application after the build, you must process it as appropriate.

#### Mapped Data

If you wish to send and receive data (heightfields and masks only) in a specific range, you can choose to use a Custom Range. This can be specified explicitly in @buildmanager or can be passed on-the-fly via the command line.

To use a range of `-1000..1000`, you would supply the following arguments: 

`--range-min:-1000 --range-max:1000`{.val}

## Additional Information

#### Locating Gaea

To initiate a command line build, you must first find the location of Gaea's installation.

Query the following registry key for Gaea installation and configuration details:

`HKEY_CURRENT_USER\SOFTWARE\QuadSpinner\Gaea\1.0`{.val}

| Value     | Description           | Example                                    |
| --------- | --------------------- | ------------------------------------------ |
| (Default) | Installation Location | `C:\Program Files\QuadSpinner\Gaea\`{.val} |
| Version   | Installed Version     | `1.2.0.0`{.val}                            |