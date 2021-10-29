---
layout: single
title:  "Pytorch Multi GPU"
date:   "2021-10-27 15:19:10 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211028112306.png
---

[dcgm-exporter_repo]: https://github.com/NVIDIA/dcgm-exporter
[dcgm-exporter_fork]: https://img.shields.io/github/forks/NVIDIA/dcgm-exporter.svg?style=social&label=Fork&maxAge=2592000
[dcgm-exporter_star]: https://stars.medv.io/NVIDIA/dcgm-exporter.svg

## 单机多卡

### Priori Knowledge

- Pytorch 1.x 的多机多卡计算模型
  - Uber: Horovod, Baidu: RingAllReduce
    - [Baidu: RingAllReduce](https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgring-gpus.png" alt="ring-gpus" width="250px"/><img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgscatter-reduce-iteration-4.png" alt="scatter-reduce-iteration-4" width="250px"/>
- PS 计算模型
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgmaster-slave-gpus.png" alt="master-slave-gpus"  width="300px"/>

### DataParallel [DP]

- dataset: `FashionMNIST`
- Main Code
- `DataParallel`
  - `Parameter server` 算法
  - > reducer的那张卡会多出3-4g的显存占用

```python
# Model
net = nn.DataParallel(net)
net = net.cuda()
# Data
inputs = inputs.cuda()
labels = labels.cuda()
```

|Params|Speed|Mem%|
|-|-|-|
|CUDA_VISIBLE_DEVICES=3|15000it [00:55, 271.38it/s]|3:7-13|
|CUDA_VISIBLE_DEVICES=3,4,6|15000it [01:48, 138.19it/s]|3:4-7,4:3-5,6:0|
|CUDA_VISIBLE_DEVICES=2,3,4|15000it [01:50, 134.29it/s]|2:4-7,3:3-5,4:0|
|CUDA_VISIBLE_DEVICES=0,1,2,3|15000it [02:59, 83.67it/s]|0,1,2,3:2-3|
|CUDA_VISIBLE_DEVICES=1,2,3,4,6|15000it [02:28, 101.34it/s]]|1:4-6,2,3,4:2-4,6:0|
|CUDA_VISIBLE_DEVICES=6||**CUDNN_STATUS_NOT_INITIALIZED**|
|CUDA_VISIBLE_DEVICES=3,6||**CUDNN_STATUS_NOT_INITIALIZED**|

- `CUDNN_STATUS_NOT_INITIALIZED`
  - Gpu 内存未释放，但未使用，存在僵尸进程
  - `fuser -v /dev/nvidia*` to check all pid with this device
  - `fuser -k /dev/nvidia6` kill all processes that using the device nvidia6
    - **But it will kill all other processes too**

### DistributedDataParallel [DDP]

- `torch.distributed.get_rank()`
  - 获得进程号
  - `--nproc_per_node=2`时，两个进程的rank是不一样的

    ```python
    rank = torch.distributed.get_rank()
    torch.cuda.set_device(rank)  # 重要
    inputs = inputs.cuda()
    if i == 0:
        # 不同的进程会把不同的数据放到不同的GPU上
        # DataLoader 的 sampler处理这一逻辑
        # 因此batch速度会加快
        print(inputs.sum())  # tensor(-1578.1804, device='cuda:0'), tensor(-1578.1804, device='cuda:0')
    ```

- 保存参数 (只需要在一台机器上执行一次)
  
  ```python
    if dist.get_rank() == 0:
        torch.save(model.module, "saved_model.ckpt")
  ```

- main code

```python
net = net.cuda()
net = nn.parallel.DistributedDataParallel(net)
...
trainloader = torch.utils.data.DataLoader(trainset, 
                                          batch_size=4,
                                          num_workers=2,
                                          sampler=DistributedSampler(trainset, shuffle=True))

testloader = torch.utils.data.DataLoader(testset, 
                                         batch_size=4,
                                         num_workers=2,
                                         sampler=DistributedSampler(testset, shuffle=False))
```

- `nproc_per_node`: node

|Speed|CUDA|LOCAL_RANK|OMP|node|Mem%|epoch|Loss|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|7500it [00:32, 229.33it/s]*2|0,3,5,6|0|1|2|3:7-13|1|0.4727|
|3750it [00:17, 210.65it/s]*4|0,3,5,6|0|1|4|0,3,5,6:17-30|1|0.6264|
|7500it [00:32, 228.66it/s]*2|0,3|0|1|2|0,3:17-30|1|0.4878|
|15000it [01:00, 210.65it/s]|0,3,5,6|0|1|1|0:17-30|1|0.4165|
|7500it [00:32, 228.66it/s]*4|0,3,5,6|0|1|2|0,3:17-30|2|0.3774|
|3750it [00:25, 149.55it/s]*16|0,3,5,6|0|1|4|0,3,5,6:17-30|4|0.3563|

## 多机多卡

- nnodes
  - 机器数
- node_rank
  - 当前机器序号
- nproc_per_node
  - 每台机器上进程数
- address, port
  - 通讯地址及端口

## Gpu Monitor

- [Github - NVIDIA/gpu-monitoring-tools](https://github.com/NVIDIA/gpu-monitoring-tools)
  - **deprecated** at August 2021
- [NVIDIA/dcgm-exporter](https://github.com/NVIDIA/dcgm-exporter)
  - |Repository|spark|star|
    |:-:|:-:|:-:|
    |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=NVIDIA&repo=dcgm-exporter&show_owner=true)][dcgm-exporter_repo]|[![Sparkline](https://stars.medv.io/NVIDIA/dcgm-exporter.svg)][dcgm-exporter_repo]|<a href='https://starchart.cc/NVIDIA/dcgm-exporter'><img src='https://starchart.cc/NVIDIA/dcgm-exporter.svg' width='200px'/></a>
  - [Offcial Doc](https://docs.nvidia.com/datacenter/cloud-native/gpu-telemetry/dcgm-exporter.html)

    ```console
    DCGM_EXPORTER_VERSION=2.1.4-2.3.1 && docker run -d --rm --gpus all    --net host --cap-add SYS_ADMIN nvcr.io/nvidia/k8s/dcgm-exporter:${DCGM_EXPORTER_VERSION}-ubuntu20.04 -f /etc/dcgm-exporter/dcp-metrics-included.csv
    ```

- Prometheus
  - config

  ```yaml
    - job_name: 'gpu'
      scheme: 'http'
      metrics_path: '/metrics'
      static_configs:
      - targets:
        - 'localhost:9400'
  ```

- Grafana
  - [Install](https://grafana.com/docs/grafana/latest/installation/debian/)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211028112306.png" alt="20211028112306"/>
  - [DashBoard import 12239](https://grafana.com/grafana/dashboards/12239)
- Fish
  - `sudo apt install fish`
  - `chsh -s /usr/bin/fish` change default bash to fish
  - `conda init fish` at `bash`
  - `conda config --set auto_activate_base true`, auto activate base

## Reference

- [🤙[原创][深度][PyTorch] DDP系列第一篇：入门教程 - 996黄金一代的文章 - 知乎](https://zhuanlan.zhihu.com/p/178402798)
- [pytorch多gpu并行训练 - link-web的文章 - 知乎](https://zhuanlan.zhihu.com/p/86441879)
- [【分布式训练】单机多卡的正确打开方式（三）：PyTorch - Nicolas的文章 - 知乎](https://zhuanlan.zhihu.com/p/74792767)
- [【深度学习分布式】Parameter Server 详解 - 仙道菜的文章 - 知乎](https://zhuanlan.zhihu.com/p/21569493)
  - [incubator-mxnet_repo]: https://github.com/apache/incubator-mxnet
    [incubator-mxnet_fork]: https://img.shields.io/github/forks/apache/incubator-mxnet.svg?style=social&label=Fork&maxAge=2592000
    [incubator-mxnet_star]: https://stars.medv.io/apache/incubator-mxnet.svg

    |Repository|spark|star|
    |:-:|:-:|:-:|
    |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=apache&repo=incubator-mxnet&show_owner=true)][incubator-mxnet_repo]|[![Sparkline](https://stars.medv.io/apache/incubator-mxnet.svg)][incubator-mxnet_repo]|<a href='https://starchart.cc/apache/incubator-mxnet'><img src='https://starchart.cc/apache/incubator-mxnet.svg' width='200px'/></a>
