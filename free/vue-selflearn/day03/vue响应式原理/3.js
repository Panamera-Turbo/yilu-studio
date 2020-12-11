// 数据存储符

let obj = {}
let value = '小白龙'
Object.defineProperty(obj,'key',{
    // 数据描述符和数据存储符可以一起写
    get:function(){ // 只要获取key属性  自动触发get函数
        console.log('执行了获取操作')
        return value
    },
    set:function(newVal){// 只要设置key属性  自动触发set函数
        console.log('执行了设置操作')
        value = newVal+'真帅'
    }
})

console.log(obj.key)

obj.key= '铁蛋儿'

console.log(value)