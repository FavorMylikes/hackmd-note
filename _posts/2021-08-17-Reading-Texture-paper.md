---
layout: single
title:  "Reading Texure paper"
date:   "2021-8-16 14:55:52 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817225945.png
---

## Reconstructing textured meshes from multiple range+rgb maps

> ISTI-CNR

### summary

- Minimizing redundancy and optimizing the color attribute represendtation
- Eliminate most of the color difference or discontinuity which exist in input images
  - cross-correlation
  - interpolation

### Work flow

- visibility calculation
  - get a set of valid cameras/images for the face
    - ray-tracing calculation[耗时]
    - hardware-accelerated OpenGL
      - 每个面一个颜色，用OpenGL直接渲染，选择相机能看到的颜色作为可观测颜色
      - 但如果多个面都投影到同一个像素的话，太小的面就会被判定为不可见
      - 优化
        - 通过迭代，每次迭代哪些尚未观测到的面
        - 随机抖动相机，或微调景深z-index，使得小面被观测到
- patches generation
  - reduce the number of patch
- sub-texture packing
  - locally-optimum greedy process
  - continuous texture but generally presents insufficient color continuity
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817225945.png" alt="20210817225945"/>
- imporving color matching and continuity
  - difference of color[iterate on vertices]
    - 面$f$点$v$，$image_1\to patch_1$ has color $c_1$
    - $image_2\to patch_2$ has color $c_2$
    - $\bar image_{1,2}-c_1$意味着，$patch_1$到$patch_2$需要改变的颜色
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817230948.png" alt="20210817230948"/>
  - pull-push interpolation method

### state of the art

- texture mapping
  - image registration
    - point pair[点对]
    - integrate geometric- and image-based alignment[几何对齐]
    - silhouette-based registration[轮廓匹配]
    - **Tsai algorithm**啥玩意
  - texture image is reconstructed from input image
    - map to mesh, sample color with **non-redundant manner and optimizing**
    - weight blend

## Texture for 9-9 file

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817164050.png" alt="20210817164050"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817192738.png" alt="20210817192738"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imga409b4eb5add76d66a1a713df1e5114.png" alt="a409b4eb5add76d66a1a713df1e5114"/>
