---
layout: single
title:  "ColMap OpenMVS workflow"
date:   "2021-8-12 16:55:38 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif
---

## Through a lot of reading about those doc and issue

I wanna write a tutorial for fresh people.

This is prepare for **linux server (means no desktop)**

And I have compile the latest version `colmap` and `openmvs`

### Step 1

```console
colmap feature_extractor \
--SiftExtraction.use_gpu 0 \
--database_path $PROJECT/database.db\
--image_path $DATA_ROOT/$PROJECT/images
```

- here `--SiftExtraction.use_gpu` is using for linux server only, you can comment it out if you have desktop.
- `--ImageReader.camera_model PINHOLE`, you could choice other one, check the list [camera model](https://colmap.github.io/cameras.html)
- For using `InterfaceCOLMAP`, you must specify **PINHOLE** model

### Step 2

```console
colmap exhaustive_matcher\
--SiftMatching.use_gpu 0\
--database_path $PROJECT/database.db
```

- here `--SiftMatching.use_gpu 0`  has same effect with `SiftExtraction.use_gpu`

### Step 3

```console
colmap mapper\
--database_path $PROJECT/database.db \
--image_path $DATA_ROOT/$PROJECT/images \
--output_path $PROJECT/sparse 
```

### Step 4

- 去除图片的畸变(undistort)

```console
colmap image_undistorter \
--image_path $DATA_ROOT/$PROJECT/images \
--input_path $PROJECT/sparse/0 \
--output_path $PROJECT/dense \
--output_type COLMAP
```

- here `--output_type`, you could find the usage at [colmap](https://colmap.github.io/cli.html?highlight=undistortion)

- 把相机内存转化为txt格式方便openmvs读取

```console
colmap model_converter \
--input_path $PROJECT/dense/sparse \
--output_path $PROJECT/dense/sparse \
--output_type TXT
```

- At this step, you will see three `txt` file will be created at `sparse` dir.
  - `cameras.txt`, `images.txt`, `point3D.txt`
  - And `PINHOLE` is in `cameras.txt` you will see

### Step 5

```console
InterfaceCOLMAP \
--working-folder $(pwd)/$PROJECT/ \
--input-file $(pwd)/$PROJECT/ \
--output-file $(pwd)/$PROJECT/model_colmap.mvs
```

### Step 6

```console
DensifyPointCloud \
--input-file $(pwd)/$PROJECT/model_colmap.mvs \
--working-folder $(pwd)/$PROJECT/ \
--output-file $(pwd)/$PROJECT/model_dense.mvs \
--archive-type -1 \
```

- Here `--archive-type -1` must be set

### Step 7

```console
ReconstructMesh --input-file $(pwd)/$PROJECT/model_dense.mvs \
--working-folder $(pwd)/$PROJECT/ \
--output-file $(pwd)/$PROJECT/model_dense_mesh.mvs
```

### Step 8

```console
RefineMesh \
--resolution-level 1 \
--input-file $(pwd)/$PROJECT/model_dense_mesh.mvs \
--working-folder $(pwd)/$PROJECT/ \
--output-file $(pwd)/$PROJECT/model_dense_mesh_refine.mvs
```

### Step 9

```console
TextureMesh \
--export-type obj \
--output-file $(pwd)/$PROJECT/model.obj \
--working-folder $(pwd)/$PROJECT/ \
--input-file $(pwd)/$PROJECT/model_dense_mesh_refine.mvs
```

### FINAL

- You will get `model.mtl` `model.obj` and the texure `model_material_0_map_Kd.jpg`
- Open obj with software you like, I'll recommend `MAYA`

## Code

- [ucas script - ipynb](http://ucas/jupyter/lab/tree/3d/colmap_script.ipynb)
