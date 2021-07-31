---
layout: single
title:  "Jekyll Search And Logo"
date:   "2021-7-30 20:41:19 +0800"
categories: tutorial
---

## Jekyll-Algolia

- [Jekyll-Algolia](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#algolia)
- A search engine to help you get a list of result.
- But have some bugs
- I have post a new issue at [here](https://github.com/algolia/jekyll-algolia/issues/180)

## [jekyll-archives](https://github.com/jekyll/jekyll-archives)

```yaml
include:
  - _pages
jekyll-archives:
  enabled:
    - categories
    - tags
  layouts:
    category: archive-taxonomy
    tag: archive-taxonomy
  permalinks:
    category: /categories/:name/
    tag: /tags/:name/
```

- First, you need `_include` make jekyll find all extension pages.
- And, create some `md` file with `Front Matter`

```markdown
---
title: "Posts by Tag"
permalink: /tags/
layout: tags
author_profile: true
---
```

- Then, jekyll will create those pages like
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210801015732.png" alt="20210801015732" width="400">
- But it just create a single html page
- You can check it here [categories](https://github.com/FavorMylikes/hackmd-note/tree/gh-pages/categories) that make form `_pages/tag-archive.md`
