---
layout: single
title:  "Deploy Cv environment for ubuntu, colmap, openmvs, e.g."
date:   "2021-8-9 16:11:48 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810003311.png
---

- [install colmap](https://colmap.github.io/install.html)
- [install openmvs](https://github.com/cdcseacave/openMVS/wiki/Building)

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

### compiler

- Prepare

```console
sudo apt update -qq && sudo apt install -qq
sudo apt -y install git cmake libpng-dev libjpeg-dev libtiff-dev libglu1-mesa-dev
```

- Install [Eigen](https://gitlab.com/libeigen/eigen.git) (Required)

```console
git clone https://gitlab.com/libeigen/eigen.git --branch 3.2
cd eigen && mkdir eigen_build && cd eigen_build
cmake . ..
make && sudo make install
```

- Install Boost (Required)

```console
sudo apt -y install libboost-iostreams-dev libboost-program-options-dev libboost-system-dev libboost-serialization-dev
```

- Install OpenCV (Required)
  - **Attation**, It will lead to a `undefined reference to symbol` when `make` for `openmvs`
  - Look at this [issue](https://github.com/cdcseacave/openMVS/issues/364#issuecomment-499842586)
  - And for another conflict, make your opencv version is correct, for me, it is `3.2`, check it with `dpkg -s libopencv-dev`

```console
sudo apt -y install libopencv-dev
```

- Install CGAL (Required)
  - **Attation**, please ensure you are **not** under anaconda environment, and rename the anaconda dir name temporary
  - conda will install qt into itself directory, may lead to `can not find qt` or `find a wrong qt` problem

```console
sudo apt -y install libcgal-dev libcgal-qt5-dev
```

- Install [VCGLib](https://github.com/cdcseacave/VCG.git) (Required)

```console
git clone https://github.com/cdcseacave/VCG.git vcglib
```

- Install [Ceres](https://ceres-solver.googlesource.com/ceres-solver) (optional)

```console
sudo apt -y install libatlas-base-dev libsuitesparse-dev
git clone https://ceres-solver.googlesource.com/ceres-solver ceres-solver
cd ceres-solver && mkdir ceres_build && cd ceres_build
cmake . .. -DMINIGLOG=ON -DBUILD_TESTING=OFF -DBUILD_EXAMPLES=OFF
make -j8 && sudo make install
cd ..
```

- Install GLFW3 (Optional)

```console
sudo apt -y install freeglut3-dev libglew-dev libglfw3-dev
```

- Install [OpenMVS](https://github.com/cdcseacave/openMVS.git)

```console
git clone https://github.com/cdcseacave/openMVS.git openMVS
cd openMVS && mkdir openMVS_build && cd openMVS_build
cmake . .. -DCMAKE_BUILD_TYPE=Release -DVCG_ROOT="path/to/VGC" -DBUILD_SHARED_LIBS=ON
make -j8 && sudo make install
```

## Reading

- [High-Quality Texture Reconstruction from Multiple Scans - IBM T. J. Watson Research Center](http://www.cs.hunter.cuny.edu/~ioannis/3DP_S09/faustobernardini.pdf)
  - [城市三维重建中的自动纹理优化方法 - 武汉大学测绘遥感信息工程国重](http://xb.sinomaps.com/CN/article/downloadArticleFile.do?attachType=PDF&id=6935)
  - [彩色三维扫描中纹理重建技术研究进展 - 激光与光电子学进展](http://www.opticsjournal.net/richHtml/lop/2018/55/11/110004.html)
