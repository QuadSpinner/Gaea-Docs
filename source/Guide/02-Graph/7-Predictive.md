---
uid: learning
title: Predictive System
altkey: smartsearch
alttitle: Smart Search
---

## Learning and Predictive System

Gaea's internal (and fully local) Predictive System learns your node creation and connection patterns as you work. This system is built into the @conveniences and the @toolbox.

Once you get used to the predictive suggestions, you can halve your graph creation times in most instances.

### How does it work?

Gaea keeps track of the nodes you use, and how different nodes are connected to each other. It then predicts the type of node you might want to create and puts that first in the list. 

The predictions are just a suggestion. They show up separately from the main Create menu and are completely optional.

## Predicting connections

When the Quick Create menu shows up, it will attempt to detect if any patterns exist and try to suggest nodes that you are likely to use.

For example, if you find yourself connecting Autolevel to the Flow output of the Erosion node, dragging out a connection from the Flow port and dropping it into empty space on the Graph surface will bring up the Quick Create menu and Autolevel may be one of the suggested nodes.

![](/images/ui/predictive-port1.webp){.w-75}
![](/images/ui/predictive-port2.webp){.w-75}

The suggestions are color coded to help you quickly identify the type of the nodes.


## Showing most-used nodes

In the Toolbox's menu, you can select "Show most-used nodes only". This will hide from the toolbox the nodes you don't use frequently, giving you more screen space and making it easier to find the nodes you do use.

{.TIP}
> The other nodes are still available in the Quick Create menu and Search box.

For easier access, you can do this frequently using the small toggle switch next to the menu.

![](/images/ui/predictive-toolbox.webp)

## Helping Gaea learn

Gaea's predictions are based on its understanding of your usage. You can direct it to learn from existing files or the currently open file from the @toolbox menu.

![](/images/ui/predictive-ui-predictive-learn.webp)

You can choose how far to go into your Gaea docs folder. Gaea will then parse every file to learn the connection patterns and preferences. It may take a few moments depending on how many files you have in your Gaea docs.

![](/images/ui/predictive-ui-predictive-learning.webp)

Once finished, Gaea will immediately be able to give you improved predictions.

![](/images/ui/predictive-ui-predictive-learned.webp)

This directed learning mechanism can be quite useful when creating a clean installation or installing on a new machine.
