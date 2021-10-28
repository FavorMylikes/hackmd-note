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

- dataset: `FashionMNIST`
- Main Code

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

## Reference

- [pytorch多gpu并行训练 - link-web的文章 - 知乎](https://zhuanlan.zhihu.com/p/86441879)
