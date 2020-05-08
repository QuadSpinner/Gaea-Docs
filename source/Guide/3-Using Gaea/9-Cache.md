---
uid: cache
title: Baking and Caching
---

Gaea uses various forms of baked caches to speed up processing and build times.

## What is baking?

Baking, in Gaea's context, means building a node to a specific high resolution and then storing it in a locked or "baked" form. A baked node can display previews at higher resolution than your normal preview, while allowing you to work with the current lower resolution previews for the rest of the graph.

It is always preferable to see the viewport previews at higher resolution so you can discern finer detail and resolution-dependent shapes. However, keeping your previews at 2K or 4K can be slow, especially when working with large graphs.

When a part of the graph is finalized and you do not anticipate any changes - even temporarily, you can bake that part of the graph to prevent it from being reprocessed when the file is loaded or the nodes are refreshed. If you select a high resolution for the baking, the baked preview will be stored at that resolution while the rest of the unbaked nodes are shown at the current preview resolution.

Once further nodes are finalized, you can bake those too.

## Session Cache

A session or "soft" cache helps resume your work faster the next time you open the file. It is disabled by default, so you have to opt-in to use it. To enable, open the Baking Menu and enable `Cache graph on close`.

When closing the file, whether by exiting Gaea or switching to a different file, Gaea will save all the processed nodes' cache to file. Next time you open the file, instead of reprocessing all nodes from scratch, Gaea will load the session cache to memory.

{.TIP}
> For better performance, use a solid state drive for your cache location.

## Baked Cache

Baking nodes can help save time when editing the graph or building the actual graph. Unlike the session cache, baked cache is permanent. A baked node cannot be edited unless it is unbaked.

To bake, open the Baking Menu and select the resolution you want to use for baking. In most cases, you should select the same resolution as your final build. Once the resolution is set, select the node you wish to build and click `Bake Selected` in the Baking Menu. The selected node and all dependent nodes (the entire node tree left of the node, aka "ancestors") will be baked.

{.WARNING}
> Changing the resolution AFTER nodes have been baked will invalidate existing bakes.

Nodes can be baked to a maximum of 8192 x 8192. Higher resolutions will be available in the future.

As portions of your graph are finalized, you can bake them to prevent having to reprocess them repeatedly. When building the final terrain, the @build-swarm will use that cache for those nodes instead of building them. This can significantly speed up build times.

Nodes can be unbaked through the Baking Menu.

### Linchpin Nodes

An added bonus of baking is that it can free up a lot of RAM. When loading a baked cache, Gaea will only load "linchpin nodes". A linchpin node is a baked node that is connected to unbaked nodes. Ancestors of linchpin nodes are not loaded, thereby saving processing power and memory.

`TODO: IMAGE`

Consider this graph. Mountain is connected to Displace, and Displace is connected Erosion, which will be baked. Erosion is connected to Texture, which will not be baked, making Erosion a linchpin node.

Baked nodes that are not loaded can be loaded through the property editor. However, if you wish to modify anything, it is recommended to unbake and bake portions of the graph.

## Cache Locations

If your file is `MyFile.tor`, the baked cache will be stored in `\Caches\Hard\MyFile_09cb3a` next to it.

For session caches, all caches are stored in the Central Cache Repository. It will follow the same naming pattern, such as `\Caches\Soft\MyFile_09cb3a`. The root path for the Cache Repository is set in the @preferences.

The Cache readout in Gaea's status bar will show you the size of the cache. Clicking the readout button gives you options to cleanup old cache data.

{.NOTE}
> The hex code at the end of the cache name prevents collisions between two files of the same name when using a central repository.
