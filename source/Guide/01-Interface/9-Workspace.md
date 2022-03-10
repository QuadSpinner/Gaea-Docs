---
uid: workspace
title: Customize Gaea
---

## Look and Feel

#### Graph Style

#### Connections Style

#### Colors



## Workspace

#### Workspace Preferences

By default, Gaea will reset to its default workspace layout on startup. If you want Gaea to remember any panel size changes and visibility of 2D preview, and more.

- Open the @preferences dialog and modify the desired elements.
- You can also choose `Save Layout` to also save the sizes of the different panels of the main UI. Use `Reset Layout` to 
- Use `Reset to Default` to reset all settings to Gaea's standard default.


#### Scaling the UI

Gaea's UI scales natively to high resolution monitors and high DPI resolutions. However, on higher resolutions the UI may appear small. You can easily scale it up from the Zoom menu situated at the top right of the Gaea window. You can choose between 80%, 100%, 125%, 150%, and 175%.

Conversely, if you're using a 1080p or lower resolution, the UI may appear slightly large. You can scale down to 80% to fit the UI within your resolution.

#### Default Startup Terrain

By default, when you create a new file in Gaea, it will be blank. If you wish to use a custom .tor file with a specific node setup and Build Manager settings, you can do so by saving the file as `start.tor` in the root of Gaea's AppData folder.

The AppData folder is typically located at `C:\Users\YourUsername\AppData\Roaming\QuadSpinner\Gaea\` so the file would be `C:\Users\YourUsername\AppData\Roaming\QuadSpinner\Gaea\start.tor`.

Now when you create a new file, Gaea will create a new project based on this file.

If you wish to go back to the default blank file, just delete the `start.tor` file.