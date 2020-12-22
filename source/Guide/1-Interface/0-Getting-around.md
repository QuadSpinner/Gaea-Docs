---
uid: getting-around
title: Getting around
---

![](/images/ui/Intro-All.webp){.w-100}

The Gaea interface is streamlined and minimal. All essential tools are available right within the main interface.

## Viewport

![](/images/ui/Intro-Viewports.webp){.w-100}

The viewports help you visualize your terrain components as you build the graph. There are two viewports, the 3D viewport, and the 2D viewport. The 2D viewport also doubles as an editor surface when using nodes such as @Draw, @Islands, @Mask, etc.

A viewport toolbar gives you access to all the options for both the viewports and the lighting for the terrain.

For further details, see @viewport.

## Graph Surface

![](/images/ui/Intro-Graph.webp){.w-100}

The Graph is the core of Gaea. This is where your take nodes from the Toolbox and implement them on the Graph surface. The toolbox menu allows you change the Toolbox's configuration, such as full size or expert mode.

The Graph can be split into multiple tabs, which are shown above the nodes. The tabs also share space with key graph tools on the far right such as Pinned nodes, the Baking menu, and more.

For further details, see @graph.

## Properties Panel

![](/images/ui/Intro-Properties.webp){.w-100}

The Properties panel lets you modify the nodes on the Graph surface. When you select a node, the properties for it will be visible here.

The Post Process Stack is available at the bottom of the Properties panel. These adjustment options can help you skip having to create additional nodes.

Between the two is the Apply / Lock button. If a node takes a long time to process and has been marked as "Heavy", or you have toggled Auto Apply, changes to the node properties are not applied until you click Apply.

For further details, see @properties.

## Toolbars

![](/images/ui/Intro-Toolbars.webp){.w-100}

Beyond the graph and viewport toolbars, there are other toolbars across the interface.

At the top, the main toolbar is shared with the title bar to give you maximum workspace area. It gives you access to key file commands and lets you change the resolution and quality of the viewport. The main menu is accessed by clicking the "Gaea" title.

On the far right, you can change the scale of the UI. You can also see the version and edition of Gaea you are using.

In the bottom right corner of the interface, there are a few advanced options for caching, and memory optimization. For further details, see @cache.

## Build Tab

![](/images/ui/Intro-Build.webp){.w-100}

Gaea needs to build the terrain to get you the final quality version of the terrain you preview while working in the main interface. The Build Manager tab allows you to configure the terrain build and use different options to initiate the build.

At the bottom, you can select the build destination and fire off the build using the @build-swarm.

For further information, see @buildmanager.

Below the Build Manager controls is the Terrain Definition. This is where you can control the arbitrary scale of your terrain. For further information, see @scale.