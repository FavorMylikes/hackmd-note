---
layout: single
title:  "Texture for 9-9 project[3]"
date:   "2021-8-20 21:06:00 +0800"
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
    - Formula 1
      - [how-to-convert-latitude-or-longitude-to-meters Stackoverflow](https://stackoverflow.com/a/39540339/5587080)
      - $$\begin{aligned}
            \frac{latitude}{degree}&=111320m/\degree\\
            \frac{longitude}{degree}&=40075km\frac{\cos(lat)}{360}=40075km\frac{\cos(36.064\frac{\pi}{180})}{360}\\
            &=90013.62031373613m/\degree
            \end{aligned}
        $$

        ```python
          f_lai = 111320
          f_lon = 40075*math.cos(math.pi*36.04/180)/360
        ```

    - Formula 2
      - SSR WGS84
      - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/GRAVIMETRIC_DATUM_ORIENTATION.SVG/1024px-GRAVIMETRIC_DATUM_ORIENTATION.SVG.png">
      - [Geographic coordinate system - Wikipedia](https://en.wikipedia.org/wiki/Geographic_coordinate_system#Length_of_a_degree)
      - $$
           \begin{aligned}
               \frac{latitude}{degree}&=111132.92-559.82\cos(2lat)+1.175\cos(4lat) - 0.0023\cos(6lat)\\
                &=110959.719m/\degree\\
               \frac{longitude}{degree}&=111412.84\cos(lat)-93.5\cos(3lat)+0.118\cos(5lat)\\
               &=90118.10182968706m/\degree\\
           \end{aligned}
        $$

      ```python
      c = lambda x:math.cos(x/180*math.pi)
      f_lai = lambda l:111132.92-559.82*c(2*l) + 1.175*c(4*l)-0.0023*c(6*l)
      f_lon = lambda l:111412.84-93.5*c(3*l) + 0.118*c(5*l)
      ```

      - |laititude|laititude_meter_per_degree|longitude_meter_per_degree|
        |-|-|-|
        |0$\degree$|110574.2727|111319.458|
        |36.04$\degree$|110959.71900894716|90118.10182968706|
        |45$\degree$|111131.745|78846.80572069259|
        |60$\degree$|111412.24020000001|55799.979000000014|
        |90$\degree$|111693.9173|0|

|id|shape|block|size|parameter|output|❓|
|-|-|-|-|-|-|-|
|2|original|3||wrong f ox3902 oy0642|🤨|误差大概80m|
|2|original|3||wrong f ox3895|🤨|误差大概160m|
|2|original|3||wrong f ox3888|🤨|误差大概10m|
|2|original|3||f1 ox3895|🤨|误差大概80m|
|2|original|3||f2 ox3895|🤨|误差大概80m|
|2|original|3||f2 ox3888 oy0640|🤨|y 方向误差30米|
|2|original|3||f2 ox3888 oy0643|🥵|y 方向误差150m|
|2|original|3|10|f2 ox3888 oy0637|🥵|y 方向误差看不出来|

- wrong f ox3888(x+3,y+20)
- $(111320,71546)$

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img6b7c545c0dfcde72831729be9319e32.png" alt="6b7c545c0dfcde72831729be9319e32"/>

- f1 ox3895(x+90,y+10)
- $(111320,90013.62031373613)$

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210821145746.png" alt="20210821145746"/>

- f2 ox3895(x+80-0.18,y+6)
- 系数变更对精度影响不是很大，f2比f1在80米尺度上精确0.18米
- $(110959.71900894716,90118.10182968706)$
