---
layout: single
title:  "ICP Back Propagate fix"
date:   "2021-8-29 13:52:11 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830190751.png
---

## A Error at ICP iterations

- [Iterative Closest Point (ICP) implementation on python - stack](https://stackoverflow.com/a/20146045/5587080)

```python
 import cv2
 import numpy as np
 import matplotlib.pyplot as plt
 from sklearn.neighbors import NearestNeighbors


def icp(a, b, init_pose=(0,0,0), no_iterations = 13):
    src = np.array([a.T], copy=True).astype(np.float32)
    dst = np.array([b.T], copy=True).astype(np.float32)

    Tr = np.array([[np.cos(init_pose[2]),-np.sin(init_pose[2]),init_pose[0]],
                   [np.sin(init_pose[2]), np.cos(init_pose[2]),init_pose[1]],
                   [0,                    0,                   1          ]])

    src = cv2.transform(src, Tr[0:2])

    for i in range(no_iterations):
        nbrs = NearestNeighbors(n_neighbors=1, algorithm='auto',
                                warn_on_equidistant=False).fit(dst[0])
        distances, indices = nbrs.kneighbors(src[0])
        T = cv2.estimateRigidTransform(src, dst[0, indices.T], False)
        src = cv2.transform(src, T)
        # Here is the main wrong code
        Tr = np.dot(Tr, np.vstack((T,[0,0,1])))
    return Tr[0:2]
```

- Wrong phenomenon
  - Deception estimate[有偏估计]
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826020617.png" alt="20210826020617"/>
    - Difference of sample size
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826110115.png" alt="20210826110115"/>
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826110047.png" alt="20210826110047"/>
    - Cost field
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825225405.png" alt="20210825225405" />

## How to fix that shit

```python
# Tr = np.dot(Tr, np.vstack((T,[0,0,1])))
Tr = np.matmul(np.vstack((T1, [0,0,1])), Tr)
```

- After fixed
  - `sample_size: [2,5,10,20,40,80,160]`
  - `iter_num: 20`
  - <iframe width="560" height="315" src="https://www.youtube.com/embed/ka1lyimsf5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - reduce the estimated bias
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210829153235.png" alt="20210829153235"/>
  - Difference of sample size
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830190751.png" alt="20210830190751"/>
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830185245.png" alt="20210830185245"/>
    - Cost field
      - `Sample size=2`
        - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830184835.png" alt="20210830184835"/>
      - `Sample size=5`
        - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830184902.png" alt="20210830184902"/>
      - `Sample size=10`
        - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830184925.png" alt="20210830184925"/>
      - `Sample size=20`
        - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830185000.png" alt="20210830185000"/>
      - `Sample size=160`
        - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830185032.png" alt="20210830185032"/>

## Fitting

- case 1
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=120`
  - `p=[0.1,  0.3, np.pi/2.2]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830000857.png" alt="20210830000857"/>
- case2
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=120`
  - `p=[-1,  -0.9, 0]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830001101.png" alt="20210830001101"/>

## Training

- case1
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=20`
  - `init_x=[0,0,0]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830224511.png" alt="20210830224511"/>
- case2
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=20`
  - `init_x=[1,1,1]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830224548.png" alt="20210830224548"/>
- case3
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=20`
  - `init_x=[2,2,2]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830224611.png" alt="20210830224611"/>
- case4
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=1`
  - `init_x=[1, -1, 2]`
  - <iframe width="560" height="315" src="https://www.youtube.com/embed/VDpLtrB1iIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
- case5
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=2`
  - `init_x=[-1, 1, 1]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830224404.png" alt="20210830224404"/>
- case6
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=1`
  - `init_x=[1, -1, 2]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830224404.png" alt="20210830224404"/>
- case6
  - `sample_size=10`
  - `Nelder-Mead`
  - `iter_num=0`， no affine
  - `init_x=[10, -10, 2]`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830224404.png" alt="20210830224404"/>
  - <iframe width="560" height="315" src="https://www.youtube.com/embed/RoxIEuDhUA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
