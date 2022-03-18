---
layout: single
title:  "Pytorch mesh render memory using"
date:   "2021-12-21 21:19:02 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211210133721.png
---

## Memory

|Name|Memory|speed|
|-|-|-|
|factor x4|1.6-2.5G|2.3s/it|
|factor x2|2.6-3.7G|2.5s/it|
|factor x1|4.68G-8.58G|5s/it|

## Parameter

|Name|Comment|
|-|-|
|9-9|在原有贴图上训练进行修正，Factor=4|
|uv_avg_pooling|为了避免某些贴图像素未被训练，讲max_pooling改为avg_pooling|
|factor|更改uv大小|
|zeros_uv|纯黑色的uvmap|
|color_sobel|gray sobel的训练结果偏绿，各层训练结果不同步，使用3层sobel修正彩色部分|
|no_maxmin_scalar|blur后存在大于1的像素点，归一化时曾使用过maxmin_scalar，但这直接影响了训练结果的齐次性|
|random_uv|zero uv在训练时存在扩散效应，固训练速度较慢，改为random_uv训练速度变大|
|multi_loss|sobel_loss只将边缘计算了出来，无法表达平滑像素
|softphone-shader|更改hardphone-shader，使得点的权重加大|

$\sqrt{0}\rightarrow\frac{1}{2}0^{-\frac{1}{2}}$

$\sqrt{0 + \epsilon^2}-\epsilon\rightarrow\frac{1}{2}(0+\epsilon^2)^{-\frac{1}{2}}$

$uv=sigmoid(\log(\frac{uv}{1-uv}))$