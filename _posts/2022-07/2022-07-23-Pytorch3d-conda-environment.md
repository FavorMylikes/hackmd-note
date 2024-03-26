---
layout: single
title:  "Pytorch3d conda environment"
date:   "2022-7-23 13:46:43 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png
---

## Pre-install-dependency

- [Anaconda / Miniconda 镜像 - 清华大学开源软件镜像站 - CSDN](https://blog.csdn.net/chengyq116/article/details/121324420)
- 驱动匹配 match
  - [Failed to initialize NVML: Driver/library version mismatch](https://forums.developer.nvidia.com/t/failed-to-initialize-nvml-driver-library-version-mismatch/190421/2)
  - `sudo nvidia-bug-report.sh`
  - `nvidia-bug-report.log`
  
    ```console
    Sep 29 09:57:22 ubuntu kernel: [ 9996.759866] NVRM: API mismatch: the client has the version 470.74, but
    Sep 29 09:57:22 ubuntu kernel: [ 9996.759866] NVRM: this kernel module has the version 470.63.01. Please
    Sep 29 09:57:22 ubuntu kernel: [ 9996.759866] NVRM: make sure that this kernel module and all NVIDIA driver
    Sep 29 09:57:22 ubuntu kernel: [ 9996.759866] NVRM: components have the same version.
    ```

  - `sudo apt install nvidia-driver-515`

## install

```bash
conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch
pip install pytorch3d -f https://dl.fbaipublicfiles.com/pytorch3d/packaging/wheels/py38_cu113_pyt1110/download.html
# here pyt1110 means pytorch-version = 1.11.0, test if there is a package by 
# curl --location --request GET 'https://dl.fbaipublicfiles.com/pytorch3d/packaging/wheels/py310_cu113_pyt1110/download.html'
```