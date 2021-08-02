---
layout: single
title:  "Try To Start Up Binocchio"
date:   "2021-7-30 10:32:48 +0800"
categories: 3d
---

## Install Visual Studio 2019

### Cmake generate x64 and x32 for `Fltk`

- Target at
- `\Path\to\fltk-1.3.7\build-2019-32`
- `\Path\to\fltk-1.3.7\build-2019-64`

### The Whole Configuration for Pinocchio

#### 参考文章

- [Visual Studio 2019 配置 OpenGL - 「已注销」的文章 - 知乎](
https://zhuanlan.zhihu.com/p/90857517)

#### Marco[宏]，全局定义，避免`hash_map`警告

- For `AttachWeights`, `DemoUI`,`Pinocchio`,`PinocchioStatic`
  - Set `Property>C/C++>Preprocessor>Preprocessor Definitions`
  - Append `_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS;`

#### Lib[库]

- Set `Property>VC++ Directories>Library Directories`
- Append
  - `\Path\to\fltk-1.3.7\build-2019-32\lib\Debug;` Fltk lib dir
  - Download at [www.fltk.org](https://www.fltk.org/software.php)
    - Choose a version, For me, v1.3.7 is ok[Now is 2021/08/02]
  - `\Path\to\glfw-3.3.4.bin.WIN32\lib-vc2019;` glfw
    - Download at [www.glfw.org](https://www.glfw.org/download.html)
    - Choose `32-bit version`
  - `\Path\to\glew-2.1.0.win32\lib\Release\Win32;` glew
    - Download at [glew.sourceforge.net](http://glew.sourceforge.net/)
    - Choose `Windows 32-bit and 64-bit`

#### Include[引用Header文件索引]

- Set `Property>C/C++>General>Addtional Include Directories`
  - Append `\Path\to\fltk-1.3.7`
  - Append `\Path\to\glew-2.1.0.win32\include`
  - Append `\Path\to\glfw-3.3.4.bin.WIN32\include`

#### Linker[连接器]，引入需要的lib

- Set `Property>Linker>input>Addtional Dependencies`
- Append

```vim
fltkd.lib           # d for Debug， fltk.lib for Release
wsock32.lib
comctl32.lib
fltk_zd.lib         # fltk
fltk_gld.lib        # fltk
fltk_jpegd.lib      # fltk
fltk_imagesd.lib    # fltk
opengl32.lib  
glfw3.lib           # glfw
glew32s.lib         # glew
```

#### Set All Properties Above with Project Property Sheet

Follow this [create-user-defined-environment-variables-macros](https://sites.google.com/site/pinyotae/Home/visual-studio-visual-c/create-user-defined-environment-variables-macros)

1. Open `Tool>Other Windows>Property Manager`
2. Select a Project
3. `Add New Project Property Sheet`
   1. Choose Project Root Path
4. Select other project
5. `Add Existing Porperty Sheet`
6. Double click `Property Sheet`
7. Add all `lib`, `include`, `linker.input`, `Preprocessor`, above talk about
8. Your project will inherit it like
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210802174054.png" alt="20210802174054">
9. And make sure the check box `Inherit from parent or project defaults` has been choosen.
