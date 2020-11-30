---
uid: portals
title: Portals and Chokepoints
---

## Portals

The portal node is a unique concept in graph-based applications. Like a "wormhole", portals allow you to connect nodes across vast gaps (or short ones) without visible connections. They not only improve your quality of life, but also dramatically change how you think of and use graphs.

When using the @graph, Portals can be used to connect nodes across different graphs.

### Creating Portals
Any output port in a node can be converted to a portal. You can create a portal in many ways:

<video controls><source src="/mp4/cnv-portal-create.mp4" type="video/mp4"></video>

@dragout a connection. In the menu that shows up, select `Make Portal`.

<video controls><source src="/mp4/cnv-portal-create-c.mp4" type="video/mp4"></video>

Select a node and press `C` to bring up the Connect menu. Select the port you wish to convert to a portal. You can also hold down `Ctrl` while selecting the convert menu command, and Gaea will connect a @Chokepoint to the desired port and then convert the Chokepoint into a portal. This is very useful to avoid having to reroute connections if you change the node itself or want to add another node after it.

<video controls><source src="/mp4/cnv-portal-convert.mp4" type="video/mp4"></video>

You can also convert existing connections into portals. Select one or more connections and press `Ctrl + P` to convert the connections into portal connections.


Once a portal is created, a small tab with the port's name will be visible next to the node.


### Connecting to Portals

You can connect to a portal in multiple ways:

![](/images/ui/portal-menu.png)

@dragout a connection and you will be presented with a list of available portals organized by graphs.

![](/images/ui/search-portals.png){.w-50}

@dragout a connection and type `\` when the menu shows up. This will present you with a searchable list of all available portals.

Once a portal is connected, a tab showing the name of the portal will be visible on the target node's input port. The color of the tab represents the node type of the portal.

You can rename the portal node to change the name displayed in the portal tab.

{.NOTE}
> You can connect to a portal port like a normal connection. This will create a standard connection. Both type of connections can co-exist, however using just one is recommended to avoid visual confusion.


### Disconnecting Portals

To disconnect a portal from a target node:

<video controls><source src="/mp4/cnv-portal-disconnect.mp4" type="video/mp4"></video>

Select the node and press `X`. You can select the port you wish to disconnect from the portal.

### Reverting a Portal

To convert the portal back to a normal node:

<video controls><source src="/mp4/cnv-portal-remove.mp4" type="video/mp4"></video>

@dragout a connection from the portal and select `Remove Portal`. Any connections to other nodes in the same graph will be converted to a normal connection. Connections to other graphs will be deleted.

## Chokepoint

The Chokepoint node is a special node whose sole purpose is to help avoid re-connecting many nodes, while adding no memory overhead.

Often a graph ends up with natural chokepoints - a single node that is referenced by several other nodes. If at a later point you want to modify that important node, you would need to reconnect all the connections. This can be awkward, time consuming, and dangerous in some situations.

In this example, the second @Erosion node is the chokepoint. It feeds several other nodes, while being a critical junction in the terrain's creation process. It is more or less the "last" node in the terrain creation.

![](/images/ref/choke_1.png){.w-100}

The easy solution is to interject a Chokepoint node onto the important node. You can hold `Shift` while drag-dropping a Chokepoint on to the Erosion node to interject it and have Gaea reroute all connections.


![](/images/ref/choke_2.png){.w-100}

Now everything is routed through the Chokepoint, allowing you to experiment with the Erosion node later, and only reroute a single connection when needed.

The Chokepoint can be further organized by making its output a portal. You can select all the outgoing connections and press `Ctrl + P` to turn them into portal connections. This is especially useful when working with multiple graphs.

![](/images/ref/choke_3.png){.w-100}

{.TIP}
> You can give chokepoints (or any node!) an icon instead of text. Select a node and press `F2` to rename. Inside the rename field, press `Win` + `.` to bring up the Windows emoji picker. You can pick any emoji. This will create an icon for the Chokepoint instead of an abbreviation. 