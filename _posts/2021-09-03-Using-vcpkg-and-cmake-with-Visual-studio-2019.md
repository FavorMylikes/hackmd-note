---
layout: single
title:  "Using vcpkg and cmake with Visual studio 2019"
date:   "2021-8-30 01:00:31 +0800"
categories: tutorial
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210903234604.png
---

## C++ project package manager

### Comparison

- Read thoes detail at [Reddit](https://www.reddit.com/r/cpp/comments/9m4l0p/conan_vcpkg_or_build2/)
- vcpkg
  - [vcpkg_repo]: https://github.com/microsoft/vcpkg
    [vcpkg_fork]: https://img.shields.io/github/forks/microsoft/vcpkg.svg?style=social&label=Fork&maxAge=2592000
    [vcpkg_star]: https://stars.medv.io/microsoft/vcpkg.svg

    |Repository|spark|star|
    |:-:|:-:|:-:|
    |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=microsoft&repo=vcpkg&show_owner=true)][vcpkg_repo]|[![Sparkline](https://stars.medv.io/microsoft/vcpkg.svg)][vcpkg_repo]|<a href='https://starchart.cc/microsoft/vcpkg'><img src='https://starchart.cc/microsoft/vcpkg.svg' width='200px'/></a>
- Conan
  - [conan_repo]: https://github.com/conan-io/conan
    [conan_fork]: https://img.shields.io/github/forks/conan-io/conan.svg?style=social&label=Fork&maxAge=2592000
    [conan_star]: https://stars.medv.io/conan-io/conan.svg

    |Repository|spark|star|
    |:-:|:-:|:-:|
    |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=conan-io&repo=conan&show_owner=true)][conan_repo]|[![Sparkline](https://stars.medv.io/conan-io/conan.svg)][conan_repo]|<a href='https://starchart.cc/conan-io/conan'><img src='https://starchart.cc/conan-io/conan.svg' width='200px'/></a>
- build2
  - [build2_repo]: https://github.com/build2/build2
    [build2_fork]: https://img.shields.io/github/forks/build2/build2.svg?style=social&label=Fork&maxAge=2592000
    [build2_star]: https://stars.medv.io/build2/build2.svg

    |Repository|spark|star|
    |:-:|:-:|:-:|
    |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=build2&repo=build2&show_owner=true)][build2_repo]|[![Sparkline](https://stars.medv.io/build2/build2.svg)][build2_repo]|<a href='https://starchart.cc/build2/build2'><img src='https://starchart.cc/build2/build2.svg' width='200px'/></a>

## Install vcpkg

### Install Windows

```console
git clone https://github.com/microsoft/vcpkg
cd vcpkg
bootstrap-vcpkg.bat
```

### install package

```console
vcpkg install eigen3
```

### Check support platform

```console
vcpkg help triplets
```

### Check Installed package

```power
vcpkg list
```

## Using vcpkg with cmake under Visual studio 2019

- For windows Visual studio 2019

```power
vcpkg install sqlite3:x64-windows
```

- 允许全局引用

```power
vcpkg integrate install
```

- Change `CMakeLists.txt`

```cmake
cmake_minimum_required (VERSION 3.8)

project (vs_cmake CXX)

find_package(unofficial-sqlite3 CONFIG REQUIRED)
find_package(fmt REQUIRED)
find_package(range-v3 REQUIRED)
find_package(cxxopts REQUIRED)


add_executable (vs_cmake "vs_cmake.cpp" "vs_cmake.h")
target_compile_features(vs_cmake PRIVATE cxx_std_20)
target_link_libraries(vs_cmake
  PRIVATE
    fmt::fmt
    range-v3::range-v3
    cxxopts::cxxopts
    unofficial::sqlite3::sqlite3)
```

- `project` 指定项目名
- `find_package` 指定项目依赖
- `add_executable` 指定编译后的可执行程序
- `target_compile_features` 指定编译版本`cxx_std_20`, 使用`/std:c++20`作为编译版本
- `target_link_libraries` 为项目指定链接库

### add Cmake Tool chain

- add `"cmakeToolchain": "\path\to\vcpkg\\scripts\\buildsystems\\vcpkg.cmake"` at `CMakeSettings.json`
- or use `-DCMAKE_TOOL_CHAIN=` at command line
