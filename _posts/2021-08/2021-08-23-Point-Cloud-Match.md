---
layout: single
title:  "Point Cloud Match"
date:   "2021-8-23 12:26:00 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210823123247.png
---

## [script](http://ucas/jupyter/lab/tree/3d/model/wavefront_obj/analysis.ipynb)

- Cloud point match
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210823123247.png" alt="20210823123247"/>

- for greeb `x`
  - 高斯分布得到子集
- for red dot
  - 随机抽样得到的子集
- other is total tie point

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210823161830.png" alt="20210823161830"/>

- Block 3 tie point

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210823164038.png" alt="20210823164038"/>

- 尝试多对多ICP

```python
def match(pc_gps, pc_model, t):
    scala = np.array([110959.71900894716, 90118.10182968706, 1])
    target_pair = []
    def distance(source, target):
        return np.linalg.norm(scala * (source - t) - target, axis=1)
    for i in tqdm(range(len(pc_gps)), desc="inner", leave=True):
        dis = distance(source = pc_gps[i, :], 
                       target = pc_model[:, :])
        closest = np.argmin(dis)
        target_pair.append(pc_model[closest, :])
    return (((pc_gps[:, :] * scala) - target_pair)/scala).mean(axis=0)
```
