---
uid: File
title: File
---

The File node loads any supported image or data file as a terrain. It supports all major file formats, and you can load either a grayscale image as a heightfield, or a RGB color image as a color map.

## A note about scale

In most cases, you can use the `Raw` Scale setting. This will interpret the data within a normal 8, 16, or 32 bit data range. If your uses excessive scale values that go below zero, you may need to use the `Normalized` or `Mapped` mode. If you wish to handle scale manually, you should turn on `Clamp` in @postprocess to ensure data does not go beyond anticipated ranges which may cause other nodes to break.

The `Mapped` mode is mainly used for communicating with other applications in automation scenarios where the incoming and outgoing data must retain a specific number range.