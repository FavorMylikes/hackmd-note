---
layout: single
title:  "ICP Gradient descent"
date:   "2021-8-27 00:42:17 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210828004409.png
---

## solver

```python
def fun(x):
    return x**2 - 16

def double_fun(x):
    return 3*np.exp(x[0]) + x[1]**2 - 16

sample_point = rotated_point[sorted(np.random.choice(rotated_point.shape[0], 20, replace=False)), :]
def icp_fun(x):
    R = icp(originate_point, sample_point, x, 2)
    rotated_fit_point = cv2.transform(originate_point[None, :], R)[0]
    return cost(rotated_fit_point, rotated_point)

def derivative(f, x):
    delta = 1E-6 * np.eye(len(x))
    de = []
    for i in range(len(x)):
        de.append((f(x + delta[i]) - f(x - delta[i])) / (2 * 1E-6))
    return np.array(de)

def solve(f, param_size):
    history = []
    cost = 1E6
    param = np.ones(param_size)
    print(cost)
    bar = tqdm(range(1000))
    postfix = {"cost": cost}
    for i in bar:
        cost = f(param)
        postfix = {"cost": cost}
        bar.set_postfix(postfix)
        f_p = derivative(f, param)
        param = param - 0.005 * cost / f_p
        history.append([*param, cost])
        if np.abs(cost) < 1E-6:
            break
    return history
```

## Code

[jupyter](http://ucas/jupyter/lab/tree/3d/model/icp/icp_2d.ipynb)

## Traning

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210828004409.png" alt="20210828004409"/>

## Animation

- <iframe width="560" height="315" src="https://youtube.com/embed/OfrOVlea25U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- <iframe width="560" height="315" src="https://youtube.com/embed/4lmQZMWoWog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
