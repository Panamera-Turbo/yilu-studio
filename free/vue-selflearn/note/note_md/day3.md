-   [Vue源码](#vue源码)
    -   [Vue源码解读：](#vue源码解读)
    -   [Vue的响应式原理](#vue的响应式原理)

Vue源码
-------

#### Vue源码解读：

1.  数据代理
2.  模版解析
3.  事件指令
4.  普通指令
5.  双向数据绑定

**源码文件：**

​ **observer.js**

​
实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者。

​ **compile.js**

​
实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
。

​ **watcher.js**

​
实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从
而更新视图 。

​ **mvvm.js**

​ mvvm入口函数，整合以上三者。

#### Vue的响应式原理

-   Object.defineProperty（object,propertyname,descriptor）
    （**Vue2.0**）

    **作用:**
    直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，
    并返回对象。

    -   object （操作的对象本身）

    -   propertyname (属性名)

    -   descriptor （属性描述）

    1.  简单点就是 设置属性的值value
    2.  是否可操作属性值 writable
    3.  是否可修改配置configurable 如果值为false
        descriptor内的属性都不可操作
    4.  是否可枚举enumerable
    5.  descriptor内配置可有可无，value默认undefind，其余默认为false

-   Proxy（**Vue3.0**）

**Object.defineProperty和Proxy的区别:**

1.  Object.defineProperty
    无法监控到数组方法，导致通过数组添加元素，不能实时响应；
2.  Object.defineProperty
    只能劫持对象的属性，如果属性值是对象，还需要深度遍历。
3.  Proxy可以劫持整个对象，并返回一个新的对象。
4.  Proxy不仅可以代理对象，还可以代理数组、代理动态增加的属性。
5.  Proxy 的兼容性不如Object.defineProperty，但是可以使用 polyfill
    来处理兼容性

\#\#面试题

1.  Vue中循环为什么要加key，有什么好处

2.  Vue中如何监听数组变化

3.  Vue中为什么需要虚拟DOM

4.  Vue中的diff原理

5.  Vue的生命周期方法有哪些？这些钩子是如何实现的

6.  Vue-Router两种模式的区别

7.  keep-alive平时在哪使用？原理是什么

8.  Vue中使用哪些设计模式

9.  Vue3和Vue2的区别

10. Vue-cli实现原理
