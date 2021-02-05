<template>
    <div class="add-blog">
        <h2>Add-Blog</h2>
        <form v-if="!submitted">
            <!-- 博客标题 -->
            <label>blog-title</label>
            <input type="text" v-model="blog.title" required />

            <!-- 博客内容 -->
            <label>blog</label>
            <textarea v-model="blog.content"></textarea>

            <!-- 博客分类（通过checkbox勾选） -->
            <div id="checkBox">
                <label>Vue</label>
                <input type="checkbox" value="Vue.js" v-model="blog.categories">
                <label>Node</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label>React</label>
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label>Angular</label>
                <input type="checkbox" value="Angular.js" v-model="blog.categories">
            </div>
            
            <!-- 作者（单选） -->
            <label>author</label>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author.value"> {{ author }} </option>
            </select>

            <button v-on:click.prevent="postBlog()"> 添加博客 </button>
        </form>

        <hr>
        <div v-if="submitted">
            <h3>success</h3>
        </div>

        <!-- 预览 -->
        <div id="preview">
            <h3>blog preview</h3>
            <p> blog title: {{ blog.title }} </p>
            <p> blog content: </p>
            <p> {{ blog.content }} </p>
            <p>blog type</p>
            <ul>
                <li v-for="category in blog.categories" :key="category.value">{{ category }}</li>
            </ul>
            <p>author: {{ blog.author }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add-blog',
    data(){
        return{
            blog: {
                title:"",
                content:"",
                categories: [],
                author: ""
            },

            authors:["Jack", "Ken", "Scott"],

            submitted: false
        }
    },
    methods:{
        postBlog:function(){
            this.$http.post(
                "https://jsonplaceholder.typicode.com/posts", 
                {
                    title: this.blog,title,
                    body: this.blog.content,
                    userId: 1
                }
            ).then(function(data){
                console.log(data);
                this.submitted = true;
            })
        }
    }
}
</script>

<style scoped>

</style>