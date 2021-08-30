---
uid: quickstart_CollapsedCrater
title: Collapsed Crater
type: quickstart
---


## Collapsed Crater



![Crater: Profile = Impact Crater, Scale = 4.0, Depth = 2.0, Scale = 0.7, Height = 19.14%, Floor = 0.4, Depth = 0.5, Inner Scale = 18.21%, Modulate = 0.3, Lip = 95.36%](/images/quickstarts/Collapsed%20Crater/f7be0e50-6d26-4fee-9dee-61d22da4c0e4.png)


The Crater node is the perfect way to create the base structure for our crater. The Impact Crater profile with some modification creates this almost volcanic looking crater.

![Erosion: Duration = 6.02%, Downcutting = 93.15%, Inhibition = 71.49%, Random Sedimentation = 96.82%, Sediment Removal = 7.03%](/images/quickstarts/Collapsed%20Crater/f6afdc97-4ea2-4a81-860c-549b77f1d13e.png)


Erosion with very heavy Downcutting, some Random Sedimentation, and Sediment Removal creates this highly eroded look. Having strong flow lines is important for our intended look.

Clamp (Post Process) is used to reduce the height of the crater.

![Wizard: Strength = !!, Material = Rocky, Channel Width = High, Phase 2 = Collapsed](/images/quickstarts/Collapsed%20Crater/5457b754-6cbc-4910-8259-7341568cd390.png)


A second erosion pass, this time with the Wizard node, takes advantage of the existing erosive structure of the previous node and adds lots of sediments to the terrain. 

Extreme Strength and high Channel Width are the key driving forces of this erosion.
