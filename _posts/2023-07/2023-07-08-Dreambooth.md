---
layout: single
title:  "Dreambooth"
date:   "2023-07-08 18:59:17 +0800"
categories: AI
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230708190125.png
---

### Introduction

#### DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation

> It’s like a photo booth, but once the subject is captured, it can be synthesized wherever your dreams take you.

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230708190125.png" alt="20230708190125"/>

- 在微调层面，我们重新使用图片进行微调训练会导致几个问题
  - 语言漂移【学了新的忘了旧的】
    - 在大模型上微调之后，逐渐失去语言的句法和语义知识。即失去对一般知识的理解
  - 过度拟合
    - 如图所示，在输入狗的照片后，过拟合会导致狗的姿势一直趴在沙滩上，而非其他姿势
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230708205425.png" alt="20230708205425"/>
- Dreambooth的优势
  - 使用了一个新的罕见词来代表图片的含义，保证新加入的图片对应的词在模型中没有其他太多含义
  - 区别于Textual inversion方法，Dreambooth使用罕见次，而textual inversion是新词。Dreambooth会对整个模型进行微调，而textual inversion只对embedding部分调整

## Reference

- [dreambooth github](https://dreambooth.github.io/)
- [【AI绘画】LoRA训练与正则化的真相：Dreambooth底层原理 - 秋葉aaaki的文章 - 知乎](https://zhuanlan.zhihu.com/p/616245445)
- [stable diffusion——Dreambooth原理与实践 - 冲弱的文章 - 知乎](https://zhuanlan.zhihu.com/p/620577688)