## 初认识Vue.js和vue的引入
### 引入方式:
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


## 实例化vue对象
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

#### 插值表达式（模板语法）

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

## 事件绑定
#### 指令v-bind绑定属性
**使用：**`v-bind:标签="方法名"`

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
**箭头函数：**
[箭头函数 - CSDN](https://blog.csdn.net/qq_32614411/article/details/80897256)
**事件对象:**(扩展)

-   第一种:方法名中采用$event的方式传形参
-   第二种:**直接写事件名** 默认第一个参数为event事件参数

#### 指令v-html与v-text
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
            el : "#app",
            data : {
                msg : "<h1>这是一个h1元素内容</h1>"
            }
        });
    </script>
```
结果为：
—————————————————————————
\<h1>这是一个h1元素内容\<h1>
<h1>这是一个h1元素内容</h1>
—————————————————————————
<br>
<br>
<br>

## 事件
