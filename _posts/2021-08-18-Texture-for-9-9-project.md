---
layout: single
title:  "Texture for 9-9 project"
date:   "2021-8-18 14:55:52 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816194645.png
---

## Try difference combination

### original

#### case 1

- srs: original, EPSG:4490
- rotation: M_00 to M_22
- t: x,y,z in metadata>center
- xml: original
- data: 1-1

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818191406.png" alt="20210818191406"/>
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818191835.png" alt="20210818191835"/>

#### case 2

- srs: original, EPSG:4490
- rotation: M_00 to M_22
- t: x,y,z in center
- xml: original
- data: 1-1

**NOTHING** output

### export from ccm

- srs: 4490
- rotation: M_00 to M_22
- t: x,y,z in center
- xml: original
- data: 1-1

**NOTHING** output

## create orthogonal obj and plant obj

- orthogonal

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818233612.png" alt="20210818233612"/>

- plant

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818235011.png" alt="20210818235011"/>

- sphere

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818235000.png" alt="20210818235000"/>

**Nothing** output

## single pic with created model

`error: invalid project`

## block 3 plant xy height less tri

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210819010552.png" alt="20210819010552"/>

## block 3 sphere block 3 small tri

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210819131819.png" alt="20210819131819"/>

## block 3 sphere block 3 large tri

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210819140206.png" alt="20210819140206"/>

## block 3 sphere block 3 single 10 tiny tri

**Nothing** output
