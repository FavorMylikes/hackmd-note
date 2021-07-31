---
layout: single
title:  "Initial 3D Builder environment"
date:   "2021-7-30 20:41:19 +0800"
categories: 3D 
---

## Inistall FLTK

- **FLTK**(Fast Light Toolkit，读做"fulltick")
- 通过OpenGL和内建的GLUT模拟器提供3D图形支持
- Download form offical [site](https://www.fltk.org/software.php)
  - [Pinoccio](https://github.com/Pinoccio/library-pinoccio) recommend for `1.1.7` or `1.1.x`
- Flollow This video
  - <iframe width="560" height="315" src="https://www.youtube.com/embed/6sNKtyl4hQM?start=195" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - Install `Cmake gui` from [office](https://cmake.org/download/)
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img7361062.png" alt="7361062" width="400px">
    - Remeber set the correct config, I'm using `VS2017` and `x64 system`
    - Configure and Generate
    - Close
  - Select `sln` file from `build` dir
  - Open it in VS20XX.
- Open `Demo.exe` at `fltk-1.3.7\build\bin\test\Release`
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img7324062.png" alt="7324062" width="400px">
  - Have fun.

## Develop FLTK project

- Config for VS2017
  - choose the right `平台` as `x64`
  - 增加库目录 at `VC++目录` `\path\to\fltk-1.3.7\build\lib\Debug`
  - `C/C++` `附加包含目录` `\path\to\fltk-1.3.7`
  - `连接器[linker]` `输入[input]` `附加依赖项`

    ```vim
    fltkd.lib
    wsock32.lib
    comctl32.lib
    fltk_jpegd.lib
    fltk_imagesd.lib
    ```

- Code

```cpp
#include<FL/Fl.H>
#include<FL/Fl_Box.H>
#include<FL/Fl_Window.H>

int main() {
    Fl_Window window(200, 200, "Window title");
    Fl_Box box(0, 0, 200, 200, "?");
    window.show();
    return Fl::run();
}
```

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img7405187.png" alt="7405187" width="200">
