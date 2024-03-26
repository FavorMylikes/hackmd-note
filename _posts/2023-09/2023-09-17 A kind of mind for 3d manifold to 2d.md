---
layout: single
title:  "A kind of mind for 3d manifold to 2d"
date:   "2023-09-17 21:36:00 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230914204243.png
---
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230917191459.png" alt="20230917191459"/>

## 问题，希望建立一种2d坐标对应3维流形坐标的方法

- 类似问题：
  - 1维方程$R_1\rightarrow R_1$, 可以使用参数方程进行0,1映射
  - 点集，可以使用ICP进行匹配，但可能会造成过拟合

$R_2\rightarrow R_3$

数据是空间点云

### 方案1，以点的路径和作为极坐标的距离，以投影方向作为极坐标的角度

- 投影方向可以使用PCA，即所有点距离初始点的方差最大的方向作为投影面法线
- 距离使用树的路径积分
  - 如图所示，以A为原点，最近点为K，AK做垂直平分线(或面)，K侧的点不在作为A的子树，因为他们距离k的距离都小于A，可以通过二分查找进行优化
  - 距离k最近的点为J，此时KJ的垂直平分线划分出的COQP点只属于K的子树，因为他们距离K的距离都小于J
  - 此时，A到C的距离为，AK+KC
  - 尽管AC距离更短，但由于KC短于AC，因此C更适合作为K的后继
  - 当采样点足够多时，若ACK在同一平面，则AC约等于AK+CK，若ACK不在同一平面，则AK+CK更适合表示AC的距离

### Reference

- 做图工具
  - https://www.geogebra.org/geometry
- [清华笔记：计算共形几何讲义 （16）拓扑球面的调和映照](https://mp.weixin.qq.com/s/oeBoJcW5mTV8hTK99JCvfA)
- [B样条曲面和曲线](https://wlsdzyzl.top/2019/03/19/%E5%9B%BE%E5%BD%A2%E5%AD%A6%E2%80%94%E2%80%94B%E6%A0%B7%E6%9D%A1%E6%9B%B2%E7%BA%BF%E5%92%8C%E6%9B%B2%E9%9D%A2/)