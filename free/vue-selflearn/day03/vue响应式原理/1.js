// 以前添加属性

let obj = {
    a:1
}

obj.b = 2

obj['c'] = 3

console.log(obj)


Object.defineProperty(obj,'d',{
    value:4,
    enumerable:true  // 可遍历
})

console.log(obj)

