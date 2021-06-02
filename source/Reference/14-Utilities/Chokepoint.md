---
uid: Chokepoint
title: Chokepoint
---

The Chokepoint node is a special node whose sole purpose is to help avoid re-connecting many nodes, while adding no memory overhead.

Often a graph ends up with natural chokepoints - a single node that is referenced by several other nodes. If at a later point you want to modify that important node, you would need to reconnect all the connections. This can be awkward, time consuming, and dangerous in some situations.

In this example, the second @Erosion node is the chokepoint. It feeds several other nodes, while being a critical junction in the terrain's creation process. It is more or less the "last" node in the terrain creation.

![](/images/ref/choke_1.webp)

The easy solution is to interject a Chokepoint node onto the important node. You can hold `Shift` while drag-dropping a Chokepoint on to the Erosion node to interject it and have Gaea reroute all connections. See @conveniences for more information.


![](/images/ref/choke_2.webp)

Now everything is routed through the Chokepoint, allowing you to experiment with the Erosion node later, and only reroute a single connection when needed.

The Chokepoint can be further organized by making its output a portal. You can select all the outgoing connections and press `Ctrl + P` to turn them into portal connections. This is especially useful when working with multiple graphs.

![](/images/ref/choke_3.webp)
