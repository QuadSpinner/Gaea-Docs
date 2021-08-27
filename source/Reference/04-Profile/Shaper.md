---
uid: Shaper
title: Shaper
---

The Shaper node can bulk up, or bulk down, a terrain. Shaper is mainly created to add more "body" to landscape before eroding to avoid a `人` look after eroding. Usually, if you erode a `Λ` shape, you get `人` shape. If you apply Shaper, the pre-erosion shape becomes a `∩` shape, and after eroding it will be `Λ`, retaining the bulk in higher altitudes.

Shaper also lets you work in "local areas" so the effect is applied non-uniformly to the terrain. Additionally, you can also preserve fine details.

{.TIP}
> Shaper is a very useful tool that is fast and effective. You can use it through the @Fx node as well as the @postprocess. However, the Shaper node is the only way to use the advanced options.