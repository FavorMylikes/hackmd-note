---
layout: single
title:  "3D Render Lib Python"
date:   "2021-11-01 15:02:17 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211028112306.png
---

## Python 3D render engine

- [3D Scene Renderer for Python [closed] - stackoverflow](https://stackoverflow.com/a/4523262/5587080)
  - First-rate, full game engines (have been used for commercial games)
    - [Panda3d](http://www.panda3d.org/)
      - [panda3d_repo]: https://github.com/panda3d/panda3d
        [panda3d_fork]: https://img.shields.io/github/forks/panda3d/panda3d.svg?style=social&label=Fork&maxAge=2592000
        [panda3d_star]: https://stars.medv.io/panda3d/panda3d.svg
        |Repository|spark|star|
        |:-:|:-:|:-:|
        |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=panda3d&repo=panda3d&show_owner=true)][panda3d_repo]|[![Sparkline](https://stars.medv.io/panda3d/panda3d.svg)][panda3d_repo]|<a href='https://starchart.cc/panda3d/panda3d'><img src='https://starchart.cc/panda3d/panda3d.svg' width='200px'/></a>
      - ![j](https://img.shields.io/badge/python-3-blue?style=flat-square)
    - [PyOgre](http://www.ogre3d.org/tikiwiki/PyOgre)
    - Pyrr (Irrlicht wrapper)
  - Less popular 3d engines, new or beta: YMMV.
    - [OpenSceneGraph](http://www.openscenegraph.org/projects/osg)
    - [Spyre](http://pduel.sourceforge.net/spyre/spyre.spyre-module.html)
    - [PySoy](http://www.pysoy.org/)
      - Official Web is Dead
    - [Soya](http://pypi.python.org/pypi/Soya/0.11.2)
    - [PyCrystal](http://www.crystalspace3d.org/main/PyCrystal)
    - [Horde3d](http://www.horde3d.org/)
    - [VTK](http://www.vtk.org/)
    - [pyrender](https://pyrender.readthedocs.io/en/latest/)
      - [pyrender_repo]: https://github.com/mmatl/pyrender
        [pyrender_fork]: https://img.shields.io/github/forks/mmatl/pyrender.svg?style=social&label=Fork&maxAge=2592000
        [pyrender_star]: https://stars.medv.io/mmatl/pyrender.svg
        |Repository|spark|star|
        |:-:|:-:|:-:|
        |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=mmatl&repo=pyrender&show_owner=true)][pyrender_repo]|[![Sparkline](https://stars.medv.io/mmatl/pyrender.svg)][pyrender_repo]|<a href='https://starchart.cc/mmatl/pyrender'><img src='https://starchart.cc/mmatl/pyrender.svg' width='200px'/></a>
      - ![j](https://img.shields.io/badge/python-2.7,3.4~3,6-blue?style=flat-square)
  - Low-level OpenGL interfaces - more control
    - [PyOpenGL](http://pyopengl.sourceforge.net/)
    - [pyglet](https://pyglet.org/)
      - [🤙Reddit suggest (compare by Panda3D, Soya3D, PyOpenGL, etc...)](https://www.reddit.com/r/Python/comments/7oku8/dear_python_what_panda3d_soya3d_pyopengl_etc/)
      - [🤙PyWavefront Suggest](https://pypi.org/project/PyWavefront/)
      - [pyglet_repo]: https://github.com/pyglet/pyglet
        [pyglet_fork]: https://img.shields.io/github/forks/pyglet/pyglet.svg?style=social&label=Fork&maxAge=2592000
        [pyglet_star]: https://stars.medv.io/pyglet/pyglet.svg
        |Repository|spark|star|
        |:-:|:-:|:-:|
        |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=pyglet&repo=pyglet&show_owner=true)][pyglet_repo]|[![Sparkline](https://stars.medv.io/pyglet/pyglet.svg)][pyglet_repo]|<a href='https://starchart.cc/pyglet/pyglet'><img src='https://starchart.cc/pyglet/pyglet.svg' width='200px'/></a>
      - ![j](https://img.shields.io/badge/python-3.6+-blue?style=flat-square)
    - [Zoe](http://www.alcyone.com/software/zoe/)
  - Non-realtime interfaces
    - [cgkit](http://cgkit.sourceforge.net/documentation.html)
    - [Blender](http://www.blender3d.org/)
      - [blender_repo]: https://github.com/blender/blender
        [blender_fork]: https://img.shields.io/github/forks/blender/blender.svg?style=social&label=Fork&maxAge=2592000
        [blender_star]: https://stars.medv.io/blender/blender.svg
        |Repository|spark|star|
        |:-:|:-:|:-:|
        |[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=blender&repo=blender&show_owner=true)][blender_repo]|[![Sparkline](https://stars.medv.io/blender/blender.svg)][blender_repo]|<a href='https://starchart.cc/blender/blender'><img src='https://starchart.cc/blender/blender.svg' width='200px'/></a>
      - [BiliBili - Blender 新手入门基础教程(1-7集)](https://www.bilibili.com/s/video/BV1Ji4y1g7Kf)
    - [POVray](http://code.activestate.com/recipes/205451/)

## Experience

- `pyglet` + `PyWavefront`

  ```python
    obj = pywavefront.Wavefront('file.obj')
        visualization.draw(obj)
  ```

  - Error: `OverflowError: The '_length_' attribute is too large`
    - Maybe the model is too large
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211101171201.png" alt="20211101171201"/>
    - It is based on OpenGL looks like.
- PyTorch3D
  - [Example](https://pytorch3d.org/tutorials/render_textured_meshes)
    - `deform_source_mesh_to_target_mesh`
      - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211101183041.png" alt="20211101183041"/>
      - chamfer_losses: [chamfer_distance](https://github.com/UM-ARM-Lab/Chamfer-Distance-API)
      - edge_losses: [mesh_edge_loss](https://pytorch3d.readthedocs.io/en/latest/_modules/pytorch3d/loss/mesh_edge_loss.html)
      - normal_losses: [mesh_normal_consistency](https://pytorch3d.readthedocs.io/en/latest/_modules/pytorch3d/loss/mesh_normal_consistency.html)
      - laplacian_losses: [mesh_laplacian_smoothing](https://pytorch3d.readthedocs.io/en/latest/modules/loss.html?highlight=mesh_laplacian_smoothing#pytorch3d.loss.mesh_laplacian_smoothing)
    - `bundle_adjustment`
      - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211101212441.png" alt="20211101212441"/>
  - error:
    - `PIL.Image.DecompressionBombError: Image size (268435456 pixels) exceeds limit of 178956970 pixels, could be decompression bomb DOS attack.`
