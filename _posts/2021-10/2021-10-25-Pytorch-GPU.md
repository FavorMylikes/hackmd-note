---
layout: single
title:  "Pytorch Gpu"
date:   "2021-10-25 22:59:21 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211025231533.png
---

## Pytorch using GPU to training

- Make input data and model to cuda device
  - for Model

    ```python
    net = Net()
    device = None
    if torch.cuda.is_available():
        device = torch.device("cuda")
        net = net.to(device)
    ```

  - for data

    ```python
    inputs = inputs.to(device)
    labels = labels.to(device)
    ```

  - verify

    ```python
    input.device  # cuda
    label.device  # cuda
    ```

- Make output data to cpu device
  - for data
  
  ```python
  output = net(images)   # images>gpu, net>gpu, output>gpu
  output = output.cpu()  # output>cpu
  images = images.cpu()  # images>cpu
  labels = labels.cpu()  # labels>cpu
  ```

## Follow [2] to training by pytorch

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211025231533.png" alt="20211025231533"/>

## Reference

- [PyTorch 20.GPU训练 - 科技猛兽的文章 - 知乎](https://zhuanlan.zhihu.com/p/158375254)
- [VISUALIZING MODELS, DATA, AND TRAINING WITH TENSORBOARD - Pytorch](https://pytorch.org/tutorials/intermediate/tensorboard_tutorial.html)
- [Convert CUDA tensor to NumPy](https://stackoverflow.com/questions/57832423/convert-cuda-tensor-to-numpy)