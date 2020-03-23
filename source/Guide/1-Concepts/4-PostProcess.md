---
uid: postprocess
title: Post Process Stack
---

The Post Process options sits right under the Properties and provides quick access to common functions. Using the Post Process Stack allows you skip having to create common adjustment nodes, reducing the clutter in your graph while increasing the efficiency.

Post processing options has several options. These are individual options which you can turn On/Off per your requirements. Turning on a particular option, e.g. Bias-Gain, will show the sliders Bias and Gain. Not all effects are shown in the quick access toolbar. To access all the other effects, you can use the `...` menu next to the toolbar.

| Process   | Description                                                                                                                                                  |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autolevel | Automatically levels the terrain where the heights are proportionately distributed between the highest and lowest. See @AutoLevel.                           |
| Equalize  | Equalizes the terrain where the heights are linearly distributed between the highest and lowest. See @AutoLevel.                                             |
| Log       | Applies logarithmic scaling that bulks up the terrain. See @AutoLevel.                                                                                       |
| Invert    | Inverts the terrain.                                                                                                                                         |
| Bias/Gain | Bias-Gain, or more commonly seen in image editing as Brightness-Contrast, is a basic adjustment used to control a terrain's height and shape. See @BiasGain. |
| Clamp     | The terrain is proportionally reduced in height. See @Clamp.                                                                                                 |
| Clip      | The terrain is clipped beyond the extents provided. See @Clamp.                                                                                              |
| Displace  | Distort the terrain using built-in noise. See @Displace.                                                                                                     |
| Shaper    | Bulk up or bulk down the output. See @Shaper.                                                                                                                |
| Max       | Selects the higher of the two inputs. See @Combine.                                                                                                          |
| Min       | Selects the lower of the two inputs. See @Combine.                                                                                                           |
| Diff      | Creates the difference of the two inputs. See @Combine.                                                                                                      |
| Influence | Blend between the original/unprocessed and processed version. See @Combine.                                                                                  |

The Influence slider is a very simple yet powerful tool for layering effects. It blends the output back with the input, allowing you to manage the influence of the current node.

`// TODO: Image`

Here is an example: a heavily-eroded terrain goes through @Recurve, where the Influence is set to `0.5`, which yields a more realistic looking output of Recurve, while still being able to use strong values in Recurve to create long striations.
