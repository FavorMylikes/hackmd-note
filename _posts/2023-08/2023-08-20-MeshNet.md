---
layout: single
title:  "MeshNet"
date:   "2023-08-20 16:11:28 +0800"
categories: 3d AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820161208.png
---

### Introduction

#### DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation

##### Over View

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820161208.png" alt="20230820161208"/>

##### 数据处理

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820162244.png" alt="20230820162244"/>

##### 面旋转卷积

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820165548.png" alt="20230820165548"/>

##### 面核卷积

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820165656.png" alt="20230820165656"/>

##### mesh convolution

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230820162309.png" alt="20230820162309"/>

- 数据集
  - ModelNet40
- 代码
  - python
- [github](https://github.com/iMoonLab/MeshNet)

### 论文要点

- 将输入转化为空间描述符合结构描述符两种，最后通过mesh 卷积得到全局特征
- 结构描述符包含面核相关性、面旋转卷积
  - 面核相关性由作者定义的函数进行计算
  - 面旋转卷积由名片各点到面中心的向量进行计算
- 空间描述符主要使用mesh中每个平面的几个中心直接进行MLP处理
后续增加池化等，活动全局特征
- 论文不提供重建过程，更多用于分类

### Reference

- [youtube MeshNet++](https://www.youtube.com/watch?v=xcfnhrYqKac)
- [Github](https://github.com/iMoonLab/MeshNet)