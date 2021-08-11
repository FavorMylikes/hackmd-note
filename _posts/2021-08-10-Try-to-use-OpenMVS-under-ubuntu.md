---
layout: single
title:  "Try to use OpenMVS under ubuntu"
date:   "2021-8-10 22:37:02 +0800"
categories: coursera
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif
---

## Run under jupyter-lab

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1628610280(1).jpg" alt="1628610280(1)">

- Open it at [ucas](http://ucas/jupyter/lab/tree/3d/colmap_script.ipynb)

## OpenSfM

### feature_type

- KAZE[EECV]風
  - [github](https://github.com/pablofdezalc/kaze)
  - [KAZE Features. Pablo F. Alcantarilla, Adrien Bartoli and Andrew J. Davison. In European Conference on Computer Vision (ECCV), Fiorenze, Italy, October 2012. bibtex](http://www.robesafe.com/personal/pablo.alcantarilla/kaze.html)
  - Perona-Malik方程
  - 非线性尺度空间
- AKAZE[Accelerated-KAZE KAZE的加速版]
- SIFT
  - DoG[Difference of Gaussian]
- SURF[Speeded up robust features]
  - Use Box-Filter[盒子滤波器] instead of DoG
  - Change the size of Box-Filter, to build scala space.
  - 方向定位，haar小波
  - Integral image[积分图]
    - 递归计算
    - $$I(x,y)=i(x,y)+I(x-1,y)+I(x,y-1)+I(x-1,y-1)$$
    - 算好之后达到快速计算任意图形区域积分的目的
    - <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Prm_VJ_fig3_computeRectangleWithAlpha.png" width="40%"/>
    - $$I_{\square_{ABCD}} = I(C)+I(A)-I(B)-I(D)$$
  - Hessian矩阵
- HAHOG
- ORB

#### Reference

- SURF is faster than SIFT?
  - [stackoverflow](https://stackoverflow.com/a/27398168/5587080)
- The Difference between of SIFT and SURF
  - [【CV学习5】SURF算法详解 - 苟富贵](https://www.cnblogs.com/gfgwxw/p/9415218.html#)
- KAZE
  - [一点一滴完全突破KAZE特征检测算法，从各向异性扩散滤波开始(1) - 术之多](https://www.shuzhiduo.com/A/RnJWYE1Bdq/)
  - [Perona-Malik方程（各向同性非线性扩散实现图像滤波） - 查讯纤的文章 - 知乎](https://zhuanlan.zhihu.com/p/304199431)
  - [各项异性扩散（Anisotropic diffusion）](https://blog.csdn.net/bluecol/article/details/46690985)
  - [非等向性擴散 - Wikipedia](https://zh.wikipedia.org/wiki/%E9%9D%9E%E7%AD%89%E5%90%91%E6%80%A7%E6%93%B4%E6%95%A3)
  