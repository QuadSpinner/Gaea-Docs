---
uid: installing
title: Installing Gaea
---

## Installation

#### Software Requirements
- Microsoft [.NET Framework 4.8](https://dotnet.microsoft.com/download/thank-you/net48) or later.
- Microsoft [Visual C++ Runtime](https://aka.ms/vs/17/release/vc_redist.x64.exe).

If either is not detected, the installer will try to download them automatically.

#### Typical Install (Recommended)
Installing Gaea is a simple process. Depending on your installation location, you may need administrative privileges.

![Installing to Program Files will require Admin Privileges](/images/guide/setup1.webp)

1. Download the [latest version](https://quadspinner.com/gaea/download).
2. Run the downloaded .exe file.
3. By default, Gaea installs to `C:\Program Files\QuadSpinner\Gaea` but can be directed to any other folder. For security purposes, we recommend the `C:\Program Files` folder.
4. Once setup is complete, Gaea will launch.
5. Follow the on-screen questions to set up your default preferences.
6. The Gaea central project repository and build stacks are placed in `Documents\Gaea\` by default. However, you can change this folder to any other location through the  installer, or at any later time via the Preferences.

![The Documents repository is where your projects, presets, build output, and other data is kept.](/images/guide/setup3.webp)

{.WARNING}
> Choosing either the same folder for both the program and the data folder, or making the data folder a sub-folder of the program folder will lead to failure. Make sure the two paths have different roots. At the very least, you can setup a root folder with two folders `Program` and `Data` and point the respective paths there to avoid conflict.

#### Clean Installation

To clean your installation, instead of uninstalling and reinstalling, we recommend using the `Reset Settings (Clean Install)` option in @watson.

## Advanced Use Cases

#### Creating a Portable Installation

By default, Gaea stores its user data in `C:\Users\[username]\AppData\Roaming\QuadSpinner\Gaea\` (or `Gaea Bleeding Edge` for Bleeding Edge version.). You can force Gaea to use the installation folder itself. 

Go to the folder where Gaea is installed and create a new subfolder called `UserData`. Now when you start Gaea, it will use this folder for all user data and settings.

{.NOTE}
> You MUST have write privileges for this folder. Additionally, the existing AppData folder will be ignored. If you want to transfer the same settings, copy the contents of the `C:\Users\[username]\AppData\Roaming\QuadSpinner\Gaea\` folder into the `UserData` subfolder.

#### Administrative Install and Mass Deployment

See @article-deployment

#### Floating Server

This feature is currently in development and may not be available until version 2.0. Please contact technical support for an interim alternative.


## Branches

#### Production Ready

Production Ready builds are stable and thoroughly tested both by the QA team and regular users. They are released 1-2 times each month.

Bleeding Edge features are rolled into these builds slowly, once they undergo thorough testing.


#### Bleeding Edge

Bleeding Edge builds are released 1 or more times per cycle. They are mostly stable, but not fully ready for production.

You get to try new features as they are added and provide early feedback, so we can modify them to your satisfaction.

#### Install Side-by-side

Both builds install to different locations and do not share settings or registry entries. This
gives you the flexibility to try new features without endangering your work projects.

## Troubleshooting

#### If Gaea fails to start

- Ensure `Gaea.exe` and `Archon.exe` have firewall permissions for local TCP/IP communication, and are not being blocked by your antivirus software.
- Ensure you have at least 10GB of free space in your Windows temp directory and in the cache folder set in Gaea Preferences.
- Install the latest CPU and GPU drivers.
- See @nahimic

If none of these work, run @watson and file a ticket. Our support team will help you figure out the problem.