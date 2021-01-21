---
uid: Erosion
title: Erosion
---

Erosion is the cornerstone of all terrains. It simulates hydraulic erosion on the terrain to turn any shape into a realistic looking terrain.

![](/images/ref/Erosion/Erosion--Default.webp){.ui .img .medium}

It provides sophisticated erosion with a very easy to use interface. The Erosion node provides control over the scale, where you can choose the size of the largest erosion feature, as well as the overall scale of the terrain.

The Erosion node’s algorithm addresses one of the biggest problems in digital erosion: it preserves features across different resolutions. This means that a 512 x 512 preview build will maintain essential parity for all major erosion features with a high resolution 4K or 8K build. You no longer need to guess the output type.

The algorithm also creates exquisite flows with naturalistic curves, never before been seen in digital erosion.

## Using Erosion

#### Strength and Rock Softness
Both Strength and Rock softness parameters affect the aggressiveness of erosion, and effect from increasing of one can be similar to the effect of increasing other, but there is still the difference, derived from the definition of these parameters. 

Lesser strength means dissolved soil will be dropped earlier because of lower water transport capacity, and lesser softness means that the rock will be eroded slower but dissolved sediment will be dropped farther. This results in different distribution of deposits, gullies, and shapes of erosion features.


<figure>

![](/images/ref/Erosion/Erosion--LowStrength-HighSoftness.webp){.ui .img .medium}

<figcaption>Low Strength with very high Rock Softness retains the general shape. Fewer cracks or fluvial grooves are created, while some soft sediment is accumulated on slopes.</figcaption>
</figure>

<figure>

![](/images/ref/Erosion/Erosion--HighStrength-LowSoftness.webp){.ui .img .medium}

<figcaption>High Strength with very low Rock Softness creates a heavily eroded terrain with plenty of soft sediment.</figcaption>
</figure>

#### Downcutting

Downcutting effectively transports sediment far away from its origin. If shorter transport distance is desired, for example, for faster alternating between erosion/deposition, set this parameter to 0.0, or set Inhibition to higher values.

<figure>

![](/images/ref/Erosion/Erosion--Downcutting.webp){.ui .img .medium}

<figcaption>High downcutting with medium Inhibition creates lots of deep fluvial grooves, as well as excess sediments that flow downslope.</figcaption>
</figure>

<figure>

![](/images/ref/Erosion/Erosion--Downcutting-NoInhibition.webp){.ui .img .medium}

<figcaption>High downcutting with very little or no Inhibition will create the same deep fluvial grooves, but no excess sediments.</figcaption>
</figure>

#### Scale and Feature Size

The size of the "features" created during the erosion process - namely the width of largest valleys and ridges between them - is controlled by the `Feature Scale` option is where you can achieve artistic control over the erosion process.

<figure>

![](/images/ref/Erosion/Erosion--Default.webp){.ui .img .medium}

<figcaption>Default Feature Size of 2000 (meters).</figcaption>
</figure>

<figure>

![](/images/ref/Erosion/Erosion--SmallFeatures.webp){.ui .img .medium}

<figcaption>Reduced Feature Size of 50 (meters).</figcaption>
</figure>

The *Real Scale* option automatically controls the general scale (the extents of the terrain and the vertical scale), using the scale set in the Terrain Definition. Although it can be turned off to manually change the 'physics' of the erosion system, although it is not recommended for most scenarios.

{.NOTE} 
> When using Parallel Processing, the erosion algorithm can become non-deterministic. This means while most of the major flows will appear in the same location, smaller features may appear somewhat different every time the node is processed. To ensure fully deterministic processing, disable Parallel Processing. This will sacrifice processing speed to ensure your results are consistent.


#### Selective Processing


