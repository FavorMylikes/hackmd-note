---
layout: single
title:  "Start up OpenSfm"
date:   "2021-8-6 13:35:30 +0800"
categories: 3d docker
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210806134610.png
---

## Start service with docker

- [mapillary/OpenSfM - github](https://github.com/mapillary/OpenSfM/)
- [sbstnkll/opensfm -Docker hub](https://hub.docker.com/r/sbstnkll/opensfm)
- [How to use](https://www.opensfm.org/docs/using.html)

```docker
docker pull sbstnkll/opensfm:opensfm
docker save -o opensfm.docker.docker sbstnkll/opensfm:opensfm
```

- docker host

```docker
docker load -i opensfm.docker
docker run -itd -p 8000:8000 \
--mount type=bind,source=/path/to/OpenSfM/data,target=/source/OpenSfM/data \
sbstnkll/opensfm:opensfm \
bash -c 'python3 -m http.server'
```

- run compiler command need attach

```docker
docker attach <containerID>
```

## Using OpenSfm

- Using two docker container, one of them is the python http server, the second using for opensfm command
- Building model

```bash
bin/opensfm_run_all data/project/
```

- The Poeject Tree like

```bash
project/
├── config.yaml
└── images
```

- Here `config.yaml` has default config
- Override it by reading this [doc](https://www.opensfm.org/docs/_modules/opensfm/config.html#default_config)

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210806153055.png" alt="20210806153055">

- To check result
- `http://ucas/viewer/reconstruction.html#file=http://path/to/data/project/reconstruction.meshed.json`
