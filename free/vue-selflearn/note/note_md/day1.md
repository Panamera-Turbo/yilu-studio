- [Vue基础](#vue基础)
    - [实例选项-el](#实例选项-el)
    - [实例选项-data](#实例选项-data)
    - [实例选项-methods](#实例选项-methods)
    - [插值表达式](#插值表达式)
    - [指令v-if 和 v-show](#指令v-if-和-v-show)
    - [指令v-on绑定事件](#指令v-on绑定事件)
    - [指令v-for循环(数组)](#指令v-for循环数组)
    - [指令v-for循环(对象)](#指令v-for循环对象)
    - [指令-v-model](#指令-v-model)
    - [计算属性](#计算属性)
    - [生命周期](#生命周期)
- [Vue案例](#vue案例)
    - [表格案例-添加、删除](#表格案例-添加删除)

Vue基础
-------

**文档:**

-   [Vue官方文档](https://cn.vuejs.org/)
-   [Vue开源项目汇总](https://github.com/opendigg/awesome-github-vue)
-   [Vue.js中文社区](https://www.vue-js.com/)

**引入方式:**

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

#### 插值表达式

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
<!-- 这是语句，不是表达式 -->
{{ let a = 1 }}
<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

``` {.js}
// 正确写法
<!-- js表达式 -->
<p>{{ 1 + 2 + 3 }}</p>
<p>{{ 1 > 2 }}</p>
<!-- msg为data中的数据 -->
<p>{{ msg + ':消息' }}</p> 
<!-- count 为data中的数据 -->
<p>{{ count === 1 }}</p>
<!-- count 为data中的数据 -->
<p>{{ count === 1 ? "成立" : "不成立" }}</p>
```

``` {.js}
<!-- 方法调用 -->
<!-- fn为methods中的方法 -->
<p>{{ fn() }}</p>
```

#### 指令v-if 和 v-show

**使用:** v-if 和 v-show 后面跟着表达式的值是布尔值
，布尔值来决定该元素显示隐藏

**注意** : v-if 是直接决定元素 的 添加 或者删除 而 v-show
只是根据样式来决定 显示隐藏

-   `v-if`  有更高的切换开销
-   `v-show` 有更高的初始渲染开销。

> 如果需要非常频繁地切换，则使用 `v-show` 较好.
>
> 如果在运行时条件很少改变，则使用 `v-if` 较好.

#### 指令v-on绑定事件

**使用:**

-   第一种:v-on:事件名="方法名"\
-   第二种:@事件名="方法名"的方式

``` {.js}
// v-on:xx事件名='当触发xx事件时执行的语句' 
<button v-on:click="fn">按钮</button>
// v-on的简写方法 
<button @click="fn">按钮</button>
```
**箭头函数：**
[箭头函数 - CSDN](https://blog.csdn.net/qq_32614411/article/details/80897256)
**事件对象:**(扩展)

-   第一种:方法名中采用\$event的方式传形参
-   第二种:**直接写事件名** 默认第一个参数为event事件参数

#### 指令v-for循环(数组)

-   `v-for` 指令基于一个数组来渲染一个列表
-   `v-for` 语法 `item in items` 或者 `item of items` 
-   其中 items 是源数据数组 而 item 则是被迭代的数组元素的别名。

``` {.js}
 // 第一种用法：
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

``` {.js}
// 第二种用法: v-for 还支持一个可选的第二个参数，即当前项的索引
<ul>
  <li v-for="(item, index) in items">
     {{ index }} {{ item.name }}
  </li>
</ul>
```

**`注意`**： v-for写的位置 应该是重复的标签上 不是其父级元素上 需要注意

#### 指令v-for循环(对象)

第一种用法:

``` {.js}
// items 为对象  item为当前遍历属性对象的值
v-for="item in items"
```

第二种用法:

``` {.js}
//item为当前遍历属性对象的值  key为当前属性名 index为当前索引的值
v-for="(item, key, index) in  items"   
```

#### 指令-v-model

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

#### 计算属性

**场景:**

-   当表达式过于复杂的情况下 可以采用计算属性
    对于任何复杂逻辑都可以采用计算属性

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
3.  methods不论data变化与否 只要调用 都会重新计算

**`注意:`**当数据对象中 message发生变化时 计算属性也会重新计算计算=\>
改变页面视图

#### 生命周期

> Vue
> 实例从开始创建、初始化数据、编译模板、挂载Dom和渲染、更新和渲染、卸载等一系列过程，这是
> Vue 的生命周期

Vue的生命周期里边有八个生命周期钩子函数分别是:

-   beforeCreat() 创建前

-   created（）创建

-   beforeMount()挂载前

-   mounted（）挂载

-   beforeupdate（）更改前

-   updated（）更改

-   beforeDestroy()销毁前

-   destroyed（）销毁

`<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gknncqwp6kj30u023z7bm.jpg" style="zoom:25%;" />`{=html}

**mounted:**

​ 这个生命周期 是我用的最多的
这个时候的虚拟dom已经被渲染到了真实的dom上边

​ 这个生命周期里边我们可以做的事情很多 比如数据请求或者赋值操作属性等等

Vue案例
-------

#### 表格案例-添加、删除

1.  使用v-for循环渲染列表
2.  完成表格案例的添加功能
3.  完成表格案例的删除功能
