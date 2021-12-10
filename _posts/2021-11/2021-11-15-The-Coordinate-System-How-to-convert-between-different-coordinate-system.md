---
layout: single
title:  "The Coordinate System - How to convert between different coordinate system"
date:   "2021-11-15 16:30:44 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211116000556.png
---


## Coordinate System

|system|image|System hand|Rotation hand|Camera|Order
|-|-|-|-|-|-|
|[OpenGL](https://en.wikibooks.org/wiki/OpenGL_Programming/Mini-Portal_Smooth)|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211116000556.png" alt="20211116000556" width="200px"/>|RH|RH|(0,0,-1)|XYZ|
|[Unity](https://docs.unity3d.com/560/Documentation/Manual/Transforms.html)|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211116001515.png" alt="20211116000556" width="200px"/>|LH|LH|(0,0,1)|YXZ(local) zxy(global)|
|[pytorch3d](https://pytorch3d.org/docs/cameras)|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211116001452.png" alt="20211116000556" width="200px"/>|RH|LH|(0,0,1)|XYZ|
|[OpenCV](https://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html)|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211117163530.png" alt="20211117163530"/>|RH|RH|(0,0,1)|XYZ|
|[scipy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.transform.Rotation.from_euler.html#reaa093f6923f-1)||RH|LH||XYZ xyz|

## Docs

- scipy
  - `quat = [x,y,z,w]`
  - euler
    - `XYZ` means **`intrinsic`** rotations [内在旋转](https://en.wikipedia.org/wiki/Davenport_chained_rotations#Intrinsic_rotations),[Conventions by intrinsic rotations](https://en.wikipedia.org/wiki/Euler_angles#Conventions_by_intrinsic_rotations)
      - **intrinsic rotations** 指每次旋转的旋转轴都是上次变换后新坐标系
    - `xyz` means **`extrinsic`** rotations [外在旋转](https://en.wikipedia.org/wiki/Davenport_chained_rotations#Extrinsic_rotations),[Conventions by extrinsic rotations](https://en.wikipedia.org/wiki/Euler_angles#Conventions_by_extrinsic_rotations)
      - **extrinsic rotations** 指每次旋转的旋转轴都是固定的参考系
- unity
  - rotation
    - local rotation: **intrinsic rotations**, YXZ
    - global rotation: **extrinsic rotations**, zxy
  - order: `YXZ`
- math
  - Rodrigues: $r_{vert} = [x,y,z]$, $|r_{vert}|_2$表示旋转角度, $r_{vert}$表示旋转向量
  - [四元数与空间旋转](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%85%83%E6%95%B0%E4%B8%8E%E7%A9%BA%E9%97%B4%E6%97%8B%E8%BD%AC)
- cv2
  - Rodrigues
    - `cv2.Rodrigues(rotvec)[0]`: 旋转向量到旋转矩阵
    - `cv2.Rodrigues(rotmatrix)[0]`: 旋转矩阵到旋转向量

## Conversion

|c r|c t|o r|obj t|obj scale|status|comment
|-|-|-|-|-|-|-|
|9.3,153.1,106.7|-43.2,99.3,83.8|0|0|0,-1,0|✔|c r = inv(mat)zxy,xyz*=[-,-,+], t = xyz*[+,+,-]
|9.3,153.1,106.7|0|0|43.2,-99.3,-83.8|0,-1,0|✔|c r = inv(mat)zxy,xyz*=[-,-,+],o t = xyz*[-,-,+]

### From unity to pytorch3d

- unity$(t=(x,y,z),r=(\theta_x,\theta_y,\theta_z))$
- pytorch3d$(t=(-x,y,z)),r=(-\theta_x,\theta_y,\theta_z)$
- code
  - equivalence transformation
  - euler to euler

   ```python
   verts *= [-1,1,1]
   theta_x, theta_y, theta_z = angles
   rotation=R.from_euler("yxz", [theta_y, theta_x, theta_z], degrees=True).as_matrix()
   trans *= [-1,1,1]
   ```

  - unity.quat to scipy.euler

   ```python
   # quat from unity [10,-120,70]
   quat = [0.459144592,0.731702268,-0.347525775,-0.364724457]
   euler = R.from_quat(quat).as_euler('zxy')
   euler *= [1,-1,1]
   rotation = R.from_euler('yxz', euler[[2,1,0]]).as_matrix()
   ```

## Reference

- [Pytorch3D - Camera Coordinate Systems](https://pytorch3d.org/docs/cameras)
- [Pytorch3D - Coordinate transformation conventions, with OpenGL](https://pytorch3d.org/docs/renderer_getting_started#coordinate-transformation-conventions)
- [Github issue - The rendering results of pytorch3d and opencv are different](https://github.com/facebookresearch/pytorch3d/issues/858)
- [Medium - What are the coordinates?](https://medium.com/comerge/what-are-the-coordinates-225f1ec0dd78)
- 为什么四元数比欧拉角更好
  - [计算机动画 ： 万向节死锁Gimbal Lock的本质 - 卢小六的文章 - 知乎](https://zhuanlan.zhihu.com/p/112449913)
  - [Gimbal lock - WikiPedia](https://en.wikipedia.org/wiki/Gimbal_lock)
  - [Euler Angle - github.io](https://andrewfanchina.github.io/UnityLabs/Euler/)
