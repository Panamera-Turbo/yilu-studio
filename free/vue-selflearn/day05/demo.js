vm = new  Vue({
    el: "#app1",
    data: {
        health: 100,
        ended: false,
    },
    methods:{
        fire:function(){
            this.health -= 10;

            if(this.health <= 0){   //如果血量已经小于0就要结束了
                this.ended =true;
            }
        },
        restart:function(){
            this.health = 100;
            // this.ended = false;
        }
    },
    computed:{

    },
})