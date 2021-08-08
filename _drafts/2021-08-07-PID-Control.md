---
layout: single
title:  "The PID Control"
date:   "2021-8-7 16:10:18 +0800"
categories: zhihu
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210806134610.png
---

### Code

$$
\begin{aligned}
    \ddot r_{des} &= acc_{des} + K_p(pos_{des}-pos) + K_d*(vel_{des} - vel)\\
    \ddot p_{des},\ddot q_{des},\ddot r_{des} &= \ddot r_{des}\\
    F &= mass * (g + \ddot r_{des})\\
    M &=
    \begin{bmatrix}
        0\\0\\0
    \end{bmatrix}\\
    \phi_{des} &= \frac{\ddot p_{des}*\sin(yaw_{des}) - \ddot q_{des}*\cos(yaw_{des})}{g}\\
    \theta_{des} &= \frac{\ddot p_{des} * \cos(yaw_{des})+\ddot q_{des}*\sin(yaw_{des})}{g}\\
    rot_{des} &=
    \begin{bmatrix}
        \phi_{des}\\
        \theta_{des}\\
        yaw_{des}
    \end{bmatrix}\\
    \omega_{des} &=
    \begin{bmatrix}
        0\\0\\\dot yaw
    \end{bmatrix}\\
    M &= K_{p,ang}*(rot_{des} - rot) + K_{d,ang}*(\omega_{des} - \omega)
\end{aligned}
$$

### Reference

- [如何通俗地解释 PID 参数整定？ - 忘川孤帆的回答 - 知乎](https://www.zhihu.com/question/23088613/answer/23942834)
- [万能算法PID的全面总结 - 「已注销」的文章 - 知乎](https://zhuanlan.zhihu.com/p/162016689)
