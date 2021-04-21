---
uid: build-types
title: Build Types
---

## Building a Project

Once your terrain is ready, it needs to be "built" so it can create the
files you need to use the terrain in other applications. When you create
a terrain graph in Gaea, it is a "recipe". When you build that recipe,
it creates high quality assets using the Gaea Build Engine, which then
converts the data into files.

### Exporting Assets

You will need to export most of your terrain elements as images -
heightfields for 2.5D displacement, grayscale masks, or color textures.

You can also export any heightfield as a mesh or a point cloud using the
@Mesher node.

For more information on exporting assets, see @building.

For the various options for building, see @buildmanager.

## Build Types

Gaea can built your terrain in one of three different ways. Each has its
advantages and disadvantages.

#### Normal Build

![Normal Build: The terrain is built normally as a single process.](/images/diagrams/build-type-normal.png){.ui
.image .large .no-border}

This is the standard build type and works for most cases. With a Normal
Build, Gaea will build the entire terrain in a single pass. If you think
of it in traditional rendering terms, the entire image is a "single
bucket".

Normal Builds provide the highest quality of detail, however they're
limited to a maximum of 8192 x 8192 resolution.

#### Split Build

![Split Build: The terrain is built normally, then split into a uniform grid.](/images/diagrams/build-type-split.png){.ui
.image .large .no-border}

The Split Build behaves just like a Normal Build, except at the end of
the build, the terrain is split into a grid of tiles as defined in the
@buildmanager.

This is useful for taking the tiles into game engines such as Unity and
Unreal. However, the build size is still limited to 8192 x 8192.

#### Tiled Builds

![Tiled Build: The terrain is built as seperated buckets which are then blended together.](/images/diagrams/build-type-tiled.png){.ui
.image .large .no-border}

The Tiled Build splits the terrain into tiles or buckets, and builds
them individually. The end result can either be a set of tiles, or a
reconstituted single image. The major advantage is that this build
method does not suffer the same memory restrictions as the other builds,
and can therefore build terrains at virtually unlimited resolution
sizes.

The limitation of this build type is that each "bucket" while being
[]() built does not interact with its neighbor buckets, so slope
interactions can be limited. The resulting tiles are blended with the
neighbors to bypass this limitation. In most cases, this is enough to
create a seamless look, but in certain cases

