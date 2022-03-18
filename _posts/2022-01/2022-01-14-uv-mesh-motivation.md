---
layout: single
title:  "Mesh UV Motivation"
date:   "2022-1-14 13:28:56 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png
---

## obj file

- Img file

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220114133423.png" alt="20220114133423"/>

```obj
mtllib square.mtl
v 0 0 0
v 0 1 0
v 1 1 0
v 0 0 0
v 1 1 0
v 1 0 0
vt 0.25 0.25
vt 0.25 0.75
vt 0.75 0.75
vt 0.25 0.25
vt 0.75 0.75
vt 0.75 0.25
usemtl material_0
f 1/1 2/2 3/3
f 4/4 5/5 6/6
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220114133304.png" alt="20220114133304"/>

```obj
mtllib square.mtl
v 0 0 0
v 0 1 0
v 1 1 0
v 0 0 0
v 1 1 0
v 1 0 0
vt 0 0
vt 0 1
vt 1 1
vt 0 0
vt 1 1
vt 1 0
usemtl material_0
f 1/1 2/2 3/3
f 4/4 5/5 6/6
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220114133129.png" alt="20220114133129"/>

```obj
mtllib square_2x3.mtl
v 0 0 0
v 0 1 0
v 1 1 0
v 0 0 0
v 1 1 0
v 1 0 0
vt 0 1
vt 0 0
vt 1 0
vt 0 1
vt 1 0
vt 1 1
usemtl material_0
f 1/1 2/2 3/3
f 4/4 5/5 6/6
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220114225740.png" alt="20220114225740"/>

### gird test

|img|params|
|-|-|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115182749.png" width=150px alt="20220115182749"/>|gird 4x4|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115184433.png" width=150px alt="20220115184433"/>|gird 4x4 exp 0h1w|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115184447.png" width=150px alt="20220115184447"/>|gird 4x4 exp 0h2w|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115184457.png" width=150px alt="20220115184457"/>|gird 4x4 exp 0h4w|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115184505.png" width=150px alt="20220115184505"/>|gird 4x4 exp 0h8w|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115184526.png" width=150px alt="20220115184526"/>|gird 4x4 exp 8h8w|
|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png" width=150px alt="20220115190637"/>|gird 4x4 exp 8h8w moved|