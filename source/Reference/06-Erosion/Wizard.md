---
uid: Wizard
title: Wizard
---

## Wizard

The Erosion Wizard is a lightweight wrapper for the @Erosion node. It simplifies the settings through curated presets, and provides secondary passes for additional processing. The Wizard node is meant to replace the @Erosion node - in fact, it is meant to augment it. For many direct and basic uses, Wizard can help achieve results much faster than with the @Erosion node.

#### Comparison to Erosion

Gaea gives you two ways to use our hydraulic erosion simulation process: the @Erosion node, which gives you absolute control over every aspect, or the @Wizard node which gives you easier access to the major aspects. Both use the same simulation underneath, but provide different interfaces. Both have their pros and cons.

@Erosion provides access to all the simulation controls, however, it can take some time to find the sweet spot for many different settings. @Wizard on the other hand provides fewer, easier choices and various "recipes" for creating different types of results, however, it does not allow you to fine tune your results.

For a comparison between the two, see @erosions.

#### Phases and Recipes

The goal of the Wizard node is to quickly create common erosion features with minimal effort. For this purpose, the erosion simulation is packed into two parts: Phases and Recipes. The Wizard node can perform the simulation in two phases, and you can define the recipes for each phase. Recipes are partially predefined erosion settings that give specific results.

Phase 1 is fully customizable. You can choose a recipe and define all the parameters for the simulation such as channel depth, sedimentary deposit amount, and more. The first phase can be repeated several times by changing the Phase 1 recipe, while ensuring each recurrance uses the same parameters.

Phase 2 is comprised of lightweight recipes that can be applied either on top of Phase 1, or by itself. It can create rivers, low talus, deep furrows, and more.

#### Prevent over-erosion

A common problem many users encounter is that strong erosion can destroy the precise shape they have created. This is because erosion, by definition, will remove material from the terrain to create erosive results. The `Bulk` parameter helps prevent this. By bulking up the terrain even slightly, sharper peaks and delicate areas are less prone to become too eroded or spikey.