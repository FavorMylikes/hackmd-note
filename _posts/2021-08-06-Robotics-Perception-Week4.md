---
layout: single
title:  "Robotics Perception Week 4"
date:   "2021-8-6 16:06:37 +0800"
categories: 3d coursera
header:
  teaser: https://upload.wikimedia.org/wikipedia/commons/1/14/Epipolar_geometry.svg
---

## Epipolar Geometry[对极几何]

<img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Epipolar_geometry.svg" alt="1628252493(1)">

- $O_L$经过旋转和移动之后来到了$O_R$
- 其中$X_L,X_R$为$X$在两个相机上的像点
- 红线为`对极线`
- 绿色的面为`对极平面`
- $e_L, e_R$分别为对极点, 即另外一个相机的`像点`
- 两个相机的连线$O_LO_R$为`基线`，当X点移动时，`对极平面`绕`基线`旋转
- 这种几何体系描述了一种相机位置变更后，像点的变化

### Essential Matrix[本质矩阵]

- 本质矩阵的定义

$$
\begin{aligned}
    \mathbf{x}_R&=R\mathbf{x}_L+\mathbf{t}\\
    \mathbf{t}\times \mathbf{x}_R&=\mathbf{t}\times R\mathbf{x}_L + \mathbf{t}\times \mathbf{t}&(1)\\
    \mathbf{t}\times \mathbf{x}_R&=\mathbf{t}\times R\mathbf{x}_L&(2)\\
    \mathbf{x}_R\cdot (\mathbf{t}\times \mathbf{x}_R)&=\mathbf{x}_R\cdot (\mathbf{t}\times R\mathbf{x}_L)\\
    0&=\mathbf{x}_R\cdot (\mathbf{t}\times R\mathbf{x}_L)&(3)\\
    \mathbf{x}_R^T\mathbf{\hat t} R\mathbf{x}_L&=0&(4)\\
    \mathbf{x}_R^TE\mathbf{x}_L&=0\\
\end{aligned}
$$

- 其中
  - $E$即为本质矩阵
  - $R$为旋转矩阵
  - $\mathbf{t}$从$O_L$到$O_R$的平移向量
  - $(1)$表示对极平面的法向量, 这里将$\mathbf{x}_R$视为$O_R$的一条射线
  - $(2)$是因为，$t\times t=0$
  - $(3)$是因为$\mathbf{x}_R$与法向量垂直
  - $(4)$将内积换成矩阵形式
  - $(4)$中的$\hat t$为$\hat{\_}$的反对称矩阵形式，我在`Coordinate System in Dynamic`动力学一节已经写过该形式，尽管在统计学上，它又有不同的意义，暂时为了统一，一并写成$\hat{\_}$形式
- 这时我们可以用本质矩阵$E$来表示`像面上的点`在`相机移动后`的`新的像面上的点`的关系了

### Fundamental Matrix[基本矩阵]

- 基本矩阵的定义
- $\mathbf{q}_i=K_i\mathbf{x}_i$
- 这里的$\mathbf{q}$为相机像素的点坐标，$K_i$为内参, $\mathbf{p}$为像面坐标
- 这时我们考虑2个不同相机的拍照结果，因此每个相机都有自己的内参$K_i$
- 我们希望找到一种矩阵$F$使得$\mathbf{q}_L^TF\mathbf{q}_R=0$
$$
\begin{aligned}
    \mathbf{q}_L^TF\mathbf{q}_R&=0\\
    \mathbf{x}_L^TK_L^TFK_R\mathbf{x}_R&=0\\
    \mathbf{x}_L^TK_L^TFK_R\mathbf{x}_R&=\mathbf{x}_L^TE\mathbf{x}_R\\
    K_L^TFK_R&=E\\
    F&=K_L^{-T}EK_R^{-1}
\end{aligned}
$$

- 其中
  - 利用了相机内参可逆
  - 利用了前面的本质矩阵$E$的特性

### The Difference between of those two matrix

- 本质矩阵描述了`两个相同的相机或两个内参一致(标定)`的相机不同角度对一个`像点坐标`的对应关系
- 基础矩阵描述了`两个不同的相机(已知内参)`，用不同角度对一个像点的`像素坐标`的对应关系

### Attention

- 由于相机的变换是有方向的， 从左到右或从右到左，因此在描述$E$和$F$时，经常带有下标$E_{LR}$, $F_{LR}$来表示

### Reference

- [对极几何与基本矩阵 - 无迹的文章 - 知乎](https://zhuanlan.zhihu.com/p/33458436)
- [对极几何及单应矩阵 - Rap_God - CSDN](https://blog.csdn.net/u012936940/article/details/80723609)
- [Epipolar geometry - Wikipedia](https://en.wikipedia.org/wiki/Epipolar_geometry)
- [Essential matrix - Wikipedia](https://en.wikipedia.org/wiki/Essential_matrix)
- [本质矩阵和基础矩阵的区别是什么？ - 「已注销」的回答 - 知乎](https://www.zhihu.com/question/27581884/answer/466669565)
