---
layout: single
title:  "Possion Image Edit"
date:   "2021-09-10 15:43:34 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png
---

## [Possion Image Edit](https://dl.acm.org/doi/abs/10.1145/1201775.882269)

- ![j](https://img.shields.io/badge/sig_graph-2003-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-2953-blue?style=flat-square)
  - [PPT](http://graphics.cs.cmu.edu/courses/15-463/2017_fall/lectures/lecture7.pptx)
  - [Paper.pdf - Microsoft Research UK](https://www.cs.jhu.edu/~misha/Fall07/Papers/Perez03.pdf)

### Python

```python
output = cv2.seamlessClone(src, dst, mask, center, flags)
```

### Definitions

- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910131356.png" alt="20210910131356"/>
  - $g$: 原始图像，左图企鹅
  - $f$: 插值函数
  - $f^*$: 目标图像
  - $\Omega$: 目标域
  - $\partial\Omega$: 目标域边缘，边界

### Basic idea

- 期望的结果
  1. 填补内容要尽可以平滑
  2. 填补内容的边界像素值和现有的$S$一致，即要无缝过度
- 变分方程
  - $\underset{f}{\min}\iint_\Omega\vert\nabla f\vert^2$ with $f\vert_{\partial\Omega}=f^*\vert_{\partial\Omega}$
- E-L Equation
  - $\Delta f=0$ over $\Omega$ with $f\vert_{\partial\Omega}=f^*\vert_{\partial\Omega}$
    - $\Delta$: 二阶微分， 散度divergence
    - $f\vert_{\partial\Omega}=f^*\vert_{\partial\Omega}$: Dirichlet  boundary: 给出边界处函数在边界处的实际值.
      - Neumann boundary: 给出函数在边界处的二阶导数值

### guidance vector field[引导向量场]

- 期望的结果
  1. 填补内容的梯度要尽可以与$\mathbf{v}$接近
  2. 填补内容的边界像素值和现有的$S$一致，即要无缝过度
- 变分方程
  - $\underset{f}{\min}\iint_\Omega\vert\nabla f-\mathbf{v}\vert^2$ with $f\vert_{\partial\Omega}=f^*\vert_{\partial\Omega}$
    - $\mathbf{v}=\nabla g$
- E-L Equation
  - $\Delta f=div(\mathbf{v})$ over $\Omega$ with $f\vert_{\partial\Omega}=f^*\vert_{\partial\Omega}$
    - $\Delta f=\frac{\partial^2f}{\partial x^2} + \frac{\partial^2f}{\partial y^2}$: Laplacian
    - $div(\mathbf{v}) = \frac{\partial u}{\partial x} + \frac{\partial u}{\partial y}=\frac{\partial^2g}{\partial x^2}+\frac{\partial^2g}{\partial y^2} = \Delta g$: Divergence[散度]
    - $\mathbf{v}=\nabla g$: Gradient[梯度]

### discrete algorithm

- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910144107.png" alt="20210910144107"/>
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910144310.png" alt="20210910144310"/>

### 算法变种

- Seamless Cloning[无缝克隆]， 泊松编辑
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910152017.png" alt="20210910152017"/>
- Mixing Gradients Seamless Cloning
  - for all $x\in \Omega$, $\mathbf{v(x)}=\begin{cases}\nabla f^*(\mathbf{x})&\vert\nabla f^*(\mathbf{x})\vert>\vert\nabla g(\mathbf{x})\vert\\\nabla g(\mathbf{x})&otherwise\end{cases}$
  - Seamless Cloning
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910152937.png" alt="20210910152937"/>
  - Mixing Gradients Seamless Cloning
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910152450.png" alt="20210910152450"/>
  - Texture flattening
    - for all $x\in \Omega$,$\mathbf{v(x)}=M(\mathbf{x})\nabla f^*(\mathbf{x})$
    - `grad(abs(grad)<0.08)=0;`
      - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910153207.png" alt="20210910153207"/>
    - `grad(abs(grad)<0.02)=0;`
      - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910153236.png" alt="20210910153236"/>
  - Local illumination changes
    - [Gradient Domain High Dynamic Range Compression](https://dl.acm.org/doi/abs/10.1145/566570.566573)
    - ![j](https://img.shields.io/badge/sig_graph-2002-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-1753-blue?style=flat-square)
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910153754.png" alt="20210910153754"/>
  - Local color changes
    - Using three channel
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910153824.png" alt="20210910153824"/>
  - Seamless tiling
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910153904.png" alt="20210910153904"/>

### Additional reading

- [Covariant Derivatives and Vision](https://link.springer.com/chapter/10.1007/11744085_5)
  - ![j](https://img.shields.io/badge/eccv-2006-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-52-blue?style=flat-square)
- [Image editing in the contour domain](https://ieeexplore.ieee.org/abstract/document/698633/)
  - ![j](https://img.shields.io/badge/TPAMI-2006-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-174-blue?style=flat-square)
- [GradientShop: A Gradient-Domain Optimization Framework for Image and Video Filtering](http://grail.cs.washington.edu/projects/gradientshop/demos/gs_paper_TOG_2009.pdf)
  - ![j](https://img.shields.io/badge/ToG-2010-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-255-blue?style=flat-square)

### Reference

- [泊松图像编辑(Possion Image Edit)原理、实现与应用 - CSDN](https://blog.csdn.net/weixin_43194305/article/details/104928378)
- [泊松图像编辑 - Wang Hawk的文章 - 知乎](https://zhuanlan.zhihu.com/p/58867397)
