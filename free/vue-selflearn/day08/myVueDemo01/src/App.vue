<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <app-header v-bind:title="title" v-on:titleChaged="updateTitle($event)"></app-header>
    <users></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/header'
import Footer from './components/footer'
import Users from './components/Users'

export default {
  name: 'App',
  
  data(){
    return {
      title:"This is my first vue doemo!"
    }
  },

  methods:{
    updateTitle(title){
      this.title = title;
    }
  },
  components: {
    HelloWorld,
    "app-header" : Header,
    "app-footer" : Footer,
    "users" : Users,
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
