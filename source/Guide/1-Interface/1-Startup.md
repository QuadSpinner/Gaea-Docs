---
title: Startup Screen
uid: startup
---

The Startup Screen is your main entry point into Gaea.

## Project Screen

![](/images/ui/start0.webp)

On the right side, you have all the commands you need to get started. On the left side, you can access the most recently opened projects.

### Load License

If your installation is not authorized with a license key, you will find a "Enter License Key" button under the Gaea logo. You can also access it from the About menu.

Without a license, Gaea will revert to the Community Edition with resolution restrictions.

### Commands

| Command                 | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| New Project             | Creates a new project using the default template. Right-click for alternate templates. |
| Open Project            | Open an existing TOR project file.                                                     |
| Sculpt Existing Terrain | See Erosion Studio options. Further details below.                                     |
| Open Quickstart         | Browse through the quickstart and example files collection that ships with Gaea.       |
| Recent Files            | List of recently opened files. Right-click for additional options.                     |
| New Version | When a new version is available,  |

### Open Modes

When opening a Gaea file, you can choose one of the following modes either in the file dialog, or by right-clicking the Recent Files list in the Startup Screen.

| Open Mode               | Description                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Normal                  | Open the file normally.                                                                                                                                                                                                                                                                                            |
| Force low resolution    | Force the file to use 512 x 512 preview resolution. This is useful when your file is saved with a high resolution preview setting and you do not wish to wait for the high resolution previews to build. Session cache is ignored in this mode.                                                                    |
| Open and suspend engine | The file is opened at the saved resolution, and session caches are also loaded. However, the Suspend Engine option in the @graph is turned on so the nodes are not processed until the engine is resumed manually. This is useful for making quick adjustments to a file without waiting for previews to be built. |


### Menu Commands

The menu in the top right gives you access to additional options.

| Menu Command        | Description                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Preferences         | Opens the @preferences dialog.                                                                                                                                                                                                   |
| Disable 3D Viewport | This option lets you disable the 3D viewport and replaces it with the 2D @viewport. This can be helpful for diagnosing problems, working in only the 2D view, or quickly changing the settings in an existing file for building. |
| Help                | Takes you to this documentation.                                                                                                                                                                                                 |
| About               | Displays version and other information for the installed version of Gaea.                                                                                                                                                        |
| Exit                | Exits Gaea.                                                                                                                                                                                                                      |

## Erosion Studio

![](/images/ui/start1.webp)

| Project Commands | Description                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| New Sculpt       | Import an existing heightfield into Erosion Studio to begin a new sculpting project.                                |
| Open Project     | Open a previously saved sculpting project to resume work, or reapply the procedural sculpt on an updated heightmap. |


## Version Updates

![](/images/ui/start2.webp)

Clicking the New Version command lets you see the release notes and changelog for any new versions that are released. You can review the notes and choose to upgrade.

{.NOTE}
> When possible, Gaea will try to use a patch upgrade to reduce the download size to avoid using unnecessary bandwidth on your internet connection.


## Quickstarts

![](/images/ui/start3.webp)

The Quickstarts browser lets you open examples and technique demonstration projects that ship with Gaea.