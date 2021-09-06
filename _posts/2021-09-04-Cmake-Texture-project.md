---
layout: single
title:  "Cmake Texture project"
date:   "2021-09-04 14:11:16 +0800"
categories: tutorial
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210903234604.png
---

## vcpkg install

- set proxy

```power
$env:HTTP_PROXY="localhost:4780"
$env:HTTPS_PROXY="localhost:4780"
```

## Camke generator

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210906214320.png" alt="20210906214320"/>

## Warning

- CMP0074
  - log

    ```log
    Policy CMP0074 is not set: find_package uses <PackageName>_ROOT variables.
    Run "cmake --help-policy CMP0074" for policy details.  Use the cmake_policy
    command to set the policy and suppress this warning.

    Environment variable Eigen3_ROOT is set to:
    ...
    For compatibility, CMake is ignoring the variable.
    ```

  - [CMP0074 explain - cmake.org](https://cmake.org/cmake/help/latest/policy/CMP0074.html)
  - Fix
    - add `cmake_policy(SET CMP0074 NEW)` or `cmake_policy(SET CMP0074 OLD)` before `project`

## inheritEnvironments

- `linux_arm`: Target ARM Linux remotely.
- `linux_x64`: Target x64 Linux remotely.
- `linux_x86`: Target x86 Linux remotely.
- `msvc_arm`: Target ARM Windows with the MSVC compiler.
- `msvc_arm_x64`: Target ARM Windows with the 64-bit MSVC compiler.
- `msvc_arm64`: Target ARM64 Windows with the MSVC compiler.
- `msvc_arm64_x64`: Target ARM64 Windows with the 64-bit MSVC compiler.
- `msvc_x64`: Target x64 Windows with the MSVC compiler.
- `msvc_x64_x64`: Target x64 Windows with the 64-bit MSVC compiler.
- `msvc_x86`: Target x86 Windows with the MSVC compiler.
- `msvc_x86_x64`: Target x86 Windows with the 64-bit MSVC compiler.

## Reference

- [CMake-02:核心概念](https://www.jianshu.com/p/fcab912ab357)
