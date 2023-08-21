---
layout: single
title:  "ubuntu install desktop"
date:   "2022-10-13 15:17:13 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1663053520068.jpg
---

## Ubuntu 服务器安装桌面

```shell
sudo apt install ubuntu-desktop
sudo apt install tightvncserver xrdp
```

- login with `xorg` options
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20221012111415.png" alt="20221012111415"/>

## Reference

- [🤙Windows 远程控制 Ubuntu 系统 - segmentfault](https://segmentfault.com/a/1190000024537377)
- [How to Switch Between GDM and LightDM in Ubuntu - itsfoss](https://itsfoss.com/switch-gdm-and-lightdm-in-ubuntu-14-04/)
  - 用于lightdm 和 GDM3切换
- [CentOS8或Ubuntu17.10以上系统无法通过向日葵被远控解决方案](https://service.oray.com/question/11969.html)
- [如何在 Ubuntu 服务器上安装桌面环境（GUI）](https://linux.cn/article-13408-1.html)
  - 内置部分方法不应采用
  - `tasksel` 不是很安全
- 应当安装`ubuntu-desktop`而不是`xubuntu-desktop`