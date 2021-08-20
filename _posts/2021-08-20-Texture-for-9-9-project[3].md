---
layout: single
title:  "Texture for 9-9 project[3]"
date:   "2021-8-19 21:06:00 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img6b7c545c0dfcde72831729be9319e32.png
---

## Change Externals matrix

- 相机中心点
  - 9-9/1-3/
    - $A_{amap}=(120.394685,36.06414)$
    - $A_{cams}=(120.389564,36.063963)$
    - $A_{model}=(79.1888,45.546)$meter
- 模型原点
  - O
    - $O_{amap}=(120.394637,36.064383)$
    - $O_{cams}=o_{amap} + (A_{cams} - A_{amap})$

$$
\mathbf{T} = \begin{bmatrix}
    111320&&\\
    &7156&\\
    &&1
\end{bmatrix}\left(
\begin{bmatrix}
    x\\y\\z
\end{bmatrix} -
\begin{bmatrix}
    120.388816\\
    36.064206\\
    0
\end{bmatrix}
\right)
$$

- 其中
  - 经纬转换
    - Formula 1[how-to-convert-latitude-or-longitude-to-meters Stackoverflow](https://stackoverflow.com/a/39540339/5587080)
      - $$\begin{aligned}
            \frac{latitude}{degree}&=111320m/\degree\\
            \frac{longitude}{degree}&=40075km\frac{\cos(lat)}{360}=40075km\frac{\cos(36.064)}{360}\\
            &=7156m/\degree
            \end{aligned}
        $$
    - Formula 2[Geographic coordinate system - Wikipedia](https://en.wikipedia.org/wiki/Geographic_coordinate_system#Length_of_a_degree)
      - $$
           \begin{aligned}
               \frac{latitude}{degree}&=111132.92-559.82\cos(2lat)+1.175\cos(4lat) - 0.0023\cos(6lat)\\
                &=111685.13432969594m/\degree\\
               \frac{longitude}{degree}&=111412.84\cos(lat)-93.5\cos(3lat)+0.118\cos(5lat)\\
               &=9851.230873715574m/\degree\\
           \end{aligned}
        $$

|id|shape|block|size|parameter|output|❓|
|-|-|-|-|-|-|-|
|2|original|1||ox3902|🤙|误差大概80m|
|2|original|1||ox3895|🤙|误差大概160m|
|2|original|1||ox3888|✔️|误差大概10m|

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img6b7c545c0dfcde72831729be9319e32.png" alt="6b7c545c0dfcde72831729be9319e32"/>
