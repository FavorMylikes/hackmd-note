---
layout: single
title:  "Point Cloud Match[2]"
date:   "2021-8-26 11:11:35 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826160724.png
---

## 类局部的配准算法

1. 受限于点云初始位置
2. 仅适用于小角度错开的点云配准问题
3. 受限于主成分分析、奇异值分解算法
4. 迭代次数较多，后期收敛缓慢
5. 最近邻点的成本较高，KD-tree虽然搜索效率较高，但仍无法满足于解决大规模点云的配准问题

### ICP(Iterative Closest Point)

- 不断迭代原始点云的变换矩阵，直到RMSE收敛域局部最优解
  - 迭代过程
    1. 搜索最近点集
    2. 构造协方差矩阵
    3. 奇异值分解
    4. 求解旋转矩阵
    5. OpenCv
       1. `cv2.estimateAffinePartial2D(src, dst[0, indices.T])`, 4自由度
       2. `cv2.estimateAffine2D(src, dst[0, indices.T])`,6自由度
  - $$
        \begin{cases}
            E(R,T)=\sum_{i=1}^N\Vert Rp_i+T-p_{closest}\Vert_2^2\\
            P_{closest}=\underset{q_j}{\argmin}\Vert p_i-Q\Vert_2^2
        \end{cases}
    $$

#### ICP 变种

- LM-ICP
  - [Moré J J. The Levenberg-Marquardt algorithm: Implementation and theory[J]. Lecture Notes in Mathematics, 1978, 630: 105-116.](https://link.springer.com/content/pdf/10.1007/BFb0067700.pdf)
  - ![j](https://img.shields.io/badge/ivc-2003-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-1050-blue?style=flat-square)
  - [Fitzgibbon A W. Robust registration of 2D and 3D point sets. Image Vision Comput 2003;21:1145-1153.](https://www.sciencedirect.com/science/article/pii/S0262885603001835)
  - Levenberg-Marquardt
  - DT（Distance-Transform）替代KD-tree搜索最近邻点
- Trimmed ICP
  - ![j](https://img.shields.io/badge/ieee-2002-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-570-blue?style=flat-square)
  - [Chetverikov D, Svirko D, Stepanov D, et al. The Trimmed Iterative Closest Point algorithm[J], 2002.](https://ieeexplore.ieee.org/abstract/document/1047997/)
  - 筛选最近邻点
  - 用欧式距离进行排序，去掉其中距离较大的点集
- Sparse ICP
  - ![j](https://img.shields.io/badge/Computer_Graphics-2013-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-350-blue?style=flat-square)
  - [Bouaziz S, Tagliasacchi A, Pauly M. Sparse iterative closest point[C]. Eleventh Eurographics/acmsiggraph Symposium on Geometry Processing, 2013.](https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.12178)
  - 稀疏表示理论
  - 范数配准模型上增加p范数的惩罚项
  - 增广拉格朗日求解(效率较差)
- Efficient Sparse ICP
  - ![j](https://img.shields.io/badge/Geometric_Modeling_and_Processing-2015-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-52-blue?style=flat-square)
  - [Mavridis P, Andreadis A, Papaioannou G. Efficient Sparse ICP[J]. Computer Aided Geometric Design, 2015, 35-36(C): 16-26.](https://www.sciencedirect.com/science/article/pii/S0167839615000552)
  - 退火算法
- Normal Distribute Transform（NDT）
  - ![j](https://img.shields.io/badge/ieee-2003-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-989-blue?style=flat-square)
  - [Biber P, Strasser W. The normal distributions transform: a new approach to laser scan matching[J]. Proc.of IEEE/RSJ Intl Conf.on Intelligent Robots & Systems, 2003, 3: 2743-2748 vol.3.](https://ieeexplore.ieee.org/abstract/document/1249285)
  - 使用D维的高斯函数作为配准模型
  - 源点云Q进行体素划分
  - 求解点云Q的包围盒
  - 包围盒进行细分
  - > Magnusson
    >
    > NDT算法较ICP算法能更好地避免点云初始位置对配准结果的影响
  - $$
      \begin{cases}
        E(R,T)&=\frac{1}{(2\pi)^\frac{D}{2}\sqrt{\vert\Sigma\vert}}exp((Rp+T-u)^T\Sigma^{-1}(Rp+T-u))\\
        u&=\frac{1}{M}\sum_{j=1}^Mq_j\\
        \Sigma&=\frac{1}{M-1}\sum_{j=1}^M(q_j-u)(q_j-u)^T
      \end{cases}
    $$

## 全局的3D点云配准算法

- 启发式算法
  - **需多次调用配准模型进行优化求解，在处理大规模点云配准问题时效率较低，且其全局解并未有严格的证明**
  - 遗传算法求解出全局优化的变换矩阵
  - 粒子群算法
  - 模拟退火
- 构造几何不变量匹配对应点对
  - 曲率特征求解对应点对
  - 构造积分体积特征计算匹配点对
  - 构造点特征直方图作为局部描述符
  - 4点法构造几何特征进而提取稀疏的匹配点对
- Go-ICP
  - ![j](https://img.shields.io/badge/ieee-2016-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-437-blue?style=flat-square)
  - [Yang J, Li H, Campbell D, et al. Go-ICP: A Globally Optimal Solution to 3D ICP Point-Set Registration[J]. IEEE Transactions on Pattern Analysis & Machine Intelligence, 2016, 38(11): 2241-2254.](https://ieeexplore.ieee.org/abstract/document/7368945)
  - 范数配准模型首次推导出了关于六维变换域的上下界函数
- AMP
  - ![j](https://img.shields.io/badge/ieee-2017-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-37-blue?style=flat-square)
  - [Lian W, Zhang L, Yang M H. An Efficient Globally Optimal Algorithm for Asymmetric Point Matching[J]. IEEE Transactions on Pattern Analysis & Machine Intelligence, 2017, 39(7): 1281-1293.](https://ieeexplore.ieee.org/abstract/document/7555337)
  - 主要适用于图像处理领域
- Glob-GM-ML
  - ![j](https://img.shields.io/badge/cvpr-2014-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-69-blue?style=flat-square)
  - [Chin T J, Suter D. Fast Rotation Search with Stereographic Projections for 3D Registration[C]. IEEE Conference on Computer Vision and Pattern Recognition, 2014: 3930-3937.](https://www.cv-foundation.org/openaccess/content_cvpr_2014/html/Bustos_Fast_Rotation_Search_2014_CVPR_paper.html)
  - 两个独立的三维平移、旋转问题
- TEASER
  - ![j](https://img.shields.io/badge/Robot_Sci_Syst-2019-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-39-blue?style=flat-square)
  - [Yang H, Carlone L. A Polynomial-time Solution for Robust Registration with Extreme Outlier Rates[J]. Robotics: Science and Systems (RSS), 2019](https://arxiv.org/abs/1903.08588)
  - 多项式时间
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826160724.png" alt="20210826160724"/>
- GOGMA
  - ![j](https://img.shields.io/badge/cvpr-2016-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-63-blue?style=flat-square)
  - [Campbell D, Petersson L. GOGMA: Globally-Optimal Gaussian Mixture Alignment[J].](https://openaccess.thecvf.com/content_cvpr_2016/html/Campbell_GOGMA_Globally-Optimal_Gaussian_CVPR_2016_paper.html)
  - 混合高斯模型
  - GPU框架

## DeepLearning Net

- 基于相似性测度研究的点云匹配

### 3DMatch

- Paper
  - ![j](https://img.shields.io/badge/cvpr-2017-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-367-blue?style=flat-square)
  - [3DMatch: Learning Local Geometric Descriptors from RGB-D Reconstructions](https://arxiv.org/abs/1603.08182)
- HomePage
  - [3DMatch: Learning Local Geometric Descriptors from RGB-D Reconstructions - Princeton](http://3dmatch.cs.princeton.edu/)

[3dmatch-toolbox_repo]: https://github.com/andyzeng/3dmatch-toolbox
[3dmatch-toolbox_fork]: https://img.shields.io/github/forks/andyzeng/3dmatch-toolbox.svg?style=social&label=Fork&maxAge=2592000
[3dmatch-toolbox_star]: https://stars.medv.io/andyzeng/3dmatch-toolbox.svg

|Repository|spark|star|
|:-:|:-:|:-:|
|[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=andyzeng&repo=3dmatch-toolbox&show_owner=true)][3dmatch-toolbox_repo]|[![Sparkline](https://stars.medv.io/andyzeng/3dmatch-toolbox.svg)][3dmatch-toolbox_repo]|<a href='https://starchart.cc/andyzeng/3dmatch-toolbox'><img src='https://starchart.cc/andyzeng/3dmatch-toolbox.svg' width='200px'/></a>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826164757.png" alt="20210826164757"/>

### 3DFeat-Net

- Paper
  - ![j](https://img.shields.io/badge/eccv-2018-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-138-blue?style=flat-square)
  - [3DFeat-Net: Weakly Supervised Local 3D Features for Point Cloud Registration](https://arxiv.org/abs/1807.09413)

[3DFeatNet_repo]: https://github.com/yewzijian/3DFeatNet
[3DFeatNet_fork]: https://img.shields.io/github/forks/yewzijian/3DFeatNet.svg?style=social&label=Fork&maxAge=2592000
[3DFeatNet_star]: https://stars.medv.io/yewzijian/3DFeatNet.svg

|Repository|spark|star|
|:-:|:-:|:-:|
|[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=yewzijian&repo=3DFeatNet&show_owner=true)][3DFeatNet_repo]|[![Sparkline](https://stars.medv.io/yewzijian/3DFeatNet.svg)][3DFeatNet_repo]|<a href='https://starchart.cc/yewzijian/3DFeatNet'><img src='https://starchart.cc/yewzijian/3DFeatNet.svg' width='200px'/></a>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826193422.png" alt="20210826193422"/>

### Deep Neural Network Auto-Encoder

- Paper
  - ![j](https://img.shields.io/badge/cvpr-2017-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-151-blue?style=flat-square)
  - [3D Point Cloud Registration for Localization using a Deep Neural Network Auto-Encoder](https://openaccess.thecvf.com/content_cvpr_2017/html/Elbaz_3D_Point_Cloud_CVPR_2017_paper.html)

[LORAX_repo]: https://github.com/gilbaz/LORAX
[LORAX_fork]: https://img.shields.io/github/forks/gilbaz/LORAX.svg?style=social&label=Fork&maxAge=2592000
[LORAX_star]: https://stars.medv.io/gilbaz/LORAX.svg

|Repository|spark|star|
|:-:|:-:|:-:|
|[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=gilbaz&repo=LORAX&show_owner=true)][LORAX_repo]|[![Sparkline](https://stars.medv.io/gilbaz/LORAX.svg)][LORAX_repo]|<a href='https://starchart.cc/gilbaz/LORAX'><img src='https://starchart.cc/gilbaz/LORAX.svg' width='200px'/></a>

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826193228.png" alt="20210826193228"/>
<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826193322.png" alt="20210826193322"/>

## 变换层次

- 关于自由度
- 与泛函无关的不变量数等于或大于配置的自由度数减去变换的自由度数

### 2D

- 《Multiple View Geometry in Computer Vision》2.4.7
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826155257.png" alt="20210826155257"/>

### 3D

- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826155827.png" alt="20210826155827"/>

## Reference

- [图像变换的层次 - Shine的文章 - 知乎](https://zhuanlan.zhihu.com/p/143164736)
- [3D点云配准算法简述](https://www.cnblogs.com/louisanu/p/12341140.html)
- [三维点云配准 -- ICP 算法 - Yilin's Blog](https://yilingui.xyz/2019/11/20/191120_point_cloud_registration_icp/)
- [三维点云配准 -- ICP 算法原理及推导 - InsaneGuy的文章 - 知乎](https://zhuanlan.zhihu.com/p/104735380)
