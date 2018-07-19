- [Requirements](#requirements)
- [Normal Installation](#normal-installation)
- [Administrative Install](#administrative-install)
    - [Authorization Options](#authorization-options)
    - [Floating Server](#floating-server)

## Requirements
- Microsoft [.NET Framework 4.7](https://support.microsoft.com/en-us/help/3186497/the-net-framework-4-7-offline-installer-for-windows) or later.
- Microsoft Visual C++ Runtime 14.xx.xx.xx (included)

## Normal Installation
Installing Gaea is a simple process. Depending on your installation location, you may need administrative privileges.

1. Download the [latest version](http://quadspinner.com/gaea/download).
2. Run the downloaded .exe file.
3. By default, Gaea installs to C:\Program Files\QuadSpinner\Gaea but can be directed to any other folder. For security purposes, we recommend the Program Files folder.
4. Once setup is complete, Gaea will launch.
5. Follow the on-screen questions to set up your default preferences.
6. The Gaea central project repository and build stacks are placed in Documents\Gaea\ by default, however you can change this folder to any other location through introduction dialog, or at any later time via the Preferences.

---

## Administrative Install
**Enterprise Edition only**

The Gaea installer is flexibly built for administrative and unattended installations.

1. Download the [latest administrative install package](http://quadspinner.com/gaea/download).
2. Unzip the package and deploy remotely as per your preferences.
3. Ensure the prerequisites (.NET and VC Runtime) are installed on the end-machine. They have their own unattended install options.

### Authorization Options
1. Run the command line `Gaea.exe -install "C:\license.qkey"` pointing to the local or network location of the license key. This will authorize the installation.
2. Alternatively, copy the license file to the same folder as `Gaea.exe`.

### Floating Server
This feature is currently in development and may not be available until version 1.1. Please contact technical support for an alternative in the meantime.