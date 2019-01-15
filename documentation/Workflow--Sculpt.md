---
uid: SculptMode
title: Sculpt Workflow
---

## Understanding Directed Erosion
Directed Erosion works in its own "Sculpt mode". In this example, we have a simple setup at 512 x 512 preview resolution. When you add the Directed Erosion node, you will notice it has its own independent resolution. In most cases, this should be the final output resolution. 

Directed Erosion is intended for fine detailing, and works at an independent resolution from the preview and final build resolutions. This Sculpt Resolution can be upscaled or downscaled as needed.

## The Pros and Cons of Directed Erosion

## Working in 1:1 Resolution
In an effort to prevent memory excesses, the Sculpt mode will only show a 2048 x 2048 area. While the mini map in the sidebar let's you navigate the entire terrain, you can only see a 2K area at a time in the viewport.

Regardless of your target size, Directed Erosion's strokes are always processed at the same speed, whether at 2K or 32K!

## Erosion Tools
The Erosion Tools become available when you enter the Sculpt mode. This floating window lets you select an erosion tool, modify its setting, and choose an erosion mode.

Each erosion tool creates a different effect. Some have secondary variations.
- **LandBreaker**- general, all purpose erosive breakdown.
- **Flowlines** - creates Breaker style broad flow lines.
- **Soil** - soil deposit tool. Great with Infinite Flow.
- **WideFlow** - creates wide, long flows.
- **Carver** - strong, rock carving. Use sparingly!
- **Gullies** - create gentle, flowing gullies.
- **Pockmarks** - creates small impact holes. Use for detailing.
- **Rocks** - creates rock flows. Great with Infinite Flow.
- **RoughFlow**- chaotic soil/rock flows.
- **Roughness**- detailing tool to roughen surfaces.
- **Scratch** - detailing tool to create superficial scratches.
- **Sedimentary** - strong soil flows. 

### Properties
While properties differ between some tools, there is a general pattern:

- **Size** - the size of your tool's impact area. Note that this is the impact area, where the effect begins. However, if your tool's effect generates erosive flows, these flows will go beyond the impact area. (That's the beauty of Directed Erosion - its not just simple masking.)
- **Duration**- this is the duration of the effect simulation. Be cautious when using long duration values as they can take quite some time. Get a feel for the tools before modifying this value too much.
- **Power** - this is the strength of the erosion simulation. In most cases, you should leave it as-is. When using Infinite Flow, you can increase this value without too much penalty. In Normal or Erosive modes, it can shatter the terrain and create bad debris artifacts.
- **Flow Distance** - this is how far erosive flows should reach beyond the impact area.  The longer the flow, the more processing it will require.
- **Soil vs Rocks** - the granularity of the erosive material. Low values create soft soil; high values create rocks and boulders.

### Erosion Mode

- **Normal Flow** - this is the default mode where erosion behaves normally. Erosion will both take away material from your terrain and deposit it elsewhere.
- **Infinite Flow** - in this mode, erosive debris/material is deposited but never removed. It is great for adding soil, talus, and other material without taking away from your terrain. In other words, it generates soil and rocks from thin air.
- **Erosive Flow** - in this mode the effect is the exact opposite of Infinite Flow. Material is taken away, but nothing is deposited. You can keep eroding an area without creating deposits downstream.

### Undo
The Erosion Tool panel provides a local "in-session" Undo function accessible next to the tools. You can undo up to 20 tool impacts.


## Sculpting
When the Sculpt mode is active, your cursor in the viewport shows the impact area. The cursor flows over the terrain to show you the flow conditions and impact extents - very useful with large brush sizes.

Click anywhere on the terrain to create a "stroke" using the selected tool. In this case, we use the Landbreaker tool to create a few random strokes.

`// TODO: Image`

You will notice that, while the base terrain uses the preview resolution (512 x 512), the strokes and their effects on the terrain are at your sculpt's target resolution (2048 x 2048). This lets you preview the effect your final build will have regardless of your preview quality.

Once you are satisfied with your sculpt, turn the Sculpt mode off. You will notice that your high resolution sculpt is downscaled to the preview resolution, and may lose a lot of the detail.

If we switch the preview resolution to 2048 x 2048, the Directed Erosion node will reprocess the strokes and show them with higher fidelity.


<!--tip-->
### Use late in the workflow
Directed Erosion becomes moot if you process your terrain greatly. We recommend using it late in your graph after all the major shape changes are complete. This will save you hassles in the long run.

### Use in a separate file
Here's a great way to separate the impact of Directed Erosion from the rest of your graph: save the output from your Graph, load that output in a new file using the File node, and then apply Directed Erosion to it.
<!--/tip-->
