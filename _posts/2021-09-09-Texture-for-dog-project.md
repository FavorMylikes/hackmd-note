---
layout: single
title:  "Texture for dog project"
date:   "2021-09-09 16:28:42 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png
---

## Original Texture

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png" alt="20210908163150" height="200"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163150.png" alt="20210908163150" height="200"/>

- Some sureface mesh too small be ignored.

## Remeshing

- Make mesh to `Equilateral triangle`
- 3DScan
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163552.png" alt="20210908163552"/>
- Texture after remeshing
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908171531.png" alt="20210908171531"/>
- Texture after remeshing with invert
  - `matrix[0:3, 0:3] = np.linalg.inv(matrix[0:3, 0:3])`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908190838.png" alt="20210908190838"/>
  - **相机不动物体动时，相机朝向需要取逆**

## Easy 3D

[Easy3D_repo]: https://github.com/LiangliangNan/Easy3D
[Easy3D_fork]: https://img.shields.io/github/forks/LiangliangNan/Easy3D.svg?style=social&label=Fork&maxAge=2592000
[Easy3D_star]: https://stars.medv.io/LiangliangNan/Easy3D.svg

|Repository|spark|star|
|:-:|:-:|:-:|
|[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=LiangliangNan&repo=Easy3D&show_owner=true)][Easy3D_repo]|[![Sparkline](https://stars.medv.io/LiangliangNan/Easy3D.svg)][Easy3D_repo]|<a href='https://starchart.cc/LiangliangNan/Easy3D'><img src='https://starchart.cc/LiangliangNan/Easy3D.svg' width='200px'/></a>

### [Home Page](https://3d.bk.tudelft.nl/liangliang/software/easy3d_doc/html/index.html)

### [Author](https://3d.bk.tudelft.nl/liangliang/)

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908235043.png" alt="20210908235043"/>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908234448.png" alt="20210908234448" height="250px"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908234505.png" alt="20210908234505" height="250px"/>

### Usage

```log
 ------------------------------------------------------------------
  F1:                  Help
  F2:                  Toggle animation (if available)
  Ctrl + 'o':          Open file
  Ctrl + 's':          Save file
  Fn + Delete:         Delete current model
  '<' or '>':          Switch between models
  's':                 Snapshot
  'p':                 Toggle perspective/orthographic projection)
  'a':                 Toggle axes
  Ctrl + 'f':          Toggle frame rate
  Left drag:           Rotate the camera
  Right drag:          Move the camera
  'x' + Left drag:     Rotate the camera around horizontal axis
  'x' + Right drag:    Move the camera along horizontal axis
  'y' + Left drag:     Rotate the camera around vertical axis
  'y' + Right drag:    Move the camera along vertical axis
  'o' + Left drag:     Rotate the camera around ortho-screen axis
  Middle or Wheel:     Zoom in/out
  Ctrl + '+'/'-':      Zoom in/out
  Left/Right           Turn camera left/right
  Ctrl + Left/Right:   Move camera left/right
  Up/Down:             Move camera forward/backward
  Ctrl + Up/Down:      Move camera up/down
  Ctrl + 'c':          Copy current view status to clipboard
  Ctrl + 'v':          Restore view status from clipboard
  Alt + 'k':           Add key frame to the camera path
  Alt + 'd':           Delete the camera path
  Ctrl + 'k':          Play the camera path
  Ctrl + 't':          Toggle camera path
  'f':                 Fit screen (all models)
  'c':                 Fit screen (current model only)
  'z' + Left click:    Zoom to target point on model
  'z' + Right click:   Zoom o fit screen
  Shift + Left click:  Define a target point on model
  Shift + Right click: Undefine the target point (if any) on model
  Ctrl + Left drag:    Zoom to fit region
  '-'/'=':             Decrease/Increase point size
  '{'/'}':             Decrease/Increase line width
  'b':                 Toggle borders
  'e':                 Toggle edges
  'v':                 Toggle vertices
  'm':                 Toggle smooth shading (for SurfaceMesh)
  'd':                 Print model info (drawables, properties)
 ------------------------------------------------------------------
```

## Mapple Remesh

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210909002430.png" alt="20210909002430"/>

## Make Builder under linux

- Ninja vs Makefile
- [make-vs-ninja-performance-comparison](https://hamelot.io/programming/make-vs-ninja-performance-comparison/)

## Install Nvidia dirver

- [ubuntu-16-04-gpu-setup-for-pytorch-with-conda](https://medium.com/momo%E7%9A%84%E6%A9%9F%E5%99%A8%E4%BA%BA%E7%95%99%E5%AD%B8%E5%A4%A2/ubuntu-16-04-gpu-setup-for-pytorch-with-conda-d308238b4dc5)
  - choose
    - [Nvidia driver version with cuda version](https://docs.nvidia.com/deploy/cuda-compatibility/index.html#deployment-consideration-forward)
  - `apt install nvidia-driver-450`
  - `conda install cudatoolkit` > 11.2.2
- set proxy for conda

```conda
proxy_servers:
    http: http://user:pass@corp.com:8080
    https: https://user:pass@corp.com:8080
```
