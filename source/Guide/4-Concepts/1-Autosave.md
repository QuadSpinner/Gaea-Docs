---
uid: autosave
title: Autosave and File Recovery
---

Gaea has different facilities to protect your work at several junctures.

## Undo/Redo

Gaea provides basic undo/redo facilities in the main toolbar. You can undo or redo one or more steps. Gaea will list the change in each undo entry when possible.

Please note, while the state of your file is preserved, cache may not be. For example, when a deleted node is restored, or any major change is reverted, the preview may need to be rebuilt.

{.TIP}
> If you don't see a change, try pressing `F5` on the desired node to force a refresh.

## Revert Node

Sometimes you may want to experiment with a node's settings, and after doing so find that the previous settings were preferable. To avoid bloat, Gaea does not create undos for node property changes. Instead, you can use this command from the Properties window menu to revert the values back to the state they were when you selected the node. This "state" resets every time you go away from the node.

{.NOTE}
> The similar sounding "Reset Node" (Ctrl + R) command will reset the node to factory defaults.

## Autosave

Gaea will attempt to save a copy of your file before every major action. For example, when you add a new node, an autosave will be created before the node is added. Same for deleting, moving large parts, splitting the graph, etc.

Autosaves can be accessed from the main menu via `Open recent > Open Autosave`. Files are stored with the original filename and a timestamp suffix such as `scene1_2020-08-08_19-05-17.tor`.

Autosaves are saved to `C:\Users\[You]\AppData\Roaming\QuadSpinner\Gaea\Autosaves\`.

## Backward Compatibility

Gaea is backward compatible, meaning it will be able to open older files most of the time.

When a node has been upgraded between versions, Gaea will ask you if you wish to upgrade the node to the latest version. Sometimes this may mean the shape you would get the from node may not be exactly the same. We recommend consulting the new version's changelog or the node's page in @reference to understand the changes. You can then choose to upgrade the node or not.

If you choose not to upgrade a node, you can always do so later from the Properties window menu one-by-one.