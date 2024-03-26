---
layout: single
title:  "ControlNet"
date:   "2023-07-03 02:13:07 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230703021424.png
---

## ControlNet

### Introduction

- 利用Stable Diffusion的Copy，对模型的控制模型进行额外的训练。同时对Stable Diffusion的模型进行冻结，转成对ControlNet进行训练
- ControlNet的初始化使用Zero Convolution, 初始化为0的卷积核为1的卷积层。
- 对每次的输出运算同步到Stable Diffusion当中
- 实际网络连接
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230703021632.png" alt="20230703021632"/>

## Reference

- [ ]
- [Adding Conditional Control to Text-to-Image Diffusion Models - arxiv](https://arxiv.org/pdf/2302.05543.pdf)
- [ControlNet - BiliBili](https://www.bilibili.com/video/BV13x4y1w7k1/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)
