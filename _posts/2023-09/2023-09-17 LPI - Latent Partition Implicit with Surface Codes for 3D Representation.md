---
layout: single
title:  "Latent Partition Implicit with Surface Codes for
3D Representation"
date:   "2023-9-18 20:32:07 +0800"
categories: AI 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230918203343.png
---

## Latent Partition Implicit with Surface Codes for 3D Representation

<img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20230918203343.png" alt="20230918203343"/>
- 这篇论文的主要贡献在于提出了一种名为Latent Partition Implicit（LPI）的方法，用于表示三维形状。LPI是一种多层级表示方法，能够高效地捕捉形状中不同数量的部分。该方法使用表面编码来表示个别的部分，并通过在潜在空间中加权这些表面编码来重建表面，从而实现了高度准确的形状和部分建模。

- LPI的一个优点在于其灵活性，可以整合额外的表面属性，比如测地距离或分割信息。作者展示了LPI可以从点云中学习，而不需要真实的有符号距离或点法线。

- 通过在广泛使用的基准数据集上进行详尽的评估，作者展示了他们的方法在形状表示方面胜过了现有最先进的方法。他们在L2 Chamfer距离、法线一致性和F-score等指标上取得了优越的结果。

- 作者还强调了LPI捕捉复杂结构的能力和重建部分的意义。他们提供了视觉对比来支持他们的观点，并展示了LPI可以准确地表示具有复杂几何结构的形状。

- 在消融实验中，作者分析了不同距离度量和表面编码对该方法收敛和性能的影响。他们发现使用距离度量来混合部分可以实现更快、更好的收敛。他们还展示了对于非刚性形状建模，使用内在距离与表面编码相结合可以获得最佳性能。
