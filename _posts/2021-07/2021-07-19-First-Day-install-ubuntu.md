---
layout: single
title:  "First Day, install ubuntu"
date:   2021-07-19 10:32:00 +0800
categories: env system
katex: true
---

## 台式机被格式化, USB装Ubuntu系统， 18.04.5

- 没有登录账户
  - 网络层的非特殊站点均要求登录
    - 172.18.50.22:8080
  - 目前观察到的不要求登录的站点
    - archive.ubuntu.com
    - anconda.com
    - search.cpan.org
  - 在试图安装snap时, 出现Ca认证错误，怀疑跟网络环境有关

    ```shell
    openssl s_client -connect api.snapcraft.io:443
    ```

  - 出现`Verification error: self signed certificate`
  - `issuer=CN = H3C-HTTPS-Self-Signed-Certificate-5978b0f0a780e531`
  - 怀疑H3C路由器做了固定域名策略

## 装了哪些组件

```shell
apt install namp
apt install traceroute
apt install python
apt install tree
apt install conda
apt install snap
apt install make
apt install gcc 
apt install libncurses-dev
```

## What is the next

- install snap
- install node 14
- install jupyterlab
- install pytorch
- install tensorboard
