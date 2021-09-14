---
layout: single
title:  "Install Cpp jupyter kernel"
date:   "2021-09-10 15:43:34 +0800"
categories: tutorial
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png
---

## Install Cpp kernel

- [jupyter notebook 安装 C/C++ kernel - KEN的文章 - 知乎](https://zhuanlan.zhihu.com/p/82025119)
- `conda install xeus-cling -c conda-forge`
- after install
  - `jupyter kernelspec list`
  - fix [**issue**](https://stackoverflow.com/questions/68261254/conda-error-sysconfigdata-x86-64-conda-linux-gnu)
  - by

    ```bash
    cp /opt/anaconda3/envs/gpu/lib/python3.8/_sysconfigdata_x86_64_conda_cos6_linux_gnu.py /opt/anaconda3/envs/gpu/lib/python3.8/_sysconfigdata_x86_64_conda_linux_gnu.py
    ```

  - check installation

    ```console
    python3    /opt/anaconda3/envs/gpu/share/jupyter/kernels/python3
    xcpp11     /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp11
    xcpp14     /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp14
    xcpp17     /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp17
    ```

## [Guided Image Filtering](http://kaiminghe.com/eccv10/)

- ![j](https://img.shields.io/badge/ECCV-2010-blue?style=flat-square)![j](https://img.shields.io/badge/TPAMI-2013-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-3985-blue?style=flat-square)
  - [PPT eccv 2010](http://kaiminghe.com/eccv10/eccv10ppt.pdf)
  - [Paper.pdf - Microsoft Research](https://www.cs.jhu.edu/~misha/Fall07/Papers/Perez03.pdf)

### Image Filtering

- Explicit LTI [linear translation-invariant, Linear time-invariant]
- Explicit Weighted-Average Filters
  - Gaussian filter
  - Laplacian filter
  - Sobel filter
- the process of solving a Poisson Equation
  - HDR compression[high dynamic range][4]
  - image stitching[5]
  - image matting[6]

### Related

- Explicit Weighted-Average Filters
  - [Bilateral Filter](https://zh.wikipedia.org/wiki/%E9%9B%99%E9%82%8A%E6%BF%BE%E6%B3%A2%E5%99%A8)
    - 距离参数*差异参数，作为权重
    - > The bilateral filter computes the filter output at a pixel as a weighted average of neighboring pixels
    - 看起来像是二阶过滤？
    - time cost
      - brute-force, $O(Nr^2)$
      - [15,16], $O(N)$
      - [17]Adams et al. color image
      - $r$: `kernel radius`
      - > All the abovemethods require a high quantization degree to achieve satisfactory speed, but at the expense of quality degradation
- Optimization-based Image Filtering
  - > generate high quality results, solving the corresponding linear system is time-consuming.
- Nonaverage Filters, 非均质滤波, 非线性滤波
  - 中值滤波
  - Total-Variation filter
- Guided Filter

### Reference

[导向滤波原理（Guided Filter）](https://blog.csdn.net/edogawachia/article/details/78872932)