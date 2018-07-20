Gaea supports setting an arbitrary scale for your terrains through the new Terrain Definition panel. If you're a casual terrain artist, this won't affect your workflow too much — the defaults will be sufficient. But if you're creating precisely scaled terrains, the Terrain Definition is your best friend.

## Terrain Definition
The Terrain Definition popup is found in the main toolbar.

You can define the Base and Height of your terrain in meters. Both are counted from sea level (0.0m). The Scale determines the extent of the entire terrain. By default, Gaea terrains are set at sea level (Base: 0m), just over 3km tall (Height: 3,200m), and 5 x 5 square kilometers (Scale: 5,000m) wide.

3km is usually more than enough for most terrains. Mt. Everest is 8.8km tall! Going that tall is not recommended unless you really know how to handle the side effects of such tall terrains.

Note: Terrain Definition is non-destructive. You can scale your terrain, and the update will be applied on the fly without requiring a rebuild of your terrain. You can change the values as often as you like.

## Full Range vs. Clamped
The new Output node is the primary way to save your output. It automatically saves the specified file when a full Build is initiated from the Export panel.

By default, it exports Clamped values, but you can choose to export a Full Range map by enabling Full Range in the Output node's properties.

### What's the difference?
Here you can see the two outputs: Clamped and Full Range. The main difference is that Clamped is limited to the height set in the Terrain Definition, while Full Range ignores both the Base and Height settings, and exports the entire gradient range in its natural form (32-bit floating point).

### When should I use Full Range?
Most of the time, you won't need to use it. Rare cases where it is useful is when you intend to manually scale the terrain vertically later; or you want to manually edit or sculpt the terrain in Photoshop, ZBrush or Mudbox and need as much detail as possible.

If you do use the Full Range export, it is best to use the OpenEXR (.exr) format to preserve the values as best as possible.

You can always export a copy with clamped values, and use that as a guide for vertically resizing the externally edited Full Range output.