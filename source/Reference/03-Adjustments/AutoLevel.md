---
uid: AutoLevel
title: AutoLevel
---

AutoLevel is a composite leveling node that allows you to level your terrain using one or more methods. This node can be useful when you want to stretch your terrain vertically or emphasize certain types of heights. It can also be very useful when working with masks; such as Flow output from the @Erosion node, or any other 2D mask that may look too faint.

By default, AutoLevel automatically stretches the heights of the terrain between 0 to 100% height while maintaing the proportions.

All leveling modes provide a strength slider to manage the amount of modification.

{.TIP} 
> AutoLevel is recommended over Equalize in most situations. The latter may make terrains look too bulky and remove delicate features in some cases.


