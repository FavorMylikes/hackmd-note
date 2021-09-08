---
layout: single
title:  "Texture for 9-9 project[2]"
date:   "2021-8-19 22:50:45 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210820003537.png
---


## Intrinsics matrix

$$
\begin{bmatrix}\frac{f s_{w}}{w} & 0 & p_{x}\\0 & \frac{f s_{h}}{h} & p_{y}\\0 & 0 & 1\end{bmatrix}
$$

- $f$: focal
- $w,h$: 图片像素大小
- $s_w,s_h$: 感光元件大小
- $p_x,p_y$: 光心位置

## Externals matrix

$$
R=\begin{bmatrix}\cos{\left(\psi \right)} \cos{\left(\theta \right)} & \sin{\left(\phi \right)} \sin{\left(\theta \right)} \cos{\left(\psi \right)} + \sin{\left(\psi \right)} \cos{\left(\phi \right)} & \sin{\left(\phi \right)} \sin{\left(\psi \right)} - \sin{\left(\theta \right)} \cos{\left(\phi \right)} \cos{\left(\psi \right)}\\- \sin{\left(\psi \right)} \cos{\left(\theta \right)} & - \sin{\left(\phi \right)} \sin{\left(\psi \right)} \sin{\left(\theta \right)} + \cos{\left(\phi \right)} \cos{\left(\psi \right)} & \sin{\left(\phi \right)} \cos{\left(\psi \right)} + \sin{\left(\psi \right)} \sin{\left(\theta \right)} \cos{\left(\phi \right)}\\\sin{\left(\theta \right)} & - \sin{\left(\phi \right)} \cos{\left(\theta \right)} & \cos{\left(\phi \right)} \cos{\left(\theta \right)}\end{bmatrix}
$$

- $\psi$: z : yaw: $\Omega$
- $\phi$: x : pitch: $\Phi$
- $\theta$: y : roll: $\Kappa$

## Shape

- original: obj 对象
- ccm-export: ccm 导出结果
- orthogonal: 正交面
- plant: 平面
- plant_xy_height: xy面，同时拥有一定高度，高度淹没车辆
- plant_xy_height_less: xy面，同时拥有一定高度，高度淹没公路
- sphere: 球
- -tri: 三角化后缀
- _large: 可以囊括obj对象，可以拿到内视贴图
- _small: 和obj对象相交，可以参考相机方向
- _tiny: small直径的一半大

|id|shape|block|size|parameter|srs|output|
|-|-|-|-|-|-|-|
|1|original|1||center|4490|💩|
|2|original|1||meta>center|4490|✔️|
|3|original|1||meta>center|4490|✔️|
|4|ccm-export|1||meta>center|4490|💩|
|5|orthogonal|1||meta>center|4490|💩|
|6|orthogonal|1|10|meta>center|4490|💩|
|7|orthogonal-tri|1||meta>center|4490|✔️|
|7|orthogonal-tri|1||meta>center|4490|✔️|
|8|plant|1||meta>center|4490|💩|
|9|plant|1|10|meta>center|4490|💩|
|10|plant_xy_height|1||meta>center|4490|💩|
|10|plant_xy_height_less|1||meta>center|4490|💩|
|11|plant_xy_height_less_tri|1||meta>center|4490|✔️|
|12|sphere|1||meta>center|4490|💩|
|13|sphere_large_tri|1||meta>center|4490|✔️|
|14|sphere_large_tri|1|10|meta>center|4490|✔️|
|15|sphere_small_tri|1||meta>center|4490|✔️|
|16|sphere_tiny_tri|1||meta>center|4490|✔️|
|17|sphere_tiny_tri|1|10|meta>center|4490|✔️|

## Change Intrinsics matrix

$$
\begin{bmatrix}\frac{f w}{s_{w}} & 0 & p_{x}\\0 & \frac{f h}{s_{h}} & p_{y}\\0 & 0 & 1\end{bmatrix}
$$

|id|shape|block|size|parameter|srs|output|
|-|-|-|-|-|-|-|
|2|original|1||meta>center|4490|🤙|
|2|original|1|10|meta>center|4490|🤙|
|11|plant_xy_height_less_tri|1||meta>center|4490|🤙|
|9|plant|1|10|meta>center|4490|💩|

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210820003537.png" alt="20210820003537"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210820003550.png" alt="20210820003550"/>
