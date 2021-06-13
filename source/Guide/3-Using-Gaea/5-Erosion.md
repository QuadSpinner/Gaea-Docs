---
uid: erosions
title: Eroding Terrains
---

Erosion is the primary process through which we turn abstract and geometric shapes into believable terrains. It is one of the most crucial parts of any procedural terrain.

## Hydraulic Erosion

The @Erosion node is the primary erosion node in Gaea. It provides sophisticated erosion with a very easy to use interface. The Erosion node provides control over the scale, where you can choose the size of the largest erosion feature, as well as the overall scale of the terrain.

![](/images/ref/Erosion/Erosion--Default.webp){.ui .image .large}

#### Erosion vs. Wizard

Gaea gives you two ways to use our hydraulic erosion simulation process: the @Erosion node, which gives you absolute control over every aspect, or the @Wizard node which gives you easier access to the major aspects. Both use the same simulation underneath, but provide different interfaces. Both have their pros and cons.

@Erosion provides access to all the simulation controls, however, it can take some time to find the sweet spot for many different settings. @Wizard on the other hand provides fewer, easier choices and various "recipes" for creating different types of results, however, it does not allow you to fine tune your results.

If you need the erosion effect but do not want to art direct every tiny aspect, then @Wizard is the perfect node. Even for experts, it is a quick and easy way to add erosion in your graph.

If you need precise control over different aspects of erosion, and want to fine tune downcutting or deposits, then @Erosion is the perfect node for your situation.

Selective Processing is only available in @Erosion. However, common uses of Selective Erosion, such as eroding just the top to create channels or rivers, are provided as `Phase 2` options in @Wizard.

We recommend using both to understand how they will help you best in your personal process.

#### Resolution Independence

The Erosion node's algorithm addresses one of the biggest problems in digital erosion: it preserves features across different resolutions. This means that a 512 x 512 preview build will maintain essential parity for all major erosion features with a high resolution 4K or 8K build. You no longer need to guess the output type.

The algorithm also creates exquisite flows with naturalistic curves, never before been seen in digital erosion.

#### Selective Processing

While the @Erosion node can be masked using the standard @masking process, the Area mask input gives you additional options.

When an Area mask is connected, you can control the Rock Softness, Precipitation, or Erosion Strength. Unlike the standard mask, this mask allows the processing to be masked but not the shape. For example, you can mask out the top part of a volcano and choose Precipitation as the Area Effect. This forces the erosion-inducing precipitation to occur only within the masked area. But the resulting erosion can flow out and affect the rest of the terrain.

For more information, see Selective Processing in @Erosion.

#### Layering Erosion

Erosion can give you even more complex results when used multiple times.

A great way to create sophisticated erosion is to use multiple @Erosion nodes. A single erosion pass is fine, but will restrict you because of the settings you can use.

In this example, we have `Selective Processing` set to `Altitude` with high `Duration` of `30%`{.val} for creating the initial pass. The strong grooves/flow structure it creates will guide the erosion in subsequent passes.

![](/images/ref/Erosion/Erosion-Pass1.webp){.ui .image .medium}

For the second pass, we have default settings except for `100%`{.val} `Downcutting` and `100%`{.val} `Base Level`. This creates strong flow structures everywhere.

![](/images/ref/Erosion/Erosion-Pass2.webp){.ui .image .medium}

The third pass is fully default. It takes the general larger variations created in the previous passes and homogenizes the overall "texture" yet keeps the larger features. Optionally, higher Inhibition can be used to create more sediments at the bottom.

![](/images/ref/Erosion/Erosion-Pass3.webp){.ui .image .medium}


#### Data Output

The Erosion node creates three key data outputs:

- Wear: the portions where erosion removes sediments.
- Deposits: the resting position of those sediments.
- Flow: the path of the sediments from their original location to the final resting position.

These maps can be used for texturing, or for driving other nodes.

{.NOTE}
> In digital terrains, inexperienced artists will often try to use the Flow output too prominently for texturing. While this may work in some situations, it tends to create unrealistic textures and can make your terrain look fake and "CG". Try to at least use a @Texture node to complement the flow map.

#### Determinstic Output

It is worth noting that due to the nature of the algorithm and parallel processing, the erosion flow may differ slightly each time. To ensure 100% exact results every time, you can turn on the `Deterministic` option in the @Erosion node. This will force Gaea to use a single processor core which will result in slower processing, but will ensure your results are completely predictable.

This may not always be necessary. There are also workarounds. For example, if you wish to control certain major flow lines, you can create a mask for the starting points of those flows and feed it to Selective Processing. This is usually best done in a second @Erosion node, while the first one provides general erosion across the terrain.


## Thermal Erosion

^wip


## Misconceptions

There are a few misconceptions about erosion in procedural terrains that mainly stem from outdated ideas from previous generation software.

#### Erosion should be the last step

Previously, artists would use Erosion as the very last node in the construction of a terrain, because hydraulic erosion was the only process that could provide flow, deposit, and other data maps that would be used for texture creation. This technique is based on technological limitations from over a decade ago! However, it has trained artists (incorrectly), and this has led to limited creativity in digital terrains. It is also very incorrect to use the flow data from an Erosion node as the primary driving force in a texture. Real terrains rarely have clean flow lines - and that too mostly in the form of rivers. Such textures make digital terrains extremely conspicuous. 

With a cutting-edge software like Gaea, there are many options for generating data maps at any point in the graph. This removes the need for Erosion data for texturing purposes. You can use @Texture to create the base for any procedural color map. @Flow, @Soil, @Rocks, @Occlusion, and other Data Maps can generate texture-friendly data without actually processing the terrain.

See the @tutorials section for practical examples.


#### Erosion is mandatory

Another outdated idea is that Erosion is required after any sort of processing to make sure the terrain looks believable. While this may be true in some cases, more often than not, if you are using LookDev nodes or other erosion processes, applying hydraulic erosion will create soft soil deposits and erosive flows that may detract from a non-hydraulic-eroded look you may be after.

LookDev nodes such as @Canyonizer, @Stacks, @Anastomosis, @Shear, etc. can create effects that don't always need to be reprocessed with @Erosion to become believable.

See @tut-rugged-outcrops for an example of how LookDev nodes can remove the need for manual erosion.