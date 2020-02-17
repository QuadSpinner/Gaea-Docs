---
uid: erosion
title: Erosion
---

Erosion is the cornerstone of all terrains. It simulates hydraulic erosion on the terrain to turn any shape into a realistic looking terrain.

It provides sophisticated erosion with a very easy to use interface. The Erosion node provides control over the scale, where you can choose the size of the largest erosion feature, as well as the overall scale of the terrain.

The Erosion node’s algorithm addresses one of the biggest problems in digital erosion: it preserves features across different resolutions. This means that a 512 x 512 preview build will maintain essential parity for all major erosion features with a high resolution 4K or 8K build. You no longer need to guess the output type.

The algorithm also creates exquisite flows with naturalistic curves, never before been seen in digital erosion.

### Strength and Rock Softness
Both Strength and Rock softness parameters affect the aggressiveness of erosion, and effect from increasing of one can be similar to the effect of increasing other, but there is still the difference, derived from the definition of these parameters. Lesser strength means dissolved soil will be dropped earlier because of lower water transport capacity, and lesser softness means that the rock will be eroded slower but dissolved sediment will be dropped farther. This results in different distribution of deposits, gullies, and shapes of erosion features.

### Downcutting

Downcutting effectively transports sediment far away from its origin. If shorter transport distance is desired, for example, for faster alternating between erosion/deposition, set this parameter to 0.0, or set Inhibition to higher values.