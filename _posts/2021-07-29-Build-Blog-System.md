---
layout: posts
title:  "Build Blog System"
date:   2021-07-28 10:32:00 +0800
categories: tutorial
katex: false
---

## Build Blog System by Github pages and jekyll

1. markdown
   1. github use GFM[GitHub Flavored Markdown]
      1. resizing image only support by inner html code like`<img src="src", alt="", weight=""></img>`
   2. kramdown
      1. resizing image by `![](){height:"100px"}`
   3. hackmd
      1. resizing image by `![](src... =100x100)`
   4. markdownlint `MD033` does not recommand for inner html
   5. finily I disable `MD033` in vscode by setting

      ```json
      "markdownlint.config": {
          "MD033": false
      }
      ```

## Component

- use `_includes\head\custom.html<head>`to overload katex render
  - cause as a jekyll theme `minimal-mistakes-jekyll`, you can override any `_includes` file by your own file with the same name
- use `limjh16/jekyll-action-ts@v2` to build site file
  - this component require Gemfile.lock
  - cause [<img src="https://i.loli.net/2021/07/29/fO1NCPuslEaTYIx.png" alt="20210729214617">](https://github.com/limjh16/jekyll-action-ts/blob/9edf74e2e5aaa10d272c427efb8702a45a70a0b2/src/main.ts#L157)
  - so if you need update your Gemfile for any reason, before `git push`, you'd better run

    ```gem
    bundle lock --update --add-platform x86_64-linux --remove-platform x64-mingw32
    ```

    <img src="https://i.loli.net/2021/07/29/o8DiY5TLvEJd4HS.png" alt="20210729215017">
- use `peaceiris/actions-gh-pages@v3` to push file to `site`
  - nothing need talk about
- katex
  - setting with js
  
  ```js
  document.addEventListener("DOMContentLoaded", function () {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
      });
    });
  ```

  - The `display` here mean css style `block`, if change it to true, the formular will be center and block there.
- gem "therubyracer"
  - this a js engine
  - and you can choose one from [[therubyracer](https://github.com/cowboyd/therubyracer#therubyracer), [therubyrhino](https://github.com/cowboyd/therubyrhino#therubyrhino), [duktape](https://github.com/judofyr/duktape.rb#duktaperb), [Node.js](https://nodejs.org/)]

## Jekyll Theme

- config it at `_config.yml`
  - `theme: minimal-mistakes-jekyll`
- add dependency at `Gemfile`
  - `gem "minimal-mistakes-jekyll"`
  - [minimal-mistakes-jekyll](https://github.com/mmistakes/minimal-mistakes)
- there's other theme you can use
  - `dash`
  - select from `github pages`
  
## Useful link

- [How I blog about math: an update on KaTeX with Jekyll](https://gendignoux.com/blog/2020/05/23/katex.html#adding-katex-resources-to-a-blog-post)
- [Jekyll 中使用 KaTeX SsKatex](https://frankindev.com/2017/02/08/using-katex-in-jekyll/)
