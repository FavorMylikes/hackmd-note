---
layout: single
title:  "ICP Benchmark"
date:   "2021-8-25 15:22:03 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825222557.png
---

## ICP 2D 收敛域检测

- 数据集

```python
ang = np.linspace(-np.pi/2, np.pi/2, 320)
originate_point = np.array([ang, np.sin(ang)]).T
th = np.pi/2
rot = np.array([[np.cos(th), -np.sin(th)],[np.sin(th), np.cos(th)]])
# 旋转后的点
rotated_point = cv2.transform(originate_point[None, :], np.append(rot, np.array([[0.2], [0.3]]), axis=1))[0]
# 采样
sample_rotated_point = rotated_point[sorted(np.random.choice(b.shape[0], 10, replace=False)), :]
```

- 其中
  - `rot`为旋转矩阵
    $$
    M(\theta) = \begin{bmatrix}
        \cos(\theta)&-\sin(\theta)\\
        \sin(\theta)&\cos(\theta)\\
    \end{bmatrix}
    = exp\bigg(\begin{bmatrix}
        0&-\theta\\
        \theta&0
    \end{bmatrix}\bigg)
    $$
  - `0.2, 0.3`为平移向量
- 较差的结果
  - param
    - `sample_size=10, init_pose_x=.9, init_pose_y=0.9, init_pose_theta=1.7`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210831134030.png" alt="20210831134030"/>
- 较好的结果
  - param
    - `sample_size=10, init_pose_x=.1, init_pose_y=.3, init_pose_theta=np.pi/2.2`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826020423.png" alt="20210826020423"/>
  - 尺度效应明显
- 收敛场
  - 未归一化
    - `cost = norm(b, res)`
    - `color=cost/cost.max()`
    - `sample_size=10`
    - `init_pose_x=-1:0.1:1, init_pose_y=-1:0.1:1, init_pose_theta=0:0.1:pi`
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825225405.png" alt="20210825225405" height="200px"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825225537.png" alt="20210825225446" height="200px"/>
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826000825.png" alt="20210826000825" width="450px"/>
  - Difference of sample size
    - avg
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826110115.png" alt="20210826110115"/>
    - std
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826110047.png" alt="20210826110047"/>
