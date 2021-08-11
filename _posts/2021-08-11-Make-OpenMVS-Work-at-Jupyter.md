---
layout: single
title:  "Make OpenMVS work at jupyter"
date:   "2021-8-11 18:04:44 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210811172921.png
---

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210811172921.png" alt="20210811172921">

## 尝试高清ColMap逻辑

### Feature Extractor 特征点提取

- `--SiftExtraction.use_gpu 0`
  - **You cannot use the feature extractor in GPU mode without an attached display**
  - [issue](https://github.com/colmap/colmap/issues/45#issuecomment-266373096)
- `--ImageReader.camera_model SIMPLE_RADIAL`
  - [camera model](https://colmap.github.io/cameras.html)
  - Default is `SIMPLE_RADIAL`, you can choice one of
    - PINHOLE
    - RADIAL
    - OPENCV
    - SIMPLE_RADIAL_FISHEYE
    - RADIAL_FISHEYE
    - OPENCV_FISHEYE
    - FOV
    - THIN_PRISM_FISHEYE

```console
colmap feature_extractor \
   --database_path $DATASET_PATH/database.db \
   --image_path $DATASET_PATH/images\
   --SiftExtraction.use_gpu 0
```

## 特征匹配

```console
colmap exhaustive_matcher\
--database_path database.db
```

## Mapper

```shell
mkdir sparse
colmap mapper\
--database_path database.db \
--image_path /opt/OpenSfM/data/dinosaur/images \
--output_path ./sparse
```

## Model Coverter

- the out put type could be one of **{BIN, TXT, NVM, Bundler, VRML, PLY, R3D, CAM}**

```shell
colmap model_converter \
--input_path sparse/0 \
--output_path model.nvm \
--output_type NVM
```

## Convert to mvs file

- InterfaceCOLMAP
  - need `cameras.txt` and so on at sparse with `PINHOLD` camera mode
  - you can set it by `colmap model_converter --output_type`

```shell
InterfaceCOLMAP \
--input-file $(pwd)/$PROJECT/ \
--image-folder $(pwd)/$PROJECT/undistorted_images \
--output-file $(pwd)/$PROJECT/model_colmap.mvs
```

- InterfaceCOLMAP

```shell
InterfaceCOLMAP \
--input-file $(pwd)/$PROJECT/ \
--image-folder $(pwd)/$PROJECT/undistorted_images \
--output-file $(pwd)/$PROJECT/model_colmap.mvs
```
