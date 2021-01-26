<template>
    <div class="users">
        <h1>users</h1>
        <ul>
            <li v-for = "user in users" :key="user.value">{{user}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'users',
    data(){
        return{
            users: ['Jack', 'Tom', 'Candy']
        }
    }
}
</script>


<style scoped>

</style>