---
layout: single
title:  "Double slash test"
date:   2021-07-29 15:37:00 +0800
categories: tutorial
katex: true
---


## No dollar

- A
- /A
- //A
- \A
- \\A

## Single dollar

- $A$
- $/A$
- $\\A$
- $//A$

## Double dollar

- $$A$$
- $$/A$$
- $$\\A$$
- $$//A$$

## Matrix with Single Dollar

- single line
  - $\begin{bmatrix}1\\2\\3\end{bmatrix}$
- multy line
  - $\begin{bmatrix}
        1\\2\\3
        \end{bmatrix}$

## Matrix with Double Dollar

- single line
  - $$
    \begin{bmatrix}1\\2\\3\end{bmatrix}
    $$
- multy line
  - $$\begin{bmatrix}
        1\\2\\3
        \end{bmatrix}$$

## Markdown confict with katex

### Two method for rendering katex

1. Render at server side
   1. [Jekyll 中使用 KaTeX SsKatex](https://frankindev.com/2017/02/08/using-katex-in-jekyll/)
   2. Not sure it could works or not.
2. Render at client side
   -. Require you have `katex.js` and `katex.css` at head, katex will render when you brower open.
   -. So you need consider about the order of rendering markdown and katex
   -. For example, you have a md file like

    ```html
    $ABC*$123$DE*F$
    ```

   -. It will convert `$123$DE$` as *Italic* first
   -. And then the rendering for katex
