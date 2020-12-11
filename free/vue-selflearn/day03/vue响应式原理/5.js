let obj = {
    name:'铁蛋儿',
    age:18,
    arr:[1,2,3]
}

let proxy = new Proxy(obj.arr,{
    get(target,key,reciver){
        console.log('get',key)
        return Reflect.get(target,key,reciver)
    },
    set(target,key,value,reciver){
        console.log('set',key,value)
        return Reflect.set(target,key,value,reciver)
    }
})

proxy.push(5)