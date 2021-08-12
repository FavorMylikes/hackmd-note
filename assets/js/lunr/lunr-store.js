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
      }]
