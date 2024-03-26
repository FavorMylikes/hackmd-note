---
layout: single
title:  "SparseCtrl: Adding Sparse Controls to Text-to-Video Diffusion Models"
date:   "2024-02-09 18:57:13 +0800"
categories: AI 3d
header:
  teaser: https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209185739.png
---





- [SparseCtrl](https://arxiv.org/abs/2311.16933)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209185739.png" alt="20240209185739"/>
  - 论文主要验证了稀疏控制在text2video方面的作用
  - 原本的条件控制主要在稠密的视频流生成中起作用，但通过稀疏信号的控制一样可以得到较好的结果
    - 该方法在预训练的T2V模型之上增加了一个附加的条件编码器
    - 通过在帧间复制ControlNet编码器，并将条件图像添加到帧中，实现了条件信号在帧间的传播，以增强时间一致性
    - 通过计算生成视频中的关键帧的深度图像与原始视频中提取的深度图像之间的mse进行评估视频的事件一致性
    - WebVid-10M数据集
- [IpAdaptor](https://arxiv.org/abs/2308.06721)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209194938.png" alt="20240209194938"/>
  - IP-Adapter通过解耦的跨注意力策略，将图像特征嵌入到预训练的文本到图像扩散模型中实现图像提示能力
  - 将图像特征嵌入到预训练的文本到图像扩散模型中。IP-Adapter由图像编码器和带有解耦跨注意力的调整模块组成
  - 两个开源数据集（LAION-2B和COYO-700M）的大约1000万个文本-图像对
  - IP-Adapter由图像编码器和带有解耦跨注意力的调整模块组成。图像编码器使用预训练的CLIP图像编码器从图像提示中提取图像特征。解耦的跨注意力策略通过在原始UNet模型中添加新的跨注意力层来嵌入图像特征，从而实现更有效的图像提示适配器。
  - 使用一个大规模的多模态数据集进行IP-Adapter的训练，其中包含来自不同数据集的文本-图像对。训练过程使用AdamW优化器进行，使用DeepSpeed ZeRO-2加速训练。进行了定量和定性的实验评估，比较IP-Adapter与其他适配器方法的性能和效果。
- [Text2Tex](https://daveredrum.github.io/Text2Tex/)
  - <img src="https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20240209203142.png" alt="20240209203142"/>
  - 从多个视点逐步合成高分辨率的部分纹理。为了避免在视角变化过程中累积不一致和拉伸的伪影，作者将渲染的视图动态分割为生成掩模，表示每个可见像素的生成状态
  - 为了控制扩散过程中的随机性，引入了一个缩放因子γ，通过控制扩散步骤的数量来开始去噪潜在编码
  - 使用修复掩模指导采样过程
  - 通过视角投射和插值，减少纹理的伪影和拉伸问题
