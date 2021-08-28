---
uid: gaeaapi
title: Extensibility API
---
^future

## Gaea Extensibility API

The Gaea API provides a lightweight framework for users and vendors to extend Gaea with new nodes, custom functionality, and automation.

The API will part of the Gaea Software Development Kit (SDK) shipping with Gaea 2.0.

#### High Level Components

The API is divided into three high level components:
- **Nodes**: Create your own nodes using C# and C++/CLI, or C#-C++ interop.
- **Application Plugins**: Subscribe to Gaea events and introduce your own code using callbacks in C#.
- **Styles**: Create UI modifications, or your own styles for the interface.

These components will be available in Gaea 2.0.

#### Build Requirements

The SDK Build environment should consist of:

- Microsoft .NET 6.0 or higher
- Compatible IDE such as Visual Studio 2019, Visual Studio Code, or Rider
- Gaea SDK 2.0.0.5 or higher
- Local installation of Gaea with a Development License

Plugins can be written using C# or C++. For C++, you must use C++/CLI for the plugin, however may use pure C++ for internal processing and invoke it via the C++/CLI wrapper.