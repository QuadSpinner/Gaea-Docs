---
uid: article-deployment
title: Mass Deployment on a Network
---

There are two ways to install Gaea on multiple machines. Below you will find detailed steps for both scenarios. If you require further help or have a specific situation 

## License Key

For both methods, the most useful way is to have a single key encoded to run on multiple machines. Please [contact us](https://quadspinner.com/support) to acquire such a key. All volume purchases are automatically issued a key like this.

The below methods assume you have such a key. If you don't, and instead have have multiple keys, you will need to use different keys per installation in both scenarios below.

## Administrative Install

To run the installer silently and install to the default path of `C:\Program Files\QuadSpinner\Gaea\`, use the followin command line. You will require Administrative privileges.
```
Gaea-1.2.1.1.exe /s
```

To choose the install path specify it with a `/D=PATH` argument. If your path is not protected, you will not need Administrative privileges.
```
Gaea-1.2.1.1.exe /S /D=C:\Gaea
```

Finally, copy the license key to the installation folder.

## Manual Mass Deployment

For mass deployment, the following may be an easier process as Gaea is now fully portable.

1. Install Gaea to a temporary folder on any machine.
2. Copy the license key to the install folder.
3. Now you can create a zip of the folder or copy it however you prefer to as many computers as you like.

>{.TIP}
> If you are going to use Gaea with Houdini or another application via a Bridge, please run Gaea and close it. This will initiate local files repositories and registry settings that may be required by other applications to detect and communicate with Gaea.

## Upgrading

You can patch or upgrade installations in the same was, regardless of the option you choose.