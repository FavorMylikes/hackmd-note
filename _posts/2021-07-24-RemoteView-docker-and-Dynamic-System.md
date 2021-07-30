---
layout: single
title:  "Install RemoteView.docker, Finish Dynamic System Control[1]"
date:   2021-07-24 09:57:00 +0800
categories: env system docker zhihu
katex: true
---

## 尝试安装 remoteview

- 搞定浏览器嵌套
- [docker](https://hub.docker.com/r/dosyago/browsergapce)
- [github](https://github.com/i5ik/ViewFinderJS)

    ```bash
    docker -v pull dosyago/browsergapce:2.5 # from other has access to internet
    docker save -o remoteview.docker dosyago/browsergapce:2.5
    docker load -i remoteview.docker  # at ucas server
    wget https://raw.githubusercontent.com/c9fe/ViewFinder/master/chrome.json
    docker run -d -p 8002:8002 --security-opt seccomp=$(pwd)/chrome.json dosyago/browsergapce:2.5
    ```

- nginx

    ```nginx
    rewrite_log on;
    proxy_pass http://127.0.0.1:8002/;
    proxy_redirect / /browser/;
    rewrite ^(?!/browser)/?(.*)$ /browser/$2 last;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Origin "";
    sub_filter '/api/v1/tabs' '/browser/api/v1/tabs';
    sub_filter 'login' 'browser/login';
    sub_filter_types *;
    sub_filter_once off;
    ```

- ![20210724144046](https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210724144046.png)

## 准备搞明白泛函

### 无人机的动力学系统

- 从问题到思路
  - 实际问题[由浅入深]:
    1. 一个4旋翼无人机从空间中A点到B点需要的动力输出方程应该如何设计
    2. 一个4旋翼无人机从空间中A点到B点再到C点中，不希望再B点停留(hover)，动力输出方程应该如何设计
    3. 多个无人机如何先后通过某一点而不发生碰撞
  - 转化为抽象子问题[由浅入深]
    1. 假定我们可以在任意时刻指定任意大小的速度**1阶动力学问题**
       1. 在2D或3D空间内从A点到B点需要的速度方程
    2. 假定我们可以在任意时刻指定任意大小的加速度`推力`**2阶动力学问题**
    3. 假定我们可以在任意时刻指定任意大小的加加速度`给定电压条件下推力随电压持续增加或减少`**3阶动力学问题**
  - 需要解决的数学子问题
    - 使用**Euler-Lagrange Equation[欧拉-拉格朗日方程]** 求解
    - 变分法推导**Euler-Lagrange Equation[欧拉-拉格朗日方程]**
    - 惯性系(body-fixed frame)与旋转矩阵
- 变分法与泛函
  - 参考文章
    - [寻找“最好”（2）——欧拉-拉格朗日方程 - 博客园](https://www.cnblogs.com/bigmonkey/p/9519387.html)
    - [欧拉-拉格朗日方程练习 - linchenguang.com](https://www.linchenguang.com/2019/06/08/exercise-in-Euler-Lagrange-equation/)
    - [从最速降线问题到欧拉-拉格朗日方程 - 地狱少女火炮兰的文章 - 知乎](https://zhuanlan.zhihu.com/p/45912984)
    - [Euler-Lagrange Equation (欧拉-拉格朗日方程)推导 - TranSirius的文章 - 知乎](https://zhuanlan.zhihu.com/p/148949128)
    - [变分法理解1——泛函简介 - 清雅白鹿记的文章 - 知乎](
https://zhuanlan.zhihu.com/p/41573146)
    - [变分法理解2——基本方法 - 清雅白鹿记的文章 - 知乎](
https://zhuanlan.zhihu.com/p/41810184)
    - [变分法简介Part 2.（Calculus of Variations） - Dr.Stein的文章 - 知乎](
https://zhuanlan.zhihu.com/p/20727402)
    - [变分法#欧拉-拉格朗日方程 - Wikipedia](https://zh.wikipedia.org/wiki/%E5%8F%98%E5%88%86%E6%B3%95#%E6%AC%A7%E6%8B%89-%E6%8B%89%E6%A0%BC%E6%9C%97%E6%97%A5%E6%96%B9%E7%A8%8B)
  - 泛函
    - 对等概念
      - 函数: 值->值 运算
      - 泛函: 函数->值 运算 即函数的函数
      - 求解函数极值，即寻找函数中的最大值或最小值
      - 求解泛函极值，即寻找一种函数的形式，使得这样的函数形式有最大值或最小值
    - 泛函形式
      - 一般常见的形式
        - $J[y(x)] = \int_{x_0}^{x_1}F(x, y, y')dx$
        - 即，从$x_0$到$x_1$的曲线积分值
        - 这里的基本假设，$y'$存在，即寻找一条光滑曲线以达到特定极值
        - 下方E-L方程推导过程中的证明中有使用$y''$，因此，特定公式的成立，可能需要依赖其他条件
        - 如果存在导数不存在或者是折线的情况就要更一般的考虑
      - 其他假设下的形式
        - $J[y(x)] = \int_{x_0}^{x_1}F(x, y, y', y'', y''', \dotsc)dx$
        - 这里就假设$y'''$甚至更高的导数存在
    - 求解例子[由浅入深]
      1. 两点之间的最短路径
         1. 曲线的微元$ds = \sqrt{1 + \frac{dy}{dx}^2}$
         2. 曲线长 $S = \int_{x_0}^{x_1}ds = \int_{x_0}^{x_1}{\sqrt{1 + y'^2}dx}$
         3. 问题等价为找到一个函数$y$使$S$最小
         4. 泛函式$J[y(x)] = \int_{x_0}^{x_1}F(y')dx$
      2. 最速曲线问题
         1. 能量守恒
            $$
                \begin{aligned}
                \frac{1}{2}mv^2&=mgy\\
                v^2 &= 2gy
                \end{aligned}
            $$
         2. 速度公式 $v = \frac{ds}{dt} = \sqrt{\frac{1+y'^2}{dt}}dx$
         3. $dt = {\sqrt\frac{1+y'^2}{v}}dx = \sqrt{\frac{1+y'^2}{2gy}}dx$
         4. $x_0$到$x_1$的时间为$t = \int_{x_0}^{x_1}dt = \int_{x_0}^{x_1}\sqrt{\frac{1+y'^2}{2gy}}dx$
         5. 问题等价为找到一个函数$y$使$t$最小
         6. 泛函1式$J[y(x)] = \int_{x_0}^{x_1}F(y, y')dx$
  - 变分 **[Calculus of variations]**
    - 函数的变分
      - 在定义域$[x_0, x_1]$, $\delta y = y(x) - y_0(x)$称为函数$y(x)$在$y_0(x)$处的变分
      - $y_0$为另一可取函数
      - 变分即为两个函数相减产生的新的函数，新函数$\delta y$在定义域$[x_0, x_1]$出随$x$变化
    - 泛函的变分
      - 最简泛函的变分
      - $J[y(x)] = \int_{x_0}^{x_1}F(x, y, y')dx$
      - $F$为最简泛函的核
      - $$
          \begin{aligned}
            \Delta J &= J[y_0(x)] - J[y(x)]\\
            &= J[y(x) + \delta y] - J[y(x)]\\
            &= \int_{x_0}^{x_1}[F(x, y+\delta y, y' + \delta y') - F(x, y, y')]dx\\
            &= \int_{x_0}^{x_1}(F_2\delta y + F_3\delta y')dx + \dotsc + \int_{x_0^{x_1}}[\frac{1}{n!}(\delta y\frac{\partial}{\partial y} + \delta y'\frac{\partial}{\partial y'})^n]dx &\text{多元函数的泰勒展开}&\\
            &&\text{$F_1, F_2, F_3$} 为偏导数&\\
          \end{aligned}
        $$
      - 其中$\int_{x_0}^{x_1}(F_2\delta y + F_3\delta y')dx$称为**泛函的变分**，记为$\delta J$
  - 利用变分法求解泛函极值(极值存在的函数形式)
    - 假设$y(x)$为我们要出来的函数
    - 那么$y(x) + \delta y$为$x_0$到$x_1$的所有可能形式
    - 记$\tilde{y}(x) = y(x) + \delta y = y(x) + \epsilon \eta(x)$
    - 其中$\eta(x)$为满足$\eta(x_0) = \eta(x_1) = 0$的任意函数
    - $\epsilon$为一个常量
    - $\epsilon = 0$时，$\tilde y(x)$即为所求函数
    - 记$\Phi(\epsilon) = J[\tilde y(x)] = J[y(x) + \epsilon \eta(x)] = \int_{x_0}^{x_1}F(x, y(x) + \epsilon \eta(x), y'(x) + \epsilon \eta'(x))dx$
    - 我们希望$\Phi(\epsilon)$在$\epsilon = 0$时取极值
    - 则$\Phi'(\epsilon)\big|_{\epsilon =0 } = 0$
    - $$\begin{aligned}
        \frac{d\Phi}{d\epsilon}
           &= \int_{x_0}^{x_1}F_2[x, y(x) + \epsilon \eta(x), y'(x) + \epsilon \eta'(x)]\eta(x) + F_3[x, y(x) + \epsilon\eta(x), y'(x)+\epsilon\eta'(x)]\eta'(x)dx\\
           &=\int_{x_0}^{x_1}[F_2\eta(x) + F_3\eta'(x)]dx&\text{令$\epsilon = 0$}\\
           &=\int_{x_0}^{x_1}F_2\eta(x)dx + \int_{x_0}^{x_1}F_3\eta'(x)dx\\
           &=\int_{x_0}^{x_1}F_2\eta(x)dx + \int_{x_0}^{x_1}F_3d\eta(x)&\text{分部积分法}\\
           &=\int_{x_0}^{x_1}F_2\eta(x)dx + F_3\eta(x)\big|_{x_0}^{x_1} - \int_{x_0}^{x_1}\eta(x)\frac{dF_3}{dx}dx&\text{这里要求$F_3存在对x的导数$}\\
           &=\int_{x_0}^{x_1}(F_2\eta(x) - \eta(x)\frac{dF_3}{dx})dx + F_3\eta(x)\big|_{x_0}^{x_1}\\
           &=\int_{x_0}^{x_1}[F_2 -\frac{dF_3}{dx}]\eta(x)dx&\text{$\eta(x_0) = 0, \eta(x_1) = 0\rightarrow F_3\eta(x)\big|_{x_0}^{x_1} = 0$}\\
           &=0&\text{\textcircled 1}
        \end{aligned}
      $$
    - 引理
      - $f(x)$在$[x_0, x_1]$内连续,$\eta(x)$是满足$\eta(x_0)=0,\eta(x_1)=0$的任意函数
      - 若$\int_{x_0}^{x_1}f(x)\eta(x)dx = 0$
      - 则对所有的$x\in[x_0, x_1]$,有$f(x)\equiv0$
      - 证明:
        - 反证法, 设$f(x)$不恒为0
        - 取$\eta(x) = -f(x)(x-x_0)(x-x_1)$
        - 取$x_0\lt x\lt x_1$, 所以$(x-x_0)(x-x_1)\lt 0$
        - 所以$\int_{x_0}^{x_1}f(x)\eta(x)dx = \int_{x_0}^{x_1}-f(x)^2(x-x_0)(x-x_1)\gt 0$
        - 与预设矛盾，因此$f(x)\equiv 0$
    - 利用上述引理
      - $\text{\textcircled 1}$式
      - $\int_{x_0}^{x_1}(F_2-\frac{dF_3}{dx})\eta(x)dx = 0$
      - $F_2-\frac{dF_3}{dx} = 0$
      - 即**Euler-Lagrange Equation[欧拉-拉格朗日方程]**
      - $\frac{\partial}{\partial y}F - \frac{d}{dx}(\frac{\partial}{\partial y'}F) = 0$
    - **Euler-Lagrange Equation[欧拉-拉格朗日方程]**表示，极值函数的存在形式一定满足该条件
- 利用E-L求解
  1. 两点间最短距离
     - $$
        \begin{aligned}
        J[y(x)] &= \int_{x_0}^{x_1}{\sqrt{1 + y'^2}dx} \\
        F&=\sqrt{1 + y'^2}\\
        \frac{\partial F}{\partial y} &= 0\\
        \frac{\partial F}{\partial y'} &= \frac{y'}{\sqrt{1+y'^2}}\\
        E-L: 0 - \frac{d}{dx}[ \frac{y'}{\sqrt{1+y'^2}}] &= 0\\
        \frac{y'}{\sqrt{1+y'^2}} &= C\\
        y' &= \sqrt{\frac{C^2}{1-C^2}} = C_0\\
        y & = C_0x + C_1
        \end{aligned}
       $$
     - 因此是导数为常数的直线
  2. 最速降线问题
     - $J[y(x)] = \int_{x_0}^{x_1}\sqrt{\frac{1+y'^2}{2gy}}dx$
     - 引理(在$x$不存在时的简便计算法)
       - $$
            \begin{aligned}
                F(y, y')&= \sqrt{\frac{1+y'^2}{2gy}}\\
                \frac{d}{dt}(F - y'F_2)
                &= \frac{d}{dt}F - \frac{d}{dt}(y'F_2)\\
                &=[y'F_1 + y''F_2] - [y''F_2 + y'\frac{d}{dt}F_2]&\text{这里要求$y''$存在}\\
                &=y'F_1-y'\frac{d}{dt}F_2\\
                &=y'[F_1-\frac{d}{dt}F_2]\\
                &=0&\text{here $F_1=\frac{\partial F}{\partial y}, F_2=\frac{\partial F}{\partial y'}$, hence $F_1-\frac{d}{dt}F_2 = 0$ 为EL方程 }\\
                \therefore F - y'F_2 &= C &\text{here $C$为常数}
            \end{aligned}
         $$
     - $$
        \begin{aligned}
            F - y'F_2 &= \sqrt{\frac{1+y'^2}{2gy}} - y'\frac{2y'\frac{1}{2}(1+y'^2)^{-\frac{1}{2}}}{\sqrt{2gy}}\\
            &=\sqrt{\frac{1+y'^2}{2gy}} - \frac{y'^2}{\sqrt{2gy}\sqrt{1+y'^2}}\\
            &=\frac{1+y'^2}{\sqrt{2gy}\sqrt{1+y'^2}} - \frac{y'^2}{\sqrt{2gy}\sqrt{1+y'^2}}\\
            &= \frac{1}{\sqrt{2gy}\sqrt{1+y'^2}}\\
            &=C&\text{利用上面的引理}\\
            \therefore y(1+y'^2) &= \frac{1}{2gC^2}
        \end{aligned}
       $$
     - 解得(积分表或换元$y'=\cot\frac{\theta}{2}$), 摆线
       - $$
            \begin{cases}
                x&=\frac{C}{2}(\theta - \sin\theta)\\
                y&=\frac{C}{2}(1-\cos\theta)
            \end{cases}
         $$
- 约束
  - 指求解时需要满足的条件
  - 求解例子
    - 两点间最短路径
      - $$
          \begin{cases}
            y(x_0)&= y_0\\
            y(x_1)&= y_1\\
          \end{cases}
        $$
      - 代入$y = C_0x$
      - 得到$C_0 = \frac{y_1 - y_0}{x_1 - x_0}$
    - 最速降线
      - $$
          \begin{cases}
            y(x_0)&= y_0\\
            y(x_1)&= y_1\\
          \end{cases}
        $$
      - 代入
        $$
          \begin{cases}
            x&=\frac{C}{2}(\theta - \sin\theta)\\
            y&=\frac{C}{2}(1-\cos\theta)
          \end{cases}
        $$
      - 得到
        $$\begin{aligned}
            y' &= \cot\frac{\theta}{2}\\
            A(x,y) &= \theta^2\\
            B(x,y) &= 4x\theta + 4y\\
            D(x,y) &= 4(x^2+y^2)\\
            C&=\frac{D_1A_2 - D_2A_1}{B_1A_2 - B_2A_1}
        \end{aligned}
        $$
