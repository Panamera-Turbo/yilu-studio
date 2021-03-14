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
    },
    
    beforeCreated:function(){
        alert("组件实例化执行之前的函数");
    },
    created:function(){
        alert("组件实例化完毕，但页面仍未显示")
    },
    beforeMount:function(){
        alert("组件挂载前，页面仍未展示，但虚拟DOM已经配置")
    },
    mounted:function(){
        alert("组件挂载后，此方法执行后，页面显示")
    },
    beforeUpdate:function(){
        alert("组件更新前，页面仍未更新，但虚拟DOM已经配置")

    },
    updated:function(){
        alert("组件更新后，此方法执行后，页面显示更新后的内容")
    },
    beforeDestroy:function(){
        alert("组件销毁前")
    },
    destroyed(){
        alert("组件销毁了完成")
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