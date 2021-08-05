---
layout: single
title:  "Robotics-Perception-Week3[2]"
date:   "2021-8-4 20:13:57 +0800"
categories: 3d coursera
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804142207.png
---

## RANSAC[Random Sample Consenus]

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210805200032.png" alt="20210805200032">

- 该算法其实是一种迭代选过滤`outliers`的思想，并不局限于对点进行拟合
- 通常与`Linear regressor`进行对比用于体现`Linear regressor`的不足之处
- 从信息提供的角度来说
- `Linear regressor`认为每个点所在的位置都是有意义的，即便存在`outlier`，也不应当将其剔除，因此该算法在遇到`outlier`距离其他数据很远时，则会显现出倾向于`outlier`结果
- 而`RANSAC`则倾向于，多数点同意则完全收敛到点数最多的模型那里，但显然`RANSAC`在面对两组数据量差不多的模型时，无法单独做出决策，即，在两个模型中反复横跳
- Code at [ucas](http://ucas/jupyter/lab/tree/Ransac.ipynb)