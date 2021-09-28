---
layout: single
title:  "Build and run TextureMesh at UCAS machine"
date:   "2021-09-24 18:23:30 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924191117.png
---

## Reinstall vcpkg at xps

- Just remove vcpkg directory.

## Compile and Build Texture_extract at xps machine

- The files need change
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924182630.png" alt="20210924182630"/>
  - Copy `CMakeLists.txt` from `TextureMesh` to `TextureMesh_extract`, change `TextureMesh` to `TextureMesh_extract` at the same time
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924182810.png" alt="20210924182810"/>
  - Change `include` at `TextureMesh_extract.cpp` and `interfaceCamera.hpp`
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924182913.png" alt="20210924182913"/>
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924182926.png" alt="20210924182926"/>
- Build with `x64`

## Same example after texture

- original
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924184348.png" alt="20210924184348"/>
- HC-lap-smooth
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924184427.png" alt="20210924184427"/>
- gussian
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924184454.png" alt="20210924184454"/>

## Detail

- xps result
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210916232251.png" alt="20210916232251" height="100px"/>
- ucas machine result
  - the blue mesh has gone
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924191016.png" alt="20210924191016"/>
- code compare of `SceneTexture.cpp`
  - Left is the code from `liuchao`
  - Right is the newest from `OpenMVS.git`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210924191117.png" alt="20210924191117"/>
