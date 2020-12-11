// 手写2.0的数据监听原理

let obj = {
    name:'铁蛋儿',
    age:18,
    job:{
        code:'FE'
    },
    arr:[1,2,3]
}
function defineProperty(obj,key,val){
    // 递归判断val的类型
    observer(val)

    Object.defineProperty(obj,key,{
        get(){
            // 读取方法
            console.log('获取',key,'成功')
            return val
        },
        set(newVal){
            // 设置方法
            if(newVal===val){ // 如果设置的值一样直接返回
                return
            }
            observer(newVal)
            console.log('监听成功',newVal)
            val = newVal
        }
    })
}

function observer(obj){
    // 判断 obj是不是对象
    if(typeof obj!=='object'||obj==null){
        return
    }
    for(const key in obj){
        // 给对象中的每一项设置监听
        defineProperty(obj,key,obj[key])
    }
}

observer(obj)


// obj.name = '小白龙'
// obj.job.code = 'Node'
// obj.name = {
//     sname:'欧巴'
// }

// obj.name.sname = '欧巴铁蛋儿'
obj.arr.push(4)
