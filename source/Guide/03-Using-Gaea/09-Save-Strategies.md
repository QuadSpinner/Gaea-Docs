---
uid: savestrategies
title: Build Strategies
---

## Strategies for Build Output

#### Disable Extra Outputs


#### Use Chokepoint or Fx instead of Output

The @Output node is specifically built for custom save options or locations that are different from the standard options provided in the Build tab. If you just need to organize your files, you can use a lightweight nodes as an alternative.

Both @Chokepoint and @Fx are extremely lightweight nodes that don't add any extra processing time. You can use these nodes to save a specific port to a different name, format, and so on.

Let's take this example: we have two heavy nodes @Snowfall and @Erosion. We need to save both in a 32-bit Raw format. However, when we set the format in the Build tab, the extra maps such as Snow, Flow, and Wear will also be saved as `.r32`. This is a problem because those lightweight masks are better off as 16-bit PNG files for easier consumption.

So what we do is set the Erosion and Snowfall nodes' output save option in the Build tab from `All` to `Main`. This can be done by opening that menu item and selecting `Primary Only`. Then we attach an Fx node to the Snow output of the Snowfall node, and another to the Flow output of the Erosion node. Both Fx nodes are then marked for export. In the Build tab, the output format for both is set to `.png` and custom file names are added.

As an added benefit, we can Autolevel the Flow map which can be helpful when it is very subtle.