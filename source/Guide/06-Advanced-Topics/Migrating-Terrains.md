---
uid: migrating
title: Migrating Terrains
---

## Compatibility in Gaea 1.3

Gaea 1.3 are files are not backward compatible: this means a file created in Gaea 1.3 will not open in Gaea 1.2.

Gaea 1.2 files are partially forward compatible with Gaea 1.3: this means that some files created in Gaea 1.2 can open in Gaea 1.3.

#### Breaking Changes

Gaea 1.3 introduced a few breaking changes to existing nodes.

- BiasGain node retired.
- Biome node retired.
- Channels mode in Igneous has been retired.
- Contrast node retired
- Details node reworked
- Draw node retired. Use Mask instead.
- Dunes v3 reworked for better shapes
- HSL node retired.
- Mixer node retired.
- Poisson noise removed across all nodes.
- Rocks node has been retired.
- RockSlide node has been retired.
- Sand reworked to create better, realistic shapes.
- SatMaps legacy color library removed.
- Some older Primitives may not work exactly.
- Subterrace node retired.
- Volcano mode retired in Crater. Use Impact crater (see Quickstart).

## Migrating to Gaea 1.3

If your Gaea 1.2 file was affected by any of the breaking changes mentoned above, you may need to use one of these workarounds.

{.NOTE}
> We do not recommend upgrading from Gaea 1.2 to 1.3 in the middle of a project. If you choose to do so, please read this page carefully and weigh your options before proceeding.

#### Preparation

First, we must prepare the file and safeguard it from permanent impact. It is highly recommended that you keep a backup of the entire file as well the baked Cache folder and a `.tor.resource` file if they exist.

#### Node has changed

If the node in question has changed between 1.2 and 1.3, you may get a different shape but your node itself will still be there and work in 1.3. If you need to retain the shape then you can bake the node(s) at your desired resolution. Baked data is forward and backward compatible between Gaea 1.2 and Gaea 1.3.

After baking, you can safely open the file in Gaea 1.3 and even allow Gaea to upgrade the nodes. The baked cache will ignore any changed settings.

#### Node has been retired

If a node has been removed, Gaea 1.3 may still allow you to have it in your terrain. Any such obsolete nodes can be used when coming from an old file. However, we recommend migrating away from those nodes as soon as possible as future versions may not fully support them.

#### Node has been removed completely

Gaea 1.2 retired some old and obsolete nodes from Gaea 1.0 and 1.1 but kept them in for compatibility for existing projects. Gaea 1.3 may remove some of those old nodes such as Biome, Rocks, and Rockslide.

If a node can not open in Gaea 1.3 at all, the only way to preserve its data and use it projects within Gaea 1.3 is to export those nodes as `.r32` format with Range set to `Raw` in the @buildmanager.

You can then import those files in Gaea 1.3 using the File node.

## Side-by-Side Installation

Like with all Gaea installations, you can install Gaea 1.2 and 1.3 side-by-side in case you wish to use the old version for old files, and start using Gaea 1.3 for new projects.

See the section "Creating a portable installation" in @installing. You can create a portable version of Gaea 1.2 before installing Gaea 1.3, and then install Gaea 1.3 as a fresh installation to a different folder.