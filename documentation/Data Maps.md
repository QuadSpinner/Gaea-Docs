---
uid: Data-Maps
title: Data Maps
---

# What are Data Maps?
Data Maps are special masks. While Selector masks generally represent an area or selection - such as slope, angle, or curvature; Data Maps represent a specific type of data of the area - such as water flow, soil deposits, etc.

Data Maps are very useful for creating color maps. For example, the water flow can be used to create a Biome texture, or used manually with a CLUTer or SatMaps node to create a texture along water flow areas.

# A basic texture with Data Maps
In this example, we create a simple terrain using a Mountain node, then erode it to get some basic erosion data. On top of the eroded output, we apply a Soil Map node. The Soil Map node is fed to a SatMaps node to create a base texture for the terrain. The Flow and Wear output of the Erosion node are mixed and fed to another SatMaps node to create a second map. The two maps are mixed together to create the final texture.

// TODO: Image

See the @quickstarts for more color production examples.
