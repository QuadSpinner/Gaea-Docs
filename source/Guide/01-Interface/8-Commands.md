---
uid: commands
title: Command Reference
---

## Commands

Gaea has commands spread through several menus and toolbars. Below you can find a full reference of all the commands in each area.



#### Main Menu

| Command          | Description                                                     | Shortcut         |
| ---------------- | --------------------------------------------------------------- | ---------------- |
| New              | Creates a new project                                           | Ctrl + N         |
| Open             | Opens an existing TOR project file                              | Ctrl + O         |
| Open Recent      |                                                                 |                  |
|                  | Recent files: Open a recent file                                |                  |
|                  | Open an autosave: Browse recent autosaves                       |                  |
| Save             | Saves currently opened project file                             | Ctrl + S         |
| Save As          | Saves copy of the currentlly opened project file                |                  |
| Save incremental | Saves currently opened project file incrementally               | Ctrl + Shift + S |
| Import Graph     | Import an entire file or a graphlet                             |                  |
| Workspace        | Customize the workspace. See @workspace                         |                  |
| Preferences      | Change general options, navigation shortcuts, and default paths |                  |
| License          | Load or change Gaea's license                                   |                  |
| About            | Show information about Gaea                                     |                  |
| Exit             | Close Gaea                                                      | Alt + F4         |

#### Main Toolbar

| Command             | Description                                                                                     | Shortcut         |
| ------------------- | ----------------------------------------------------------------------------------------------- | ---------------- |
| New                 | Creates a new project                                                                           | Ctrl + N         |
| Open                | Opens an existing TOR project file                                                              | Ctrl + O         |
| Save                | Saves currently opened project file                                                             | Ctrl + S         |
| Save reminder timer | Reminds user after selected specided time interval                                              |                  |
| Save As             | Saves copy of the currentlly opened project file                                                |                  |
| Save incremental    | Saves currently opened project file incrementally                                               | Ctrl + Shift + S |
| Undo                | Undo the last operation. Open dropdown to see recent actions and optionaly undo them.           | Ctrl + Z         |
| Redo                | Redoes and undone action. Open dropdown to see recently undone actions and optionaly redo them. | Ctrl + Y         |
| Help Menu           | Show help menu options                                                                          |                  |
| UI Scale            | Change the user interface scale                                                                 |                  |


#### Toolbox Menu

| Command                     | Description                                                                                      | Shortcut |
| --------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| Show most used nodes only   | Show nodes that you use most often. You can toggle this frequently                               |          |
| Predictive Services         |                                                                                                  |          |
| Learn from Gaea Docs folder | Teach Gaea which nodes you prefer from all documents in your Projects folder. See @learning.     |          |
| Learn from this terrain     | Teach Gaea which nodes you prefer from the currently loaded terrain. See @learning.              |          |
| List Style                  |                                                                                                  |          |
| Standard                    | Show nodes by category                                                                           |          |
| Expert                      | Show all nodes together. Combine this with "Show most used nodes only" for a minimal experience. |          |
| Toolbox Position            |                                                                                                  |          |
| Full                        | Have the toolbox stretch the entire height of the workspace                                      |          |
| Top                         | Have the toolbox nest inside the viewport                                                        |          |
| Bottom                      | Have the toolbox nest inside the graph                                                           |          |


#### Graph Menu

| Command              | Description                                                                                                 | Shortcut |
| -------------------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| Move selected nodes  | Move currently selected nodes to an existing or new graph. Portals will be created to preserve connections. |          |
| Import Graph         | Import an entire terrain file (.tor) or an individual graph (.graphlet)                                     |          |
| Import Seeds         | Select an older or alternate version of the current file to import just seeds of all the needs              |          |
| Export Graph         | Exports the current tab as a .graphlet file                                                                 |          |
| Show Graph Toolbar   | Toggle the optional graph toolbar for easy access to some graph commands                                    |          |
| Show Node Categories | In the context menu for the graph, show node categories similar to the toolbox                              |          |
| Show Grid            | Toggles the grid for the graph                                                                              |          |
| Snap                 |                                                                                                             |          |
| Grid                 | Snap nodes to the grid                                                                                      |          |
| Items                | Snap nodes to relative nodes nearby for easier organization                                                 |          |
| Screenshot           |                                                                                                             |          |
| Viewport             | Takes a screenshot of just the viewport                                                                     |          |
| Graph                | Takes a screenshot of just the graph                                                                        |          |
| Both                 | Takes screenshots of both the viewport and graph                                                            |          |




#### Node Properties Menu

These commands require a node to be selected. They will only work with one node, not 

| Command                 | Description                                                                                                                                                                                                                                                                | Shortcut |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Reset node to defaults  | Reset the currently selected                                                                                                                                                                                                                                               | Ctrl + R |
| Upgrade Node            | If you defer upgrading an old node while loading the terrain, you can upgrade it later with this command.                                                                                                                                                                  |          |
| Toggle Auto-Apply       | Toggles automatic reprocessing of the node when values are updated. See the Heavy Nodes section above.                                                                                                                                                                     |
| Revert Node             | Reverts the values back to the state they were when you selected the node. This "state" resets every time you go away from the node. It is helpful to undo any accidental or experimental changes you may have made to the node after coming back to it from another node. |
| Save/Load State         | Saves the state of the node to be recalled later using the Load command. This is preserved in the session only and resets when you close Gaea or go to a different file.                                                                                                   |
| Copy/Paste Settings     | Copies and pastes settings to and from nodes of the same type.                                                                                                                                                                                                             |
| Expose Node             | Exposes properties of the node for automation. See @automation.                                                                                                                                                                                                            |
| Show Exposed Properties | Shows a unified properties panel with exposed properties across all nodes. This is useful while working with exposed properties for @automation.                                                                                                                           |
| Sliders                 |                                                                                                                                                                                                                                                                            |          |
| Show decimals           | Show decimal points in the sliders.                                                                                                                                                                                                                                        |          |
| Mute defaults           | Mute colors of sliders that are set to default values. It helps identify modified values faster.                                                                                                                                                                           |          |
| Create Preset           | Saves current settings as a preset file.                                                                                                                                                                                                                                   |
| Import Presets          | Imports presets for this node from file.                                                                                                                                                                                                                                   |
| Presets                 | Applies any existing presets for this node.                                                                                                                                                                                                                                |




#### Toolbox Menu

| Command | Description | Shortcut |
| ------- | ----------- | -------- |



#### Toolbox Menu

| Command | Description | Shortcut |
| ------- | ----------- | -------- |