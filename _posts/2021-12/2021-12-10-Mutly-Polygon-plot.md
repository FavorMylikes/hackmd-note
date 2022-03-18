---
layout: single
title:  "Mutly Polygon plot"
date:   "2021-12-10 13:36:49 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211210133721.png
---

## WordCloud Algorithm

[word_cloud_repo]: https://github.com/amueller/word_cloud
[word_cloud_fork]: https://img.shields.io/github/forks/amueller/word_cloud.svg?style=social&label=Fork&maxAge=2592000
[word_cloud_star]: https://stars.medv.io/amueller/word_cloud.svg

|Repository|spark|star|
|:-:|:-:|:-:|
|[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=amueller&repo=word_cloud&show_owner=true)][word_cloud_repo]|[![Sparkline](https://stars.medv.io/amueller/word_cloud.svg)][word_cloud_repo]|<a href='https://starchart.cc/amueller/word_cloud'><img src='https://starchart.cc/amueller/word_cloud.svg' width='200px'/></a>

- 分词
- 根据词频设计字体大小
- 从大到小，利用积分图寻找可以放置矩形的空白空间
  - 积分图
  - 每个点表示左上角矩形的像素和
  - 利用`int_canvas[y+h,x+w] - int_canvas[y,x+w] - int_canvas[y+h,x] + int_canvas[y,x]`
  - 可以判断该矩形内是否存在任何像素
  - wordcloud使用内置对象`IntegralOccupancyMap`实现积分图查找对应矩形内是否存在像素
- 缺点
  - `wordcloud`不支持任意角度旋转
  - `echart`支持

## Triangle Texture

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211210133721.png" alt="20211117163530"/>

- Random triangle
- `contours = np.random.randint(0, 100, (n, 3, 2))`
- 四叉树
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211211171145.png" alt="20211211171145"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211211202201.png" alt="20211211202201"/>
- Triangle collision detection
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211213200123.png" alt="20211213200123"/>
- Quadrilateral collision detection
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211213200624.png" alt="20211213200624"/>

## AABB with AABB collision detection

- [kishimotostudios.com](https://kishimotostudios.com/articles/aabb_collision/)

## Square Layout

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20211214203648.png" alt="20211214203648"/>

## Refernece

- [你不知道的词云 - python123🤙🤙🤙](https://python123.io/tutorials/word_cloud)
- [wordcloud - github](https://github.com/amueller/word_cloud/blob/35ce9b781d3bd5c25ea178edd662b0f6dde9d065/wordcloud/wordcloud.py#L391)
- [词云布局知多少 - 兔子林呀的文章 - 知乎🤙](https://zhuanlan.zhihu.com/p/36215811)
  - [codepen](https://codepen.io/gracelinmumu/pen/wmVddg)
