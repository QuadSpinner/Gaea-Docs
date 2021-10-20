---
uid: tut-crater-cavein
title: Crater Cave-in
---

In this tutorial, I'm using the new Shaper node to bulk up a crater, and then using slope biased Erosion to create gentle erosion just inside the crater.

![](/images/tut/Crater-1.webp)

First, I created a crater (default settings).

![](/images/tut/Crater-2.webp)

Then mixed it with a random Mountain node from the default scene. This creates a slab of slanted material embedded into the side of the crater. Look at the post processing settings too. I adjusted the height of the Combine output by leveling it up then clamping it down. (I also cheated: I used Max right there instead of changing the main settings. Both methods would do the same thing in this case.)

![](/images/tut/Crater-3.webp)

The Shaper node bulks up the terrain. By disabling detail preservation, the outlying area looks nice and soft, which can be particularly useful for an alien looking environment. This can be suitable for Earth too. 

![](/images/tut/Crater-4.webp)

Finally, with the Erosion node, I used Slope Bias in Selective Processing. This targets just steep slopes inside the crater. Because of the smooth bulk-up via Shaper, the outside area is too shallow to be affected by such steep settings.

And there you have it. Looks like something a space worm crawled out of and back into, with the sand collapsing in.

Have fun with Shaper.
