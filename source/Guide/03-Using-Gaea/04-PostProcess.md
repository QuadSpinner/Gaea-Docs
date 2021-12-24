---
uid: postprocess
title: Post Process Stack
section: true
---

The Post Process options are below the Properties and provide quick access to common functions. Using the Post Process Stack allows you to skip creating common adjustment nodes. This reduces the clutter in your graph and increases efficiency.

Post processing options offer other choices. These are individual options which you can turn ON/OFF per your requirements. Turning ON a particular option, e.g. Bias-Gain, will show the sliders Bias and Gain. Not all effects are shown in the quick access toolbar. To access all the other effects, you can use the `...` menu next to the toolbar.

| Process   | Description                                                                                                                                                  |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autolevel (Lv) | Automatically levels the terrain where the heights are proportionately distributed between the highest and lowest. See @AutoLevel.                           |
| Log       | Applies logarithmic scaling that bulks up the terrain. See @AutoLevel.                                                                                       |
| Equalize (Eq)  | Equalizes the terrain where the heights are linearly distributed between the highest and lowest. See @AutoLevel.                                             |
| Max       | Selects the higher of the 2 inputs. See @Combine.                                                                                                          |
| Min       | Selects the lower of the 2 inputs. See @Combine.                                                                                                           |
| Diff      | Creates the difference of the 2 inputs. See @Combine.                                                                                                      |
| Invert (Inv)    | Inverts the terrain.                                                                                                                                         |
| Clamp     | The terrain is proportionally reduced in height. See @Clamp.                                                                                                 |
| Clip      | The terrain is clipped beyond the extents provided. See @Clamp.                                                                                              |
| Blur | Applies a blur to the terrain. |
| Shaper (人) | Bulks up or bulks down the output. See @Shaper.                                                                                                                |
| Raise (⨂) | Uniformly increases the height of the terrain.                  |
| Displace (〰)  | Distorts the terrain using built-in noise. See @Displace.                                                                                                     |
| Autolevel Mask (Msk) | Autolevels in the incoming Mask if the node has a Mask port and is connected. |
| Influence | Blends between the original/unprocessed and processed versions. See @Combine.                                                                                 |
| Drop to Floor | Removes any extra height from the bottom of the terrain.

{.NOTE}
> Influence, Drop to Floor, and additional parameters for other modes (when turned on) are visible only when you expand the Post Process Stack.

The Influence slider is a very simple yet powerful tool for layering effects. It blends the output back with the input, allowing you to manage the influence of the current node.