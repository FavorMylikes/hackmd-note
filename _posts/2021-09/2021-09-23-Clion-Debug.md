---
layout: single
title:  "Clion Debug"
date:   "2021-09-23 16:24:52 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910164754.png
---

## Problem List

### windows [xps] build

```console
...
[ 75%] Linking CXX executable ..\..\bin\x86\InterfaceVisualSFM.exe
LINK: command "... C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.4\lib\Win32\cuda.lib ..." failed (exit code 1120) with the following output:
MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuGetErrorString
MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuGetErrorName
MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuParamSetSize
MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuFuncSetBlockShape
...
Common.lib(CUDA.cpp.obj) : error LNK2001: 无法解析的外部符号 cuStreamWaitEvent
Common.lib(CUDA.cpp.obj) : error LNK2001: 无法解析的外部符号 cuModuleUnload
..\..\bin\x86\InterfaceVisualSFM.exe : fatal error LNK1120: 33 个无法解析的外部命令
```

- consider it about cuda version
  - Download `CUDA Driver api` [file.pdf](https://docs.nvidia.com/cuda/pdf/CUDA_Driver_API.pdf)
    - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923163138.png" alt="20210923163138"/>
  - use `dumpbin.exe`

    ```powershell
    .\dumpbin.exe "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.4\lib\Win32\cuda.lib" /symbols /exports
    ```

  - get list of function that exported by `cuda.lib` file
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923163629.png" alt="20210923163629"/>
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923163648.png" alt="20210923163648"/>
  - Dont how to fix it.
- Here a list about this issue
  - [https://github.com/cdcseacave/openMVS/issues/147](https://github.com/cdcseacave/openMVS/issues/147#issuecomment-263116200)
    - add `-lcuda` at `openMVS/libs/MVS/CMakeLists.txt`
    - have tried, does not work, cause `-lcuda` will by ignore under windows system
  - [how-to-let-cmake-find-cuda](https://stackoverflow.com/a/19981506/5587080)
    - use `-DCUDA_TOOLKIT_ROOT_DIR=cuda_path_the_version_you_want`
    - **ATTATION**: for example `-DCUDA_TOOLKIT_ROOT_DIR="C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.4"`
    - **You need double slash `\\` at path**

### change to other machine[workstation]

- **Fixed**????!!!
  - Mayby too many difference cuda version at xps?
- By the way
  - need use `--use-cuda=0` to disable gpu at `RefineMesh` step
  - otherwise a gpu error message will by throw, but obviously, there is very enough memory at here.
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165608.png" alt="20210923165608"/>
  - `CUDA error: cuMemFree(pData) (CUDA_ERROR_ILLEGAL_ADDRESS (code 700) - an illegal memory access was encountered)`.
