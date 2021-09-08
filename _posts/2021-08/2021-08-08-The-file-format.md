---
layout: single
title:  "The File Format"
date:   "2021-8-8 23:45:22 +0800"
categories: 3d
header:
  teaser: https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/05/26152516/obj-lead.jpg
---

## File Format

### obj

- 文本格式
- Wavefront
- 基本结构
- |type|name|
  |:-:|:-:|
  ||Vertex data|
  |v|vertices[顶点]|
  |vt|Texture vertices|
  |vn|Vertex normals [顶点法线]|
  |vp|Parameter space vertices [参数空格顶点]|
  ||表面属性(surface attributes)|
  |deg|Degree[度]|
  |bmat|Basis matrix|
  |step|Step size|
  |cstype|Curve or surface type[曲线或表面类型]|
  ||Elements|
  |p|point|
  |l|line|
  |f|face|
  |curv|Curve|
  |curv2|2D curve|
  |surf|Surface|
  ||表面主体陈述(surface body statements)|
  |parm|Parameter values [ 参数值]
  |trim|Outer trimming loop[ 外部修剪循环]
  |hole|Inner trimming loop[ 内部整修循环]
  |scrv|Special curve[ 特殊曲线]
  |sp  |Special point[ 特殊的点]
  |end |End statement[ 结束陈述]
  ||渲染属性(render attributes)|
  |bevel|Bevel interpolation [导角插值 ]
  |c_interp|Color interpolation [颜色插值 ]
  |d_interp|Dissolve interpolation [溶解插值 ]
  |lod|Level of detail [细节层次 ]
  |usemtl|Material name [材质名称 ]
  |**mtllib**|**Material library [材质库 ]**
  |shadow_obj|Shadow casting [投射阴影 ]
  |trace_obj|Ray tracing [光线跟踪 ]
  |ctech|Curve approximation technique [曲线近似技术 ]
  |stech|Surface approximation technique [表面近似技术 ]

### 3ds

- 相对于obj 是一种二进制文件

### mtl

- Material Library File
- |type|usage|name|
  |:-:|:-:|:-:|
  |ka|Ka r g b|反射率|
  |Kd|Kd r g b|漫反射|
  |Ks|Ks r g b|镜反射|
  |Tf|Tf r g b|滤光透射率|
  |illum|illum 0~10|光照模型|
  |Ns|Ns 1.000000|反射指数[0~1000]|
  |map_Kd|map_Kd file.jpg|指定颜色纹理文件|

### mvs

- OpenMvs 用
- 可以使用`./Viewer file.mvs` 打开

### nvm

- colmap 输出类型

### ply

- [Wikipedia](https://en.wikipedia.org/wiki/PLY_%28file_format%29)

## Reference

- [.obj文件格式与.mtl文件格式 - jieniyimiao[CSDN]](https://blog.csdn.net/u013467442/article/details/46792495)
