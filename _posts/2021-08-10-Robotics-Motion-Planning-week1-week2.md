---
layout: single
title:  "Robotics Motion Planning Week 1 and 2"
date:   "2021-8-10 19:32:03 +0800"
categories: coursera
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif
---

## Week 1

### Grassfire Algorithm

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810193416.png" alt="20210810193416" width="80%">

- From red point to green point, like fire.

### Dijkstra's Algorithm[地接丝卡尔]

<img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif">

### A star Algorithm[A*]

- 优先搜索距离终点最近的点

## Week 2

### Configuration Space[C-Space 构型空间]

- 与之相对应的还有 Work-Space
- 对于一个由一个点连接的两段悬臂，他们的旋转角度$\theta_1, $\theta_2$可以表达出悬臂所有能产生的形态
- 即通过$\theta_1,\theta_2$构成的空间表示为悬臂可能的空间
- 通过将笛卡尔体系下的Work-Space转化为C-Space，更方便求解规划问题
- 例如，对于RR arm[2R arm, 二自由度机械臂]
- <img src="https://skill-lync-portal.nyc3.digitaloceanspaces.com/tinymce/06_20/15934675311611.jpg"/>
- <img src="https://pic1.zhimg.com/50/v2-284ea537667ae4ccf1db7a46ebd3287d_720w.webp?source=1940ef5c"/>
- 3D 的情形
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif" alt="bandicam-2021-08-10-20-27-00-953">

#### Reference

- [机器人运动规划中的C space怎样理解？为什么不直接在笛卡尔坐标系下运算呢？ - fly qq的回答 - 知乎](https://www.zhihu.com/question/60108896/answer/224251293)

### Visibility Graph

- 将多边形的顶点转化为路径点，转化为路径规划问题

- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810204246.png" alt="20210810204246">
- 但是边缘行走很危险
- 另一种方案是，根据多边形的顶点在X轴上将其分割为多个三角形或者梯形，在这些多边形内的直线运动是无障碍的，相应的，做出一个辅助路线图，连接两个可达的三角形或梯形的内部点，再进行路径规划
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810204813.png" alt="20210810204813">
- Piano Mover’s Problem
