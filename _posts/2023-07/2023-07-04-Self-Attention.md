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

### ViT（Vision Transformer）解析

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230918191122.png" alt="20230918191122"/>

## Reference

- [注意力机制的本质|Self-Attention|Transformer|QKV矩阵 - BiliBili](https://www.bilibili.com/video/BV1dt4y1J7ov/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)
- [Cross Attention _ Method Explanation _ Math Explained - BiliBili](https://www.bilibili.com/video/BV1814y1S7US/?spm_id_from=333.337.search-card.all.click&vd_source=fd373f40f4a1d2e059be533c5b77797f)
- [Attention机制详解（二）——Self-Attention与Transformer - 川陀学者的文章 - 知乎](https://zhuanlan.zhihu.com/p/47282410)
- [从ReLU到GELU，一文概览神经网络的激活函数 - 机器之心的文章 - 知乎](https://zhuanlan.zhihu.com/p/98863801)
  - Transformer中使用GELU
- [ViT（Vision Transformer）解析 - 德怀特的文章 - 知乎](https://zhuanlan.zhihu.com/p/445122996)
  - 图片Transformer
- [VAE、GAN 这种生成模型和 transformer 有什么区别？ - 知乎用户的回答 - 知乎](https://www.zhihu.com/question/558574918/answer/2711404815)
- [一文读懂Transformer模型的位置编码 - 眺望远方的龙的文章 - 知乎](https://zhuanlan.zhihu.com/p/106644634)
  - 位置编码
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230918195627.png" alt="20230918195627"/>
- [自注意力与位置编码 - 机器学习小谈的文章 - 知乎](https://zhuanlan.zhihu.com/p/57732839)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230919172214.png" alt="20230919172214"/>
- [【时间序列】Transformer for TimeSeries时序预测算法详解 - VoidOc的文章 - 知乎](https://zhuanlan.zhihu.com/p/391337035)
- [第二章：Transformer 模型](https://transformers.run/back/transformer/)
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
  - 英文原文
- [详解Transformer （Attention Is All You Need） - 大师兄的文章 - 知乎](https://zhuanlan.zhihu.com/p/48508221)
  - [The Illustrated Transformer - Alammar](https://jalammar.github.io/illustrated-transformer/)
  - [Self-Attention机制和Transformer](https://luweikxy.gitbook.io/machine-learning-notes/self-attention-and-transformer)
