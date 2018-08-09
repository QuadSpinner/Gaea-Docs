---
uid: Post-Processing
title: Post Processing
---

# Intrinsic Post Processing
The Post Process tab sits right next to the Properties tab, and provides quick access to common functions. In this release, we have added a limit set of common functions, but more will be added later once certain under-the-hood changes are complete.

You can use autolevel and clamp to control your node without having to add a second node. This will help you keep your graph clean.

The Influence slider is a very simple yet powerful tool for layering effects. It blends the output back with the input, allowing you to manage the influence of the current node.

Here is an example: a heavily eroded terrain goes through Recurve, but in Recurve, the influence is set to ~0.5, which gives us a more realistic looking output of Recurve, while being able to use strong values in Recurve to create long striations.