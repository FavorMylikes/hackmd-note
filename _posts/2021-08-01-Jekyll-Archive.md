---
layout: single
title:  "Jekyll Archive"
date:   "2021-8-1 16:53:36 +0800"
categories: tutorial
---

## How Jekyll Archive Work

- 用`Ruby`写的
- 主要作用是将文章按`categories`, `tags`, `year`, `month`, `day`, 生成新的索引页面
- 但是对于索引页面本身，`jekyll-archive`, 并未创建
- 因此需要`_pages`中的页面进行辅助
- 在`nav`中加入连接，才可以

## Minimal-Mistakes在Archive界面上的处理逻辑

- 它实现了自己的pages
- 但是仅仅使用`#`作为业内索引，而并没有生成连接

## 我的实现逻辑

- 同样在`_layouts`中实现`years.html`, `tags.html`, `months.html`
- 在`_pages`中进行相应的调用
- 不过为了和`jekyll-archive`配合，将日期连接统一改成了`dates\:year\:month`
