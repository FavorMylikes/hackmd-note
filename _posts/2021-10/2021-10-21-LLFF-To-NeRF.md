---
layout: single
title:  "The Path to Nerf" 
date:   "2021-10-21 14:44:18 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211021200334.png
---

## LLFF

- Prepare Image

```console
data/desk/images
├── 2c68275866dc2b1da47f5eaf885c583.jpg
├── 2fd70dcc8b5f374886df488054fa5ab.jpg
├── 34df512a279040a3820c531c13d5e17.jpg
├── 358af944c88b7a3ff231e4e2eeafdd0.jpg
├── 3808e607c1cf63cebf12b29dc7f2442.jpg
├── 5dbf835776758757c2be8b5ee08e17b.jpg
├── 9ca4a35fffb7a69f84be9e1f2945848.jpg
├── d86ac4a847edb12b6dcded776d47732.jpg
├── e1402fe72717cfac86bd9cd69c3b98f.jpg
├── f2dfe38840ae9fd02dd33fa09dad769.jpg
├── fd177d4977813dfce11b09f71797e01.jpg
└── ff21b26780837071d7980447866f217.jpg
```

- At LLFF project directory

```bash
nvidia-docker run --rm --env CUDA_VISIBLE_DEVICES=3 --volume /:/host --workdir /host$PWD tf_colmap bash demo.sh
```

- `--env CUDA_VISIBLE_DEVICES=3` is docker container env.
- Use watch command to check which gpu is available
  - `watch 'nvidia-smi | grep Default'`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211021192003.png" alt="20211021192003"/>
- output

```console
data/desk
├── colmap_output.txt
├── database.db
├── images
├── images_480x360
├── mpis_360
├── outputs
├── poses_bounds.npy
└── sparse
    └── 0
        ├── cameras.bin
        ├── images.bin
        ├── points3D.bin
        └── project.ini
```

- <iframe width="560" height="315" src="https://www.youtube.com/embed/LXCnnWBqoYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Attention

- 拍摄的图片需要是个矩阵，不然容易报错
  - 报错代码主要位置
  - `llff/poses/pose_utils.py:66`

## Docker 越权

- `docker run -it --volume /:/host tf_colmap`
- change `/host/etc/sudoers`
- append **`lihuibin    ALL=(ALL:ALL) ALL`** below `root    ALL=(ALL:ALL) ALL`
- [linux下添加用户并赋予root权限](https://blog.csdn.net/hellozpc/article/details/46952595)

## Nerf

- issues
  - `ffmpeg: Unrecognized option 'crf'. Error splitting the argument list: Option not found`
    - [stackoverflow](https://superuser.com/questions/1302753/ffmpeg-unrecognized-option-crf-error-splitting-the-argument-list-option-not)
    - remove ffmpeg from conda
      - `conda remove --force ffmpeg`
    - install ffmpeg with apt
      - `sudo apt install ffmpeg`
