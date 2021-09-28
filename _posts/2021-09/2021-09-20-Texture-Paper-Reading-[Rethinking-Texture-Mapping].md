---
layout: single
title:  "Texture Paper Reading - [Rethinking Texture Mapping]"
date:   "2021-09-21 19:03:21 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921190258.png
---


## [Rethinking Texture Mapping - State of The Art Report](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.13656)

- ![j](https://img.shields.io/badge/sig_graph-2017-blue?style=flat-square)![j](https://img.shields.io/badge/EG-2019-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-26-blue?style=flat-square)
- [Paper.pdf](http://www.cemyuksel.com/courses/conferences/siggraph2017-rethinking_texture_mapping/rethinking_texture_mapping_course_notes.pdf)

### 1.1 Scope

- Perfecting the Traditional Texture Mapping
  - [RNLL10 - Invisible Seams](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2010.01746.x)
    - ![j](https://img.shields.io/badge/CGF-2010-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-53-blue?style=flat-square)
    - [Paper.pdf](https://hal.inria.fr/inria-00547713/PDF/seamless.pdf)
  - LFJG17 - Seam Erasure
    - [Seamless: seam erasure and seam-aware decoupling of shape from mesh resolution.](http://www.cs.toronto.edu/~jacobson/images/seamless-seam-erasure-and-seam-aware-decoupling-of-shape-from-mesh-resolution-siggraph-asia-2017-compressed-liu-et-al.pdf)
    - ![j](https://img.shields.io/badge/ToG-2017-blue?style=flat-square)![j](https://img.shields.io/badge/SIGGRAPH_Asia-2017-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-24-blue?style=flat-square)
    - [Paper.pdf](http://www.cs.toronto.edu/~jacobson/images/seamless-seam-erasure-and-seam-aware-decoupling-of-shape-from-mesh-resolution-siggraph-asia-2017-compressed-liu-et-al.pdf)
  - [Tar12 - Seamless Toroidal/Cylindrical Textures](https://www.tandfonline.com/doi/abs/10.1080/2151237X.2012.654054)
    - ![j](https://img.shields.io/badge/Journal_of_Graphics_Tools-2012-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-9-blue?style=flat-square)
    - [Cylindrical and toroidal parameterizations without vertex seams - Paper.pdf](https://www.tandfonline.com/doi/abs/10.1080/2151237X.2012.654054)
  - [PCK04 - Seamless Texture Atlases](https://dl.acm.org/doi/abs/10.1145/1057432.1057441)
    - ![j](https://img.shields.io/badge/SGP-2004-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-98-blue?style=flat-square)
    - [Paper.pdf](https://pages.jh.edu/dighamm/research/2004_01_sta.pdf)
- Connectivity-based Representations
  - BL08 - Ptex
    - [Ptex: Per‐face texture mapping for production rendering](https://www.disneyanimation.com/publications/ptex-per-face-texture-mapping-for-production-rendering/)
    - ![j](https://img.shields.io/badge/CGF-2008-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-104-blue?style=flat-square)
  - [YKH10 - Mesh Colors](https://dl.acm.org/doi/abs/10.1145/1731047.1731053)
    - ![j](https://img.shields.io/badge/ToG-2010-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-67-blue?style=flat-square)
  - [Yuk16 - Mesh Color Textures](https://dl.acm.org/doi/abs/10.1145/3105762.3105780)
    - ![j](https://img.shields.io/badge/HPG-2017-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-10-blue?style=flat-square)
- Sparse Volumetric Textures
  - KE02 - Adaptive Texture Maps
    - ![j](https://img.shields.io/badge/SIGGRAPH-2002-blue?style=flat-square)![j](https://img.shields.io/badge/EG-2002-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-160-blue?style=flat-square)
    - [Paper.pdf](https://dl.acm.org/doi/pdf/10.5555/569046.569048)
  - [BD02,LHN05 - Octree Textures](https://dl.acm.org/doi/abs/10.1145/566654.566652)
    - ![j](https://img.shields.io/badge/ToG-2002-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-160-blue?style=flat-square)
    - [Paper.pdf](http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=802C3674FAE16C6BB6DCD5200731CE5C?doi=10.1.1.300.6755&rep=rep1&type=pdf)
  - CB04 - Brick Maps
    - [An irradiance atlas for global illumination in complex production scene.pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.91.6683&rep=rep1&type=pdf)
    - ![j](https://img.shields.io/badge/EGSR-2004-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-99-blue?style=flat-square)
  - Perfect Spatial Hashing
    - ![j](https://img.shields.io/badge/ToG-2006-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-243-blue?style=flat-square)
    - [Paper.pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.453.2027&rep=rep1&type=pdf)
- Volume-based Parameterizations
  - LD07 - TileTrees
    - ![j](https://img.shields.io/badge/SI3D-2007-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-48-blue?style=flat-square)
    - [Paper.pdf](https://hal.inria.fr/inria-00606799/document)
  - THCM04 - PolyCube-Maps
    - ![j](https://img.shields.io/badge/ToG-2004-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-305-blue?style=flat-square)
    - [Paper.pdf](https://irinsubria.uninsubria.it/retrieve/handle/11383/1492755/599/pcm_da_acm.pdf)
  - Tar16 - Volume-Encoded UV-Maps
    - ![j](https://img.shields.io/badge/ToG-2016-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-17-blue?style=flat-square)
    - [Paper.pdf](http://vcg.isti.cnr.it/volume-encoded-uv-maps/volume-encoded-uv-maps.pdf)

### 1.2 Evaluation Criteria

- Applicability.
- Usability.
- Filtering Quality.
  - magnification filtering
    - `on-the-fly bilinear interpolation`
  - minification filtering
  - anisotropic filtering[各向异性过滤]
    - allows skewed filter shapes
- Performance.
- Implementation.

## Traditional 2D Texture Mapping

> assigning uv coordinates to mesh vertices

## Perfecting Traditional Texture Mapping

- [PKCH18 - Gradient-domain Processing Within a Texture Atlas](https://dl.acm.org/doi/abs/10.1145/3197517.3201317)
  - ![j](https://img.shields.io/badge/ToG-2018-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-12-blue?style=flat-square)
  - [Paper.pdf](https://dl.acm.org/doi/pdf/10.1145/3197517.3201317)
  - **texture seams and texture distortions**
- [DGM18 - Generating uv maps for modified meshes - US10192346B2](https://patents.google.com/patent/US10192346B2/en)
  - ![j](https://img.shields.io/badge/patent-2019-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-2-blue?style=flat-square)
  - **automatize the adaptations of the uv map**
- [SSGH01 - Texture mapping progressive meshes](https://dl.acm.org/doi/abs/10.1145/383259.383307)
  - ![j](https://img.shields.io/badge/SIG_GRAPH-2001-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-900-blue?style=flat-square)
  - **the poor interoperability of LoD-pyramids and atlas-based textures**

### Invisible Seams

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921101757.png" alt="20210921101757" height="400px"/>

- Traditional Texture Mapping
  - inconsistent **bilinear filtering** performed on either side of the seams
    - `Bilinear Filtering`
      - alias: `Bilinear Interpolation`, `Bilinear texture mapping`
      - ![wiki](https://upload.wikimedia.org/wikipedia/commons/e/ea/BilinearInterpolation.svg)
      - $$
          \begin{aligned}
              f(x, y_1) &= \frac{x_2-x}{x_2-x_1}f(Q_{11}) + \frac{x-x_1}{x_2-x_1}f(Q_{21})\\
              f(x, y_2) &= \frac{x_2-x}{x_2-x_1}f(Q_{12}) + \frac{x-x_1}{x_2-x_1}f(Q_{22})\\
              f(x, y) &= \frac{y_2-y}{y_2-y_1}f(x, y_1) + \frac{y-y_1}{y_2-y_1}f(x, y_2)\\
                &=\frac{1}{(x_2-x_1)(y_2-y_1)}\begin{bmatrix}
                    x_2-x&x-x_1
                \end{bmatrix}\begin{bmatrix}
                    f(Q_{11})&f(Q_{12})\\f(Q_{21})&f(Q_{22})
                \end{bmatrix}\begin{bmatrix}
                y_2-y\\y-y_1
                \end{bmatrix}
          \end{aligned}
        $$
      - extension: `Trilinear interpolation`
- > placing both sides of the seams axis-aligned in uv space (either horizontally or vertically) with matching lengths, and assigning texels values that are exactly replicated along the seam.
  - cylindrical/toroidal mappings
    - [Tar12], [THCM04]
- [RNLL10]
  - introduces some constraints
    1. integer resolution jumps across seams
       - > one side of the seam to be **n times** the other, here $n \ge 1, n \in \mathbb{Z}$, longer side are **linear interpolations** of the values on the shorter side
       - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921143206.png" alt="20210921143206"/>
       - generating uv layouts with motorcycle graphs[SPGT18]
         - motorcycle graphs
           - [Tron 1982 movie - imdb](https://www.imdb.com/video/vi4228627993?playlistId=tt0084827&ref_=tt_ov_vi)
           - [Crashing Motorcycles Efficiently](https://jeffe.cs.illinois.edu/open/cycles.html)
           - [wolfram](https://www.wolframcloud.com/objects/demonstrations/MotorcycleGraphs-source.nb)
         - [Motorcycle Graphs: Canonical Quad Mesh Partitioning](https://www.ics.uci.edu/~goodrich/pubs/geomproc.pdf)
           - ![j](https://img.shields.io/badge/CGF-2008-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-65-blue?style=flat-square)
    2. oblique placement of seams in the 2D texture space
       - > two sides of the seams are constrained to be matching in parametric space up to an integer translation and rotations by an integer multiple of $\frac{\pi}{2}$
       - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921143339.png" alt="20210921143339"/>
- [LFJG17] **seamless cuts** or **erased seam**
  - > **no constraint** is explicitly imposed a priori on uv assignment
  - > minimizes the discrepancy from the initial configuration
  - $\underset{\min p}{E_{lerp}(e_i,x_0,x_1)}=\int_0^1\vert B(e_i(\gamma), p)-(\gamma x_0+(1-\gamma)x_1)\vert^2d\gamma$
  - > minor technical note, making seams invisible (with any method) may require using texture resolutions that are **powers of 2**, seams can **still be visible** when using **arbitrary texture resolutions**

### Seamless Toroidal/Cylindrical Textures

- Ignore the restriction for `only allows seams at mesh edges` when Toroidal/Cylindrical [Tar12] 💩
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921152148.png" alt="20210921152148"/>
  - Cylindrical -> rectangular
  - Toroidal -> `two orthogonal`

### Seamless Texture Atlases

- > [PCK04]Mip-mapping: Texture resolutions may be selected or
blended on a per-fragment basis
  - Mip: multum in parvo,[放置很多东西的小空间]
  - [Mipmap - wiki](https://en.wikipedia.org/wiki/Mipmap)
  - [Paroj - Linear Filtering](https://paroj.github.io/gltut/Texturing/Tut15%20Magnification.html)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921163401.png" alt="20210921163401"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921161916.png" alt="20210921161916"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921161952.png" alt="20210921161952"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921162041.png" alt="20210921162041"/>

## Connectivity-based Representations

- [BL08] Ptex, Disney Animation and Pixar studios
  - How to
    - > Since each face effectively gets its own texture, it is not affected by geometrical deformations of the model.
    - > Ptex stores **four face indices per face**, indicating the four neighbors of each quad face
    - > our edge indices are stored per face to represent which edge of each neighboring face is the shared edge
  - resolution adjusted
    - > texture resolution of each face can be adjusted independently
    - > setting the texture resolution of a face based on its size.
    - > texture filtering near edges becomes **difficult**
- [YKH10] Mesh colors
  - Indeed, the lowest-resolution mesh colors are vertex colors, **which store a single texture value per vertex**
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921170909.png" alt="20210921170909"/>
- [Yuk16] Mesh Color Textures
  - GPU-friendly
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921171800.png" alt="20210921171800"/>

## Sparse Volumetric Representations

> store `texture data` in a `voxel` grid covering the object

- Issue list
  1. thin surfaces get the same color on both sides
     - can be alleviated by storing normals alongside colors [BD02], at the expense of a further increase in storage and lookup cost
  2. cost of trilinear interpolation.

- [KE02] Adaptive Texture Maps
  - With traditional texture mapping, the entire texture is encoded using the same resolution, thus wasting memory where the content has low frequency.
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921180729.png" alt="20210921180729"/>
- [BD02,DGPR02, LHN05,KLS05] Octree Textures
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921180814.png" alt="20210921180814"/>
- [CB04] Brick Maps
  - RenderMan
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921181538.png" alt="20210921181538"/>
- [LH06]Perfect Spatial Hashing
  - > This results in a very efficient method where the sparse data is accessed through only two texture lookups (a single indirection). However, the loss of cache coherency, due to the randomization of the access by the hash, penalizes access performance.
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921181648.png" alt="20210921181648"/>

## Volume-based Parametrizations

- how to encode the mapping efficiently and how to precompute it robustly
- [LD07]TileTrees
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921182759.png" alt="20210921182759"/>
  - The entire process is automatic, robust, and fast
  - Tiletrees suffer from the same **distortions** as cube-maps
- [THCM04]PolyCube - Maps
  - extension of cube-maps[Gre86]
  - by substituting the cube the with an arbitrary polycube
  - they replace the problem of defining a uv mapping with the problem of constructing a polycube
  - The task of automatically or semi-automatically constructing a polycube-map
    - [LJFW08,WJH*08, HWFQ09, WYZ*11, YZWL14, HJS*14, HZ16]
      - limiting the number of cubes
      - limiting the number of irregular vertices
      - matching the topology of the input surface
      - maximizing shape similarity between the two shapes
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921185711.png" alt="20210921185711"/>
- [Tar16]Volume-Encoded UV-Maps
  - > volume-encoded uv-maps replace the problem of defining a uv mapping with the problem of defining a volume-encoded parameterization
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921185835.png" alt="20210921185835"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921190203.png" alt="20210921190203"/>
