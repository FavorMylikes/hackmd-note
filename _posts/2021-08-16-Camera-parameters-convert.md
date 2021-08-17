---
layout: single
title:  "Convert Camera Parameters [usage of ContextCapture Master]"
date:   "2021-8-16 19:06:13 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816194645.png
---

## Convert parameters

- 拿到`空三`的参数文件，发现是**Smart3D(soarscape.com)**的软件导出的，尝试下载，发现需要申请
- 根据关键字查找，找到`ContextCapture Master`
- 下载安装

### Model generate

- Add photos

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816192250.png" alt="20210816192250">

- click submit aerotriangulation at general tab.
  - start `ContextCapture Engine`
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816193823.png" alt="20210816193823">
  - wait job complish
- Reconstruction>new Reconstruction
- click `submit new production`
  - wait for job complish
  - check production `3D view`

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816194645.png" alt="20210816194645"/>

- output

```console
 Model
├── Model.mtl
├── Model.obj
├── Model_0.jpg
├── Model_1.jpg
├── Model_2.jpg
└── Model_3.jpg
```

#### 优点

- 纹理贴图压缩, 避免占用无效面积

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816200325.png" alt="20210816200325">
- 非矩形纹理

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816200429.png" alt="20210816200429">

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816200450.png" alt="20210816200450">

- 图片畸变处理， 直接在贴图中使用Undistort的图片

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816200728.png" alt="20210816200728">

#### 缺点

- 阴影被识别为特征点

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816201323.png" alt="20210816201323"/>

- 纹理畸变过度

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816201525.png" alt="20210816201525"/>

### Code

- [comera_convert](http://ucas/jupyter/lab/tree/3d/cameras/comera_convert.ipynb)
- 转换公式，参考`Context capture master`， [文档](https://docs.bentley.com/LiveContent/web/ContextCapture%20Help-v10/en/GUID-2D452A8A-A4FE-450D-A0CA-9336DCF1238A.html)
- `xml`[文件含义](https://docs.bentley.com/LiveContent/web/ContextCapture%20Help-v10/en/GUID-59E6CC36-F349-4DE0-A563-FFC47296A624.html)

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816202517.png" alt="20210816202517"/>

### Reference

- [PhotoScan与smart3d的Omega,phi,kappa和R - fb_help[CSDN]](https://blog.csdn.net/fb_help/article/details/84142580)
- [相机标定之张正友标定法数学原理详解（含python源码） - 1335的文章 - 知乎](https://zhuanlan.zhihu.com/p/94244568)
- [相机模型&相机标定 - WwPpCc的文章 - 知乎](https://zhuanlan.zhihu.com/p/35287729)
