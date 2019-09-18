---
Title: Baking Nodes
uid: baking
---

# What is baking?

Baking, in Gaea's context, means building a node to a specific high resolution and then storing it in a lock or "baked" form. A baked node can display previews at higher resolution than your normal preview, while allowing you to work with the current lower resolution previews for the rest of the graph.

It is always preferable to see the viewport previews at higher resolution so you can discern finer detail and resolution-dependent shapes. However, keeping your previews at 2K or 4K can be slow especially when working with large graphs.

![Graph Baker](/images/ui/Baker.png)

When a part of the graph is finalized, and you do not anticipate any changes - even temporarily - you can bake that part of the graph to prevent it from being reprocessed when the file is loaded or the nodes are refreshed. If you select a high resolution for the baking, the baked preview will be stored at that resolution while the rest of the unbaked nodes are shown at the current preview resolution.

Once further nodes are finalized, you can bake them too.

## Baking Options

The Graph Baker dialog gives you two baking options: the bake resolution and the bake destination; namely, Memory and File.

**Resolution**

This is the resolution at which the nodes are baked. It can be the same as the preview resolution or different.

If your final build resolution and bake resolution are the same, Gaea's build engine will use the cache instead of processing. This can boost performance significantly, especially when you are rebuilding a file frequently. If you change the bake resolution in a subsequent bake, any ancestor nodes (those connected on the left side of the target node) that are already baked may be rebaked to match the new resolution.

**Destination**

This is the method by which bakes are stored and used.
- **Bake to Memory**: Temporary bake to RAM for this session only. All bakes are lost when closing file.
- **Bake to File**: Bakes are preserved until the nodes are manually unlocked/unbaked. File bakes can be transported as they are stored in a CACHE folder next to the .tor file.

Your RAM is still used when you bake to file, but the added benefit is that it is not temporary. You can close your file for any length of time, come back, and have your nodes pre-built and waiting for you.

