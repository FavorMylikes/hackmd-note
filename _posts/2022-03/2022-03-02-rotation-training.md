---
layout: single
title:  "Rotation Training by backward progation"
date:   "2022-3-12 21:33:43 +0800"
categories: 3d pytorch
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png
---

## Fix light parameter

### With Sobel Loss

```python
RANDOM_UV = False
UV_SHAPE = 1024, 1024, 3
UV_TRAIN = False
AMBIENT_TRAIN: bool = True
DIFFUSE_TRAIN: bool = False
SPECULAR_TRAIN: bool = False
LOCATION_TRAIN: bool = False

expect_value 
euler_angles_to_matrix(rotation_mask.rotation[i] / 10, 'XYZ') @
euler_angles_to_matrix(torch.tensor([-.1, -.2, -.03], device=device), 'ZYX')
```

- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1647091326.jpg" alt="1647091326"/>

### With Pixel Loss

```python
RANDOM_UV = False
UV_SHAPE = 1024, 1024, 3
UV_TRAIN = False
AMBIENT_TRAIN: bool = True
DIFFUSE_TRAIN: bool = False
SPECULAR_TRAIN: bool = False
LOCATION_TRAIN: bool = False

expect_value 
euler_angles_to_matrix(rotation_mask.rotation[i] / 10, 'XYZ') @
euler_angles_to_matrix(torch.tensor([-.1, -.2, -.03], device=device), 'ZYX')
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220318201510.png" alt="20220318201510"/>
