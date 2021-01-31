<template>
    <header v-on:click="changeTitle"> 
        <h1>{{ title }} , {{ title }}</h1>
    </header>
</template>

<script>
export default {
    name:'header',
    props:{
        title:{
            type:String,
            required: true,
        }
    },
    data(){
        return {
            title:"my vue.js"
        }
    },
    methods:{
        changeTitle:function(){
            this.$emit("titleChaged", "子向父传值")
        }
    }
}
</script>

<style scoped>
header{
    background: lightblue;
    padding: 10px;
}

h1{
    color: #222;
    text-align: center;
}
</style>