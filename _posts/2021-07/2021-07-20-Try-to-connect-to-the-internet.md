---
layout: single
title:  "Try to connect to the internet"
date:   2021-07-20 10:37:00 +0800
categories: env system
katex: true
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/3edc8471faea4ec0350dd49526aac66.png
---

## 尝试解决上网问题

- 笔记本-wifi-暂时走刘浩宇师兄的账号密码
- 台式机还没有办法联网
  - 利用暂时的漏洞
  - 通过ipv6搭建ssh信道
  - 目前的路由
    - 台式机->seattle ipv6->阿里云->笔记本
  - 由于未联网状态下无法使用openvpn的1194或其他端口，暂时解决访问问题
- seattle 到 台式机的root登录

  ```vim
  PermitRootLogin yes
  ```

- 使用nginx反向代理，将台式机暴露给公网
- ali-hk -ipv6-> 台式机
- 地址 [公网地址](http://ucas.lifelab.space)
- [jupyter-lab](http://ucas.lifelab.space/jupyter)

## 装了哪些组件

- apt install sshpass
- apt install openvpn
- apt install unzip

## 阅读

- 三维重建综述
- ![3edc8471faea4ec0350dd49526aac66](https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/3edc8471faea4ec0350dd49526aac66.png)
