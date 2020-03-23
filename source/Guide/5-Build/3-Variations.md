---
uid: variations
title: Creating Variations
---

# Build Mutations

Gaea provides a mutation facility during build to create multiple variations of the same terrain. You can select up to 99 mutations in the Build Manager. This will run the build once per each mutation where seeds of all nodes are randomized. Doing this gives you a unique terrain in every mutation while still following the core recipe of your graph.

![Build Mutations](/images/ui/Build-Mutations.png)

Each mutation’s .tor file is stored with the output, so you can manually tweak a specific mutation if desired.

You can also specify mutations in the command line in the @build-swarm.
