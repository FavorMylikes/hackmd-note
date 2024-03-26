---
layout: single
title:  "Diffusion Model"
date:   "2023-07-02 19:05:29 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230702193049.png
---

## Diffusion Model

### Introduction

算法主要分为2个部分，第一步讲解关于扩散模型的数据来源和扩散的推导理论，第二部讲解关于反向递推的过程
其中，模型预测的为上一步的噪音值，而非真实值。

$\alpha_t=1-\beta_t, beta=0.00001 to 0.002, step =200$

$x_t=\sqrt{\alpha_t}x_{t-1}+\sqrt{1-\alpha_t}z_1$

$x_{t-1}=\sqrt{\alpha_{t-1}}x_{t-2}+\sqrt{1-\alpha_{t-1}}z_2$

$x_t=\sqrt{\alpha_t\alpha_{t-1}}x_{t-2}+\sqrt{1-\alpha_t\alpha_{t-1}}\bar{z_2}$

$x_t=\sqrt{\bar{\alpha_t}}x_0+\sqrt{1-\bar{\alpha_t}}\bar{z_t}$

### Sample

采样过程即增加噪音的过程，噪音服从正太分布，每一步的权重根据步骤会进行变化，可以理解为，开始加的噪音小，后面加的噪音大。
每一步增加的噪音服从正态分布，因此可以根据给定$x_0$得知任意时刻的$x_t$。将每一步增加的噪音值作为GT，通过$x_t$预测$x_{t-1}$时所增加的噪音值

权重推导

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230705013847.png" alt="20230705013847"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230702195416.png" alt="20230702195416"/>

### Training

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230702195612.png" alt="20230702195612"/>

训练过程使用了UNet作为噪音的编解码模型对噪音进行预测
discriminator

## Reference

- [Stable Diffusion: Theory and Applications - medium](https://medium.com/cj-express-tech-tildi/stable-diffusion-theory-and-application-a0f98881cb03)
- [Diffusion - BiliBili](https://www.bilibili.com/video/BV13h411V7vg?p=2&vd_source=fd373f40f4a1d2e059be533c5b77797f)
- [扩散模型 Diffusion Models - 原理篇 - 荏苒岁月的文章 - 知乎](https://zhuanlan.zhihu.com/p/548112711)
  - 有代码有图，有原理
  - [diffusion model（二）—— DDIM（将diffusion model 提速50倍！） - 莫叶何竹的文章 - 知乎](https://zhuanlan.zhihu.com/p/639540034)
    - DDIM(denoising diffusion implicit models)和DDPM(denoising diffusion probabilistic)的区别
- [【AIGC第十三篇】Diffusion Autoencoders：基于latent space控制的图像生成技术 - 笑书神侠的文章 - 知乎](https://zhuanlan.zhihu.com/p/625386246)
- [深入浅出讲解Stable Diffusion原理，新手也能看明白 - 北方的郎的文章 - 知乎](https://zhuanlan.zhihu.com/p/627133524)
