---
layout: single
title:  "Omniverse Kaolin install"
date:   "2022-10-14 15:17:13 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20221014194734.png
---

## Startup

### Requirement

- Desktop
- RTX 2080 +

### Reconmmend

- [Livestream Clients](https://docs.omniverse.nvidia.com/app_kaolin/app_kaolin/manual_livestream_clients.html)

### Install

- [Kaolin - github](https://github.com/NVIDIAGameWorks/kaolin)
- [Kaolin - py package](https://kaolin.readthedocs.io/en/latest/index.html)
- [Kaolin - Installation](https://kaolin.readthedocs.io/en/latest/notes/installation.html)

## Run

```bash
 MESA_GL_VERSION_OVERRIDE=4.6 ./omniverse-launcher-linux.AppImage
```

## Issue

- `kaolin` [carb.cudainterop.plugin] Peer access from 0 to 1 is NOT supported.
  - restart omniverse with `MESA_GL_VERSION_OVERRIDE=4.6`

## Reference

- [GLXBadFBConfig - forums.nvidia](https://forums.developer.nvidia.com/t/not-able-to-install-issac-sim-on-ubuntu-remote-desktop-workstation/208317/3?u=l786112323)
- [Linux Troubleshooting](https://docs.omniverse.nvidia.com/prod_kit/prod_kit/linux-troubleshooting.html#q8-startup-failure-for-carb-glinterop-with-x-error-of-failed-request-glxbadfbconfig)
  - Q6, Q8
