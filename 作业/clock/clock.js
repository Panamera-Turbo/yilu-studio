<script>
    function clock(){
        var h;  //小时
        var m;  //分钟
        var s;  //秒
        var d = new Date();

        var x = document.getElementById("date");
        x.innerHTML = d.getFullYear + ":" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

        
    }
</script>