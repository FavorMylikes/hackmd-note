---
layout: single
title:  "Texture code reading"
date:   "2021-09-26 19:51:42 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png
---

- TextureMesh
  - FaceViewSelection
    - ListVertexFaces✔️ // extract array of triangles incident to each vertex
      - EmptyExtra✔️
      - ListIncidenteFaces✔️
      - ListBoundaryVertices✔️, // 边界点检查，在面中，只使用了1次的点是边界点，另外，代码中假设每个点通常不会超过12个面使用
        - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210926235332.png" alt="20210926235332"/>
    - // create texture patches
      - ListCameraFaces // list all views for each face
        - //create vertices **octree** of vertices✔️
        - //extract array of faces viewed by each image✔️
          - //compute gradient magnitude✔️
          - //select faces inside view frustum✔️
            - plane with `AABB`✔️
          - //project all triangles in this view and keep the closest ones
          - //compute the projection area of visible faces
    - // create faces graph
    - // assign the best view to each face
      - // find connected components
      - // map face ID from global to component space
      - // normalize quality values
      - // initialize inference structures
      - // set data costs
        - // set costs for label 0 (undefined)
        - // set data costs for all labels (except label 0 - undefined)
      - // assign the optimal view (label) to each face
      - // extract resulting labeling
    - // create texture patches
      - // divide graph in sub-graphs of connected faces having the same label
      - // find connected components: texture patches
      - // last texture patch contains all faces with no texture
      - // remove all patches with invalid label (except the last one) and create the map from the old index to the new one
  - GenerateTexture
