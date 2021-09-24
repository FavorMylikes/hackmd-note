---
layout: single
title:  "Clion Debug"
date:   "2021-09-23 16:24:52 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png
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
- A very shity result be generated here
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png" alt="20210923165954"/>

### Set `-DCMAKE_VERBOSE_MAKEFILE:BOOL=ON` at cmake config at Clion

- Here the ucas machine looks like

```console
C:\PROGRA~2\MICROS~3\2019\ENTERP~1\VC\Tools\MSVC\1429~1.301\bin\Hostx86\x64\link.exe @CMakeFiles\DensifyPointCloud.dir\objects1.rsp /out:..\..\bin\x64\DensifyPointCloud.exe /implib:..\..\bin\x64\DensifyPointCloud.lib /pdb:
C:\workspace\workspace_3d\openMVS\cmake-build-release-visual-studio\bin\x64\DensifyPointCloud.pdb /version:0.0 /machine:x64 /INCREMENTAL:NO /LTCG /subsystem:console -LIBPATH:
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib -LIBPATH:
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\debug\lib ..\..\lib\x64\MVS.lib ..\..\lib\x64\Math.lib ..\..\lib\x64\IO.lib ..\..\lib\x64\Common.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_iostreams-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_program_options-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_system-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_serialization-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_regex-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_highgui.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_ml.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_objdetect.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_photo.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_stitching.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_video.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_calib3d.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_dnn.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_features2d.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_flann.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_videoio.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_imgcodecs.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_imgproc.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_core.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\libpng16.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\zlib.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\jpeg.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\tiff.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\lzma.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\zlib.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\jpeg.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\tiff.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\lzma.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\mpfr.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\gmp.lib 
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.4\lib\x64\cuda.lib kernel32.lib user32.lib gdi32.lib winspool.lib shell32.lib ole32.lib oleaut32.lib uuid.lib comdlg32.lib advapi32.lib /MANIFEST /MANIFESTFILE:..\..\bin\x64\DensifyPointCloud.exe.manifest
```

- and here is the xps machine

```console
C:\PROGRA~2\Microsoft Visual Studio\2019\Enterprise\VC\Tools\MSVC\14.29.30133\bin\Hostx86\x64\link.exe /nologo @CMakeFiles\DensifyPointCloud.dir\objects1.rsp /out:..\..\bin\x86\DensifyPointCloud.exe /implib:..\..\bin\x86\DensifyPointCloud.lib /pdb:
C:\workspace\workspace_3d\openMVS\cmake-build-release-visual-studio\bin\x86\DensifyPointCloud.pdb /version:0.0 /machine:x64 /INCREMENTAL:NO /LTCG /subsystem:console -LIBPATH:
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib -LIBPATH:
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\debug\lib ..\..\lib\x86\MVS.lib ..\..\lib\x86\Math.lib ..\..\lib\x86\IO.lib ..\..\lib\x86\Common.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_iostreams-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_program_options-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_system-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_serialization-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\boost_regex-vc140-mt.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_highgui.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_ml.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_objdetect.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_photo.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_stitching.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_video.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_calib3d.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_dnn.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_features2d.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_flann.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_videoio.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_imgcodecs.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_imgproc.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\opencv_core.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\libpng16.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\zlib.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\jpeg.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\tiff.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\lzma.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\zlib.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\jpeg.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\tiff.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\lzma.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\mpfr.lib 
C:\workspace\workspace_3d\vcpkg\installed\x64-windows\lib\gmp.lib 
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.4\lib\Win32\cuda.lib kernel32.lib user32.lib gdi32.lib winspool.lib shell32.lib ole32.lib oleaut32.lib uuid.lib comdlg32.lib advapi32.lib /MANIFEST /MANIFESTFILE:..\..\bin\x86\DensifyPointCloud.exe.manifest
```

- After file compare
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923184051.png" alt="20210923184051"/>
- xps has a wrong target triplet

### TODO

- still not figure it out how it happen, reinstalling vcpkg, wish it be helpful.
