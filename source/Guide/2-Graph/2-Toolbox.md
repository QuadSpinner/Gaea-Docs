---
uid: toolbox
title: Toolbox
---

<div class="row">
  <div class="col-lg-4">

![](/images/ui/toolbox-normal.png)

  </div>
  <div class="col-lg-8">

The handy Toolbox sits inside the graph, giving you quick drag-drop access to all nodes. Alternatively, you can use the shortcut `TAB` while in the graph to quickly access the search function, which appears as a popup next to your mouse cursor.

## Using the Toolbox

You can drag and drop a node from the toolbox to your Graph surface. If you drop it on a node, it will automatically connect itself to that node's output.

See @conveniences for more details on how to use the toolbox convenience features.

Modes, Toolbox Placement, and other options are available from the menu in the top right corner of the toolbox.

  </div>
</div>

## Search

![](/images/ui/search-nodes.png){.w-50}

When you press `Tab` when the Graph surface is focused, or if you start typing while the context menu for the Graph is open, the Search feature will present itself. Search also shows up if you drag a connection from a port, but drop it in empty space, and then start typing when the node creation menu appears.

By default, it shows the last few nodes that were used. If you start typing, it will give you a list of nodes that match your search.

If you click a search result, the node will be created where your cursor is.

If a node is a selected, then you press `Tab`, and then press a shortcut, or click a node, the desired node will be created and connected (Primary Out to Primary In) to the selected node.

Shortcuts:
- `ENTER` creates the first (or selected) node.
- `Ctrl` + `1` through `9` create the subsequent.

![](/images/ui/search-portals.png){.w-50}

Entering `\` into the search field will bring up a list of available portals. This is reserved for connecting nodes rather than creating it.

### Recent

Recently used nodes will show up separately in the Search popup if you clear the search text, giving you quicker access to frequently used nodes without having to explicitly set them as favorites.

The Recent nodes list is maintained per-session. It will be emptied when you exit Gaea.

## Modes

| Mode                                 | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/images/ui/toolbox-mostused.png) | Favorite nodes appear a bit brighter than the other nodes. To add or remove a node from favorites, right-click on the tool in the Toolbox and check `Show in favorites`. <br> <br> When you toggle the small switch at the top of the toolbox, only your most used nodes are shown. To see how these nodes are chosen, see @learning. <br> <br> This option is meant to be used frequently. |
| ![](/images/ui/toolbox-expert.png)   | When Expert Mode is turned on, the section dividers are removed allowing you more screen space for nodes. <br> <br> This mode is more useful when used in conjunction with the `Most Used` option.                                                       |

## Toolbox Placement

You can choose to have the toolbox be placed in different positions. You can change this setting as frequently as you like from the toolbox menu.

<div class="row">
<div class="col-lg-4">

![](/images/ui/toolbox-placement-full.png)

Full

</div>
<div class="col-lg-4">

![](/images/ui/toolbox-placement-bottom.png)

Bottom

</div>
<div class="col-lg-4">

![](/images/ui/toolbox-placement-top.png)

Top

</div>
</div>

{.TIP}
> The toolbox can also be collapsed when not required.
