---
layout: single
title:  "Texture for smooth 2"
date:   "2021-09-18 23:18:09 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235717.png
---

## More Smooth case

|id|obj|image|ot|mr|csr|gsl|lsl|ec|result|
|-|-|-|-|-|-|-|-|-|-|
|1|12w|pure-color|0|0|1|false|false|⬛|💩|
|2|12w-5w|pure-color|0|0|1|false|false|⬛|💩|
|3|mapple_gussian-0.1_12w|pure-color|0|0|1|false|false|⬛|💩|
|4|mapple_sm-remesh_12w-5w|pure-color|0|0|1|false|false|⬛|💩|
|5|mapple_sm-remesh_12w-8w|pure-color|0|0|1|false|false|⬛|💩|
|6|mapple_sm-remesh_12w-12w|pure-color|0|0|1|false|false|⬛|💩|
|7|mapple_sm-remesh_12w-3k|gird-color|0|0|1|false|false|⬛|💩|
|8|mapple_sm-remesh_12w-5w|gird-color|0|0|1|false|false|⬛|💩|
|9|mapple_sm-remesh_12w-8w|gird-color|0|0|1|false|false|⬛|💩|
|10|mapple_sm-remesh_12w-12w|gird-color|0|0|1|false|false|⬛|💩|

## Texture Result

|kind|sm-remesh-3k|sm-remesh-5w|sm-remesh-8w|sm-remesh-12w|12w|
|-|-|-|-|-|-|
|pure-color|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918234813.png" alt="20210918234813" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918234735.png" alt="20210918234735" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918234647.png" alt="20210918234647" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918234540.png" alt="20210918234540" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918234052.png" alt="20210918234052" height="100px"/>|
|lion||<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918234946.png" alt="20210918234946" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235040.png" alt="20210918235040" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235116.png" alt="20210918235116" height="100px"/>|<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235327.png" alt="20210918235327" height="100px"/>

## Gussian noise

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235542.png" alt="20210918235542"/>

## ReMapping Texture

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235717.png" alt="20210918235717"/>

### Code

```python
faces_F3_T2F_V3F = np.array(scene.mesh_list[0].materials[0].vertices).reshape((-1, 3, 5))
image = np.zeros(img.shape, np.uint8)
mesh_faces = faces_F3_T2F_V3F[:, :, :2] * np.array(img.shape)[:2]
mesh_faces = np.round(mesh_faces)
mesh_faces = mesh_faces.astype("int64")
cv2.fillPoly(image, mesh_faces, (255,255,255))
image = image[::-1,:,:]  # 水平翻转
px.imshow(np.hstack([image, img, (img / 255 * image )]))
```
