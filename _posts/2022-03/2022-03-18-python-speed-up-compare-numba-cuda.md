---
layout: single
title:  "Python speed up, Campare for numba and cuda"
date:   "2022-3-18 20:28:45 +0800"
categories: 3d pytorch

---


## numba

### Code

```python
from timeit import timeit

import numpy as np
import numba
from numba import jit, njit


# 传入jit，numba装饰器中的一种
@jit(nopython=True)
def go_fast(a):  # 首次调用时，函数被编译为机器代码
    trace = 0
    # 假设输入变量是numpy数组
    for i in range(a.shape[0]):  # Numba 擅长处理循环
        trace += np.tanh(a[i, i])  # numba喜欢numpy函数
    return a + trace  # numba喜欢numpy广播


@jit(nopython=True)
def go(a):
    t = np.zeros(a.shape[0])
    for i in range(a.shape[0]):
        t[i] = a[i, i]
    return a + np.sum(np.tanh(t))


x = np.arange(100).astype(np.float64).reshape(10, 10)
```

### Blog

- [How do Cython, Numba, and PyPy compare in terms of performance, ease of use, and restrictions - Quora](https://www.quora.com/How-do-Cython-Numba-and-PyPy-compare-in-terms-of-performance-ease-of-use-and-restrictions)
- [优化 Python 性能：PyPy、Numba 与 Cython，谁才是目前最优秀的 Python 运算解决方案？ - 皮皮关的回答 - 知乎](https://www.zhihu.com/question/24695645/answer/519267980)
- [numba，让python速度提升百倍 - 朱卫军的文章 - 知乎](https://zhuanlan.zhihu.com/p/78882641)

### Result

|method|jit|timeit|
|-|-|-|
|go_fast||11.3 µs ± 147 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)|
|go_fast|njit|805 ns ± 9.31 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)|
|go||7.43 µs ± 45.6 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)|
|go|njit|921 ns ± 9.16 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)|

## cuda

### Code Cuda

- compile

```console
nvcc -std=c++11 -o nbody nbody.cu
```

- report

```console
nsys profile --stats=true --force-overwrite=true -o nbody-report ./nbody
```
