---
uid: using-portals
title: Using Portals
---

# Portals

The portal node is a unique concept in graph-based applications. Like a "wormhole", portals allow you to connect nodes across vast gaps (or short ones) without visible connections. They not only improve your quality-of-life, but also dramatically change how you think of and use graphs.

An orange portal ingests incoming data, and a blue portal emits the ingested data.

## Creating Portals 

Simply drop a Portal node on any existing node to create an orange portal. Then drop another portal on that orange portal to create a blue portal. These portals are now connected like a wormhole, and can be taken anywhere in the graph without creating visuals or memory overhead.
                
You can treat a portal just like any other node. You can even connect multiple "Out" portals to a single "In" portal.

You can also drop a second (or subsequent) portal anywhere in the graph and right-click it to get a "Connect to" menu.

To see which portal is connected to which source portal, just hover over a blue portal. It will show a tooltip with the name of the source portal. You can rename any portal for more to keep your graph organized.

As mentioned before, portals have no overhead and should be used as frequently as necessary. They will help you keep your graph organized and avoid overlapping connections which can sometimes be confusing to read.