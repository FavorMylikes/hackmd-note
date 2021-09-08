---
layout: single
title:  "Texture for original model And Cmake on OpenMVS"
date:   "2021-09-07 22:21:17 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221533.png
---

## Texture at original mesh

|name|size|comment|vertices|faces|
|-|-|-|-|-|
|mesh-original|2.1G|Original Block Merge|||
|mesh-original-building|2.1G|Building only|||
|mesh-original-plant|429M|Plant only|||
|mesh-original-reduce-50p|1.0G|maya reduce 50%|||
|mesh-original-reduce-50p-50p|529M|maya reduce 25%|||
|mesh-original-reduce-50p-50p-50p|265M|maya reduce 12.5%|694001|1361715|

- case1
  - params
    - `block[0:4]`
    - `model = mesh-original-reduce-50p-50p-50p`
  - cost
    - `memory=12G`
    - `load_image=16m42s`
    - `assigning=33m56s`
    - `generating texture atlas=1h52m15s`
    - `mesh texturing=2h26m13s`
    - `save=34s`

- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221449.png" alt="20210907221449" height="200"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221533.png" alt="20210907221533" height="200"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221635.png" alt="20210907221635" height="200"/>
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221731.png" alt="20210907221731" height="200"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221825.png" alt="20210907221825" height="200"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221916.png" alt="20210907221916" height="200"/>

## Prepare Requirement of OpenMVS

- vcpkg install
  - make sure you have specift args `--triplet x64-windows`

```powershell
vcpkg install zlib boost-iostreams boost-program-options boost-system boost-serialization eigen3 cgal[core] opencv glew glfw3 --triplet x64-windows
```

- add `CMAKE_TOOLCHAIN_FILE`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907230631.png" alt="20210907230631" height="200"/>

- build with vs 2019
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907230743.png" alt="20210907230743"/>
