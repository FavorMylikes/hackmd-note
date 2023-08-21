---
layout: single
title:  "Palette: Image-to-Image Diffusion Models"
date:   "2023-07-07 02:18:17 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230707020103.png
---

### Introduction

- 第一篇基于Conditional Diffusion 的 Image to Image 任务
- 在训练Diffusion时，L1， L2的作用，以及self attention
  - L1 和 L2的结果质量相似，但L2有更好的多样性

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230707020805.png" alt="20230707020805"/>

- 损失函数增加了额外的条件信息x
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230707020620.png" alt="20230707020620"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230707020103.png" alt="20230707020103"/>

## Reference

- [注意力机制的本质|Self-Attention|Transformer|QKV矩阵 - BiliBili](https://www.bilibili.com/video/BV1dt4y1J7ov/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)
- [Cross Attention _ Method Explanation _ Math Explained - BiliBili](https://www.bilibili.com/video/BV1814y1S7US/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)