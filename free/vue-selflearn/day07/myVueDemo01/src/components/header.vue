<template>
    <header>
        <h1>{{ title}}</h1>
    </header>
</template>

<script>
export default {
    name:'header',
    data(){
        return {
            title:"my vue.js"
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