---
title: Rivers
uid: Rivers
---

Rivers can instantly generate complex river networks on any terrain, whether it can sustain rivers or not. The node subtly transforms the terrain to provide unbroken pathways for a river to be generated.

Generating rivers does not require many prequisites. The terrain should just have some slopes, so rivers can flow downslope. This makes Rivers very versatile as you can use it with virtually any terrain shape and at almost any stage of your terrain's production.

While the rivers are generated for you using sophisticated algorithms that closely mimic nature, you can still retain a fair level of control over the rivers. By providing a Headwaters mask, you can confine all starting headwaters inside that mask. All rivers would then originate from those locations, giving you artistic control over river generation while leaving the minute details to the algorithm.

You can even use Rivers early in your graph to help carve pathways and valleys for ancient rivers that have dried up, or for river generation later in the graph. In the latter scenario, having a River early in the graph helps the @Erosion and other effects take the river pathway into account throughout the terrain production. See the Quickstart "Enclosed River" for an example.

Rivers and @Lakes can work together to create a comprehensive water element for your terrains. See the Quickstart "Rivers and Lakes" on how to combine them and produce colors from the combined water depth.