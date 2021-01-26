<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <users></users>
  </div>
</template>

<script>
import Users from './components/Users.vue'
// import HelloWorld from './components/HelloWorld'

export default {
  components: { 
    "users" : Users 
  },
  name: 'App',
  data(){
    return{
      title:"This is my first vue-cli project"
    }
  }
  // components: {
  //   HelloWorld
  // }
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
