---
uid: properties
title: Properties
---

Every node exposes a set of properties or settings that you can modify to change the effect that node has on the terrain. When you select a node, the settings become available in the Properties panel in the right side of the interface.

When you change a property, the effect is immediately applied and made visible in the viewport - except when dealing with Heavy Nodes (see below). Most nodes have a limited type of properties: 
- **Integer**: such as `1`, `2`, `3`, `4`, etc. They usually define quantity or a finite value like angle.
- **Decimals**: such as `0.1`, `0.256`, `0.4885`, etc. They usually define the strength or amount of a certain setting. In most cases, small changes can be quite powerful.
- **Toggle**: They usually allow you to turn a feature on or off.
- **Choices**: These take the form of a dropdown where you can select one of many options.
- **Color**: They allow you to choose a color for the color production nodes.
- **File**: They allow you to choose a file from your computer.

Some nodes may have special controls specific to them.

{.TIP}
> One of the easiest ways to learn about a node's properties is to experiment, changing them to different values across the range to see the effect they have.

{.WARNING}
> If a setting says something like "Iteration", "Strength", "Cycles", or "Amount", be cautious. High values may take longer to process. 

## Microincrements
The Microincrements panel is available when you right-click an Integer or Decimals property. With the Microincrements panel, you can achieve much higher precision in entering values: you can type a value; click a button to halve, double, increment (small or large); or reset the value.

It also gives you access to a private Undo history for that particular setting. This history is cleared when you select a different node.

## Seed Reset
Seed Reset is a minor enhancement in the Microincrements UI. It sets the “Default” seed value to whatever the random value is when the node is created. So if you play around for a while and want to go back to the original seed, you can simply reset the Seed.

## Heavy Nodes
We have classified some nodes, such as @Erosion, @Fluvial, etc., as "Heavy" Nodes — meaning, they can take a long time to process and sometimes cannot be cancelled mid-process. Updating multiple settings on such a node can slow down or even freeze up the application.

When you modify a Heavy Node, it will not update automatically. It will instead show an **Apply** button, which you can click when you have made your changes.
If you move away from the node, or select another node, changes will be applied automatically, so you won’t lose any modifications.

The **Apply** button has an **Auto Apply** toggle button next to it. When you turn on **Auto Apply**, that particular node will update automatically.

#  Post Processing
The Post Process options sits right under the Properties and provides quick access to common functions.

Post processing options has Autolevel, Invert, Bias-Gain, and Clamp options. These are individual options which you can turn On/Off per your requirements. Turning on a particular option, e.g. Bias-Gain, will show the sliders Bias and Gain.

You can use Autolevel and Influence to control your node without having to add a second node. This will help you keep your graph clean.

The Influence slider is a very simple yet powerful tool for layering effects. It blends the output back with the input, allowing you to manage the influence of the current node.



`// TODO: Image`

Here is an example: a heavily-eroded terrain goes through Recurve, where the Influence is set to `0.5`, which yields a more realistic looking output of Recurve, while still being able to use strong values in Recurve to create long striations.
