---
layout: single
title:  "Robotics-Perception-Week3"
date:   "2021-8-4 16:28:14 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804193756.png
---

## [colmap/colmap](https://github.com/colmap/colmap)

- feature_extractor 特征提取
- matcher
  - exhaustive_matcher 特征匹配
  - vocab_tree_matcher
  - sequential_matcher
  - spatial_matcher
  - transitive_matcher
  - matches_importer
- mapper
  - Sparse 3D reconstruction / mapping of the dataset using SfM after performing feature extraction and matching
- model_converter
  - Convert the COLMAP export format to another format, such as PLY or NVM

## SFM[Structure from Motion]

- [mapillary/OpenSfM - github](https://github.com/mapillary/OpenSfM)
  - Open source Structure-from-Motion pipeline
  - [cmsc426](https://cmsc426.github.io/sfm/)
- [official website](https://www.opensfm.org/)

- feature_extractor

## MVS[Multi View Stereo]

- [cdcseacave/openMVS - github](https://github.com/cdcseacave/openMVS)
- InterfaceVisualSFM 稠密稀疏化
- DensifyPointCloud 稠密重建
- ReconstructMesh 重建mesh
- RefineMesh 网格优化
- TextureMesh 文理贴图

## Code

```bat
::These parameters are specific to computer

::Store current Directory:
set currDir=%CD%

::get folder name as variable
SET "MYDIR=%~p0"
set MYDIR1=%MYDIR:~0,-1%
for %%f in (%MYDIR1%) do set myfolder=%%~nxf

set root="\path\to\3DReconstruction_release"
:: Set SFM directory
set colDir=%root%\software\SFM

:: Set MVS directory
set oMVS=%root%\software\MVS

:: Set Working Directory
set workDir=%root%\temp-workspace\%myfolder%\

:: Set System env path
set path=%colDir%\lib\;%oMVS%;%path%

mkdir %workDir% 
copy *.jpg %workDir%\ 
cd /d %workDir%

%colDir%\bin\feature_extractor --database_path database.db --image_path .
%colDir%\bin\exhaustive_matcher --database_path database.db
::%colDir%\exhaustive_matcher --database_path database.db --SiftMatching.max_num_matches 10000
mkdir sparse
%colDir%\bin\mapper --database_path %workDir%\database.db --image_path . --export_path %workDir%\sparse
%colDir%\bin\model_converter --input_path sparse\0 --output_path model.nvm --output_type NVM
%oMVS%\InterfaceVisualSFM.exe model.nvm
%oMVS%\DensifyPointCloud.exe model.mvs
%oMVS%\ReconstructMesh.exe model_dense.mvs
::%oMVS%\TextureMesh.exe --export-type obj -o %myfolder%.obj model_dense_mesh.mvs
%oMVS%\RefineMesh.exe --resolution-level 1 model_dense_mesh.mvs
::%oMVS%\RefineMesh.exe --resolution-level 3 model_dense_mesh.mvs
%oMVS%\TextureMesh.exe --export-type obj -o %myfolder%.obj model_dense_mesh_refine.mvs

mkdir %currDir%\model\
copy *.obj %currDir%\model\
copy *.mtl %currDir%\model\
copy *Kd.jpg %currDir%\model\


::cd %currDir%

::If you want to automate removal of the working folder, use the following line.
::Don't use it if you want to keep intermediate steps.
::rmdir /S /Q %workDir%

pause
```

## Maya

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210805143531.png" alt="20210805143531">

## Reference

[实战 | 手把手教你跑三维重建代码！ - 计算机视觉life的文章 - 知乎](https://zhuanlan.zhihu.com/p/360412732)
