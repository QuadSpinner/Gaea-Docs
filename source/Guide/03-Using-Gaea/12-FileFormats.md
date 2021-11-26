---
title: File Formats
uid: save-formats
section: true
---

## File Formats

Gaea supports all modern (and some legacy) file formats for both flat files and meshes.

#### For Export 

| Format  | 32-bit  | 16-bit  |  8-bit  |
| ------- | :-----: | :-----: | :-----: |
| OpenEXR | &#8226; |         |         |
| TIFF    | &#8226; | &#8226; |         |
| PNG     | &#8226; | &#8226; | &#8226; |
| RAW     | &#8226; | &#8226; |         |
| PSD     |         | &#8226; |

3D Formats
  - Wavefront OBJ (.obj)
  - Autodesk Filmbox (.fbx)
  - Point Cloud (.xyz)

#### For Import

Gaea supports the following formats for importing data:
 - .exr
 - .tif/.tiff
 - .webp/.jpeg
 - .webp
 - .psd
 - .hdr
 - .pfm
 - .r32
 - .raw
 - .bmp

## Gaea's Project Formats

Gaea saves files in the formats mentioned below.

#### .TOR/.TORX file

Gaea terrain projects are saved as a `.TOR` file. All Gaea editions can read this format.

The `.TORX` format is available in the Enterprise Edition only. When saving in this format, Gaea saves the project as an XML file. This is useful for direct manipulation.

#### .RESOURCE file

When using hand drawn nodes such as @Mask, @Draw, or @Islands, the binary data generated will be stored in a `.tor.resource` or `.torx.resource` file. If you have a file called `BigMountain.tor`, for example, the resource file will be called `BigMountain.tor.resource`.

{.WARNING}
> If the `.resource` file for a project is missing, all hand drawn nodes will become empty. When running a build on a project with missing resource, the @build-swarm will throw a warning and exit.

#### .SCULPT file

Erosion Studio projects will be saved as a `.SCULPT` file. These files can be large as they contain the source terrain and additional sculpting data.


## Precision

Gaea stores and processes its heightfields in 32-bit floating points, which is compatible with all professional CGI applications.

#### 32-bit

For practical purposes, exporting as either OpenEXR or TIFF will give you the best results and maximum compatibility with other applications. If you are using a custom pipeline, using R32 or PFM formats may be of more use. See the section below for those formats.

{.TIP}
> If you are saving output from Gaea to bring back to Gaea either in the same or different file, we recommend using the `.r32` or `.pfm` formats for maximum fidelity and efficiency.

#### 16-bit

While displacement/heightfield information requires 32-bit precision for accuracy; color maps, masks, and other secondary data which may have fewer levels of complexity can make use of 16-bit formats, such as PNG. This can help save on disk space as larger worlds will require a lot of storage space. Storing in 16-bit also helps performance.

In fact, if your terrain does not contain many smooth details, you can even export your main displacement as 16-bit.

Game engines, such as Unity, can only import RAW 16-bit (ushort) format terrains.

#### 8-bit

In some cases, for example with black and white masks, you may not need a high level of precision at all. You can use 8-bit PNG output which can increase performance and save disk space.

#### Custom Workflows Precision

If you are using Gaea in a custom workflow, such as automation, you may require the data to be as simple and efficiently readable as possible.

32-bit float (.r32) and 16-bit ushort (.raw) are the simplest formats you can use. It is a simple binary array of `float` (IEEE 754) or `unsigned short`. The file has no header and can be read directly as a binary stream. The files will use Little Endian.

The size of the heightfield should be square root of the byte length divided by the size of the type (4 bytes for `float`, 2 bytes for `ushort`).

The `.r32` format will store values between `0.0f` and `1.0f`. While the `.raw` format will store values between `0` and `65535`.

Both formats are recommended for heightfield (grayscale) data only.
