---
uid: tut-selective-erosion
title: Selective Erosion
---

Sometimes you may want an additional peak in a scene, or want to erode two portions differently. This basic technique will show you how to do that, and leverage the @Erosion node's capabilities in creating new mountains out of a simple shape.

We start with this basic @Mountain. We can take the main peak and turn it into a much larger, slightly isolated peak - like something you might find in the Alps.

![](/images/ref/Erosion/selective-erosion-001.webp){.w-100}

We will use the @Erosion node to help create that peak. But Erosion needs a lot of bulk to erode into a mountainous shape, and our peak right now is too shallow. So we use a @Height node to mask out the top of the peak.

![](/images/ref/Erosion/selective-erosion-002.webp){.w-100}

Then we use that as a mask for the @Clamp node. By pushing up the Clamp's minimum, we elongate that peak while retaining a relatively clean boundary with the rest of the terrain. The shape is not attractive, but that won't matter.

![](/images/ref/Erosion/selective-erosion-003.webp){.w-100}

For creating the actual peak, we send the same Height mask to the Erosion node as an Area input. By turning on Selective Processing and setting it to Precipitation Amount, we ensure rainfall occurs only in that region. We increase Strength and Duration, as well as Random Sedimentation and Inhibition. The intense erosion on that blocky shape carves it into a natural peak formation. (In an oversimplified way, that is actually how peaks are eroded in real life!)

![](/images/ref/Erosion/selective-erosion-004.webp){.w-100}

Now we use @Invert on the same mask.

![](/images/ref/Erosion/selective-erosion-005.webp){.w-100}

And send it to a second Erosion node in the same chain. This has milder settings, but still uses Selective Erosion. We use this to erode the rest of the terrain while ensuring the peak is untouched. There will still be enough overlap of the slopes that the two different erosions will merge nicely.

![](/images/ref/Erosion/selective-erosion-006.webp){.w-100}

And there you have it! You just created a realistic peak out of a blocky chunk!