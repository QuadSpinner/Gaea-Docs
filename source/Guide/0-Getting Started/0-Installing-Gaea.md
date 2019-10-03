---
uid: installing
title: Installing Gaea
---

## Software Requirements
- Microsoft [.NET Framework 4.7](https://support.microsoft.com/en-us/help/3186497/the-net-framework-4-7-offline-installer-for-windows) or later.
- Microsoft [Visual C++ 2017 Runtime](https://aka.ms/vs/15/release/vc_redist.x64.exe).

If either is not detected, the installer will try to download them automatically.

## Normal Install
Installing Gaea is a simple process. Depending on your installation location, you may need administrative privileges.

1. Download the [latest version](http://quadspinner.com/gaea/download).
2. Run the downloaded .exe file.
3. By default, Gaea installs to `C:\Program Files\QuadSpinner\Gaea` but can be directed to any other folder. For security purposes, we recommend the `C:\Program Files` folder.
4. Once setup is complete, Gaea will launch.
5. Follow the on-screen questions to set up your default preferences.
6. The Gaea central project repository and build stacks are placed in `Documents\Gaea\` by default. However, you can change this folder to any other location through the introduction dialog, or at any later time via the Preferences.

---

## Admin Install
**Enterprise Edition only**

The Gaea installer is flexibly built for administrative and unattended installations.

1. Download the [latest administrative install package](http://quadspinner.com/gaea/download).
2. Unzip the package and deploy remotely as per your preferences.
3. Ensure the prerequisites (.NET and VC Runtime) are installed on the end-machine. They have their own unattended install options.

### Authorization Options
1. Run the command line `Gaea.exe -install "C:\license.qkey"` pointing to the local or network location of the license key. This will authorize the installation.
2. Alternatively, copy the license file to the same folder as `Gaea.exe`.

### Floating Server
This feature is currently in development and may not be available until version 1.1. Please contact technical support for an interim alternative.

---

## Clean Installation

If you were using our older EXE installers, or have encountered an issue in a new build, we recommend a clean installation.

### Removing old installations
The old EAPs were installed using a self-extracting executable (SFX), so there was no uninstall for them. You have to manually remove the files.

{.WARNING} 
> At this point, if you have already installed the MSI based Gaea EAP 6002, first uninstall that using the shortcut in the start menu (“Uninstall Gaea EAP”) or from the Control Panel. Then follow the steps below.

1. Ensure `Gaea.exe` or `Archon.exe` is not running in Task Manager. If either is running, end that process.
2. If an uninstall entry is available in Control Panel, remove Gaea using the uninstaller.
3. Delete the Gaea install folder. Typically `C:\Program Files\QuadSpinner\Gaea EAP`. If you have multiple installs, delete all of them to avoid contamination.
4. Delete the Gaea settings folder. Typically `C:\Users\[YOU]\AppData\Roaming\QuadSpinner\Gaea`. Please note, this will remove all your preferences so you will need to re-enter your settings.
5. Delete the folder `C:\Users\[YOU]\AppData\LocalLow\QuadSpinner\`.
6. Delete any old shortcuts on your desktop, `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\QuadSpinner` and `C:\Users\[YOU]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\QuadSpinner`
7. If any of the above folders can’t be deleted, reboot your computer and try again.

Gaea does not use the registry for any functional purposes. There is no need to clean registry entries, as they don’t affect the workings of the software.

### Install a fresh copy

With the old Gaea EAP and its residual traces removed, you can install anew. Follow the steps at the top.

If Gaea does not launch or fails in between, run the Watson Diagnostics Tool in the start menu and send the log (generated on your desktop) to QuadSpinner Tech Support.
