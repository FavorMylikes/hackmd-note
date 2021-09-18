---
layout: single
title:  "Texture for smooth"
date:   "2021-09-17 16:40:14 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210917172233.png
---

### Run Data set

|id|obj|image|ot|mr|csr|gsl|lsl|ec|result|
|-|-|-|-|-|-|-|-|-|-|
|1|12w|pure-color|0|0|1|false|false|⬛|💩|
|2|meshlab_lap-smooth_12w|pure-color|0|0|1|false|false|⬛|💩|
|3|meshlab_HC-lap-smooth_12w|pure-color|0|0|1|false|false|⬛|💩|
|4|meshlab_normal-smooth_12w|pure-color|0|0|1|false|false|⬛|💩|

1. <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210917164323.png" alt="20210917164323" height="200px"/>
2. <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210917164348.png" alt="20210917164348" height="200px"/>
3. <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210917172233.png" alt="20210917172233"  height="200px"/>
4. Same with 1

### Explaination

- For case 4: `Sommth Face Normals` will not affect the vertex position, but affect the normal of vertex, names `vn` at obj file. And `Texeture` does not use that var for compute
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img8cf60c1524815e43726c146fc77d0cf.png" alt="8cf60c1524815e43726c146fc77d0cf"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img4be3fdda52f0a00e95c494bbaf9b36e.png" alt="4be3fdda52f0a00e95c494bbaf9b36e"/>

### Obj Format

- [cmu](https://www.cs.cmu.edu/~mbz/personal/graphics/obj.html)
    > The vertex normal command specifies a normal vector. A lot of times these aren't used, because the 'f' face command will use the order the 'v' commands are given to determine the normal instead. Like the 'vt' commands, they don't mean anything until grouped with a vertex in the 'f' face command.
- Lap-Smooth
  - [doi:10.2312/egst.20051044](https://diglib.eg.org/handle/10.2312/egst.20051044.053-070)
  - ![j](https://img.shields.io/badge/EG_STARs-2005-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-232-blue?style=flat-square)
- HC-Lap-Smooth
  - [Improved laplacian smoothing of noisy surface meshes](https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8659.00334)
  - [doi:10.1111/1467-8659.00334](https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8659.00334)
  - ![j](https://img.shields.io/badge/CG-1999-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-574-blue?style=flat-square)
