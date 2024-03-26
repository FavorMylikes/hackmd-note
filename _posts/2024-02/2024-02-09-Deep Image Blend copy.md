---
layout: single
title:  "AnimeDiff"
date:   "2024-02-09 18:40:45 +0800"
categories: AI 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209184118.png
---




- [AnimeDiff](https://arxiv.org/abs/2307.04725)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209184118.png" alt="20240209184139">
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209184139.png" alt="20240209184139"/>
  - 论文主要使用stablediffusion中增加animediff模块进行动画学习
    - AnimeDiff包含3个模块
      - domain adapter
        - 用于减轻基准T2I与视频培训数据之间的视觉分布差异
        - 主要是由于不同视频之间的风格差异导致的
      - 运动模块
        - 用于学习动画的运动先验
      - MotionLoRA
        - 通过针对上一帧的运动模块，进行运动的预测
        - 数据集主要是一些带有运动信息的视频
