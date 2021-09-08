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

## Running Report

|num|extract_metadata|extract_metadata|detect_features|match_features|create_tracks|reconstruct|mesh|undistort|compute_depthmaps|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|berlin|3|0.01 |0.01 |0.34 |0.17 |0.03 |0.49 |0.11 |0.53 |5.71 |
|dinosaur|33|0.00 |0.00 |0.00 |0.16 |0.03 |8.63 |0.12 |0.19 |2.60 |
|dinosaur_gps|33|0.02 |0.02 |0.33 |0.48 |0.04 |8.77 |0.14 |0.19 |3.64 |
|lund|29|0.00 |0.00 |0.35 |0.23 |0.02 |0.17 |0.03 |0.03 |3.01 |
|qingdao_48|48|0.08 |0.08 |0.68 |0.25 |0.07 |2.29 |0.27 |0.63 |4.94 |
|qingdao_96|96|0.08 |0.08 |0.67 |0.25 |0.07 |2.29 |0.27 |0.64 |4.95 |
|qingdao_192|192|0.08 |0.08 |0.68 |0.24 |0.07 |2.14 |0.26 |0.63 |4.92 |
|qingdao_384|384|0.08 |0.08 |0.67 |0.33 |0.08 |3.34 |0.30 |0.64 |5.19 |
|qingdao_448|445|0.08 |0.08 |0.67 |0.33 |0.08 |3.49 |0.29 |0.63 |5.25 |
|shenzhen_399|394|0.10 |0.10 |0.69 |0.30 |0.08 |6.23 |0.34 |0.76 |5.16 |

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210808010053.png" alt="20210808010053">
