<template>
    <div class="users">
        <h1>hello, users</h1>
        <ul>
            <li v-for = "user in users" :key="user.name" 
                v-on:click="user.isShow = !user.isShow">
                <h3>{{user.name}}</h3>
                <h5 v-show = "user.isShow"> {{user.positon}} </h5>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'users',
    data(){
        return{
            users: [
                {name:'Jack', positon:"HR", isShow: true},
                {name:'Tom', positon:"dead", isShow: false},
                {name:'Jack', positon:"HR", isShow: true},
                {name:'Tom', positon:"dead", isShow: false},
                {name:'Jack', positon:"HR", isShow: true},
                {name:'Tom', positon:"dead", isShow: false},
                {name:'Jack', positon:"HR", isShow: true},
                {name:'Tom', positon:"dead", isShow: false},
                {name:'Jack', positon:"HR", isShow: true},
                {name:'Tom', positon:"dead", isShow: false},
            ]
        }
    }
}
</script>

<style scoped>
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding:0 20px;
    box-sizing: border-box;
}

h1{
    color: greenyellow;
}

ul{
    color: red;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}

li{
    flex-grow:1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px
}
</style>