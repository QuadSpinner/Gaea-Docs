---
uid: houdini
title: Houdini
---
^wip

## Combining the power of Houdini and Gaea

Houdini is the most powerful procedural design platform. Gaea's dedicated terrain processors can augment Houdini's terrain tools to give you the best of both worlds.

You can utilize a single Gaea node such as Erosion, Stacks, Texture, etc or entire graph networks inside Houdini.

## Installing the Bridge

## Preparing the Gaea file

To use Gaea in Houdini, you must pick from one of the pre-made recipes provided with the Game Dev Tools, the QuadSpinner Automation Recipes repository on GitHub, or create your own.

Creating your own Gaea recipe is easy. The easiest way is to first create a normal graph in Gaea, using one of the primitives that matches your Houdini terrain. For example, a simple @Perlin or @Range node is useful in most cases. Then add the desired nodes to process the terrain. Once the entire graph is complete, create inputs and outputs as defined below, expose properties you need to modify in Houdini, and save the .tor file.

### Inputs and Outputs

For each heightfield or mask you want to send from Houdini, create a @File node. Similarly, set up an @Output for each heightmap or color map to be sent back to Houdini. Remember to ensure a unique name for each node's filename variable to avoid crashes or data loss.

### Exposing variables

To expose a node's properties, use `Node Properties` `>` `Expose Properties`.

![](/images/ui/automation-expose-menu.webp)

In the dialog that comes up, you can check the properties you want to expose and rename the variable name if needed. For example, when using @Erosion, the properties `Duration`, `Strength`, `Downcutting`, and `Inhibition` are useful and can be exposed.

{.WARNING}
> If multiple variables share the same name - even across different nodes - their values will be overwritten. In such a situation, you should rename the variable name to avoid value contamination.

![](/images/ui/automation-expose-dialog.webp)

Repeat the process for any other nodes you wish to expose.

You can access all exposed properties from the `Node Properties Menu` `>` `Show Exposed Properties` or press `F12`.

### Testing the scene

## Setting up the Gaea SOP

## Troubleshooting