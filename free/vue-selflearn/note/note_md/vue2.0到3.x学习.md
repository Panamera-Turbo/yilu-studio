# Vue的学习笔记

参考学习网站：<br>
[vue.js](https://cn.vuejs.org/v2/guide/index.html)
[菜鸟教程](https://www.runoob.com/vue2/vue-tutorial.html)
## lesson-1初认识Vue.js和vue的引入
引入方式:
**1. 引入文件方式**

-   直接下载源码然后通过路径引入
    -   开发版本：https://vuejs.org/js/vue.js
    -   生产版本：https://vuejs.org/js/vue.min.js
-   在线cdn引入的方式

``` {.js}
<script  src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
```

-   采用 npm 安装的方式

``` {.js}
// 现状: 都会采用npm的方式来进行正式项目开发
npm install vue 
```

**`注意:`** `Vue.js 不支持 IE8 及其以下版本`

**2. 脚手架的方式**

​ ....适合生产环境


## lesson-2实例化vue对象
在html中使用\<script src="xxx.js"> \</script>标签开引入js文件，并在js文件实例化vue对象

### 实例选项-el
 
-   当前Vue实例所管理的html视图

-   值通常是id选择器(或者是一个dom对象)

-   **注意！** 不要让el所管理的视图是html或者body!!!!

``` {.js}
// js
new Vue({
    // el: '#app' ,  id选择器
    // el: '.app',   class选择器
    el: document.getElementById("#app") // dom对象
})
```

### 实例选项-data

-   Vue 实例的data(数据对象)，是响应式数据(数据驱动视图)

1.  data中的值{数据名字:数据的初始值}
2.  data中的数据 msg/count 可以在视图中通过{{msg/count}}访问数据
3.  data中的数据也可以通过实例访问 vm.msg或者vm.\$data.msg
4.  data中的数据特点:响应式的数据-\>data中的数据一旦发生变化-\>视图中使用该数据的位置就会发生变化

``` {.js}
let vm = new Vue({
    el: "#app",
    data: {
       msg: '铁蛋儿',
       count: 100
    }
})
vm.msg = 200
console.log(vm)
console.log(vm.msg)
console.log(vm.$data.msg)
```

### 实例选项-methods

-   methods其值为一个对象
-   可以直接通过 VM 实例访问这些方法，或者在**指令表达式中使用**。
-   方法中的 `this` 自动绑定为 Vue 实例。
-   methods中所有的方法 同样也被代理到了 Vue实例对象上,都可通过this访问
-   注意，**不应该使用箭头函数来定义 method
    函数**。理由是箭头函数绑定了父级作用域的上下文，所以 `this`
    将不会按照期望指向 Vue 实例

``` {.js}
let vm =new Vue({
 el:"#app",
 data:{
     name1:"Hello world1",
     name2:"Hello world2"
 },
 methods:{
     // 常规函数写法
     fn1:function(){
         console.log(this.name1)
         this.fn2()
     },
     // es6 函数简写法
     fn2() {
         console.log(this.name2)
     }
 }
})
```

### 插值表达式（模板语法）

**作用:** 会将绑定的数据实时的显示出来

**形式:** 通过 **`{{ 插值表达式 }}`** 包裹的形式

**用法:** {{js表达式、三元运算符、方法调用等}}

-   {{ a }}
-   {{a == 10 }}
-   {{a \> 10}}
-   {{a + b + c}}
-   {{a \> 0 ? "成功" : "失败"}}

``` {.js}
// 错误写法
{{ let a = 1 }}     <!-- 这是语句，不是表达式 -->

{{ if (ok) { return message } }}    <!-- 流控制也不会生效，请使用三元表达式 -->
```

``` {.js}
// 正确写法
<!-- js表达式 -->
<p>{{ 1 + 2 + 3 }}</p>
<p>{{ 1 > 2 }}</p>

<p>{{ msg + ':消息' }}</p>      <!-- msg为data中的数据 -->

<p>{{ count === 1 }}</p>        <!-- count 为data中的数据 -->

<p>{{ count === 1 ? "成立" : "不成立" }}</p>    <!-- count 为data中的数据 -->
```

``` {.js}
<!-- 方法调用 -->
<!-- fn为methods中的方法 -->
<p>{{ fn() }}</p>
```

## lesson-3事件绑定
### 指令v-bind绑定属性
**使用：**
- 第一种：`v-bind:标签="方法名"`
- 第二种：`：标签=”方法名`
例如：
``` 
<a v-bind:href="xxx">some text</a>
```

### 指令v-on绑定事件

**使用:**

-   第一种:`v-on:事件名="方法名"`
-   第二种:`@事件名="方法名"的方式`

``` {.js}
// v-on:xx事件名='当触发xx事件时执行的语句' 
<button v-on:click="fn">按钮</button>
// v-on的简写方法 
<button @click="fn">按钮</button>
```

v-on默认一定绑定了方法，所以调用方法可以不写括号（）
**箭头函数：**
[箭头函数（from CSDN）](https://blog.csdn.net/qq_32614411/article/details/80897256)

**事件对象:**(扩展)
-   第一种:方法名中采用$event的方式传形参
-   第二种:**直接写事件名** 默认第一个参数为event事件参数

常用事件：lesson-5,lesson-7
1. 鼠标事件：
   - click：鼠标点击
   - dbclick：鼠标双击
   - mousemove：鼠标移动
2. 键盘事件：
   - keyup：键盘按键被松开
   - keydown：键盘按键被按下
   - 例如keyup.alt.enter等表示输入按键被松开后还要按alt和enter才会触发绑定的方法
### lesson-6事件修饰符
常用修饰符：
- .stop:阻止单击事件冒泡
- .prevent:提交事件不再重载页面
- .capture: 添加事件监听器的时候使用事件捕获形式
- .self:只当事件在该元素本身（例如不是子元素）时出发回调·················
- .once:只能触发一次

修饰符的使用：
- 修饰符可以串联
- 可以只有修饰符
### lesson-5 v-html与v-text
`v-text`将内容解析为字符串显示。
`v-html`将内容解析为html格式后显示
例如
```
<div id="app">
    <p v-cloak>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="msg"></p>        
</div>
<script type="text/javascript">
    var vm = new Vue({
        el: "#app",
        data: {
            msg : "<h1>这是一个h1元素内容</h1>"
        }});
</script>
```
结果为：
> \<h1>这是一个h1元素内容\</h1>
> <h1>这是一个h1元素内容</h1>

**注意，v-html指令可能导致xss攻击。因此，只能对可信任内容使用html插值，绝对不能对用户提供的内容使用插值**
<br>

## lesson-8双向数据绑定
1. 方法1：使用$refs
2. 方法2：使用v-model来实现：
   **作用:** 表单元素的绑定

    **特点:** **双向数据绑定**

    -   数据发生变化可以更新到界面
    -   通过界面可以更改数据
    -   `v-model` 绑定表单元素，会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值
    -   表单元素会将 Vue
        实例的data中的数据作为数据来源，所以应该在 `data`选项中声明初始值。

    ``` {.html}
    // 表单中设置value值没用 v-model会忽略
    <input type="text" v-model="msg"  value="zhang">
    <p>{{msg}}</p>
    ```
    ``` {.js}
    // 在data中设置msg
    data: {
        msg: 'zhangsan'
    }
    ``` 

## lesson-9计算属性

**场景:**

-   当表达式过于复杂的情况下可以采用计算属性
-   对于任何复杂逻辑都可以采用计算属性

``` {.js}
data: {
    message: 'hello'
},
computed: {
    reverseMessage: function () {
        // this指向 vm 实例
        return this.message.split('').reverse().join('')
    }
}
// computed里的函数直接用 不加() 但是必须得return
<p>{{ message }}</p>
<p>{{ reversedMessage }}</p>
```

**计算属性 和 methods方法的区别:**

1.  计算属性不需要调用形式的写法, 而methods方法必须采用 方法()
    调用的形式
2.  计算属性依赖data中的数据变化,
    如果data并没有发生变化,则计算属性则会取缓存的结果,
3.  methods不论data变化与否，只要调用，都会重新计算

**注意:** 当数据对象中 message发生变化时 计算属性也会重新计算计算=\>
改变页面视图

> 在耗时较大、搜索较大的方法建议使用计算属性，其他可以继续使用methods
> 对于任何复杂逻辑，你都应当使用计算属性。
> 如果不希望有缓存，建议使用methods

## lesson-10动态绑定css事件
传给`v-bind: class`一个对象来动态切换css


## lesson-11:v-if和v-show
**使用:** 
1. v-if 和 v-show 后面跟着表达式的值是布尔值，布尔值来决定该元素显示隐藏
2. v-if常常和v-else-if一起使用

**注意** :<br> v-if 是直接决定元素的添加或者删除,<br>而v-show只是根据样式来决定显示隐藏

- `v-if`  有更高的切换开销
- `v-show` 有更高的初始渲染开销。

> 如果需要非常频繁地切换，则使用 `v-show` 较好.
> 如果在运行时条件很少改变，则使用 `v-if` 较好.


## lesson-12：v-for
### 指令v-for循环(数组)

- `v-for` 指令基于一个数组来渲染一个列表
- `v-for` 语法 ：`item in items` 或者 `item of items` 
- 其中 items 是源数据数组 而 item 则是被迭代的数组元素的别名。

1. 用法一：
    ``` {.js}
    <ul>
        <li v-for="item in items">
            {{ item.name }}
        </li>
    </ul>

    // data中的数组
    data: {
        items: [
        { name: '大娃' },
        { name: '二娃' }
        ]
    }
    ```
2. 用法二:<br> v-for 还支持一个可选的第二个参数，即当前项的索引
    ``` {.js}
    <ul>
        <li v-for="(item, index) in items">
            {{ index }} {{ item.name }}
        </li>
    </ul>
    ```

**注意**： v-for写的位置 应该是重复的标签上 不是其父级元素上 需要注意

### 指令v-for循环(对象)

1. 用法一: 遍历对象
    ``` 
    v-for="item in items"
    ```
    `items`为对象, `item`为当前遍历属性对象的值

2. 用法二: 遍历对象属性的值
    ``` 
    v-for="(item, key, index) in  items"
     ```   
    `item`为当前遍历属性对象的值`key`为当前属性名, `index`为当前索引的值
   
### 注意
在vue 2.2.0以上的版本中，组件使用v-for时key时必须的


## lesson-15组件初步
组件是可复用的 Vue 实例，且带有一个名字：在下面这个例子中是\<button-counter>。
```
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
我们可以在一个通过`new Vue`创建的Vue根实例中，把这个组件作为自定义元素来使用：
```{.html}
// html
<div id="components-demo">
  <button-counter></button-counter>
</div>
```
```{.js}
// js
new Vue({ el: '#components-demo' })
```
组件是可复用的 Vue 实例，所以它们与 `new Vue` 接收相同的选项，例如 `data、computed、watch、methods` 以及`生命周期钩子`等。仅有的例外是像 `el` 这样根实例特有的选项

- 组件可以进行任意次数的复用
- data必须是一个函数

### 组件的注册
- 组件必须先注册一边Vue能够识别。注册分为全局注册和局部注册

1. 全局注册
    使用`Vue.component`全局注册。<br>全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
2. 局部注册
    <!-- TODO -->

## 脚手架CLI
- 通过webpack搭建的开发环境
- 使用ES6语法
- 打包和压缩js为一个文件
- 项目文件在环境中编译而非浏览器
- 页面自动刷新

### 搭建脚手架
看我写的[CSDN博客]()

### 利用脚手架创建项目
完成安装后进行下面的行为
1. 进入想要创建项目的路径
2. `vue init webpack vue-playlist`<br>(vue-playlist是项目名称)
3. 根据提示依次填写项目名（默认为vue-playlist）、描述、作者，选择要安装的包和依赖等（选择方式为上下箭头选择或Y/n）。通常，较为简单的项目我们可以不安装vue-router、ESlint、Karma+Mocha、e2e
4. 进入vue-playlist（项目名称对应的文件夹）
5. `npm install`安装依赖模块
6. `npm run dev`:<br>serve with hot reload at localhost:8080
7. `npm run build`:<br>build for production with minification
8. `npm run build --report`:<br>build for production and view the bundle analyzer report


### 搭建后的内容介绍
理解顺序：index.html -> main.js -> App.vue

- 默认文件夹名称和项目名称一样
- build文件夹构建客户端和服务端，可以构建端口号等
- config是配置文件
- src
- static：静态文件文件夹
- index.html是入口文件
- package.json防止依赖文件、依赖包等
- README里可以查阅一些命令等

<br>

./src/App.vue是一个组件。内容介绍：
1. html结构:template标签
    ```
    <template>
    <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld/>
    </div>
    </template>
    ```
    - 有且仅有一个根标签、
  

2. 行为（处理逻辑）：script标签
    ```
    <script>
    import HelloWorld from './components/HelloWorld'

    export default {
    name: 'App',
    components: {
        HelloWorld
    }}
    </script>
    ```

3. 样式（解决样式）：style标签
    ```
    <style>
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
    </style>
    ```


## lesson-18组件嵌套
- App.vue是根组件。位于components文件夹里的是子组件。通常命名可以大写首字母。例如HelloWorld.vue
- 组件使用前必须要先注册。注册分为全局注册和局部注册
  1. 全局注册：<br>`Vue.component("ComponentTagName", ComponentName)`<br>在main.js中使用上述方法进行注册。使用`import ComponentName from '路径'`来引入
  
  2. 局部注册：<br>在局部组件（例如在App.vue中）使用`Vue.component("ComponentTagName", ComponentName)`和`import ComponentName from '路径'`，同时在该.vue文件中`<script>`标签里的`export default`中添加`components:{"ComponentTagName" : ComponentName}`("ComponentTagName" :可以省略)
  
  3. 实际中很少使用全局注册，主要是局部注册


## lesson-19组件中css的作用域
- 作用域：使用< style scoped >标签来限制作用域，确保只会作用在对应的组件范围上
  - 原理：<br>添加scoped后，标签和css之间会产生对应的关系。（可以理解为标签、组件各自打上了对应的编号）

## lesson-21 属性传值
假设A.vue希望能够使用B.vue中的属性X的值X_data和属性Y的值Y_data，那么A中可以进行如下操作：
1. 方法1:这时官方提供，也是最好的方式
    ```
    //在script标签的default中添加：
    props:{
        X:{
            type:X_type,        //X的类型，例如Array，String等
            required:true,
        },
        Y:{
            type:Y_Type,
            required:true,
        }
    }
    ```
2. 方法2.当只有一个属性时，也可以用下面这个不太严谨的办法
    ```
    //在script标签的default中添加：
    props:["X"],

    //在调用A的标签的地方
    <A v-bind:X_in_A = "X">
    ``` 


## lesson-22传值和传引用
类比C传值和传地址

## lesson-23事件传值(子传父)
```
//child
this.$emit('add',good)

//parent
<Helloworld @add="add($event)"/>
```

**$emit** :
- `vm.$emit( event, arg )`
- 绑定一个自定义事件event，当这个这个语句被执行到的时候，就会将参数arg传递给父组件，父组件通过v-on:event监听并接收参数


**使用** ：
- 子组件使用props
- 子组件的methods中，方法A中使用`$emit`中注册
- 父组件使用子组件标签的地方使用v-on（或@）来绑定刚才注册的事件，事件对应的方法使用`($event)`接受参数args


## lesson-24生命周期钩子
常用的生命周期钩子：
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

生命周期图示：
![生命周期](https://cn.vuejs.org/images/lifecycle.png)
一些说明：
- 在“has ‘el’ option”，如果既没有el也没有在该实例后使用`.$mount(elName)`，开始检查template
- 在“has ‘template’ option”，如果template里既没有具体的组件名也没有某个标签等，则生命周期结束
- mounted 在页面加载完成的时候就会被渲染出来
- 更改出现在updated

例如：
```
created:function(){
    alert("组件实例化完毕，但页面仍未显示")
}
```

## lesson-25 路由
1. 在项目文件夹中下载路由模块vue-router：`npm install vue-router --save-dev`（或者创建项目时在脚手架搭建时就选择下载vue-router）
2. 在main.js中引入路由模块：`import VueRouter from 'vue-router`
3. 在main.js中注明将要使用路由：`Vue.use(VueRouter)
4. 配置路由：
   ```
    const router = new VueRouter({
        routes:[
            { path: "/", component:xxx(组件名)}
            { path: "/helloworld", component:xxx(组件名)}

        ]
    })
   ``` 
   - 利用{}传递对象
   - routes位固定成员。其中，path代表路由的地址，component在路由成功后调用相应组件。
   - 允许有多个path和对应的component。
   - component调用的组件都要先在main.js中引入
5. main.js实例化的Vue对象中使用router
   ```
   new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
   })
   ```
6. 做到这里以后，使用npm run dev在localhost:8080/#/ 运行。如果地址栏输入localhost:8080/#/helloworld，将跳转到helloworld组件对用的页面

7. 为了实现自己定义路由，点击后跳转，进入main.js，在const router中添加`mode: "history"`属性(注意mode和routes没有包含关系)
   ```
    const router = new VueRouter({
        routes:[
            {path:"/", component:Home},
            {path:"/helloworld", component:HelloWorld}
        ],

        mode: "history",
    })
    ```
    自定义跳转若使用`a标签`，其中`href`的值为对应的路由名。但a标签每次点击都会重新加载，效率低下，因此不用；<br>使用标签`<router-link to="路由地址">显示内容</router-link>`

## lesson-25 请求  ---这里有问题，无法实现。可能是教程没有更新
*这里只介绍vue内置进行http请求的部分`vue-resource`*

1. npm install vue-resource --save-dev
2. 在main.js中引入：`import VueResource from 'vue-resource'`
3. 使用VueResource：`Vue.use(VueResource)`
4. 在希望调用的组件中请求http

![Vue Resource 公开方法](https://images2017.cnblogs.com/blog/1186521/201712/1186521-20171211115059165-807946220.png)

![vue.http.headers](https://images2017.cnblogs.com/blog/1186521/201712/1186521-20171211115153602-1548396736.png)