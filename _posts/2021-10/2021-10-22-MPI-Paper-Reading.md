---
layout: single
title:  "MPI Paper Reading"
date:   "2021-10-22 15:37:35 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211022153912.png
---

## [MPI: Single-view view synthesis with multiplane images](https://arxiv.org/abs/2004.11364)

[google-research_repo]: https://github.com/google-research/google-research
[google-research_fork]: https://img.shields.io/github/forks/google-research/google-research.svg?style=social&label=Fork&maxAge=2592000
[google-research_star]: https://stars.medv.io/google-research/google-research.svg

|Repository|spark|star|
|:-:|:-:|:-:|
|[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=google-research&repo=google-research&show_owner=true)][google-research_repo]|[![Sparkline](https://stars.medv.io/google-research/google-research.svg)][google-research_repo]|<a href='https://starchart.cc/google-research/google-research'><img src='https://starchart.cc/google-research/google-research.svg' width='200px'/></a>

- [Github.io](https://single-view-mpi.github.io/)
- ![j](https://img.shields.io/badge/CVPR-2020-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-60-blue?style=flat-square)
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211019123036.png" alt="20211019123036"/>
- [Colab](https://colab.research.google.com/github/google-research/google-research/blob/master/single_view_mpi/example.ipynb#scrollTo=7vbB3JcaqirL)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211022154325.png" alt="20211022154325"/>

- term or concept
  - `non-Lambertian effects`
    - [为什么太阳看起来像一个均匀发光圆盘? - a crysfer的回答 - 知乎](https://www.zhihu.com/question/26290341/answer/32587285)
    - [Lambertian reflectance - WikiPidea](https://en.wikipedia.org/wiki/Lambertian_reflectance)
    - [几何反照率 - WikiPidea](https://zh.wikipedia.org/wiki/%E5%B9%BE%E4%BD%95%E5%8F%8D%E7%85%A7%E7%8E%87)
    - > 发光强度和亮度的概念不仅适用于自己发光的物体，也可以应用到反射体。光线射到光滑的表面上，定向地发射出去；射到粗糙的表面上时，它将朝向所有方向漫射。一个理想的漫射面，应是遵循朗伯定律的，即不管入射光来自何方，沿各方向漫射光的发光强度总与cosθ成正比，从而亮度相同。积雪、刷粉的白墙或十分粗糙的白纸表面，都很接近这类理想的漫射面。这类物体称为朗伯反射体。
