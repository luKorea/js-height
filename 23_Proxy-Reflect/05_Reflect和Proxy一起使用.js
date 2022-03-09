/*
 * @Author: korealu
 * @Date: 2022-02-24 14:41:42
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-03 14:32:07
 * @Description: file content
 * @FilePath: /js-height/23_Proxy-Reflect/05_Reflect和Proxy一起使用.js
 */
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log("get---------")
    return Reflect.get(target, key)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set---------")
    target[key] = newValue

    const result = Reflect.set(target, key, newValue) // 返回一个布尔值
    if (result) {
    } else {
    }
  }
})

objProxy.name = "kobe"
console.log(objProxy.name)

