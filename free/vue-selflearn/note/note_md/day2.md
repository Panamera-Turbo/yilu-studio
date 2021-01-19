-   [抖音项目](#抖音项目)
    -   [BAT一线大厂项目开发流程](#bat一线大厂项目开发流程)
    -   [Vue3.0 CompositionAPI](#vue3.0-compositionapi)
    -   [抖音功能实现](#抖音功能实现)
    -   [项目部署上线](#项目部署上线)

抖音项目
========

BAT一线大厂项目开发流程
-----------------------

1.  PM （pc Axure app 墨刀 ）交互原型图

2.  UE(用户体验 功能 )+UI(界面 图标) 设计图

3.  需求评审(FE、Server、UE、UI、PM、QA) 估工时

4.  FE开发

5.  前后端联调(后端:php、java-jsp、.net-asp、python、ruby、c、node-jade-ejs)

6.  ShowCase(提测的前一步所有人关小黑屋侃大山)

7.  测试(QA)

-   web项目 BS是Browser/Server(浏览器/服务器)架构

-   app项目 CS是Client/Server(客户端/服务器)架构

-   浏览器的兼容则是一般是选择不同的浏览器内核进行测试（IE、chrome、Firefox）。

    -   IE、火狐、Chrome的内核分别是Trident、Gecko、Webkit

-   app的测试则必须依赖iphone或者是pad，不仅要看分辨率，屏幕尺寸，还要看设备系统。

-   系统主要分为Android(java)和iOS(oc)，

    -   国内的Android的定制系统太多，比较容易出现问题。
        -   一般app的测试三种方法，云测试，请团队测试，真机测试。

8.  修bug(禅道项目管理软件)

9.  上线(运维)

​ 1.各种云

​ 系统linux windows(敢选这个的都是人傻钱多)

​ linux的界面化centenOs(新手)、Ubuntu 、红旗(国产)

​ 2. 自己搭服务器

​ eg:没有固定Ip 可以用nginx反向代理

10. 回归

​ SVN 集中式的

​ Git 分布式的

Vue3.0 CompositionAPI
---------------------

1.  Vue3.0的声明式渲染
2.  Vue3.0的组件
3.  setup函数

抖音功能实现
------------

1.  Swiper插件实现滑动
2.  点击实现视频播放
3.  双击点赞

项目部署上线
------------

-   码云部署上线
