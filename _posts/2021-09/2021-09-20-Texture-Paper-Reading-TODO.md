---
layout: single
title:  "Texture Paper Reading TODO"
date:   "2021-09-20 20:18:05 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910164754.png
---

## [Texture Mapping Progressive Meshes - Microsoft Research](https://dl.acm.org/doi/abs/10.1145/383259.383307)

- ![j](https://img.shields.io/badge/sig_graph-2001-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-900-blue?style=flat-square)
- [Paper.pdf](http://hhoppe.com/tmpm.pdf)

### Abstract

- goal
  - **minimizes texture stretch** (small texture distances mapped onto large surface distances) to balance sampling rates over all locations and directions on the surface
  - **minimizes texture deviation** ("slippage" error based on parametric correspondence) to obtain accurate textured mesh approximations
