---
layout: single
title:  "Ubuntu change dns"
date:   "2022-7-22 13:56:51 +0800"
categories: tutorial
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20220115190637.png
---

## 现象

- Can not ping, but curl ok
- `apt` can not `update`
  - `Could not resolve 'nvidia.github.io'`
- Can not ping `8.8.8.8`, but `223.5.5.5`(ali dns) ok

## 如何解决

- 更改dns
- ubuntu 18

  ```shell
  sudo vim /etc/systemd/resolved.conf
  DNS=223.5.5.5
  sudo systemctl restart systemd-resolved.service
  ```

- 检查
- `systemd-resolve --status`

```console
Global
    DNS Servers: 223.5.5.5
```

## Reference

- [Ubuntu 18.04 永久修改DNS的方法 - 51cto](https://blog.51cto.com/u_14841814/2988890)
