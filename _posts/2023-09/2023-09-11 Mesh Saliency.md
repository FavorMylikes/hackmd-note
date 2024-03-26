---
layout: single
title:  "视角选择"
date:   "2023-9-11 16:48:55 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911165620.png
---


## Mesh Saliency

- TOG-2005
- 主要思路
  - 任一视角下mesh，或点的曲率和最大，即提供更多的信息
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911165604.png" alt="20230911165604"/>
- A Benchmark for Best View Selection of 3D Objects
  - MM-2010
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911203331.png" alt="20230911203331"/>
  - 数据来自于人类经验
  - 使用指标VSE，跟人的选择进行比较
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911204453.png" alt="20230911204453"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911204459.png" alt="20230911204459"/>
- Heidrich. Viewpoint selection using viewpoint entropy.
  - 视角选择，视角熵
  - 使用face的投影在球面上占比作为概率
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230911205635.png" alt="20230911205635"/>
- A Survey of Viewpoint Selection Methods for Polygonal Models
  - 

### Reference

- [Mesh Saliency论文阅读 - CSDN](https://blog.csdn.net/yucong96/article/details/105107606)