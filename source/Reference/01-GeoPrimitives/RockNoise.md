---
uid: RockNoise
title: RockNoise
---

RockNoise is a useful tool for generating fields of rocks with size variations and controllable density. Its "flat" generation makes it easy to apply the rocks to any surface using the Embed and Insert modes in the @Combine node. RockNoise can be mixed with other nodes, like @Rocky and @Outcrops, to create even more diverse rock formations. In the example above, RockNoise is embedded into the output of an Erosion node using the Wear output as a mask.

RockNoise has a minimal interface that lets you control the density and number of octaves of the generated rocks. The Size parameter determines the overall size of the largest rocks, while the Octaves work like in @Perlin noise, where it add smaller rocks in between the larger ones from previous octaves. This allows you to create realistic-looking fields of rocks with a high level of detail.