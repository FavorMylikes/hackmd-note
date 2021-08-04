---
layout: single
title:  "Robotics-Perception-Week3"
date:   "2021-8-4 10:25:53 +0800"
categories: 3d coursera
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804142207.png
---

## Visual Features[视觉特征提取]

### SIFT [Scale-invariant feature transform] 尺度不变特征转换

- 大致思想
- 我们需要同一个相机按不同视角拍摄的同一处的画面
- 类似于全景图
- 在拼接全景图时，我们需要找到对应的特征点，才能方便图片对接
- `SIFT`即为一种寻找特征点的算法
- 对于一张图片进行不同$\sigma=1, \sqrt{2}, 2, \dotsc$的二维高斯卷积得到一组(octive)
- 再将这张图片进行降采样(隔点采样)，拿到缩水的图片
- 对于缩水的图片再次进行卷积，使用的$2\sigma=2, 2\sqrt{2}, 4 \dotsc$
- 对于同一组(octive)的图片，相邻两张做差，得到`DoG` Difference of Gaussian, 其实是一种`LoG` laplacian of gaussian的近似

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804152043.png" alt="20210804152043">

#### Gaussian pyramid[高斯金字塔]

- 迭代(高斯卷积->降采样->得到一个长宽只有$\frac{1}{2}$的图)

#### 拉普拉斯金字塔

#### Sift算法中的多尺度金字塔

#### 差分金字塔与Difference of Gaussian(DOG)高斯函数的差分

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804151129.png" alt="20210804151129">

同时，需要归一化，以避免信号流式

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804152921.png" alt="20210804152921">

拿到的最大响应点即我们需要的特征点
#### Reference

- [zhaoxuhui.top](http://zhaoxuhui.top/blog/2019/11/12/robotics-perception-assignment-3.html#1visual-features)
- [图像特征尺度不变性-拉普拉斯-高斯差DOG-SIFT特征提取-旋转不变性-SVD分析-齐次坐标的理解-线性的理解-齐次方程的理解 CSDN](https://blog.csdn.net/djfjkj52/article/details/104694488)
- [🤙SIFT算法详解 - zddblog[CSDN]](https://blog.csdn.net/zddblog/article/details/7521424)
- [🤙SIFT算法原理详解 - Alliswell-WP[cnblogs]](https://www.cnblogs.com/Alliswell-WP/p/SIFT.html)
- [🤙UCF Computer Vision Video Lectures 2012[5] -  Dr. Mubarak Shah[Youtube]](https://www.youtube.com/watch?v=NPcMS49V5hg)
