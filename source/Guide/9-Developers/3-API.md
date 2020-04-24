---
uid: gaeaapi
title: Extensibility API
---

# Gaea Extensibility API

The Gaea API provides a lightweight framework for users and vendors to extend Gaea with new nodes, custom functionality, and automation.

## High Level Components

The API is divided into three high level components:
- **Nodes**: Create your own nodes using C# and C++.
- **Application Plugins**: Subscribe to Gaea events and introduce your own code using callbacks in C#.
- **Styles**: Create UI modifications, or your own styles for the interface.

These components will be available in Gaea 2.0.

### Build Requirements
- Visual Studio 2017 or later
- .NET Framework 4.7.2 or higher

Plugins can be written using C# or C++. For C++, you must use C++/CLI for the plugin, but may use pure C++ for internal processing if you want to focus on pure performance.