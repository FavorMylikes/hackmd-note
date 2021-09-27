---
layout: single
title:  "Operator For Image"
date:   "2021-09-27 14:57:40 +0800"
categories: 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png
---

## Sobel Operator - 1968 [索伯算子, 索贝尔算子]

- [Paper - An Isotropic 3x3 Image Gradient Operator](https://www.researchgate.net/publication/239398674_An_Isotropic_3x3_Image_Gradient_Operator)
- [Paper.pdf](https://www.researchgate.net/profile/Irwin-Sobel/publication/239398674_An_Isotropic_3x3_Image_Gradient_Operator/links/557e06f508aeea18b777c389/An-Isotropic-3x3-Image-Gradient-Operator.pdf)
- Formula
  - $$
        \begin{aligned}
            G_x &= \begin{bmatrix}
                +1&0&-1\\+2&0&-2\\+1&0&-1\\
            \end{bmatrix} * IMG\\
            G_y &= \begin{bmatrix}
                +1&+2&+1\\0&0&0\\-1&-2&-1\\
            \end{bmatrix} * IMG\\
            G &= \sqrt{G_x^2 + G_y^2}\\
            \Theta &= \arctan(\frac{G_y}{G_x})=atan2(G_x, G_y)
        \end{aligned}
    $$
- OpenMvs
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927161159.png" alt="20210927161159"/>
- Related
  - [Digital step edges from zero crossing of second directional derivatives](https://www.sciencedirect.com/science/article/pii/B9780080515816500271)
  - [Paper.pdf](https://www.sciencedirect.com/science/article/pii/B9780080515816500271?via%3Dihub)
  - ![j](https://img.shields.io/badge/TPAMI-1987-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-1690-blue?style=flat-square)
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927160347.png" alt="20210927160347"/>
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927162819.png" alt="20210927162819"/>

## Scharr Operator(Filter) - 2000 [沙尔算子]

- [Paper written in German - Optimal operators in digital image processing](https://www.researchgate.net/publication/36148383_Optimal_operators_in_digital_image_processing_Elektronische_Ressource)
- ![j](https://img.shields.io/badge/Phd_thesis-2000-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-145-blue?style=flat-square)
- [Paper.pdf](https://www.researchgate.net/profile/Hanno-Scharr/publication/36148383_Optimal_operators_in_digital_image_processing_Elektronische_Ressource/links/54257c130cf238c6ea741031/Optimal-operators-in-digital-image-processing-Elektronische-Ressource.pdf)
  - > `Sobel Operator` does not exhibit a good rotational symmetry (about 1° of error)
  - > The `Scharr filter` results in a less rotational variance than the Sobel filter [scikit - edge filter](https://scikit-image.org/docs/dev/auto_examples/edges/plot_edge_filter.html)
  - $$
        \begin{aligned}
            \alpha_{1,ref}(\mathbf{\tilde{k}})&=\arctan(\frac{\tilde{k_y}}{\tilde{k_x}})\\
            \alpha_{1}(\mathbf{\tilde{k},d})&=\arctan(\frac{\hat{D}_y}{\hat{D}_x})\\
            d(\mathbf{\tilde{k,d}})&=\alpha_{1}(\mathbf{\tilde{k},d}) - \alpha_{1,ref}(\mathbf{\tilde{k}})
        \end{aligned}
    $$
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927184146.png" alt="20210927184146"/>
- Formula
  - $$
        \begin{aligned}
            G_x &= \begin{bmatrix}
                +3&0&-3\\+10&0&-10\\+3&0&-3\\
            \end{bmatrix} * IMG\\
            G_y &= \begin{bmatrix}
                +3&+10&+3\\0&0&0\\-3&-10&-3\\
            \end{bmatrix} * IMG\\
            G &= \sqrt{G_x^2 + G_y^2}\\
            \Theta &= \arctan(\frac{G_y}{G_x})=atan2(G_x, G_y)
        \end{aligned}
    $$
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927185639.png" alt="20210927185639"/>
- <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927185750.png" alt="20210927185750"/>

## Prewitt operator - 1970 [普鲁伊特算子]

- [Book - Object Enhancement and Extraction](https://books.google.com/books?hl=zh-CN&lr=&id=vp-w_pC9JBAC&oi=fnd&pg=PA75&dq=Object+Enhancement+and+Extraction&ots=sAD85lrCIa&sig=NIFwSGOQDOSebsLUcKx9PIwKFOM#v=onepage&q=Object%20Enhancement%20and%20Extraction&f=false)
- ![j](https://img.shields.io/badge/Book-1970-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-2151-blue?style=flat-square)
- Formula
  - $$
        \begin{aligned}
            G_x &= \begin{bmatrix}
                +1&0&-1\\+1&0&-1\\+1&0&-1\\
            \end{bmatrix} * IMG\\
            G_y &= \begin{bmatrix}
                +1&+1&+1\\0&0&0\\-1&-1&-1\\
            \end{bmatrix} * IMG\\
            G &= \sqrt{G_x^2 + G_y^2}\\
            \Theta &= \arctan(\frac{G_y}{G_x})=atan2(G_x, G_y)
        \end{aligned}
    $$
- Related
  - [一种改进的图像边缘检测算法💩🤮](http://www.cqvip.com/qk/84018x/200921/32051803.html)
  - ![j](https://img.shields.io/badge/科学技术与工程-2009-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-5-blue?style=flat-square)
  - [Paper.pdf](https://awsdownload.cqvip.com/downloadpaper/api/v1/pdf/stream/2009/32051803?infos=RkFFREVHRk1FQkFNRkdGSEFMQUdBSUZIRkNCRkZFQURBTEFMQk5BQkFDQU5BQUJPQUxBQUZDQU5CTUFNRkZBQUFIQUhGQkFDQUlGTEZGRkZGQ0JOQUNBRkFCQUJCUEFBQUJBQ0FGQUVBSkFJQURCTUFDQUxBQkFGQUFBQkFCQUdCTUFFQlBBRkJPQkhBQ0FEQUJBREJOQUZBSUJGQUNBRUJEQURBSkFQQURBT0FLQUhBQUJORkVGR0ZDRk1BRkFMQUVBS0FJRkJBR0ZPQUJGQUFLQUFGQ0FFQUZBQkZFRkFGQ0FBRkRGR0ZEQUxBQUFMQUFBS0JQQUZCT0FJ&clientID=cqvip4fd848bc-d089-4350-82b8-4e345a79cefa&fileName=%e4%b8%80%e7%a7%8d%e6%94%b9%e8%bf%9b%e7%9a%84%e5%9b%be%e5%83%8f%e8%be%b9%e7%bc%98%e6%a3%80%e6%b5%8b%e7%ae%97%e6%b3%95.pdf&algorithm=0)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927193452.png" alt="20210927193452" height="400px"/>

## Roberts cross [罗伯茨算子]

- [Machine Perception Of Three-Dimensional Solids](https://dspace.mit.edu/bitstream/handle/1721.1/11589/33959125-MIT.pdf)
- ![j](https://img.shields.io/badge/MIT-1963-blue?style=flat-square)![cite](https://img.shields.io/badge/cite-2971-blue?style=flat-square)
- Formula
  - $$
        \begin{aligned}
            G_x &= \begin{bmatrix}
                +1&0\\0&-1
            \end{bmatrix} * IMG\\
            G_y &= \begin{bmatrix}
                0&+1\\-1&0
            \end{bmatrix} * IMG\\
            G &= \sqrt{G_x^2 + G_y^2}\\
            \Theta &= \arctan(\frac{G_y}{G_x})-\frac{3\pi}{4}
        \end{aligned}
    $$

## Compare of them

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210927195227.png" alt="20210927195227"/>
