---
uid: viewport
title: Viewport
---

<div class="small-image">

# Using the Viewport

The viewport is your primary method of examining and exploring terrains. It provides a heavy duty 3D view of your terrain at different resolutions.

Gaea’s viewport harnesses the powerful Unity engine, and has been deeply customized to fit advanced terrain systems. The viewport can process an 8.3 million polygon terrain in milliseconds, allowing you to work at high resolution.

# 3D Viewport

### Orbit View

![](/images/ui/Viewport-Orbit.jpg)

- `Alt` and `Mouse Left` to drag. Can be customized in @preferences.
- `W`,`A`,`S`,`D` for directional movement. 
- `Mouse Wheel` for zooming.
- `Mouse Middle` for panning.

### First Person View

![](/images/ui/Viewport-FPS.jpg)

- `Alt` and `Mouse Left` to drag.*
- `W`,`A`,`S`,`D` for directional movement.
- `Q`, `E` to move up and down.
- `SPACE` to teleport to mouse location (on terrain only).
- `Mouse Wheel` for zooming.

### Orthographic View

![](/images/ui/Viewport-Ortho.jpg)

- `Mouse Wheel` for zooming.
- `W`,`A`,`S`,`D` and `Mouse Middle` for panning.

# 2D Viewport

The 2D viewport provides flat previews with pixel-to-pixel accuracy. In many situations, especially when dealing with masks, you can see visual data that may not be readily visible in the 3D viewport. 

The 2D view is available directly in the main window alongside the 3D view when activated from the main toolbar in the top left. It can also be opened as a separate window through the Graph Toolbar in the bottom right.

- `Mouse Wheel` for zooming.
- `Mouse Middle` for panning.

## 2D Mode

![](/images/ui/Map-2D.jpg)

The 2D mode shows a basic heightfield in grayscale, with black representing lower areas and white representing higher areas. This is a great way to examine your terrain from an unbiased perspective, especially when dealing with 2D data; such as data map outputs, secondary output from erosion, and so on.

## Equalized Mode

![](/images/ui/Map-Eq.jpg)

If the 2D view is too difficult to see, the Equalized mode emphasizes the image to help you see better. This is particularly helpful when working with delicate masks and other 2D maps. The equalization process is superficial and does not affect the actual terrain.

## 3D Mode

![](/images/ui/Map-3D.jpg)

In the 3D mode, a shaded orthographic representation of the terrain is displayed instead of the grayscale heightfield. This makes it easier to visualize finer details which may not be apparent to the human eye in the simple 2D view.

![](/images/ui/Map-Overlay.jpg)

Additionally, you can visualize the secondary output as flat images or overlays on the primary output. To access secondary outputs, right-click anywhere in the 2D viewport. The mask is overlaid in red on the grayscale 3D terrain.

## Additional Options

The menu in the bottom right corner gives you access to additional options for the 2D view - including the secondary outputs mentioned above, lighting control for the 3D mode, and the ability to save the current 2D view to a PNG file.


## Lighting

![](/images/ui/Pop-Atmosphere.png)

Aliquam nunc. Fusce at lacus in turpis tincidunt congue. Nam tempor sagittis massa. Cras luctus vehicula ligula. Donec pretium egestas lacus. Proin ac velit ac erat condimentum dictum. Donec massa elit, laoreet a, varius quis, dapibus a, lectus. Proin pellentesque nibh tristique odio. Sed odio magna, euismod ac, sodales eu, suscipit eget, lectus. Aliquam libero. Cras leo. Donec ac libero vel nibh nonummy mollis. Vivamus a orci. In interdum mattis nunc. Donec condimentum ultricies nisi. Cras sit amet quam. Sed non quam at est venenatis ultricies. In nec neque. Proin ut nunc. Mauris dictum sollicitudin nibh. 

## Water Surface

![](/images/ui/Pop-Water.png)

Aliquam nunc. Fusce at lacus in turpis tincidunt congue. Nam tempor sagittis massa. Cras luctus vehicula ligula. Donec pretium egestas lacus. Proin ac velit ac erat condimentum dictum. Donec massa elit, laoreet a, varius quis, dapibus a, lectus. Proin pellentesque nibh tristique odio. Sed odio magna, euismod ac, sodales eu, suscipit eget, lectus. Aliquam libero. Cras leo. Donec ac libero vel nibh nonummy mollis. Vivamus a orci. In interdum mattis nunc. Donec condimentum ultricies nisi. Cras sit amet quam. Sed non quam at est venenatis ultricies. In nec neque. Proin ut nunc. Mauris dictum sollicitudin nibh. 

</div>
