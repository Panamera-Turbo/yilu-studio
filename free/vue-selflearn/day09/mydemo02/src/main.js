// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Users'
import HelloWorld from './components/HelloWorld'
import VUeResource from 'vue-resources'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//注册路由
const router = new VueRouter({
  routes:[
    {path:"/", component:Home},
    {path:"/helloworld", component:HelloWorld}
  ],

  mode: "history",
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
