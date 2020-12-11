// 数据描述符

// enumerable 是否可遍历

let obj1 = {
    a:1
}

Object.defineProperty(obj1,'b',{
    value:2,
    enumerable:true
})
console.log(obj1)

// writable 是否可以修改

let obj2 = {
    a:1
}

Object.defineProperty(obj2,'b',{
    value:2,
    enumerable:true,
    writable:true
})

obj2.b = 3
console.log(obj2)

// configrable  是否可以修改 是否可以删除

let obj3 = {
    a:1
}
Object.defineProperty(obj3,'b',{
    value:2,
    enumerable:true,
    writable:true,
    configurable:false
}
)
delete obj3.b

console.log(obj3)