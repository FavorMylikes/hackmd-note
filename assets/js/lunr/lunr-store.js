var store = [{
        "title": "First Day, install ubuntu",
        "excerpt":"台式机被格式化, USB装Ubuntu系统， 18.04.5 没有登录账户 网络层的非特殊站点均要求登录 172.18.50.22:8080 目前观察到的不要求登录的站点 archive.ubuntu.com anconda.com search.cpan.org 在试图安装snap时, 出现Ca认证错误，怀疑跟网络环境有关 openssl s_client -connect api.snapcraft.io:443 出现Verification error: self signed certificate issuer=CN = H3C-HTTPS-Self-Signed-Certificate-5978b0f0a780e531 怀疑H3C路由器做了固定域名策略 装了哪些组件 apt install namp apt install traceroute apt install python apt install tree apt install conda apt install snap apt install make apt install gcc...","categories": ["env","system"],
        "tags": [],
        "url": "/env/system/First-Day-install-ubuntu/",
        "teaser": null
      },{
        "title": "Try to connect to the internet",
        "excerpt":"尝试解决上网问题      笔记本-wifi-暂时走刘浩宇师兄的账号密码   台式机还没有办法联网            利用暂时的漏洞       通过ipv6搭建ssh信道       目前的路由                    台式机-&gt;seattle ipv6-&gt;阿里云-&gt;笔记本                       由于未联网状态下无法使用openvpn的1194或其他端口，暂时解决访问问题                seattle 到 台式机的root登录       PermitRootLogin yes           使用nginx反向代理，将台式机暴露给公网   ali-hk -ipv6-&gt; 台式机   地址 公网地址   jupyter-lab   装了哪些组件      apt install sshpass   apt install openvpn   apt install unzip   阅读      三维重建综述     ","categories": ["env","system"],
        "tags": [],
        "url": "/env/system/Try-to-connect-to-the-internet/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/3edc8471faea4ec0350dd49526aac66.png"
      },{
        "title": "Robotics-Flight week 1 and 2",
        "excerpt":"准备看点Coursera课程 Coursera: robotics-flight Week 1 State Estimation obtaub reliable estimates of position and velocity SLAM(Simultaneous Localization And Mapping) Control for trajectory tracking in a simple second-order system PD control $u(t) = x’’^{des}(t)+K_ve’(t)+K_pe(t)$ PID control (proportion integration differentiation) $u(t) = x’’^{des}(t)+K_ve’(t)+K_pe(t)+K_i\\int_0^t{e(\\tau)d\\tau}$ code Here Week2 rotation matrix is orthogonal matrix all vector...","categories": ["coursera","system","env"],
        "tags": [],
        "url": "/coursera/system/env/Robotics-Flight-week-1-and-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210721131633.png"
      },{
        "title": "Install Remote Browser[remoteview], And Coursera Robotics-Flight week 2",
        "excerpt":"remote chrome debuging need ws resever proxy to ws trying to use ipv6 access browser directly trying to ssh tunnel mapping 9222 to 9223 still can not fix ws problem Try to use remoteview[base on npm] here is the tutorial trying to install remoteview by npm npm i remoteview but...","categories": ["env","system","coursera"],
        "tags": [],
        "url": "/env/system/coursera/Robotics-Flight-week-2/",
        "teaser": null
      },{
        "title": "Robotics-Flight week 3 and 4, 3D rebuilding",
        "excerpt":"准备看点Coursera week 3 2-d-quadrotor-control state-space form[状态空间] Identify the order, n, of the system Define the states, $x=y(t), x_1 = \\dot y(t) \\dotsc$ Create the states vector, $\\mathbf{x} = [x_1, x_2, \\dotsc ]^T = [y, \\dot y, \\dotsc ]^T$ write system of first-order differencial equations as matrix. $$ \\begin{bmatrix} \\dot x_1\\\\...","categories": ["coursera","3d"],
        "tags": [],
        "url": "/coursera/3d/Robotics-Flight-week-3-and-4/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210723122620.png"
      },{
        "title": "Install RemoteView.docker, Finish Dynamic System Control[1]",
        "excerpt":"尝试安装 remoteview 搞定浏览器嵌套 docker github docker -v pull dosyago/browsergapce:2.5 # from other has access to internet docker save -o remoteview.docker dosyago/browsergapce:2.5 docker load -i remoteview.docker # at ucas server wget https://raw.githubusercontent.com/c9fe/ViewFinder/master/chrome.json docker run -d -p 8002:8002 --security-opt seccomp=$(pwd)/chrome.json dosyago/browsergapce:2.5 nginx rewrite_log on; proxy_pass http://127.0.0.1:8002/; proxy_redirect / /browser/; rewrite ^(?!/browser)/?(.*)$ /browser/$2...","categories": ["env","system","docker","zhihu"],
        "tags": [],
        "url": "/env/system/docker/zhihu/RemoteView-docker-and-Dynamic-System/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210724144046.png"
      },{
        "title": "E-L Equation",
        "excerpt":"准备搞明白泛函 无人机的动力学系统 运动轨迹方程与E-L方程 高阶E-L方程 For $J[y(x)] = \\int_{x_0}^{x_1}F(x, \\dot x, \\ddot x, \\dotsc, x^{(n)})dx$ 这里的$\\dot x$为x的一阶导数，即速度，由于在力学领域，经常使用$\\dot x, \\ddot x$的形式描述高阶导数(牛顿导数记号)，这里也一并改为此种写法 E-L : $\\frac{\\partial F}{\\partial x} - \\frac{d}{dt}(\\frac{\\partial F}{\\partial \\dot x}) + \\frac{d^2}{dt^2}(\\frac{\\partial F}{\\partial \\ddot x}) - \\frac{d^3}{dt^3}(\\frac{\\partial F}{\\partial x^{(3)}}) + \\dotsc +(-1)^n \\frac{d^n}{dt^n}(\\frac{\\partial F}{\\partial x^{(n)}})= 0$ 计算例子 求解从时间$0$到时间$t$, 速度的平方最小的函数, 即，一阶动力学问题 $J[x(t)]...","categories": ["zhihu"],
        "tags": [],
        "url": "/zhihu/E-L-Equation/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210725184457.png"
      },{
        "title": "Coordinate System in Dynamic",
        "excerpt":"准备搞明白泛函 无人机的动力学系统 动力系统 惯性系[inertial frame]$\\mathbf{A}$ 3个转轴$a_1, a_2, a_3$ 原点$O$ 随体系[body frame]或固连系[body-fixed frame]或体坐标系[body coordinate]$\\mathbf{B}$ 3个转轴$b_1, b_2, b_3$ 原点$C$ $L$为旋翼到质心的距离 这个体系描述了这样一种运动 刚体从O点移动到C点，并且进行了旋转变换，此时由于随体系与刚体保持不动，因此随体系坐标不变，而随体系相对于惯性系存在变化，因此旋转矩阵是描述刚体旋转后的惯性系坐标变换 旋转矩阵$\\mathbf{R}$[同一个点到两个坐标系的运算] 欧拉角[刚体的转动可以视为绕不同的轴，独立转动3次] 如果不考虑位移[位移可以通过向量加法单独运算]，那么刚体仅存在旋转运动 Z-X-Y顺序旋转[顺序不一定是Z-X-Y，也可能是Z-X-Z或其他，但运算矩阵要一致] 旋转矩阵$R$ $$ \\begin{aligned} R &= R_{Z(\\psi)}R_{X(\\phi)}R_{Y(\\theta)}\\\\ &=\\begin{bmatrix} \\cos{(\\psi)} & -\\sin{(\\psi)} & 0\\\\ \\sin{(\\psi)} & \\cos{(\\psi)} & 0\\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1&0&0\\\\ 0&\\cos{(\\phi)}...","categories": ["zhihu","coursera"],
        "tags": [],
        "url": "/zhihu/coursera/Coordinate-System-in-Dynamic/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210726104110.png"
      },{
        "title": "Robotics Perception week 1",
        "excerpt":"准备看点摄像机视觉 Week1 Camera Modeling $\\frac{1}{f} = \\frac{1}{a} + \\frac{1}{b}$ $f$焦距， $a$, 物体到透镜的位置, $b$, 透镜到成像的位置 $\\frac{Y}{a}=\\frac{y}{b}$ $Y$物体大小, $y$像的大小 Single View Geometry 平面图到透视图 $o^\\star$为眼睛位置 $S$为垂足 $OS=O^\\star$, 因此$\\angle{SOO^\\star}=45\\degree$ $P$为平面图上一点 连接$P-O$交图像平面$M$ 连接$P-O^\\star$交图像平面$P^\\star$ $\\triangle MLP^\\star\\sim\\triangle OSO^\\star$ $\\angle LMP’$为$45\\degree$ $\\triangle MLP^\\star=\\triangle MLP’$, 即，将成像面的点$P^\\star$映射到平面$P’$变为透视图 因此，$P’$是$P$关于$ML$对称的透视图 多透视点画法Kim Jung Gi 投影面[Projective Plane] 投影面上的点$(x,y)$可以视为，视点向外发出的射线$(s_x, s_y, s)$ homogeneous coordinates[齐次坐标] 引入新的维度，表示无限远处的坐标 $(x,y)\\rightarrow(x,y,1)$,...","categories": ["coursera","3d"],
        "tags": [],
        "url": "/coursera/3d/Robotics-Perception-week-1/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210727143124.png"
      },{
        "title": "Jekyll+Github page+Gihub Actions",
        "excerpt":"尝试使用github pages 主要组件 Jekyll 静态网站生成器 Github Actions 需要项目下存在.github/workflows/*.yml, 作为Github Actions的扫描程序 Action marketplace _config.yml, 根目录下，Jekyll运行时需要的配置 ruby Gemfile ruby 需要的版本 Gemfile.lock ruby 一台机器已经安装各个组件的具体版本以及依赖条件 运行流程 Actions扫描workflows下的配置文件寻找job Actions按照顺序依次执行 ruby 按照Gemfile.lock的文件安装指定组件版本 ruby拿到_config.yml的配置之后依次执行 主题 dash 插件 jekyll-feed jekyll/tagging jekyll-paginate paginate: 5 # 分页数 paginate_path: “/page:num/” # 扫描位置 kramdown-math-katex 参考 minusgix.github.io git 南方科技大学数学建模协会 git 需要本地构建 leopardpan 效果同上...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Jekyll-Github-page-Gihub-Actions/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imge706435a04d4061079e6e726c22e50a.png"
      },{
        "title": "Build Blog System",
        "excerpt":"Build Blog System by Github pages and jekyll markdown github use GFM[GitHub Flavored Markdown] resizing image only support by inner html code like&lt;img src=\"src\", alt=\"\", weight=\"\"&gt;&lt;/img&gt; kramdown resizing image by ![](){height:\"100px\"} hackmd resizing image by ![](src... =100x100) markdownlint MD033 does not recommand for inner html finily I disable MD033 in...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Build-Blog-System/",
        "teaser": null
      },{
        "title": "Double slash test",
        "excerpt":"Render No dollar A /A //A \\A \\A Single dollar $A$ $/A$ $\\A$ $//A$ Double dollar $$ A $$ $$ /A $$ $$ \\\\A $$ $$ //A $$ Matrix with Single Dollar single line $\\begin{bmatrix}1\\2\\3\\end{bmatrix}$ multy line $\\begin{bmatrix} 1\\2\\3 \\end{bmatrix}$ Matrix with Double Dollar single line $$ \\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} $$ multy...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Double-slash/",
        "teaser": null
      },{
        "title": "Initial 3D Builder environment",
        "excerpt":"Inistall FLTK FLTK(Fast Light Toolkit，读做”fulltick”) 通过OpenGL和内建的GLUT模拟器提供3D图形支持 Download form offical site Pinoccio recommend for 1.1.7 or 1.1.x Flollow This video Install Cmake gui from office Remeber set the correct config, I’m using VS2017 and x64 system Configure and Generate Close Select sln file from build dir Open it in VS20XX. Open...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Initial-3D-builder-environment/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img7324062.png"
      },{
        "title": "Jekyll Search And Logo",
        "excerpt":"Jekyll-Algolia Jekyll-Algolia A search engine to help you get a list of result. But have some bugs I have post a new issue at here jekyll-archives include: - _pages jekyll-archives: enabled: - categories - tags layouts: category: archive-taxonomy tag: archive-taxonomy permalinks: category: /categories/:name/ tag: /tags/:name/ First, you need _include make...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Add-Jekyll-Search-And-Logo/",
        "teaser": null
      },{
        "title": "Jekyll Archive",
        "excerpt":"How Jekyll Archive Work      用Ruby写的   主要作用是将文章按categories, tags, year, month, day, 生成新的索引页面   但是对于索引页面本身，jekyll-archive, 并未创建   因此需要_pages中的页面进行辅助   在nav中加入连接，才可以   Minimal-Mistakes在Archive界面上的处理逻辑      它实现了自己的pages   但是仅仅使用#作为业内索引，而并没有生成连接   我的实现逻辑      同样在_layouts中实现years.html, tags.html, months.html   在_pages中进行相应的调用   不过为了和jekyll-archive配合，将日期连接统一改成了dates\\:year\\:month  ","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Jekyll-Archive/",
        "teaser": null
      },{
        "title": "Review of Robotics Perception week1",
        "excerpt":"Review of week 1 First Person Camera World $x’, y’$ 为投影面坐标 $X,Y$ 为物体实际坐标 $Z$为物体距离原点距离 $C$为第一视角原点 $f$为焦距 投影面为一个虚像，真实成像是个倒像，但大小一致 $x’=f\\frac{X}{Z}, y’=f\\frac{Y}{Z}$ 矩阵形式 $$ Z_c \\begin{bmatrix} x'\\\\y'\\\\1 \\end{bmatrix} = \\begin{bmatrix} f&0&0&0\\\\ 0&f&0&0\\\\ 0&0&1&0\\\\ \\end{bmatrix} \\begin{bmatrix} X_c\\\\Y_c\\\\Z_c\\\\1 \\end{bmatrix} $$ 这里的1作为3位空间的齐次项 Conversion form mm to pixels 光学中心$O_C,O_r$ $x’,y’$投影面坐标(像素) $c,r$为实际距离 缩放加平移之后 $s_x, s_y$为像素宽 $c-O_c=\\frac{x’}{s_x}, r-O_r=\\frac{y’}{s_y}$ 矩阵形式...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Review-of-Robotics-Perception-week1/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210801194917.png"
      },{
        "title": "Try To Start Up Pinocchio",
        "excerpt":"Install Visual Studio 2019 Cmake generate x64 and x32 for Fltk Target at \\Path\\to\\fltk-1.3.7\\build-2019-32 \\Path\\to\\fltk-1.3.7\\build-2019-64 The Whole Configuration for Pinocchio 参考文章 Visual Studio 2019 配置 OpenGL - 「已注销」的文章 - 知乎 Marco[宏]，全局定义，避免hash_map警告 For AttachWeights, DemoUI,Pinocchio,PinocchioStatic Set Property&gt;C/C++&gt;Preprocessor&gt;Preprocessor Definitions Append _SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS; Lib[库] Set Property&gt;VC++ Directories&gt;Library Directories Append \\Path\\to\\fltk-1.3.7\\build-2019-32\\lib\\Debug; Fltk lib dir Download...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Try-to-startup-Pinocchio/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210802180508.png"
      },{
        "title": "Robotics Perception week2",
        "excerpt":"Homogeneous Coordinate[齐次坐标] Homo means dictionary.com a combining form appearing in loanwords from Greek, where it meant “same” (homology); on this model, used in the formation of compound words (homomorphic). Reference[参考文章] 深入探索透视投影变换 - Twinsen[CSDN] 内容相同，这里的排版可能更舒服 齐次坐标的理解 - MorStar[cnblogs] Homogeneous Coordinates - 안성호(Song Ho Ahn) [英文原文] 齐次坐标 - Wikipedia 计算机视觉中的多视图几何 2.2.1 Explaining...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-week2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210802233241.png"
      },{
        "title": "Robotics-Perception-week2[2]",
        "excerpt":"Two Method Of Perception Matrix with 4 points 线性代数推导 参考 inf.ed.ac.uk [多视图几何 2.3] 对于点$x$经过$H$变换后有如下公式 $\\begin{aligned} \\begin{bmatrix} y'\\\\x'\\\\1 \\end{bmatrix} &= \\mathbf{H} \\begin{bmatrix} x\\\\y\\\\1 \\end{bmatrix}\\\\ &= \\begin{bmatrix} h_{11}&h_{12}&h_{13}\\\\ h_{21}&h_{22}&h_{23}\\\\ h_{31}&h_{32}&h_{33} \\end{bmatrix} \\begin{bmatrix} x\\\\y\\\\1 \\end{bmatrix}\\\\ \\end{aligned}$ 根据一个点，我们可以得到两个方程组 $\\begin{aligned} x' &= \\frac{h_{11}x+h_{12}y+h_{13}}{h_{31}x+h_{32}y+h_{33}}\\\\ y' &= \\frac{h_{21}x+h_{22}y+h_{23}}{h_{31}x+h_{32}y+h_{33}}\\\\ \\end{aligned}$ 其中$h_{31}x+h_{32}y+h_{33}$ 用于表示一个未知的倍数变量 表示成矩阵形式有 $\\begin{bmatrix} x&y&1&0&0&0&-x'x&-x'y&-x'\\\\ 0&0&0&x&y&1&-y'x&-y'y&-y'\\\\ \\end{bmatrix} \\begin{bmatrix}...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week2/",
        "teaser": "https://upload.wikimedia.org/wikipedia/commons/9/94/Projection_geometry.svg"
      },{
        "title": "Robotics-Perception-Week3",
        "excerpt":"Visual Features[视觉特征提取] SIFT [Scale-invariant feature transform] 尺度不变特征转换 大致思想 我们需要同一个相机按不同视角拍摄的同一处的画面 类似于全景图 在拼接全景图时，我们需要找到对应的特征点，才能方便图片对接 SIFT即为一种寻找特征点的算法 对于一张图片进行不同$\\sigma=1, \\sqrt{2}, 2, \\dotsc$的二维高斯卷积得到一组(octive) 再将这张图片进行降采样(隔点采样)，拿到缩水的图片 对于缩水的图片再次进行卷积，使用的$2\\sigma=2, 2\\sqrt{2}, 4 \\dotsc$ 对于同一组(octive)的图片，相邻两张做差，得到DoG Difference of Gaussian, 其实是一种LoG laplacian of gaussian的近似 Gaussian pyramid[高斯金字塔] 迭代(高斯卷积-&gt;降采样-&gt;得到一个长宽只有$\\frac{1}{2}$的图) 拉普拉斯金字塔 Sift算法中的多尺度金字塔 差分金字塔与Difference of Gaussian(DOG)高斯函数的差分 同时，需要归一化，以避免信号流式 拿到的最大响应点即我们需要的特征点 Reference zhaoxuhui.top 图像特征尺度不变性-拉普拉斯-高斯差DOG-SIFT特征提取-旋转不变性-SVD分析-齐次坐标的理解-线性的理解-齐次方程的理解 CSDN 🤙SIFT算法详解 - zddblog[CSDN] 🤙SIFT算法原理详解 - Alliswell-WP[cnblogs] 🤙UCF...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804142207.png"
      },{
        "title": "Try to start up texture",
        "excerpt":"colmap/colmap feature_extractor 特征提取 matcher exhaustive_matcher 特征匹配 vocab_tree_matcher sequential_matcher spatial_matcher transitive_matcher matches_importer mapper Sparse 3D reconstruction / mapping of the dataset using SfM after performing feature extraction and matching model_converter Convert the COLMAP export format to another format, such as PLY or NVM SFM[Structure from Motion] mapillary/OpenSfM - github Open source...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Try-To-Start-Up-Texture/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804193756.png"
      },{
        "title": "Newton Euler Equation",
        "excerpt":"牛顿欧拉方程 Newton Equation 计算出4旋翼的作用力在惯性系下的分量 无人机在水平状态下，受到向上的推力$F=f_1+f_2+f_3+f_4$和重力$mg$ 无人机在旋转状态下通过旋转矩阵$R$可以计算出惯性系下3个方向的作用力分量 同时由于重力方向不变，可以之间减去，得到 $$ R_{ZXY}\\begin{bmatrix} 0\\\\0\\\\f_1+f_2+f_3+f_4 \\end{bmatrix} - \\begin{bmatrix} 0\\\\0\\\\mg \\end{bmatrix} $$ 其中$R_{ZXY}$为按照$ZXY$3个轴依次旋转得到的矩阵，如果转轴不同，则可能得到不同的表示 $$ R_{ZXY} = \\begin{bmatrix}- s(\\phi ) s(\\psi ) s(\\theta ) + c(\\psi ) c(\\theta ) & - s(\\psi ) c(\\phi ) & s(\\phi ) s(\\psi ) c(\\theta ) + s(\\theta ) c(\\psi )\\\\s(\\phi...","categories": ["zhihu"],
        "tags": [],
        "url": "/zhihu/Newton-Euler-Equation/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img/20210726104110.png"
      },{
        "title": "Robotics-Perception-Week3[2]",
        "excerpt":"RANSAC[Random Sample Consenus]         该算法其实是一种迭代选过滤outliers的思想，并不局限于对点进行拟合   通常与Linear regressor进行对比用于体现Linear regressor的不足之处   从信息提供的角度来说   Linear regressor认为每个点所在的位置都是有意义的，即便存在outlier，也不应当将其剔除，因此该算法在遇到outlier距离其他数据很远时，则会显现出倾向于outlier结果   而RANSAC则倾向于，多数点同意则完全收敛到点数最多的模型那里，但显然RANSAC在面对两组数据量差不多的模型时，无法单独做出决策，即，在两个模型中反复横跳   Code at ucas   Orthogonal Procrustes Problem[正交普鲁克问题, 3D-3D pose]      一个为了让客人和自己的床一样大小而砍断客人双脚或拉长客人的古希腊故事[普罗克汝斯特斯之床]   给定两个矩阵$A$和$B$并要求找到一个正交矩阵$\\Omega$最接近映射$A$到$B$   $R=\\underset{\\Omega}{\\argmin}{\\Vert\\Omega A-B\\Vert}_F\\ \\ \\ \\text{subject to}\\ \\ \\ \\Omega^T\\Omega=I$   其中$\\Vert X\\Vert_F$为Frobenius 范数   $\\Vert X\\Vert_F=\\sqrt{trace(X^TX)}=\\sqrt{\\sum_{i,j}x_{ij}^2}$         当$S$为单位阵时，表达式可以最大化   通常用来解决点云旋转的匹配最优解，(因为旋转变换都是正交阵)   Pose from Point Correspondences P3P      当船看到两个灯塔并测得方位角时，可以知道，船在这个圆上         在3D世界中，同样已知2点的位置，相机会被越说在一个曲面内         Tienstra公式   已知3点所对应的角度，可以确定观察者的位置        ","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week3-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210804142207.png"
      },{
        "title": "Start up OpenSfm",
        "excerpt":"Start service with docker mapillary/OpenSfM - github sbstnkll/opensfm -Docker hub How to use docker pull sbstnkll/opensfm:opensfm docker save -o opensfm.docker.docker sbstnkll/opensfm:opensfm docker host docker load -i opensfm.docker docker run -itd -p 8000:8000 \\ --mount type=bind,source=/path/to/OpenSfM/data,target=/source/OpenSfM/data \\ sbstnkll/opensfm:opensfm \\ bash -c 'python3 -m http.server' run compiler command need attach docker attach...","categories": ["3d","docker"],
        "tags": [],
        "url": "/3d/docker/Start-up-OpenSfM/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210806134610.png"
      },{
        "title": "Robotics Perception Week 4",
        "excerpt":"Epipolar Geometry[对极几何] $O_L$经过旋转和移动之后来到了$O_R$ 其中$X_L,X_R$为$X$在两个相机上的像点 红线为对极线 绿色的面为对极平面 $e_L, e_R$分别为对极点, 即另外一个相机的像点 两个相机的连线$O_LO_R$为基线，当X点移动时，对极平面绕基线旋转 这种几何体系描述了一种相机位置变更后，像点的变化 Essential Matrix[本质矩阵] 本质矩阵的定义 $$ \\begin{aligned} \\mathbf{x}_R&=R\\mathbf{x}_L+\\mathbf{t}\\\\ \\mathbf{t}\\times \\mathbf{x}_R&=\\mathbf{t}\\times R\\mathbf{x}_L + \\mathbf{t}\\times \\mathbf{t}&(1)\\\\ \\mathbf{t}\\times \\mathbf{x}_R&=\\mathbf{t}\\times R\\mathbf{x}_L&(2)\\\\ \\mathbf{x}_R\\cdot (\\mathbf{t}\\times \\mathbf{x}_R)&=\\mathbf{x}_R\\cdot (\\mathbf{t}\\times R\\mathbf{x}_L)\\\\ 0&=\\mathbf{x}_R\\cdot (\\mathbf{t}\\times R\\mathbf{x}_L)&(3)\\\\ \\mathbf{x}_R^T\\mathbf{\\hat t} R\\mathbf{x}_L&=0&(4)\\\\ \\mathbf{x}_R^TE\\mathbf{x}_L&=0\\\\ \\end{aligned} $$ 其中 $E$即为本质矩阵 $R$为旋转矩阵 $\\mathbf{t}$从$O_L$到$O_R$的平移向量 $(1)$表示对极平面的法向量, 这里将$\\mathbf{x}_R$视为$O_R$的一条射线 $(2)$是因为，$t\\times t=0$ $(3)$是因为$\\mathbf{x}_R$与法向量垂直 $(4)$将内积换成矩阵形式...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week4/",
        "teaser": "https://upload.wikimedia.org/wikipedia/commons/1/14/Epipolar_geometry.svg"
      },{
        "title": "Robotics Perception Week 4[2]",
        "excerpt":"Nonlinear Least Squares [非线性最小二乘法] Method for non-linear least suqares problems - 2004 Descent method The steepest descent method[最速下降] Newton’s method[牛顿下降] Linear Search[线性搜索] Trust Region and Damped Methods Non-linear least squares problems The Gauss-Newton Method The Levenberg-Marquardt Method Powell’s Dog leg Method A Hybrid Method: L-M and Quasi-Newton A Secant Version...","categories": ["3d","coursera"],
        "tags": [],
        "url": "/3d/coursera/Robotics-Perception-Week4-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210807224958.png"
      },{
        "title": "Software Report Ranking",
        "excerpt":"SfM                     Repository       spark       star                                                                                                                                                                                                                                          MVS                     Repository       spark       star                                                                                                                                                                                                                                          Reference      simov  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Software-Report-Ranking/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img1628431917(1).jpg"
      },{
        "title": "The File Format",
        "excerpt":"File Format obj 文本格式 Wavefront 基本结构 type name   Vertex data v vertices[顶点] vt Texture vertices vn Vertex normals [顶点法线] vp Parameter space vertices [参数空格顶点]   表面属性(surface attributes) deg Degree[度] bmat Basis matrix step Step size cstype Curve or surface type[曲线或表面类型]   Elements p point l line f face curv...","categories": ["3d"],
        "tags": [],
        "url": "/3d/The-file-format/",
        "teaser": "https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/05/26152516/obj-lead.jpg"
      },{
        "title": "Deploy Cv environment for ubuntu, colmap, openmvs, e.g.",
        "excerpt":"install colmap install openmvs Environment Ubuntu 18.04.5 LTS x86_64 gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04) Colmap Require sudo apt-get install \\ git \\ cmake \\ build-essential \\ libboost-program-options-dev \\ libboost-filesystem-dev \\ libboost-graph-dev \\ libboost-system-dev \\ libboost-test-dev \\ libeigen3-dev \\ libsuitesparse-dev \\ libfreeimage-dev \\ libgoogle-glog-dev \\ libgflags-dev \\ libglew-dev \\ qtbase5-dev \\...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Start-Up-Colmap-env/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210810003311.png"
      },{
        "title": "Robotics Motion Planning Week 1 and 2",
        "excerpt":"Week 1 Grassfire Algorithm From red point to green point, like fire. Dijkstra’s Algorithm[地接丝卡尔] A star Algorithm[A*] 优先搜索距离终点最近的点 Week 2 Configuration Space[C-Space 构型空间] 与之相对应的还有 Work-Space 对于一个由一个点连接的两段悬臂，他们的旋转角度$\\theta_1, $\\theta_2$可以表达出悬臂所有能产生的形态 即通过$\\theta_1,\\theta_2$构成的空间表示为悬臂可能的空间 通过将笛卡尔体系下的Work-Space转化为C-Space，更方便求解规划问题 例如，对于RR arm[2R arm, 二自由度机械臂] 3D 的情形 Reference 机器人运动规划中的C space怎样理解？为什么不直接在笛卡尔坐标系下运算呢？ - fly qq的回答 - 知乎 Visibility Graph 将多边形的顶点转化为路径点，转化为路径规划问题 但是边缘行走很危险 另一种方案是，根据多边形的顶点在X轴上将其分割为多个三角形或者梯形，在这些多边形内的直线运动是无障碍的，相应的，做出一个辅助路线图，连接两个可达的三角形或梯形的内部点，再进行路径规划 Piano Mover’s...","categories": ["coursera"],
        "tags": [],
        "url": "/coursera/Robotics-Motion-Planning-week1-week2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Try to use OpenMVS under ubuntu",
        "excerpt":"Run under jupyter-lab Open it at ucas OpenSfM feature_type KAZE[EECV]風 github KAZE Features. Pablo F. Alcantarilla, Adrien Bartoli and Andrew J. Davison. In European Conference on Computer Vision (ECCV), Fiorenze, Italy, October 2012. bibtex Perona-Malik方程 非线性尺度空间 AKAZE[Accelerated-KAZE KAZE的加速版] SIFT DoG[Difference of Gaussian] SURF[Speeded up robust features] Use Box-Filter[盒子滤波器] instead of...","categories": ["coursera"],
        "tags": [],
        "url": "/coursera/Try-to-use-OpenMVS-under-ubuntu/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Robotics Motion Planning week3 and week4",
        "excerpt":"week3   Probilalitic Road Map(PRM)      Rapidy Exploring Random Tree(RRT) Method      RRT 2      Week4   Artificial Potential Field[人造势场]         规划路径平滑化   将随机取点改为梯度下降法   Attractive Field[引力场]            将起点放在高处，终点放在低处           Repulsive Field[斥力场]            障碍物提供斥力           Reference      路径规划-人工势场法(Artificial Potential Field) - 半杯茶的小酒杯的文章 - 知乎  ","categories": ["coursera"],
        "tags": [],
        "url": "/coursera/Robotics-Motion-Planning-week3-and-week4/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Make OpenMVS work at jupyter",
        "excerpt":"尝试高清ColMap逻辑 Feature Extractor 特征点提取 --SiftExtraction.use_gpu 0 You cannot use the feature extractor in GPU mode without an attached display issue --ImageReader.camera_model SIMPLE_RADIAL camera model Default is SIMPLE_RADIAL, you can choice one of PINHOLE RADIAL OPENCV SIMPLE_RADIAL_FISHEYE RADIAL_FISHEYE OPENCV_FISHEYE FOV THIN_PRISM_FISHEYE colmap feature_extractor \\ --database_path $DATASET_PATH/database.db \\ --image_path $DATASET_PATH/images\\ --SiftExtraction.use_gpu 0...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Make-OpenMVS-Work-at-Jupyter/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210811172921.png"
      },{
        "title": "ColMap OpenMVS workflow",
        "excerpt":"Through a lot of reading about those doc and issue I wanna write a tutorial for fresh people. This is prepare for linux server (means no desktop) And I have compile the latest version colmap and openmvs Step 1 colmap feature_extractor \\ --SiftExtraction.use_gpu 0 \\ --database_path $PROJECT/database.db\\ --image_path $DATA_ROOT/$PROJECT/images here...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ColMap-OpenMVS-workflow/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgbandicam-2021-08-10-20-27-00-953.gif"
      },{
        "title": "Problem Analysis About Texture mapping",
        "excerpt":"现象      贴图不完整         贴图边缘抖动      原因分析      mesh交叉         平面过薄  ","categories": ["3d"],
        "tags": [],
        "url": "/3d/Problem-Analysis-About-Texture-mapping/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210812184013.png"
      },{
        "title": "Convert Camera Parameters [model of colmap]",
        "excerpt":"Try Colmap with cuda(gpu) enable gpu with args --SiftExtraction.use_gpu 1 but throw qt error, need x display close QT gui by export QT_QPA_PLATFORM=offscreen but throw these error below *** Aborted at 1628840833 (unix time) try \"date -d @1628840833\" if you are using GNU date *** PC: @ 0x7f07a36bbbf8 (unknown) ***...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Convert-Camera-Parameters/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/imgogjbzom3fyingbqavx06.gif"
      },{
        "title": "PID and laplace transform",
        "excerpt":"PID Control 最常见的形式 $u(t)=K_pe(t)+K_i\\int_0^te(\\tau)d\\tau+K_d\\frac{d}{dt}e(t)$ 其中 $K_p$为比例(proportional)增益 $K_i$为积分(integral)增益 $K_d$为微分(derivative)增益 $e=SP-PV$为误差，设定值(setpoint)$SP$与过程值(process variable)$PV$的差 $t$为时间 $\\tau$积分变数，因为是历史状态的积分，因此要与$t$区分开来 比较常见的解释和应用 通过控制水箱的流入速度，使得水箱内的高度或体积保持不变的一种过程 汽车定速巡航，遇到上坡如何设计动力 无人机的悬停和应激相应(推一下回到原来的位置，或者前往目标点) 解决电路问题 PID 通常学习PID控制时，往往不太懂得3个变量的实际作用，又有计算机作为辅助进行模拟，那么就会导致盲目调参，而书中提到的调参方法又只讲参数含义，将调参性质描述一遍，这样完全不得法门，最后只能得到一个差不多的结果 历史上 惠更斯17世纪改造了风车，使得磨盘转速和磨盘间隙可以根据谷物数量变化 Power From the Wind , Cambridge University Press 瓦特使用圆锥摆以解决蒸汽机的速度输出 History of AutoCtrl 1868年，为了更好的保持鱼雷的深度，引入了微分控制 直到1922年，才有了完整的3项控制率 因此，大多数书籍往往会根据每项变量引入时发挥的作用加以解释，但是又与纯PI控制，PD控制，甚至单纯的P控制应用相违背，除了硬件或成本上的限制，更需要思考的是，每一项为整个系统的稳定性到底提供了多大的好处 PID调参 为了获得更好的参数，有如下几种方法 手动 Ziegler–Nichols[齐格勒－尼科尔斯方法] Ziegler–Nichols_method - Wikipedia 使用Z-N方法调节气压 - Bilibili 将ID项置0，调节P使得达到恒定震荡，再根据震荡周期和震荡值计算PID参数 注意，想要在P控制下得到稳定震荡，要有超调现象，如果通过计算机模拟，而时间单位又很小，那么无论用多大的$K_P$你都看不到超调现象，可以理解为，系统刚刚输入一点点就被感知到了，而上面视频里从气流输入到输出存在一定的延迟，因此可以使用该方法 反馈较慢 快速反馈...","categories": ["zhihu"],
        "tags": [],
        "url": "/zhihu/PID-and-laplace-transform/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816231759.png"
      },{
        "title": "Convert Camera Parameters [usage of ContextCapture Master]",
        "excerpt":"Convert parameters 拿到空三的参数文件，发现是 Smart3D(soarscape.com) 的软件导出的，尝试下载，发现需要申请 根据关键字查找，找到ContextCapture Master 下载安装 Model generate Add photos click submit aerotriangulation at general tab. start ContextCapture Engine wait job complish Reconstruction&gt;new Reconstruction click submit new production wait for job complish check production 3D view output Model ├── Model.mtl ├── Model.obj ├── Model_0.jpg ├── Model_1.jpg ├── Model_2.jpg...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Camera-parameters-convert/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210816194645.png"
      },{
        "title": "Reading Texure paper",
        "excerpt":"Reconstructing textured meshes from multiple range+rgb maps ISTI-CNR summary Minimizing redundancy and optimizing the color attribute represendtation Eliminate most of the color difference or discontinuity which exist in input images cross-correlation interpolation Work flow visibility calculation get a set of valid cameras/images for the face ray-tracing calculation[耗时] hardware-accelerated OpenGL 每个面一个颜色，用OpenGL直接渲染，选择相机能看到的颜色作为可观测颜色...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Reading-Texture-paper/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210817225945.png"
      },{
        "title": "Texture for 9-9 project",
        "excerpt":"Try difference combination original case 1 srs: original, EPSG:4490 rotation: M_00 to M_22 t: x,y,z in metadata&gt;center xml: original data: 1-1 case 2 srs: original, EPSG:4490 rotation: M_00 to M_22 t: x,y,z in center xml: original data: 1-1 NOTHING output export from ccm srs: 4490 rotation: M_00 to M_22 t:...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-9-9-project/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210818235000.png"
      },{
        "title": "Texture for 9-9 project[2]",
        "excerpt":"Intrinsics matrix $$ \\begin{bmatrix}\\frac{f s_{w}}{w} & 0 & p_{x}\\\\0 & \\frac{f s_{h}}{h} & p_{y}\\\\0 & 0 & 1\\end{bmatrix} $$ $f$: focal $w,h$: 图片像素大小 $s_w,s_h$: 感光元件大小 $p_x,p_y$: 光心位置 Externals matrix $$ R=\\begin{bmatrix}\\cos{\\left(\\psi \\right)} \\cos{\\left(\\theta \\right)} & \\sin{\\left(\\phi \\right)} \\sin{\\left(\\theta \\right)} \\cos{\\left(\\psi \\right)} + \\sin{\\left(\\psi \\right)} \\cos{\\left(\\phi \\right)} & \\sin{\\left(\\phi \\right)} \\sin{\\left(\\psi...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-9-9-project-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210820003537.png"
      },{
        "title": "Texture for 9-9 project[3]",
        "excerpt":"Change Externals matrix 相机中心点 9-9/1-3/ $A_{amap}=(120.394685,36.06414)$ $A_{cams}=(120.389564,36.063963)$ $A_{model}=(79.1888,45.546)$meter 模型原点 O $O_{amap}=(120.394637,36.064383)$ $O_{cams}=o_{amap} + (A_{cams} - A_{amap})$ $$ \\mathbf{T} = \\begin{bmatrix} 111320&&\\\\ &7156&\\\\ &&1 \\end{bmatrix}\\left( \\begin{bmatrix} x\\\\y\\\\z \\end{bmatrix} - \\begin{bmatrix} 120.388816\\\\ 36.064206\\\\ 0 \\end{bmatrix} \\right) $$ 其中 经纬转换 Formula 1 how-to-convert-latitude-or-longitude-to-meters Stackoverflow $$ \\begin{aligned} \\frac{latitude}{degree}&=111320m/\\degree\\\\ \\frac{longitude}{degree}&=40075km\\frac{\\cos(lat)}{360}=40075km\\frac{\\cos(36.064\\frac{\\pi}{180})}{360}\\\\ &=90013.62031373613m/\\degree \\end{aligned} $$ f_lai =...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-9-9-project-3/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img6b7c545c0dfcde72831729be9319e32.png"
      },{
        "title": "Point Cloud Match",
        "excerpt":"script Cloud point match for greeb x 高斯分布得到子集 for red dot 随机抽样得到的子集 other is total tie point Block 3 tie point 尝试多对多ICP def match(pc_gps, pc_model, t): scala = np.array([110959.71900894716, 90118.10182968706, 1]) target_pair = [] def distance(source, target): return np.linalg.norm(scala * (source - t) - target, axis=1) for i in tqdm(range(len(pc_gps)),...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Point-Cloud-Match/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210823123247.png"
      },{
        "title": "ICP 2D and 3D",
        "excerpt":"Point Cloud Registration[点云配准] Coarse Registration 粗配准 Fine Registration 精配准 Iterative Closest Point, ICP ICP OpenCV doc 2D ICP 2D Rotation Matrix $$ M(\\theta) = \\begin{bmatrix} \\cos(\\theta)&-\\sin(\\theta)\\\\ \\sin(\\theta)&\\cos(\\theta)\\\\ \\end{bmatrix} = exp\\bigg(\\begin{bmatrix} 0&-\\theta\\\\ \\theta&0 \\end{bmatrix}\\bigg) $$ Code def icp(a, b, init_pose=(0,0,0), no_iterations = 13): src = np.array([a.T], copy=True).astype(np.float32) dst = np.array([b.T], copy=True).astype(np.float32)...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-2D-and-3D/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825142134.png"
      },{
        "title": "ICP Benchmark",
        "excerpt":"ICP 2D 收敛域检测 数据集 ang = np.linspace(-np.pi/2, np.pi/2, 320) originate_point = np.array([ang, np.sin(ang)]).T th = np.pi/2 rot = np.array([[np.cos(th), -np.sin(th)],[np.sin(th), np.cos(th)]]) # 旋转后的点 rotated_point = cv2.transform(originate_point[None, :], np.append(rot, np.array([[0.2], [0.3]]), axis=1))[0] # 采样 sample_rotated_point = rotated_point[sorted(np.random.choice(b.shape[0], 10, replace=False)), :] 其中 rot为旋转矩阵 $M(\\theta) = \\begin{bmatrix} \\cos(\\theta)&-\\sin(\\theta)\\\\ \\sin(\\theta)&\\cos(\\theta)\\\\ \\end{bmatrix} = exp\\bigg(\\begin{bmatrix} 0&-\\theta\\\\...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-benchmark/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210825222557.png"
      },{
        "title": "Point Cloud Match[2]",
        "excerpt":"类局部的配准算法 受限于点云初始位置 仅适用于小角度错开的点云配准问题 受限于主成分分析、奇异值分解算法 迭代次数较多，后期收敛缓慢 最近邻点的成本较高，KD-tree虽然搜索效率较高，但仍无法满足于解决大规模点云的配准问题 ICP(Iterative Closest Point) 不断迭代原始点云的变换矩阵，直到RMSE收敛域局部最优解 迭代过程 搜索最近点集 构造协方差矩阵 奇异值分解 求解旋转矩阵 OpenCv cv2.estimateAffinePartial2D(src, dst[0, indices.T]), 4自由度 cv2.estimateAffine2D(src, dst[0, indices.T]),6自由度 $$ \\begin{cases} E(R,T)=\\sum_{i=1}^N\\Vert Rp_i+T-p_{closest}\\Vert_2^2\\\\ P_{closest}=\\underset{q_j}{\\argmin}\\Vert p_i-Q\\Vert_2^2 \\end{cases} $$ ICP 变种 LM-ICP Moré J J. The Levenberg-Marquardt algorithm: Implementation and theory[J]. Lecture Notes in Mathematics, 1978, 630: 105-116....","categories": ["3d"],
        "tags": [],
        "url": "/3d/Point-Cloud-Match-2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210826160724.png"
      },{
        "title": "ICP Gradient descent",
        "excerpt":"solver def fun(x): return x**2 - 16 def double_fun(x): return 3*np.exp(x[0]) + x[1]**2 - 16 sample_point = rotated_point[sorted(np.random.choice(rotated_point.shape[0], 20, replace=False)), :] def icp_fun(x): R = icp(originate_point, sample_point, x, 2) rotated_fit_point = cv2.transform(originate_point[None, :], R)[0] return cost(rotated_fit_point, rotated_point) def derivative(f, x): delta = 1E-6 * np.eye(len(x)) de = [] for i...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-Gradient-descent/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210828004409.png"
      },{
        "title": "Matplotlib animation bliting",
        "excerpt":"prerequisite matplotlib==3.2.2, cause this issue Using blitting method to speed up animation rendering Method 1, using method Follow this link Making Animations Quickly with Matplotlib Blitting - alexgude.com def init_fig(fig, ax, artists): \"\"\"Initialize the figure, used to draw the first frame for the animation. \"\"\" ax.set_title(\"Supernova 2011fe Spectrum\", fontsize=22) ax.set_xlabel(\"Wavelength...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Matplotlib-animation-bliting/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210829022917.png"
      },{
        "title": "ICP Back Propagate fix",
        "excerpt":"A Error at ICP iterations Iterative Closest Point (ICP) implementation on python - stack import cv2 import numpy as np import matplotlib.pyplot as plt from sklearn.neighbors import NearestNeighbors def icp(a, b, init_pose=(0,0,0), no_iterations = 13): src = np.array([a.T], copy=True).astype(np.float32) dst = np.array([b.T], copy=True).astype(np.float32) Tr = np.array([[np.cos(init_pose[2]),-np.sin(init_pose[2]),init_pose[0]], [np.sin(init_pose[2]), np.cos(init_pose[2]),init_pose[1]], [0, 0,...","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-Back-Propagate-fix/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210830190751.png"
      },{
        "title": "ICP 3D With Standard Scalar",
        "excerpt":"      9 自由度最小化优化         4x4 矩阵改为     ","categories": ["3d"],
        "tags": [],
        "url": "/3d/ICP-3D-with-standard-scalar/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210831005957.png"
      },{
        "title": "Using vcpkg and cmake with Visual studio 2019",
        "excerpt":"C++ project package manager Comparison Read thoes detail at Reddit vcpkg Repository spark star Conan Repository spark star build2 Repository spark star Install vcpkg Install Windows git clone https://github.com/microsoft/vcpkg cd vcpkg bootstrap-vcpkg.bat install package vcpkg install eigen3 Check support platform vcpkg help triplets Check Installed package vcpkg list Using vcpkg...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Using-vcpkg-and-cmake-with-Visual-studio-2019/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210903234604.png"
      },{
        "title": "Cmake Texture project",
        "excerpt":"vcpkg install set proxy $env:HTTP_PROXY=\"localhost:4780\" $env:HTTPS_PROXY=\"localhost:4780\" Camke generator Warning CMP0074 log Policy CMP0074 is not set: find_package uses &lt;PackageName&gt;_ROOT variables. Run \"cmake --help-policy CMP0074\" for policy details. Use the cmake_policy command to set the policy and suppress this warning. Environment variable Eigen3_ROOT is set to: ... For compatibility, CMake is...","categories": ["tutorial"],
        "tags": [],
        "url": "/tutorial/Cmake-Texture-project/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210903234604.png"
      },{
        "title": "Texture for original model And Cmake on OpenMVS",
        "excerpt":"Texture at original mesh name size comment vertices faces mesh-original 2.1G Original Block Merge     mesh-original-building 2.1G Building only     mesh-original-plant 429M Plant only     mesh-original-reduce-50p 1.0G maya reduce 50%     mesh-original-reduce-50p-50p 529M maya reduce 25%     mesh-original-reduce-50p-50p-50p 265M maya reduce 12.5% 694001 1361715 case1...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-For-Original-Model/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210907221533.png"
      },{
        "title": "Texture for dog project",
        "excerpt":"Original Texture Some sureface mesh too small be ignored. Remeshing Make mesh to Equilateral triangle 3DScan Texture after remeshing Texture after remeshing with invert matrix[0:3, 0:3] = np.linalg.inv(matrix[0:3, 0:3]) 相机不动物体动时，相机朝向需要取逆 Easy 3D Repository spark star Home Page Author Usage ------------------------------------------------------------------ F1: Help F2: Toggle animation (if available) Ctrl + 'o':...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-dog-project/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png"
      },{
        "title": "Texture Paper Reading",
        "excerpt":"Let There Be Color! - Large-Scale Texturing of 3D Reconstructions Paper.pdf In this paper we therefore present the first unified texturing approach that handles large, realistic datasets reconstructed from images with a structure-from-motion plus multi-view stereo pipeline. millions of triangles within less than two hours. Related view selection blend multiple...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-Paper-Reading/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910164754.png"
      },{
        "title": "Possion Image Edit",
        "excerpt":"Possion Image Edit PPT Paper.pdf - Microsoft Research UK Python output = cv2.seamlessClone(src, dst, mask, center, flags) Definitions $g$: 原始图像，左图企鹅 $f$: 插值函数 $f^*$: 目标图像 $\\Omega$: 目标域 $\\partial\\Omega$: 目标域边缘，边界 Basic idea 期望的结果 填补内容要尽可以平滑 填补内容的边界像素值和现有的$S$一致，即要无缝过度 变分方程 $\\underset{f}{\\min}\\iint_\\Omega\\vert\\nabla f\\vert^2$ with $f\\vert_{\\partial\\Omega}=f^*\\vert_{\\partial\\Omega}$ E-L Equation $\\Delta f=0$ over $\\Omega$ with $f\\vert_{\\partial\\Omega}=f^*\\vert_{\\partial\\Omega}$ $\\Delta$: 二阶微分， 散度divergence $f\\vert_{\\partial\\Omega}=f^*\\vert_{\\partial\\Omega}$:...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Possion-Image-Edit/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210910131356.png"
      },{
        "title": "Install Cpp jupyter kernel, Image Guied Filter",
        "excerpt":"Install Cpp kernel jupyter notebook 安装 C/C++ kernel - KEN的文章 - 知乎 conda install xeus-cling -c conda-forge after install jupyter kernelspec list fix issue by cp /opt/anaconda3/envs/gpu/lib/python3.8/_sysconfigdata_x86_64_conda_cos6_linux_gnu.py /opt/anaconda3/envs/gpu/lib/python3.8/_sysconfigdata_x86_64_conda_linux_gnu.py check installation python3 /opt/anaconda3/envs/gpu/share/jupyter/kernels/python3 xcpp11 /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp11 xcpp14 /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp14 xcpp17 /opt/anaconda3/envs/gpu/share/jupyter/kernels/xcpp17 Guided Image Filtering PPT eccv 2010 Paper.pdf - Microsoft Research Image Filtering...","categories": ["tutorial","3d"],
        "tags": [],
        "url": "/tutorial/3d/Install-Cpp-jupyter-kernel/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210908163126.png"
      },{
        "title": "Texture for color lion",
        "excerpt":"Texture for colorful lion Params List and annotation params st comment decimate d decimation factor in range [0..1] to be applied to the input surface before refinement (0 - auto, 1 - disabled) close-holes ch try to close small holes in the input surface (0 - disabled) resolution-level rl how...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-color-lion/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210916224127.png"
      },{
        "title": "Texture for smooth",
        "excerpt":"Run Data set id obj image ot mr csr gsl lsl ec result 1 12w pure-color 0 0 1 false false ⬛ 💩 2 meshlab_lap-smooth_12w pure-color 0 0 1 false false ⬛ 💩 3 meshlab_HC-lap-smooth_12w pure-color 0 0 1 false false ⬛ 💩 4 meshlab_normal-smooth_12w pure-color 0 0 1 false...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-smooth/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210917172233.png"
      },{
        "title": "Texture for smooth 2",
        "excerpt":"More Smooth case id obj image ot mr csr gsl lsl ec result 1 12w pure-color 0 0 1 false false ⬛ 💩 2 12w-5w pure-color 0 0 1 false false ⬛ 💩 3 mapple_gussian-0.1_12w pure-color 0 0 1 false false ⬛ 💩 4 mapple_sm-remesh_12w-5w pure-color 0 0 1 false...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-for-smooth2/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210918235717.png"
      },{
        "title": "Texture Paper Reading Todo",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/Texture-Paper-Reading-TODO/",
        "teaser": null
      },{
        "title": "Texture Paper Reading - [Rethinking Texture Mapping]",
        "excerpt":"Rethinking Texture Mapping - State of The Art Report Paper.pdf 1.1 Scope Perfecting the Traditional Texture Mapping RNLL10 - Invisible Seams Paper.pdf LFJG17 - Seam Erasure Seamless: seam erasure and seam-aware decoupling of shape from mesh resolution. Paper.pdf Tar12 - Seamless Toroidal/Cylindrical Textures Cylindrical and toroidal parameterizations without vertex seams...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Texture-Paper-Reading/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210921190258.png"
      },{
        "title": "Clion Debug",
        "excerpt":"Problem List windows [xps] build ... [ 75%] Linking CXX executable ..\\..\\bin\\x86\\InterfaceVisualSFM.exe LINK: command \"... C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.4\\lib\\Win32\\cuda.lib ...\" failed (exit code 1120) with the following output: MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuGetErrorString MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuGetErrorName MVS.lib(Mesh.cpp.obj) : error LNK2001: 无法解析的外部符号 cuParamSetSize MVS.lib(Mesh.cpp.obj) : error...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Clion-Debug/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png"
      },{
        "title": "Build And Run Texturemesh At Ucas Machine",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/Build-And-Run-TextureMesh-at-UCAS-machine/",
        "teaser": null
      },{
        "title": "Texture code reading",
        "excerpt":"TextureMesh FaceViewSelection ListVertexFaces✔️ // extract array of triangles incident to each vertex EmptyExtra✔️ ListIncidenteFaces✔️ ListBoundaryVertices✔️, // 边界点检查，在面中，只使用了1次的点是边界点，另外，代码中假设每个点通常不会超过12个面使用 // create texture patches ListCameraFaces // list all views for each face //create vertices octree of vertices✔️ //extract array of faces viewed by each image✔️ //compute gradient magnitude✔️ //select faces inside view frustum✔️...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Code-Reading/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png"
      },{
        "title": "Minimum bounding box [MBB]",
        "excerpt":"MBB 最小包围盒 [Minimum bounding box] AABB 轴对齐包围盒 [Axis-aligned minimum bounding box] when the model is rotated they cannot be simply rotated with it, but need to be recomputed. $$ \\begin{aligned} P_{min} &= [x_{min},y_{min},z_{min}]\\\\ P_{max} &= [x_{max},y_{max},z_{max}] \\end{aligned} $$ OBB 有向围盒 [Oriented minimum bounding box] 其中 $C$: Center Point $\\mathbf{u, v,...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Minimum-bounding-box-MBB/",
        "teaser": "https://upload.wikimedia.org/wikipedia/commons/7/7e/BoundingBox.jpg"
      },{
        "title": "Operator For Image",
        "excerpt":"Sobel Operator - 1968 [索伯算子, 索贝尔算子] Paper - An Isotropic 3x3 Image Gradient Operator Paper.pdf Formula $$ \\begin{aligned} G_x &= \\begin{bmatrix} +1&0&-1\\\\+2&0&-2\\\\+1&0&-1\\\\ \\end{bmatrix} * IMG\\\\ G_y &= \\begin{bmatrix} +1&+2&+1\\\\0&0&0\\\\-1&-2&-1\\\\ \\end{bmatrix} * IMG\\\\ G &= \\sqrt{G_x^2 + G_y^2}\\\\ \\Theta &= \\arctan(\\frac{G_y}{G_x})=atan2(G_x, G_y) \\end{aligned} $$ OpenMvs Related Digital step edges from zero...","categories": ["3d"],
        "tags": [],
        "url": "/3d/Operator-For-Image/",
        "teaser": "https://raw.githubusercontent.com/FavorMylikes/hackmd-note/img/img20210923165954.png"
      }]
