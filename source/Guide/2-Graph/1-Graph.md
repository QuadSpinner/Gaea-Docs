---
uid: graph
title: Infinity Graph
---

## The Infinity Graph

Gaea's advanced graph based workflow is the key to creating sophisticated terrains. This open-ended workflow gives you the flexibility to create almost any kind of results that you want.


### What are nodes?

If you have not used node based workflows before, it may look intimidating but Gaea provides a very artist friendly workflow where you are not required to create complex graphs to get good results. 

Each node is a heightfield processor that performs a single task. By connecting several nodes, you can create an elaborate program or "recipe" for creating a complex process. Some nodes provide more than one output and input. These additional "ports" can be used for more sophisticated processing of your terrain.

A typical node graph will start with a Primitive or "create" node, have several modification nodes such as @Erosion or @Fx, and then eventually be saved.

Node graphs can only go from left to right but never the opposite as they represent a one-way flow.

Try following some of the simple exercises in the @tutorials section, and you will see that the graph is quite easy to use. @conveniences further enhance the way you create and manage nodes, making it easy to try different things.

![](/images/ui/infinity-graph.webp)

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/1A1xXfTlKqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>




## Separating the Graph

The Infinity Graph allows you to split your terrain graph across multiple tabs using @portals. This allows you to separate concerns such as creating the main shape, color production, exporting masks, and so on. By reducing the clutter, complex processes become easier to visualize and modify.

<video controls><source src="/mp4/cnv-navigate.mp4" type="video/mp4"></video>

You can quickly navigate across graph tabs using the `,` shortcut on nodes.

![](/images/ui/graph-menu.webp){.w-50}

You can move select nodes to different tabs. Portals will be created as required to ensure your connections stay intact.

See the @portals page for further details on how to strategically create Portals and Chokepoints to better manage your graph networks.

Also see @conveniences for various ways to manage nodes, both within a graph itself as well as across graph tabs.