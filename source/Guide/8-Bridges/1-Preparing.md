---
uid: preparing-bridge
title: Preparing Gaea file for a Bridge
---

Creating your own Gaea recipe is easy. The easiest way is to first create a normal graph in Gaea, using one of the primitives that matches your target application's terrain. For example, a simple @Perlin or @Range node is useful in most cases. Then add the desired nodes to process the terrain. Once the entire graph is complete, create inputs and outputs as defined below, expose properties you need to modify in Houdini, and save the .tor file.

You can utilize a single Gaea node such as Erosion, Stacks, Texture, etc or entire graph networks inside your target application.

### Inputs and Outputs

For each heightfield or mask you want to send from the target application, create a @File node. Similarly, set up an @Output for each heightmap or color map to be sent back to target application. Remember to ensure a unique name for each node's filename variable to avoid crashes or data loss.

### Exposing variables

To expose a node's properties, use `Node Properties > Expose Properties`{.cmd}.

![](/images/ui/automation-expose-menu.png)

In the dialog that comes up, you can check the properties you want to expose and rename the variable name if needed. For example, when using @Erosion, the properties `Duration`, `Strength`, `Downcutting`, and `Inhibition` are useful and can be exposed.

{.WARNING}
> If multiple variables share the same name - even across different nodes - their values will be overwritten. In such a situation, you should rename the variable name to avoid value contamination.

![](/images/ui/automation-expose-dialog.png)

Repeat the process for any other nodes you wish to expose.

You can access all exposed properties from the `Node Properties Menu > Show Exposed Properties`{.cmd} or press `F12`.


### Maintain Scale

To ensure both input and output data retains the same level of fidelity, we strongly encourage using a 32-bit format for heightmaps.

Pick the right scale option in the @build-manager settings that fits with your application's workflow. See @scale for details.

For maximum flexibility, we recommend sending data in a normalized range appropriate to the format. In Gaea's @File node should use the `Use Full Range` option to normalize the incoming data unless the data is already normalized. Select Normalized the output range in the @build-manager as well.

When you receive the data in your application after the build, you must process it as appropriate.