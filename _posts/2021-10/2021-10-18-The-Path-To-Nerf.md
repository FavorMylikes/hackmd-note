---
layout: single
title:  "The Path to Nerf" 
date:   "2021-10-18 14:44:18 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018233219.png
---

## Three tools to create citation mapping

- [3 new tools to try for Literature mapping — Connected Papers, Inciteful and Litmaps - Medium](https://aarontay.medium.com/3-new-tools-to-try-for-literature-mapping-connected-papers-inciteful-and-litmaps-a399f27622a)
  - [Connected Papers](https://www.connectedpapers.com/)
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018144925.png" alt="20211018144925"/>
  - [Inciteful](https://inciteful.xyz/)
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018144807.png" alt="20211018144807"/>
  - [Litmaps🤙](https://www.litmaps.co/)
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018151119.png" alt="20211018151119"/>
  - [CoCites](https://www.cocites.com/)
    - Has chrome extension
  - [Citation Gecko](http://citationgecko.com/)
    - Too simple
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018152955.png" alt="20211018152955"/>
  - [VOSviewer](https://www.vosviewer.com/)
    - Need data file

## NeRF Path Track

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211019231223.png" alt="20211019231223"/>

- [2D变3D，视角随意换，神还原高清立体感，还是不用3D建模的那种 | 代码数据开源 - 量子位的文章 - 知乎](https://zhuanlan.zhihu.com/p/128554388)
- [白话神经辐射场（NeRF）：类神经网路在查看综合的热门新方向 - medium](https://medium.com/%E8%BB%9F%E9%AB%94%E4%B9%8B%E5%BF%83/%E7%99%BD%E8%A9%B1neural-radiance-fields-nerf-%E9%A1%9E%E7%A5%9E%E7%B6%93%E7%B6%B2%E8%B7%AF%E5%9C%A8view-synthesis%E7%9A%84%E7%86%B1%E9%96%80%E6%96%B0%E6%96%B9%E5%90%91-23be9411d399)

### Prior

- Volume Rendering
  - [立体渲染 - WikiPidea](https://zh.wikipedia.org/wiki/%E7%AB%8B%E4%BD%93%E6%B8%B2%E6%9F%93)
  - [体渲染数学原理 - 杨超wantnon的文章 - 知乎](https://zhuanlan.zhihu.com/p/56710440)
  - [【译】实时体渲染——第一章 体渲染 - Maple的文章 - 知乎](https://zhuanlan.zhihu.com/p/260540982)
    - [Real-Time Volume Graphics](https://dl.acm.org/doi/abs/10.1145/1103900.1103929)
    - ![j](https://img.shields.io/badge/SIGGRAPH-2004-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-996-blue?style=flat-square)
  - [Ray tracing volume densities](https://dl.acm.org/doi/abs/10.1145/964965.808594)
    - ![j](https://img.shields.io/badge/SIGGRAPH-1984-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-1296-blue?style=flat-square)
- [LFR](https://graphics.stanford.edu/papers/light/)
  - [Light field rendering](https://dl.acm.org/doi/10.1145/237170.237199)
  - ![j](https://img.shields.io/badge/SIGGRAPH-1996-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-5237-blue?style=flat-square)
  - [漫谈计算摄影学 (一)：直观理解光场(Light Field) - YE Y的文章 - 知乎](https://zhuanlan.zhihu.com/p/24982662)
    - [Raytrix](https://raytrix.de/)
      - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgf8abeb4e7d5f1ff2e7d1d38b159cb02.png" alt="f8abeb4e7d5f1ff2e7d1d38b159cb02"/>
- [LDI](https://grail.cs.washington.edu/projects/ldi/)
  - [Layered Depth Images](https://grail.cs.washington.edu/projects/ldi/)
  - ![j](https://img.shields.io/badge/SIGGRAPH-1998-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-1656-blue?style=flat-square)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211019151938.png" alt="20211019151938"/>
- [LLFF](https://bmild.github.io/llff/)
  - [Local Light Field Fusion: Practical View Synthesis with Prescriptive Sampling Guidelines](https://bmild.github.io/llff/)
  - [Github](https://github.com/Fyusion/LLFF)
  - ![j](https://img.shields.io/badge/SIGGRAPH-2019-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-198-blue?style=flat-square)
- [Stereo Magnification: Learning View Synthesis using Multiplane Images - Google](https://arxiv.org/abs/1805.09817)
  - 多张多视角图片生成MPI
  - [Github.io](https://tinghuiz.github.io/projects/mpi/)
  - ![j](https://img.shields.io/badge/SIGGRAPH-2018-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-275-blue?style=flat-square)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018232827.png" alt="20211018232827"/>
  - Multiplane Images

### Future

- [MINE: Towards Continuous Depth MPI With NeRF for Novel View Synthesis - ByteDances](https://openaccess.thecvf.com/content/ICCV2021/html/Li_MINE_Towards_Continuous_Depth_MPI_With_NeRF_for_Novel_View_ICCV_2021_paper.html)
  - ![j](https://img.shields.io/badge/ICCV-2021-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-0-blue?style=flat-square)
  - [GithHub](https://github.com/vincentfung13/MINE)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211019123823.png" alt="20211019123823"/>
  - [ICCV 2021 | 字节跳动利用单张图片做三维重建：将NeRF、MPI结合，提出MINE - 不爱玩的小玩家的文章 - 知乎](https://zhuanlan.zhihu.com/p/419468401)
- [MPI: Single-view view synthesis with multiplane images](https://arxiv.org/abs/2004.11364)
  - [Github.io](https://single-view-mpi.github.io/)
  - 单张多视角图片生成MPI
  - ![j](https://img.shields.io/badge/CVPR-2020-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-60-blue?style=flat-square)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211019123036.png" alt="20211019123036"/>
  - [Colab](https://colab.research.google.com/github/google-research/google-research/blob/master/single_view_mpi/example.ipynb#scrollTo=7vbB3JcaqirL)
- [GIRAFFE: Representing Scenes as Compositional Generative Neural Feature Fields](https://arxiv.org/abs/2011.12100)
  - ![j](https://img.shields.io/badge/CVPR-2021-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-30-blue?style=flat-square)
  - [Github](https://github.com/autonomousvision/giraffe)
- [fourfeat](https://bmild.github.io/fourfeat/)
  - [Fourier Features Let Networks Learn
High Frequency Functions in Low Dimensional Domains](https://arxiv.org/abs/2006.10739)
  - ![j](https://img.shields.io/badge/NeurIPS-2020-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-171-blue?style=flat-square)

## Mesure

- PSNR
  - Peak signal-to-noise ratio, 尖峰信噪比
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018203024.png" alt="20211018203024"/>
- SSIM
  - Structural similarity
  - [Wikipidea](https://en.wikipedia.org/wiki/Structural_similarity)
  - 结构相似性在影像品质的衡量上更能符合人眼对影像品质的判断
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211018202834.png" alt="20211018202834"/>
- LPIPS
  - Learned Perceptual Image Patch Similarity
  - [git richzhang/PerceptualSimilarity](https://github.com/richzhang/PerceptualSimilarity)
