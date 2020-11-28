---
uid: sharing-graphs
title: Organizing and Sharing
---

The Infinity Graph makes it easier to re-use graphs so you don't have to recreate common structures repeatedly.


## Organizing into Multiple Graphs

Let's explore this concept with an example. We have a graph where we first create the terrain then texture it using a specific process. To keep the graph clean, it is a great idea to split the two portions into their own tabs.

You can do this in two ways:
- Create a new tab and create the texturing graph structure there. You will need to manually set up @portals to communicate across the graphs.
- Create the texturing structure in the first graph, then select the nodes of that portion and use the Graph Menu to move those nodes to a new graph. Gaea will automatically convert any relevant connections into Portals.

## Using Portals and Chokepoints

![](/images/ui/graph-org-1.jpg)

In our example, we're relying on two specific outputs - the @Erosion node's primary output and the flow output. So we convert those two into Portals. Now those outputs can be accessed from any other graph tab.

![](/images/ui/graph-org-2.jpg)

In the second graph, the @Texture and @RockMap nodes rely on the primary output, while the second @Combine node relies on the flow output. We can easily connect them with Portals, however in this case we have setup two @Chokepoint nodes. This is not necessary, but it can be helpful for multiple reasons:

Portals can sometimes be visually confusing as we don't get to see a visual flow from the lack of connection lines. By funneling things through Chokepoints, we get to see the flow and multiple nodes can connect to the same @Chokepoint. This reduces the clutter that can occur if you have too many connections to the same portal.

Chokepoints make it a lot easier to reconnect multiple points. For example, if at some point we decide to process the Erosion node further by adding another node, then without Chokepoints you would end up having to reconnect several nodes. Here, you would just reconnect the chokepoint. In fact, for extra clarity and ease of use, you can set up a chokepoint in both graphs and turn the first Chokepoint into a portal instead of doing it directly to the node.

Lastly, Chokepoints become "gateways" when you share a graph.

## Sharing Graphs

Let's say you like this texturing technique and want to use it in other graphs later. This is very easy to do when you have Chokepoints set up and the part of the graph you want to share is in its own tab. You can export a graph by selecting `Export Graph` in the Graph Menu.

![](/images/ui/graph-menu.png){.w-50}

In the other file, you can use the `Import Graph` command to bring in the export graph. It will get its own tab like the graph from where it was exported.

All you need to do next is connect the appropriate nodes from other graphs to the Chokepoints of the freshly imported graph.