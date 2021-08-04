---
layout: single
title:  "Robotics-Perception-Week3"
date:   "2021-8-4 16:28:14 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804193756.png
---

## [colmap/colmap](https://github.com/colmap/colmap)

- feature_extractor 特征提取
- matcher
  - exhaustive_matcher 特征匹配
  - vocab_tree_matcher
  - sequential_matcher
  - spatial_matcher
  - transitive_matcher
  - matches_importer
- mapper
  - Sparse 3D reconstruction / mapping of the dataset using SfM after performing feature extraction and matching
- model_converter
  - Convert the COLMAP export format to another format, such as PLY or NVM

## SFM[Structure from Motion]

- [mapillary/OpenSfM - github](https://github.com/mapillary/OpenSfM)
  - Open source Structure-from-Motion pipeline
  - [cmsc426](https://cmsc426.github.io/sfm/)
- [official website](https://www.opensfm.org/)

- feature_extractor

## MVS[Multi View Stereo]

- [cdcseacave/openMVS - github](https://github.com/cdcseacave/openMVS)
- InterfaceVisualSFM 稠密稀疏化
- DensifyPointCloud 稠密重建
- ReconstructMesh 重建mesh
- RefineMesh 网格优化
- TextureMesh 文理贴图

## Reference

[实战 | 手把手教你跑三维重建代码！ - 计算机视觉life的文章 - 知乎](https://zhuanlan.zhihu.com/p/360412732)
