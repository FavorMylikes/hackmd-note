---
layout: single
title:  "Double slash test"
date:   2021-07-30 11:02:00 +0800
categories: tutorial
katex: true
---

## Render

### No dollar

- A
- /A
- //A
- \A
- \\A

### Single dollar

- $A$
- $/A$
- $\\A$
- $//A$

### Double dollar

- $$A$$
- $$/A$$
- $$\\A$$
- $$//A$$

### Matrix with Single Dollar

- single line
  - $\begin{bmatrix}1\\2\\3\end{bmatrix}$
- multy line
  - $\begin{bmatrix}
        1\\2\\3
        \end{bmatrix}$

### Matrix with Double Dollar

- single line
  - $$
    \begin{bmatrix}1\\2\\3\end{bmatrix}
    $$
- multy line
  - $$\begin{bmatrix}
        1\\2\\3
        \end{bmatrix}$$

### Dollar nesting

- Eng
  - $$
      \begin{cases}
          a=1 \text{here $a=1$}\\
          a=2 \text{here $a\neq 1$}\\
      \end{cases}
    $$
- Chinese
  - $$
      \begin{cases}
          a=1 \text{这里 $a=1$}\\
          a=2 \text{那里 $a\neq 1$}\\
      \end{cases}
    $$

## Markdown confict with katex

### Two method for rendering katex

1. Render at server side
   - [Jekyll 中使用 KaTeX SsKatex](https://frankindev.com/2017/02/08/using-katex-in-jekyll/)
   - Not sure it could works or not.
   - You need set config at `_config.yml`

    ```yaml
        kramdown:
            math_engine: null
    ```

   - The `math_engine` be set `mathjax` as default
   - If you wanna use `javascript` for rendering, you'd better set it be `null`
   - For more selection for it, check [here](https://kramdown.gettalong.org/options.html#option-math-engine).
2. Render at client side
   -. Require you have `katex.js` and `katex.css` at head, katex will render when you brower open.
   -. So you need consider about the order of rendering markdown and katex
   -. For example, you have a md file like

    ```markdown
    $ABC*$123$DE*F$
    ```

   -. It will convert `$123$DE$` as *Italic* first
   -. And then the rendering for katex
