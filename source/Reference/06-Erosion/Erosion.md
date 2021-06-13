---
uid: Erosion
title: Erosion
---

Erosion is the cornerstone of all terrains. It simulates hydraulic erosion on the terrain to turn any shape into a realistic looking terrain.

![](/images/ref/Erosion/Erosion--Default.webp){.ui .image .large}

It provides sophisticated erosion with a very easy to use interface. The Erosion node provides control over the scale, where you can choose the size of the largest erosion feature, as well as the overall scale of the terrain.

The Erosion node's algorithm addresses one of the biggest problems in digital erosion: it preserves features across different resolutions. This means that a 512 x 512 preview build will maintain essential parity for all major erosion features with a high resolution 4K or 8K build. You no longer need to guess the output type.

The algorithm also creates exquisite flows with naturalistic curves, never before been seen in digital erosion.

## Using Erosion

#### Strength and Rock Softness
Both Strength and Rock softness parameters affect the aggressiveness of erosion, and effect from increasing of one can be similar to the effect of increasing other, but there is still the difference, derived from the definition of these parameters. 

Lesser strength means dissolved soil will be dropped earlier because of lower water transport capacity, and lesser softness means that the rock will be eroded slower but dissolved sediment will be dropped farther. This results in different distribution of deposits, gullies, and shapes of erosion features.

![Low Strength with very high Rock Softness retains the general shape. Fewer cracks or fluvial grooves are created, while some soft sediment is accumulated on slopes.](/images/ref/Erosion/Erosion--LowStrength-HighSoftness.webp){.ui .image .large}

![High Strength with very low Rock Softness creates a heavily eroded terrain with plenty of soft sediment.](/images/ref/Erosion/Erosion--HighStrength-LowSoftness.webp){.ui .image .large}

#### Downcutting

Downcutting effectively transports sediment far away from its origin. If shorter transport distance is desired, for example, for faster alternating between erosion/deposition, set this parameter to 0.0, or set Inhibition to higher values.

![High downcutting with medium Inhibition creates lots of deep fluvial grooves, as well as excess sediments that flow downslope.](/images/ref/Erosion/Erosion--Downcutting.webp){.ui .image .large}

![High downcutting with very little or no Inhibition will create the same deep fluvial grooves, but no excess sediments.](/images/ref/Erosion/Erosion--Downcutting-NoInhibition.webp){.ui .image .large}


#### Scale and Feature Size

The size of the "features" created during the erosion process - namely the width of largest valleys and ridges between them - is controlled by the `Feature Scale` option is where you can achieve artistic control over the erosion process.

![Default Feature Size of 2000 (meters).](/images/ref/Erosion/Erosion--Default.webp){.ui .image .large}

![Reduced Feature Size of 50 (meters).](/images/ref/Erosion/Erosion--SmallFeatures.webp){.ui .image .large}

The *Real Scale* option automatically controls the general scale (the extents of the terrain and the vertical scale), using the scale set in the Terrain Definition. Although it can be turned off to manually change the 'physics' of the erosion system, although it is not recommended for most scenarios.

{.NOTE} 
> When using Parallel Processing, the erosion algorithm can become non-deterministic. This means while most of the major flows will appear in the same location, smaller features may appear somewhat different every time the node is processed. To ensure fully deterministic processing, disable Parallel Processing. This will sacrifice processing speed to ensure your results are consistent.


## Selective Processing

Selective Processing is one of the most powerful tools available in the Erosion process. You can provide a bias mask to drive aspects of the erosion process, namely Rock Softness, Erosion Strength, and Precipitation Amount.

It may sound like simple masking, however there is a significant difference between masking the Erosion node and using Selective Processing. With masking the effect is tightly contained within the provided mask using a compositing method (the same as using @Combine at 100% Blend while providing a mask). While with Selective Processing, the mask provided will apply a modifier to that area, however processing will still occur outside the bias mask.

#### Processing Mask

You can use two forms of masking for the Selective Processing: the built-in masks called `Bias Types`, or a custom mask provided via the `Area` input. Custom masks can be any heightfield.

The built-in bias masks are Slope and Altitude. They are mainly provided for convenience so you can quickly apply Selective Processing and be able to use it frequently without creating several nodes. Both aspects go from 0 to maximum in a normalized scale. This means 0% is the bottom, while 100% the top. For example, if you want to mask the last 10% of a mountain peak, you would use `90%`{.val} for the Altitude bias. You can invert the mask by enabling `Reverse`.

The bias mask modulates, or drives, the value of the parameter across the terrain region. For example, if you provide a Rock Softness mask while your Rock Softness parameter is set to `35%`{.val}, it will map the black or `0` part to `0%`{.val} while the white will map to `35%`{.val}. Similarly, Erosion Strength maps to the Strength slider, and Precipitation Amount maps to the Duration slider.

#### Practical Uses

See these tutorials for examples of practical usage:
- @tut-selective-erosion
- @tut-multipass-erosion