---
layout: single
title:  "Image Similarity"
date:   "2023-9-14 20:41:00 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230914204243.png
---

## Chamfer distance

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230914204327.png" alt="20230914204327"/>

## 棋盘距离

- 别称
  - 切比雪夫距离， $D_{chebyshev}(p,q):= \max(|p_i-q_i|)$
  - $L_\infin$度量
  - $\underset{k\to\infin}{\lim}\bigg(\sum_{i=1}^n|p_i-q_i|^k\bigg)^{\frac{1}{k}}$
  - 棋盘距离为二维的切比雪夫距离

## 城市街区距离

- 别称
  - City Block distance
  - 曼哈顿距离
  - L1距离
  - 出租车距离(Taxicab Distance), RectilinearDistance(矩形式距离)，蛇形距离（SnakeDistance）

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230914205510.png" alt="20230914205510"/>

## 欧式距离


### Reference

- [Chamfer distance](https://blog.csdn.net/weixin_42894692/article/details/106148094#_2)
- [涨知识！​数据科学家绝对不能错过的3个距离 - 读芯术的文章 - 知乎](https://zhuanlan.zhihu.com/p/96908916)
- [如何判断两条轨迹（或曲线）的相似度？ - Di Yao的回答 - 知乎](https://www.zhihu.com/question/27213170/answer/271567963)
  - 轨迹相似度
- [pdal.io - 有公式](https://pdal.io/en/latest/apps/chamfer.html)