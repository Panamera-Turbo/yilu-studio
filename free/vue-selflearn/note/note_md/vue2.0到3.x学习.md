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

#### 实例选项-el
 
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

#### 实例选项-data

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

#### 实例选项-methods

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

#### 插值表达式（也叫做模板语法）

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
#### 指令v-bind绑定属性
**使用：**
- 第一种：`v-bind:标签="方法名"`
- 第二种：`：标签=”方法名`
例如：
``` 
<a v-bind:href="xxx">some text</a>
```

#### 指令v-on绑定事件

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
##### lesson-6事件修饰符
常用修饰符：
- .stop:阻止单击事件冒泡
- .prevent:提交事件不再重载页面
- .capture: 添加事件监听器的时候使用事件捕获形式
- .self:只当事件在该元素本身（例如不是子元素）时出发回调·················
- .once:只能触发一次

修饰符的使用：
- 修饰符可以串联
- 可以只有修饰符
#### lesson-5指令v-html与v-text
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
#### 指令v-for循环(数组)

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

#### 指令v-for循环(对象)

1. 用法一:遍历对象
    ``` 
    v-for="item in items"
    // items 为对象  item为当前遍历属性对象的值
    ```
2. 用法二:遍历对象属性的值
    ``` 
    v-for="(item, key, index) in  items"   
    //item为当前遍历属性对象的值  key为当前属性名 index为当前索引的值
    ```
