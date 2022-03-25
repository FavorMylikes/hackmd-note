---
layout: single
title:  "Python setup.py, How to install package by your self"
date:   "2022-3-19 21:35:47 +0800"
categories: tutorial
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png
---

## Code

- [Home Page - Github](https://github.com/FavorMylikes/cuefig)
- [Pypi Page](https://pypi.org/project/cuefig/)
- `setup.py` file

```python
from setuptools import setup, find_packages

with open('requirements.txt', mode="r", encoding="utf8") as f:
    required = f.read().splitlines()

setup(
    name='cuefig',
    version='0.0.2',
    url='https://github.com/FavorMylikes/cuefig',
    license='MIT License',
    author='麦丽素',
    author_email='l786112323@gmail.com',
    description='A config framework that you can cue and hint quickly.',
    package_data={"": ["*.yaml"], },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=required,
    packages=find_packages(),
    python_requires=">=3.7",
)
```

- tree

```console
│   LICENSE
│   main.py
│   README.md
│   requirements.txt
│   setup.py
│
├───cuefig
│   │   __init__.py
│   │
│   ├───logger
│   │       logging.yaml
│   │       __init__.py
│   │
│   └───utils
│           __init__.py


```

- install

```console
python ./setup.py install
```

- deploy

```console
python setup.py check
python -m build
python -m twine upload --skip-existing --repository pypi dist/* --verbose
```

## Hint

- [You can not upload save version dist twice](https://github.com/pypa/packaging-problems/issues/74#issuecomment-137763944)
- [Use `~/.pypirc` to save pypi token](https://packaging.python.org/en/latest/specifications/pypirc/#using-a-pypi-token)

## Reference

- [花了两天，终于把 Python 的 setup.py 给整明白了 - 王炳明的文章 - 知乎](https://zhuanlan.zhihu.com/p/276461821)
- [制作基于pbr的python可发布package - CSDN](https://blog.csdn.net/napolunyishi/article/details/52067872)
- [pytorch通过torch.utils.cpp_extension构建CUDA/C++拓展 - CSDN](https://blog.csdn.net/tanmx219/article/details/87783312)
- [Packageing project - python🤙](https://packaging.python.org/en/latest/tutorials/packaging-projects)