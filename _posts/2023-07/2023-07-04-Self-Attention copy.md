---
layout: single
title:  "Self-Attention"
date:   "2023-07-04 22:18:17 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704222250.png
---

## Self-Attention

以腰围和身高举例

腰围是K，身高是V，有对应关系。这时我希望用Q对合适的K进行查询，Q也是腰围，我希望得到合适的V，一般情况下我需要计算各个腰围K的权重并与V相乘，得到最终结果
若KQV矩阵是自身，则是自注意力机制。

### Introduction

### Self Attention

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704231311.png" alt="20230704231311"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704222448.png" alt="20230704222448"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704222250.png" alt="20230704222250"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704230909.png" alt="20230704230909"/>

### Cross Attention

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704230959.png" alt="20230704230959"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230704231126.png" alt="20230704231126"/>

## Reference

- [注意力机制的本质|Self-Attention|Transformer|QKV矩阵 - BiliBili](https://www.bilibili.com/video/BV1dt4y1J7ov/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)
- [Cross Attention _ Method Explanation _ Math Explained - BiliBili](https://www.bilibili.com/video/BV1814y1S7US/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)