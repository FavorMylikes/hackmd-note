---
layout: single
title:  "Jekyll+Github page+Gihub Actions"
date:   2021-07-28 10:32:00 +0800
categories: tutorial
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imge706435a04d4061079e6e726c22e50a.png
---

## 尝试使用github pages

### 主要组件

- [Jekyll](https://jekyllcn.com)
  - 静态网站生成器
- `Github Actions`
  - 需要项目下存在`.github/workflows/*.yml`, 作为`Github Actions`的扫描程序
  - [Action marketplace](https://github.com/marketplace)
  - `_config.yml`, 根目录下，`Jekyll`运行时需要的配置
- ruby
  - `Gemfile`  ruby 需要的版本
  - `Gemfile.lock` ruby 一台机器已经安装各个组件的具体版本以及依赖条件

### 运行流程

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img7458703.png" alt="7458703" width="400">

1. Actions扫描workflows下的配置文件寻找job
2. Actions按照顺序依次执行
3. ruby 按照Gemfile.lock的文件安装指定组件版本
4. ruby拿到_config.yml的配置之后依次执行
   1. 主题
      1. dash
   2. 插件
      1. jekyll-feed
      2. jekyll/tagging
      3. jekyll-paginate
         1. `paginate`: 5 # 分页数
         2. paginate_path: "/page:num/"  # 扫描位置
      4. kramdown-math-katex

### 参考

- [minusgix.github.io](minusgix.github.io)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imge706435a04d4061079e6e726c22e50a.png" alt="e706435a04d4061079e6e726c22e50a" width="400px">
  - [git](https://github.com/MinusGix/minusgix.github.io)
- [南方科技大学数学建模协会](http://mma.iydon.top/)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgefa0c2da86f50e9c201928439427b2c.png" alt="efa0c2da86f50e9c201928439427b2c" width="400px">
  - [git](https://github.com/SUSTech-MMA/sustech-mma.github.io)
  - 需要本地构建
- [leopardpan](https://leopardpan.github.io)
  - 效果同上
  - [git](https://github.com/leopardpan/leopardpan.github.io)
- [actions-gh-pages](https://actions-gh-pages.peaceiris.com/)
  - [git](https://github.com/peaceiris/actions-gh-pages)
