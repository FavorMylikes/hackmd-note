---
layout: single
title:  "Normal Device Coordinate with Different System"
date:   "2021-11-02 16:30:44 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211102164656.png
---

## NDC [Normal Device Coordinate] 标准化设备坐标

- [Clip coordinates - Wikipedia](https://en.wikipedia.org/wiki/Clip_coordinates)
- assume the coordinate system in math
  - x: outside the screen
  - y: right side
  - z: up side
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211102164057.png" alt="20211102164057" width="100px"/>
- NDC coordinate system

|platform|coordinate system|rotation|cite|
|-|:-:|-|-|
|pytorch 3d|right hand|left hand, clockwise|[pytorch3d doc](https://pytorch3d.org/docs/renderer_getting_started)|
|unity|left hand|left hand, clockwise|[aclockworkberry](http://www.aclockworkberry.com/basis-orientations-in-3ds-max-unity-3d-and-unreal-engine/)|
|OpenGL|right hand||[OpenGL doc](https://learnopengl.com/Getting-started/Coordinate-Systems)

- 坐标系手性
  - 右手握住z，4指从x到y，拇指方向为正，则为右手坐标系
  - 反之为左手坐标系
  - **欧拉角，在对应的手性坐标系中，握住旋转轴，若与拇指同向，则转角为正，否则为负**
- camera
  - pytorch
    - RT参数使物体旋转，相机不动
    - >CONVENTIONS We adopt a right-hand coordinate system, meaning that rotation about an axis with a positive angle results in a **counter clockwise** rotation.
    - 旋转方向顺时针为正，拇指为轴方向，四指为旋转方向，left hand
  - unity
    - RT参数使相机变换，物体不动
    - 旋转方向顺时针为正，拇指为轴方向，四指为旋转方向，left hand
- 3dmax, unity, unreal
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211102164656.png" alt="20211102164656"/>
- pytorch3d
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211102164841.png" alt="20211102164841"/>
