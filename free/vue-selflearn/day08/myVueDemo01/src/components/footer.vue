<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
    name:'footer',
    data(){
        return {
            copyright: "Copy right 2021 Uestc"
        }
    }
}
</script>

<style scoped>
footer{
    background: darkgrey;
    padding: 6px;
}

footer p{
    color:darkred;
    text-align: center;
}
</style>