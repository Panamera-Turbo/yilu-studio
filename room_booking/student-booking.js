//检查的内容：
//学号是不是2009000000000~2040000000000
//姓名是否为null或空格
//预约日期是不是比现在晚
//手机号是不是1xxxxxxxxxx
function check(){
    var stuName = document.forms["sub"]["stuName"];
    var stuID = document.forms["sub"]["stuID"];
    var stuDate = document.forms["sub"]["date"];
    var stuTel = document.forms["sub"]["stuTel"];
    var stuDetail1 = document.forms["sub"]["detail1"];
    var stuDetail2 = document.forms["sub"]["detail2"];

    // var stuUse = document.forms["sub"]["use"];
    // var stuRoom = document.forms["sub"][""]
    var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im; 
    // if (!patrn.test(str)) {// 如果包含特殊字符返回false
    //   return false;
    // }

    // var correct = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/;
    if(stuName === null || stuName == "" || stuName.match(patrn) != null){
        alert("请输入正确姓名！");
        // alert(stuID);
        return false;
    }

    var nowDate = new Date();
    if(stuDate == null || stuDate <= nowDate){
        alert("只能预约明天及以后的哦，请输入正确日期！")
        return false;
    }

    if(stuID > 2040000000000 || stuID < 2009000000000){
        alert("输入正确学号！");
        return false;
    }

    if(stuTel/10000000000 != 1){
        alert("输入正确的手机号！");
        return false;
    }

    if(stuDetail1 > stuDetail2 || stuDetail1 < 1 ){
        alert("请输入正确的借用时间！");
        return false;
    }

    return true;
}


function submitNow(){
    if(check()){
        //提交给后端了
        //我真的不会了
    }

    else{
        alert("输入正确信息！");
    }
}