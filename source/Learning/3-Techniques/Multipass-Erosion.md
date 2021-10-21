---
uid: tut-multipass-erosion
title: Multipass Erosion
---

A great way to create sophisticated erosion is to use multiple @Erosion nodes. A single erosion pass is fine, but will restrict you because of the settings you can use.

In this example, we have `Selective Processing` set to `Altitude` with high `Duration` of `30%`{.val} for creating the initial pass. The strong grooves/flow structure it creates will guide the erosion in subsequent passes.

![](/images/ref/Erosion/Erosion-Pass1.webp)

For the second pass, we have default settings except for `100%`{.val} `Downcutting` and `100%`{.val} `Base Level`. This makes strong flow structures everywhere.

![](/images/ref/Erosion/Erosion-Pass2.webp)

The third pass is fully default. It takes the general larger variations produced in the previous passes and homogenizes the overall "texture" while keeping the larger features. Optionally, higher Inhibition can be used to create more sediments at the bottom.

![](/images/ref/Erosion/Erosion-Pass3.webp)
