---
uid: cache
title: Cache Management
---

Gaea uses various forms of caches to speed up processing and build times.

## Session Cache

A session or "soft" cache helps resume your work faster the next time you open the file. It is disabled by default, so you have to opt-in to use it. To enable, open the Baking Menu and enable `Cache graph on close`.

When closing the file, whether by exiting Gaea or switching to a different file, Gaea will save all the processed nodes' cache to file. Next time you open the file, instead of reprocessing all nodes from scratch Gaea will load the session cache to memory.

## Baked Cache

Baking nodes can help save time when editing the graph or building the actual graph. Unlike the session cache, baked cache is permanent. A baked node cannot be edited unless it is unbaked.

To bake, open the Baking Menu and select the resolution you want to use for baking. In most cases, you should select the same resolution as your final build. Once the resolution is set, select the node you wish to build and click `Bake Selected` in the Baking Menu. The selected node, and all dependent nodes (the entire node tree left of the node, aka "ancestors") will be baked.

{.WARNING}
> Changing the resolution AFTER nodes have been baked will invalidate existing bakes.

Nodes can be baked to 8192 x 8192 at most. Higher resolutions will be available in the future.

As portions of your graph are finalized, you can bake them to prevent having to reprocess them repeatedly. When building the final terrain, the @build-swarm will use that cache for those nodes instead of building them. This can significantly speed up build times.

Nodes can be unbaked through the Baking Menu.

### Linchpin Nodes

An added bonus of baking is that it can free up a lot of RAM. When loading a baked cache, Gaea will only load "linchpin nodes". A linchpin node is a baked node that is connected to unbaked nodes. Ancestors of linchpin nodes are not loaded, thereby saving processing power and memory.

`TODO: IMAGE`

Consider this graph. Mountain is connected to Displace and Displace is connected Erosion which will be baked. Erosion is connected to Texture which will not be baked, making Erosion a linchpin node.

Baked nodes that are not loaded can be loaded through the property editor. However, it is recommended to unbake and bake portions of the graph if you wish to modify anything.

## Cache Locations

If your file is `MyFile.tor`, the baked cache will be stored in `\Caches\Hard\MyFile_09cb3a` next to it.

For session caches, all caches are stored in the Central Cache Repository. It will follow the same naming pattern, such as `\Caches\Soft\MyFile_09cb3a`. The root path for the Cache Repository is set in the @Preferences.

The Cache readout in Gaea's status bar will show you the size of the cache. Clicking the readout button gives you options to cleanup old cache data.

{.NOTE}
> The hex code at the end of the cache name is to prevent collision between two files of the same name when using a central repository.