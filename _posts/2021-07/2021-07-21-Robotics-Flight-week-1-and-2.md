---
layout: single
title:  "Robotics-Flight week 1 and 2"
date:   2021-07-21 10:12:00 +0800
categories: coursera system env
katex: true
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210721131633.png
---

## 准备看点Coursera课程

- [Coursera: robotics-flight](https://www.coursera.org/learn/robotics-flight/)
  - Week 1
    - State Estimation
      - obtaub reliable estimates of position and velocity
    - SLAM(Simultaneous Localization And Mapping)
    - Control for trajectory tracking in a simple second-order system
      - PD control
        - $u(t) = x''^{des}(t)+K_ve'(t)+K_pe(t)$
      - PID control (proportion integration differentiation)
        - $u(t) = x''^{des}(t)+K_ve'(t)+K_pe(t)+K_i\int_0^t{e(\tau)d\tau}$
        - ![20210721131633](https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210721131633.png)
        - code [Here](https://ucas.lifelab.space/jupyter/lab/tree/PID_control.ipynb)
        - ![20210721132159](https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210721132159.png)
  - Week2
    - rotation matrix
      - is orthogonal matrix
      - all vector is 1
      - $R^{-1} = R^T$

## Ubuntu chromedriver remote browser

- apt install libnss3  
  - > fix [Service chromedriver unexpectedly exited. Status code was: 127]
- wget <https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb>
- apt install ./google-chrome-stable_current_amd64.deb
- try to use nginx reserve proxy to handle 9200 port

```nginx
location /chrome/ {
        proxy_pass http://127.0.0.1:9222/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Origin "";
        proxy_set_header Host "[********]";  # cause chrome use host as ws address
        sub_filter '/json' '/chrome/json';
        sub_filter_types *;
        sub_filter_once off;
}
```

## what is the next

- `This request has been blocked; this endpoint must be available over WSS.`
