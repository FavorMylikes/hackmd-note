---
layout: single
title:  "Deploy Cv environment for ubuntu, colmap, openmvs, e.g."
date:   "2021-8-9 16:11:48 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810003311.png
---

- [install colmap](https://colmap.github.io/install.html)
- [install openmvs]()

## Environment

- Ubuntu 18.04.5 LTS
- x86_64
- gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04)

## Colmap

### Require

```shell
sudo apt-get install \
    git \
    cmake \
    build-essential \
    libboost-program-options-dev \
    libboost-filesystem-dev \
    libboost-graph-dev \
    libboost-system-dev \
    libboost-test-dev \
    libeigen3-dev \
    libsuitesparse-dev \
    libfreeimage-dev \
    libgoogle-glog-dev \
    libgflags-dev \
    libglew-dev \
    qtbase5-dev \
    libqt5opengl5-dev \
    libcgal-dev
```

### Install Qt5

- **Attation**
  - If you have install conda or anconda
  - Remeber `conda deactivate` untile you dont in any conda environment
  - And remeber rename `anaconda3` to `anaconda3temp` for temporary, and rename it back after install.

```bash
sudo apt-get install libcgal-qt5-dev
```

### Install ceres-solver

```bash
sudo apt-get install libatlas-base-dev libsuitesparse-dev
git clone https://ceres-solver.googlesource.com/ceres-solver
cd ceres-solver
git checkout $(git describe --tags) # Checkout the latest release
mkdir build
cd build
cmake .. -DBUILD_TESTING=OFF -DBUILD_EXAMPLES=OFF
make -j
sudo make install
```

### Install COLMAP

```bash
git clone https://github.com/colmap/colmap.git
cd colmap
git checkout dev
mkdir build
cd build
cmake ..
make -j
sudo make install
```

### Usage

```bash
colmap -h
colmap gui
```

## OpenMVS

## Reading

- [High-Quality Texture Reconstruction from Multiple Scans - IBM T. J. Watson Research Center](http://www.cs.hunter.cuny.edu/~ioannis/3DP_S09/faustobernardini.pdf)
  - [城市三维重建中的自动纹理优化方法 - 武汉大学测绘遥感信息工程国重](http://xb.sinomaps.com/CN/article/downloadArticleFile.do?attachType=PDF&id=6935)
  - [彩色三维扫描中纹理重建技术研究进展 - 激光与光电子学进展](http://www.opticsjournal.net/richHtml/lop/2018/55/11/110004.html)

