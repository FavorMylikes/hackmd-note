---
layout: single
title:  "Differentiable Renderer OverView"
date:   "2022-8-11 22:07:41 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png
---

## 微分渲染的流程以及纹理问题

## Dataset

- [BlendedMVS](https://github.com/YoYo000/BlendedMVS)
  - Format
  - image(w/o mask), camera, pdm(The depth and probability maps)
- [Tanks and Temples](https://www.tanksandtemples.org/download/)
  - Description
    - gt：点云数据，视频数据，照片数据
  - Intermediate
  - Advanced
- [贵州]
  - 渲染图片(非真实图片)，未简化模型+简模(无地面)，lod2

## Reference

- NMR 2018 cvpr
  - [可训练的神经三维网格渲染器（Neural 3D Mesh Renderer）- CSDN](https://blog.csdn.net/raodotcong/article/details/113362804)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220811220937.png" alt="20220811220937"/>