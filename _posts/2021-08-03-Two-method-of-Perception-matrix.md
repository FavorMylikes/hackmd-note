---
layout: single
title:  "Two Method Of Perception Matrix with 4 points"
date:   "2021-8-3 20:50:05 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210802180508.png
---

## 线性代数推导

- 参考
  - [inf.ed.ac.uk](https://homepages.inf.ed.ac.uk/rbf/CVonline/LOCAL_COPIES/EPSRC_SSAZ/node11.html)
- 对于点$x$经过$H$变换后有如下公式
$$
\begin{aligned}
    \begin{bmatrix}
        y'\\x'\\1
    \end{bmatrix}
    &=
    \mathbf{H}
    \begin{bmatrix}
        x\\y\\1
    \end{bmatrix}\\
    &=
    \begin{bmatrix}
        h_{11}&h_{12}&h_{13}\\
        h_{21}&h_{22}&h_{23}\\
        h_{31}&h_{32}&h_{33}
    \end{bmatrix}
    \begin{bmatrix}
        x\\y\\1
    \end{bmatrix}\\
\end{aligned}
$$
- 根据一个点，我们可以得到两个方程组
$$
\begin{aligned}
    x' &= \frac{h_{11}x+h_{12}y+h_{13}}{h_{31}x+h_{32}y+h_{33}}\\
    y' &= \frac{h_{21}x+h_{22}y+h_{23}}{h_{31}x+h_{32}y+h_{33}}\\
\end{aligned}
$$
- 其中$h_{31}x+h_{32}y+h_{33}$ 用于表示一个未知的倍数变量
- 表示成矩阵形式有
$$
\begin{bmatrix}
    x&y&1&0&0&0&-x'x&-x'y&-x'\\
    0&0&0&x&y&1&-y'x&-y'y&-y'\\
\end{bmatrix}
\begin{bmatrix}
    h_{11}\\
    h_{12}\\
    h_{13}\\
    h_{21}\\
    h_{22}\\
    h_{23}\\
    h_{31}\\
    h_{32}\\
    h_{33}\\
\end{bmatrix}
=0
$$
- 4点联立，有
$$
\begin{bmatrix}
    x_1&y_1&1&0&0&0&-x_1'x_1&-x_1'y_1&-x_1'\\
    0&0&0&x_1&y_1&1&-y_1'x_1&-y_1'y_1&-y_1'\\
    x_2&y_2&1&0&0&0&-x_2'x_2&-x_2'y_2&-x_2'\\
    0&0&0&x_2&y_2&1&-y_2'x_2&-y_2'y_2&-y_2'\\
    x_3&y_3&1&0&0&0&-x_3'x_3&-x_3'y_3&-x_3'\\
    0&0&0&x_3&y_3&1&-y_3'x_3&-y_3'y_3&-y_3'\\
    x_4&y_4&1&0&0&0&-x_4'x_4&-x_4'y_4&-x_4'\\
    0&0&0&x_4&y_4&1&-y_4'x_4&-y_4'y_4&-y_4'\\
\end{bmatrix}
\begin{bmatrix}
    h_{11}\\
    h_{12}\\
    h_{13}\\
    h_{21}\\
    h_{22}\\
    h_{23}\\
    h_{31}\\
    h_{32}\\
    h_{33}\\
\end{bmatrix}
=0
$$
- 当左侧矩阵可逆时，方程又解，令$h_3$为1，求解其他$h$

## 构造基向量

- 我们需要求映射$H$, 使得$\mathbf{Ha=a'},\dotsc, \mathbf{Hd=d'}$
- 由于$\mathbf{a,b,c}$三点线性无关，因此，总可以找到一种比例$\alpha, \beta, \gamma$ 使得$\alpha \mathbf{a} + \beta \mathbf{b} + \gamma \mathbf{c} = \mathbf{d}$
- 写成矩阵形式为
$$
A\begin{bmatrix}
    1\\1\\1
\end{bmatrix}
=\begin{bmatrix}
    \alpha \mathbf{a}&\beta \mathbf{b}&\gamma \mathbf{c}
\end{bmatrix}
\begin{bmatrix}
    1\\1\\1
\end{bmatrix}
=d
$$
- 同理, 由于空间不变性，在射影空间中，$\mathbf{a',b',c'}$依然线性无关
$$
B\begin{bmatrix}
    1\\1\\1
\end{bmatrix}
=
\begin{bmatrix}
    \alpha' \mathbf{a'}&\beta' \mathbf{b'}&\gamma' \mathbf{c'}
\end{bmatrix}
\begin{bmatrix}
    1\\1\\1
\end{bmatrix}
=\mathbf{d'}
$$
- 那么我们可以变换一下，有
$$
\begin{aligned}
&\begin{bmatrix}
    1\\1\\1
\end{bmatrix}
=\mathbf{A^{-1}d=B^{-1}d'}\\
&\mathbf{BA^{-1}d=d'}\\
&\mathbf{Hd=d'}
\end{aligned}
$$
- $\mathbf{H=BA^{-1}}$即为所求矩阵

### 计算例子(1)

$$
\begin{matrix}
    (1,0,0)\\(0,1,0)\\(0,0,0)\\(1,1,1)
\end{matrix}
\rightarrow
\begin{matrix}
    (1,0,0)\\(0,1,0)\\(0,0,0)\\(2,1,1)
\end{matrix}
$$
$$
M=\begin{bmatrix}
    2&0&0\\
    0&1&0\\
    0&0&1
\end{bmatrix}
$$

### 计算例子(2)

$$
\begin{matrix}
    (0,0,1)\\(1,1,1)\\(1,0,1)\\(0,1,1)
\end{matrix}
\rightarrow
\begin{matrix}
    (0,0,1)\\(1,1,1)\\(1,0,0)\\(0,1,0)
\end{matrix}
$$
$$
A=\begin{bmatrix}
    -1&0&0\\
    0&-1&0\\
    -1&-1&1
\end{bmatrix}
$$

### 计算例子(3)

$$
\begin{matrix}
    (1,0,0)\\(0,1,0)\\(0,0,1)\\(1,1,1)
\end{matrix}
\rightarrow
\begin{matrix}
    (-2,0,1)\\(0,1,-1)\\(-1,2,-1)\\(-1,1,1)
\end{matrix}
$$

$$
A=\begin{bmatrix}
    -\frac{2}{3}&0&1\\
    0&\frac{5}{3}&-2\\
    \frac{1}{3}&-\frac{5}{3}&1
\end{bmatrix}
$$
