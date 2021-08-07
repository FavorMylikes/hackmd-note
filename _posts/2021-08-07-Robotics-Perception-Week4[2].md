---
layout: single
title:  "Robotics Perception Week 4[2]"
date:   "2021-8-7 19:46:45 +0800"
categories: 3d coursera
header:
  teaser: https://upload.wikimedia.org/wikipedia/commons/1/14/Epipolar_geometry.svg
---

## Nonlinear Least Squares [非线性最小二乘法]

- [Method for non-linear least suqares problems - 2004](https://www.aimsciences.org/article/exportPdf?id=7e25fb2d-b50c-46dd-9be5-23deee2b4242)
- Descent method
  - The steepest descent method[最速下降]
  - Newton's method[牛顿下降]
  - Linear Search[线性搜索]
  - Trust Region and Damped Methods
- Non-linear least squares problems
  - The Gauss-Newton Method
  - The Levenberg-Marquardt Method
  - Powell's Dog leg Method
  - A Hybrid Method: L-M and Quasi-Newton
  - A Secant Version of the L-M Method
  - A Secant Version of the Dog leg Method
  - Final Remarks

## Optical flow: 2D points Correspondences[光流法2D点对应]

- 基本假设
  - **亮度恒定不变**， 由于需要对比两张连续的照片计算光流场，因此，如果亮度改变的话，图像匹配会存在误差
  - **时间连续**，或运动范围比较小，时间连续是为了让图像间的点满足对应关系

### Reference

- [计算机视觉--光流法(optical flow)简介](https://blog.csdn.net/qq_41368247/article/details/82562165)