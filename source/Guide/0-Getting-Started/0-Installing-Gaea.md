---
uid: installing
title: Installing Gaea
---

## Installation

#### Software Requirements
- Microsoft [.NET Framework 4.8](https://dotnet.microsoft.com/download/thank-you/net48) or later.
- Microsoft [Visual C++ 2017 Runtime](https://aka.ms/vs/16/release/vc_redist.x64.exe).

If either is not detected, the installer will try to download them automatically.

#### Typical Install (Recommended)
Installing Gaea is a simple process. Depending on your installation location, you may need administrative privileges.

1. Download the [latest version](https://quadspinner.com/gaea/download).
2. Run the downloaded .exe file.
3. By default, Gaea installs to `C:\Program Files\QuadSpinner\Gaea` but can be directed to any other folder. For security purposes, we recommend the `C:\Program Files` folder.
4. Once setup is complete, Gaea will launch.
5. Follow the on-screen questions to set up your default preferences.
6. The Gaea central project repository and build stacks are placed in `Documents\Gaea\` by default. However, you can change this folder to any other location through installer, or at any later time via the Preferences.

#### Clean Installation

If you were using our older EXE installers, or have encountered an issue in a new build, we recommend a clean installation. Download the full installer from the link above, and during installation, check the option for "Clean Installation.

#### Administrative Install and Mass Deployment

See @article-deployment

#### Floating Server

This feature is currently in development and may not be available until version 1.4. Please contact technical support for an interim alternative.


## Branches

#### Production Ready

Production Ready builds are stable, and thoroughly tested both by the QA team and regular users. They are released once or twice every month.

Bleeding Edge features are rolled into these builds slowly, once they undergo thorough testing.


#### Bleeding Edge

Bleeding Edge builds are released once or several times per cycle. They are mostly stable, but not fully ready for production.

You get to try new features as they're added, and provide feedback very early so we can modify them to your satisfaction.

#### Install Side-by-side

Both install to different locations, and do not share settings or registry entries. This
gives you the flexibility to try new features without endangering your work projects.

## Version Scheme

A version such as `1.0.30.5` is comprised of four elements `Major` `.` `Minor` `.` `Build` `.` `Revision`:

**Major**
Only changed when a new, payable version is released. This happens perhaps once every two years.

**Minor**
Updated when a major set of features are added. This usually happens a few times a year.

**Build**
Updated every time there is a new release in the `Production Ready` branch. This happens once or twice a month.

**Revision**
Updated every time a new build is released in the  `Bleeding Edge` channel. This can happen once, or sometimes several times, in a week.

Revision is incremented also when a Bleeding Edge build is rolled into the Production Ready branch.

{.NOTE}
>The *Revision* element was reset with the release of Gaea 1.0.28 to avoid confusion with the frequent Bleeding Edge updates.
