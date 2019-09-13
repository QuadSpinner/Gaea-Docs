---
title: File Formats
uid: file-formats
---

# File Formats in Gaea

Gaea supports all modern (and some legacy) file formats for both flat files and meshes.

- 32-bit
   - OpenEXR (.exr)
   - TIFF (.tif)
   - RAW (.r32)
   - PFM (.pfm)
- 16-bit
   - PNG (.png)
   - RAW (.raw)
   - Photoshop (.psd)
- 8-bit
   - PNG (.png)
- 3D Formats
   - Wavefront OBJ (.obj)
   - Autodesk Filmbox (.fbx)
   - Point Cloud (.xyz)

## Precision

Gaea stores and processes its heightfields in 32-bit floating points, which is compatible with all professional CGI applications.

### 32-bit

For practical purposes, exporting as either OpenEXR or TIFF will give you the best results and maximum compatibility with other applications. If you are using a custom pipeline, using R32 or PFM formats may be of more use. See the section below for those formats.

{.TIP}
> If you are saving output from Gaea to bring back to Gaea either in the same or different file, we recommend using the `.r32` or `.pfm` formats as they will provide maximum fidelity and efficiency.

### 16-bit

While displacement/heightfield information requires 32-bit precision for accuracy, color maps, masks, and other secondary data which may have fewer levels of complexity can make use of 16-bit formats such as PNG. This can help save on disk space as larger worlds will require a lot of storage space. Storing in 16-bit also helps performance.

In fact, if your terrain does not contain many smooth details, you can even export your main displacement as 16-bit.

Game engines such as Unity can only import RAW 16-bit (ushort) format terrains.

### 8-bit

In some cases, for example - black and white masks, you may not need a high level of precision at all. You can use 8-bit PNG output in such situations which can increase performance and save disk space.


## Custom Workflows

If you are using Gaea in a custom workflow, such as automation, you may require the data to be as simple and efficiently readable as possible.

### .R32 32-bit (float) and .RAW 16-bit (ushort)

This is the simplest format you can have. It is a binary format array of `float` (IEEE 754) or `unsigned short`. The file has no header and can be read directly as a binary stream. The files will use Little Endian.

The size of the heightfield should be square root of the byte length divided by the size of the type (4 for `float`, 2 for `ushort`).

The `.R32` format will store values between `0.0f` and `1.0f`. While the `.raw` format will store values between `0` and `65535`.

Both formats are recommended for heightfield (grayscale) data only.

### .PFM 32-bit

The Portable Float Map is [based on the NetPBM format](http://netpbm.sourceforge.net/doc/pfm.html). The file contains 3 lines of ASCII text with Unix style carriage return (`\n`), followed by the binary sequence of floats similar to the .r32 format.

Unlike the RAW formats above, PFM can store color data safely as the header can tell the reader if the data is single channel grayscale or RGB.

Gaea can also read PFM ASCII format data, but is highly unrecommended as it is extremely inefficent. It is provided for compatibility only.