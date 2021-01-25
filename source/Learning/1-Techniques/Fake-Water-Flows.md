---
uid: tut-fake-flow
title: Fake Water Flows
---

If you want to create water flows, like you might find at the beach, you can fake them using @Erosion.

![](/images/tut/Fake-1.webp)
![](/images/tut/Fake-2.webp)

First, we set up a @SlopeNoise and erode it. The Erosion settings of high downcutting values (all 3 sliders) are to promote wider, sandier flows.

![](/images/tut/Fake-3.webp)

Then we create a @Perlin with low octaves and clamp it down to a flat-ish state.

![](/images/tut/Fake-4.webp)

Finally, subtract the Wear map from the Perlin.