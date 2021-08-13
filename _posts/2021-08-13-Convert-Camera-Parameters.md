---
layout: single
title:  "Convert Camera Parameters"
date:   "2021-8-12 19:21:12 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210812183427.png
---

## Try Colmap with cuda(gpu)

- enable gpu with args `--SiftExtraction.use_gpu 1`
  - but throw qt error, need x display
- close QT gui by `export QT_QPA_PLATFORM=offscreen`
  - but throw these error below

    ```console
    *** Aborted at 1628840833 (unix time) try "date -d @1628840833" if you are using GNU date ***
    PC: @     0x7f07a36bbbf8 (unknown)
    *** SIGSEGV (@0xe0) received by PID 19386 (TID 0x7f07b1686900) from PID 224; stack trace: ***
        @     0x7f07b0919980 (unknown)
        @     0x7f07a36bbbf8 (unknown)
        @     0x7f07a36bbff8 (unknown)
        @     0x7f07ae65407f QOpenGLContext::create()
        @     0x5601b94e4b93 (unknown)
        @     0x5601b9391777 (unknown)
        @     0x5601b9396eec (unknown)
        @     0x5601b925b4a7 (unknown)
        @     0x5601b924c863 (unknown)
        @     0x7f07ac9edbf7 __libc_start_main
        @     0x5601b925073a (unknown)
    ```

- wait for [issue#1273](https://github.com/colmap/colmap/issues/1273) response

## Convert camera parameters from `opencv-matrix` file to other type

[Jupyter Code](http://ucas/jupyter/lab/tree/3d/cameras/comera_convert.ipynb)

### Attation

- This need `pip install opencv-python` but `conda install`
- For now, the version is `opencv-python==4.5.3.56`

### Code

```python
fs = cv2.FileStorage("camera.xml", cv2.FILE_STORAGE_READ)
root = fs.root()
for key in root.keys():
    intrinsic = root.getNode(key).getNode("camIntrinsics").mat()
    external = root.getNode(key).getNode("camExternals").mat()
    width = root.getNode(key).getNode("imageSize").getNode("Width").real()
    height = root.getNode(key).getNode("imageSize").getNode("Width").real()
```

- convert for `空三`
- [jupyter lab](http://ucas/jupyter/lab/tree/3d/cameras/comera_convert.ipynb)

## Figure out the camera model of `colmap`

> Camera model list at [here](https://colmap.github.io/cameras.html?highlight=undistortion)

- SIMPLE_PINHOLE, PINHOLE
  - The easiest model, means 相机图片没有任何畸变，主要指内参
- SIMPLE_RADIAL, RADIAL
  - 默认选择，这个会自动估算图片畸变并计算相机内参
- OPENCV, FULL_OPENCV
  - 引申搜索到了`google nerfies`
  - 一个3D拍照应用
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgogjbzom3fyingbqavx06.gif" alt="ogjbzom3fyingbqavx06">
  - [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=google&repo=nerfies&show_owner=true)](https://github.com/google/nerfies)
  - [prepare training data - colab](https://colab.research.google.com/github/google/nerfies/blob/main/notebooks/Nerfies_Capture_Processing.ipynb)
  - [training data - colab](https://colab.sandbox.google.com/github/google/nerfies/blob/main/notebooks/Nerfies_Training.ipynb)
- SIMPLE_RADIAL_FISHEYE, RADIAL_FISHEYE, OPENCV_FISHEYE, FOV, THIN_PRISM_FISHEYE
  - 用于鱼眼镜头
