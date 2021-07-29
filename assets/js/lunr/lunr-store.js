var store = [{
        "title": "First Day, install ubuntu",
        "excerpt":"台式机被格式化, USB装Ubuntu系统， 18.04.5 没有登录账户 网络层的非特殊站点均要求登录 172.18.50.22:8080 目前观察到的不要求登录的站点 archive.ubuntu.com anconda.com search.cpan.org 在试图安装snap时, 出现Ca认证错误，怀疑跟网络环境有关 openssl s_client -connect api.snapcraft.io:443 出现Verification error: self signed certificate issuer=CN = H3C-HTTPS-Self-Signed-Certificate-5978b0f0a780e531 怀疑H3C路由器做了固定域名策略 装了哪些组件 apt install namp apt install traceroute apt install python apt install tree apt install conda apt install snap apt install make apt install gcc...","categories": ["env","system"],
        "tags": [],
        "url": "/hackmd-note/env/system/2021/07/19/First-Day-install-ubuntu.html",
        "teaser": null
      },{
        "title": "Try to connect to the internet",
        "excerpt":"尝试解决上网问题      笔记本-wifi-暂时走刘浩宇师兄的账号密码   台式机还没有办法联网            利用暂时的漏洞       通过ipv6搭建ssh信道       目前的路由                    台式机-&gt;seattle ipv6-&gt;阿里云-&gt;笔记本                       由于未联网状态下无法使用openvpn的1194或其他端口，暂时解决访问问题                seattle 到 台式机的root登录       PermitRootLogin yes           使用nginx反向代理，将台式机暴露给公网   ali-hk -ipv6-&gt; 台式机   地址 公网地址   jupyter-lab   装了哪些组件      apt install sshpass   apt install openvpn   apt install unzip   阅读      三维重建综述     ","categories": ["env","system"],
        "tags": [],
        "url": "/hackmd-note/env/system/2021/07/20/Try-to-connect-to-the-internet.html",
        "teaser": null
      },{
        "title": "Robotics-Flight week 1 and 2",
        "excerpt":"准备看点Coursera课程 Coursera: robotics-flight Week 1 State Estimation obtaub reliable estimates of position and velocity SLAM(Simultaneous Localization And Mapping) Control for trajectory tracking in a simple second-order system PD control $u(t) = x’’^{des}(t)+K_ve’(t)+K_pe(t)$ PID control (proportion integration differentiation) $u(t) = x’’^{des}(t)+K_ve’(t)+K_pe(t)+K_i\\int_0^t{e(\\tau)d\\tau}$ code Here Week2 rotation matrix is orthogonal matrix all vector...","categories": ["coursera","system","env"],
        "tags": [],
        "url": "/hackmd-note/coursera/system/env/2021/07/21/Robotics-Flight-week-1-and-2.html",
        "teaser": null
      },{
        "title": "Install Remote Browser[remoteview], And Coursera Robotics-Flight week 2",
        "excerpt":"remote chrome debuging need ws resever proxy to ws trying to use ipv6 access browser directly trying to ssh tunnel mapping 9222 to 9223 still can not fix ws problem Try to use remoteview[base on npm] here is the tutorial trying to install remoteview by npm npm i remoteview but...","categories": ["env","system","coursera"],
        "tags": [],
        "url": "/hackmd-note/env/system/coursera/2021/07/22/Robotics-Flight-week-2.html",
        "teaser": null
      },{
        "title": "Robotics-Flight week 3 and 4, 3D rebuilding",
        "excerpt":"准备看点Coursera week 3 2-d-quadrotor-control state-space form[状态空间] Identify the order, n, of the system Define the states, $x=y(t), x_1 = \\dot y(t) \\dotsc$ Create the states vector, $\\mathbf{x} = [x_1, x_2, \\dotsc ]^T = [y, \\dot y, \\dotsc ]^T$ write system of first-order differencial equations as matrix. [x˙1x˙2…x˙n]=[x2x3…g(x1,x2,…,xn,u)]\\begin{bmatrix} \\dot x_1\\\\ \\dot...","categories": ["coursera","3D"],
        "tags": [],
        "url": "/hackmd-note/coursera/3d/2021/07/23/Robotics-Flight-week-3-and-4.html",
        "teaser": null
      },{
        "title": "Install RemoteView.docker, Finish Dynamic System Control[1]",
        "excerpt":"尝试安装 remoteview 搞定浏览器嵌套 docker github docker -v pull dosyago/browsergapce:2.5 # from other has access to internet docker save -o remoteview.docker dosyago/browsergapce:2.5 docker load -i remoteview.docker # at ucas server wget https://raw.githubusercontent.com/c9fe/ViewFinder/master/chrome.json docker run -d -p 8002:8002 --security-opt seccomp=$(pwd)/chrome.json dosyago/browsergapce:2.5 nginx rewrite_log on; proxy_pass http://127.0.0.1:8002/; proxy_redirect / /browser/; rewrite ^(?!/browser)/?(.*)$ /browser/$2...","categories": ["env","system","docker","zhihu"],
        "tags": [],
        "url": "/hackmd-note/env/system/docker/zhihu/2021/07/24/RemoteView-docker-and-Dynamic-System.html",
        "teaser": null
      },{
        "title": "E-L Equation",
        "excerpt":"准备搞明白泛函 无人机的动力学系统 运动轨迹方程与E-L方程 高阶E-L方程 For $J[y(x)] = \\int_{x_0}^{x_1}F(x, \\dot x, \\ddot x, \\dotsc, x^{(n)})dx$ 这里的$\\dot x$为x的一阶导数，即速度，由于在力学领域，经常使用$\\dot x, \\ddot x$的形式描述高阶导数(牛顿导数记号)，这里也一并改为此种写法 E-L : $\\frac{\\partial F}{\\partial x} - \\frac{d}{dt}(\\frac{\\partial F}{\\partial \\dot x}) + \\frac{d^2}{dt^2}(\\frac{\\partial F}{\\partial \\ddot x}) - \\frac{d^3}{dt^3}(\\frac{\\partial F}{\\partial x^{(3)}}) + \\dotsc +(-1)^n \\frac{d^n}{dt^n}(\\frac{\\partial F}{\\partial x^{(n)}})= 0$ 计算例子 求解从时间$0$到时间$t$, 速度的平方最小的函数, 即，一阶动力学问题 $J[x(t)]...","categories": ["zhihu"],
        "tags": [],
        "url": "/hackmd-note/zhihu/2021/07/25/E-L-Equation.html",
        "teaser": null
      },{
        "title": "Coordinate System in Dynamic",
        "excerpt":"准备搞明白泛函 无人机的动力学系统 动力系统 惯性系[inertial frame]$\\mathbf{A}$ 3个转轴$a_1, a_2, a_3$ 原点$O$ 随体系[body frame]或固连系[body-fixed frame]或体坐标系[body coordinate]$\\mathbf{B}$ 3个转轴$b_1, b_2, b_3$ 原点$C$ $L$为旋翼到质心的距离 这个体系描述了这样一种运动 刚体从O点移动到C点，并且进行了旋转变换，此时由于随体系与刚体保持不动，因此随体系坐标不变，而随体系相对于惯性系存在变化，因此旋转矩阵是描述刚体旋转后的惯性系坐标变换 旋转矩阵$\\mathbf{R}$[同一个点到两个坐标系的运算] 欧拉角[刚体的转动可以视为绕不同的轴，独立转动3次] 如果不考虑位移[位移可以通过向量加法单独运算]，那么刚体仅存在旋转运动 Z-X-Y顺序旋转[顺序不一定是Z-X-Y，也可能是Z-X-Z或其他，但运算矩阵要一致] 旋转矩阵$R$ R=RZ(ψ)RX(ϕ)RY(θ)=[cos⁡(ψ)−sin⁡(ψ)0sin⁡(ψ)cos⁡(ψ)0001][1000cos⁡(ϕ)−sin⁡(ϕ)0sin⁡(ϕ)cos⁡(ϕ)][cos⁡(θ)0sin⁡(θ)010−sin⁡(θ)0cos⁡(θ)]=[−s(θ)s(ϕ)s(ψ)+c(θ)c(ψ)−s(ψ)c(ϕ)s(θ)c(ψ)+s(ϕ)s(ψ)c(θ)s(θ)s(ϕ)c(ψ)+s(ψ)c(θ)c(ϕ)c(ψ)s(θ)s(ψ)−s(ϕ)c(θ)c(ψ)−s(θ)c(ϕ)s(ϕ)c(θ)c(ϕ)]s→sin⁡,c→cos⁡\\begin{aligned} R &amp;= R_{Z(\\psi)}R_{X(\\phi)}R_{Y(\\theta)}\\\\ &amp;=\\begin{bmatrix} \\cos{(\\psi)} &amp; -\\sin{(\\psi)} &amp; 0\\\\ \\sin{(\\psi)} &amp; \\cos{(\\psi)} &amp; 0\\\\ 0 &amp; 0 &amp; 1 \\end{bmatrix} \\begin{bmatrix} 1&amp;0&amp;0\\\\ 0&amp;\\cos{(\\phi)} &amp;...","categories": ["zhihu","coursera"],
        "tags": [],
        "url": "/hackmd-note/zhihu/coursera/2021/07/26/Coordinate-System-in-Dynamic.html",
        "teaser": null
      },{
        "title": "Robotics Perception week 1",
        "excerpt":"准备看点摄像机视觉 Week1 Camera Modeling $\\frac{1}{f} = \\frac{1}{a} + \\frac{1}{b}$ $f$焦距， $a$, 物体到透镜的位置, $b$, 透镜到成像的位置 $\\frac{Y}{a}=\\frac{y}{b}$ $Y$物体大小, $y$像的大小 Single View Geometry 平面图到透视图 $o^*$为眼睛位置 $S$为垂足 $OS=O^S$, 因此$\\angle{SOO^}=45\\degree$ $P$为平面图上一点 连接$P-O$交图像平面$M$ 连接$P-O^$交图像平面$P^$ $\\triangle MLP^$相似于$\\triangle OSO^$ $\\angle LMP’$为$45\\degree$ $\\triangle MLP^=\\triangle MLP’$, 即，将成像面的点$P^$映射到平面$P’$变为透视图 因此，$P’$是$P$关于$ML$对称的透视图 多透视点画法Kim Jung Gi 投影面[Projective Plane] 投影面上的点$(x,y)$可以视为，视点向外发出的射线$(s_x, s_y, s)$ homogeneous coordinates[齐次坐标] 引入新的维度，表示无限远处的坐标 $(x,y)\\rightarrow(x,y,1)$,...","categories": ["coursera","3D"],
        "tags": [],
        "url": "/hackmd-note/coursera/3d/2021/07/27/Robotics-Perception-week-1.html",
        "teaser": null
      },{
        "title": "Jekyll+Github page+Gihub Actions",
        "excerpt":"尝试使用github pages 主要组件 Jekyll 静态网站生成器 Github Actions 需要项目下存在.github/workflows/*.yml, 作为Github Actions的扫描程序 Action marketplace _config.yml, 根目录下，Jekyll运行时需要的配置 ruby Gemfile ruby 需要的版本 Gemfile.lock ruby 一台机器已经安装各个组件的具体版本以及依赖条件 运行流程 Actions扫描workflows下的配置文件寻找job Actions按照顺序依次执行 ruby 按照Gemfile.lock的文件安装指定组件版本 ruby拿到_config.yml的配置之后依次执行 主题 dash 插件 jekyll-feed jekyll/tagging jekyll-paginate paginate: 5 # 分页数 paginate_path: “/hackmd-note/page:num/” # 扫描位置 kramdown-math-katex 参考 minusgix.github.io git 南方科技大学数学建模协会 git 需要本地构建 leopardpan 效果同上...","categories": ["tutorial"],
        "tags": [],
        "url": "/hackmd-note/tutorial/2021/07/28/Jekyll-Github-page-Gihub-Actions.html",
        "teaser": null
      }]
