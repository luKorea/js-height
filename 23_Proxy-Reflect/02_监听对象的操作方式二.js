/*
 * @Author: korealu
 * @Date: 2022-02-24 14:41:44
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-03 10:47:12
 * @Description: file content
 * @FilePath: /js-height/23_Proxy-Reflect/02_监听对象的操作方式二.js
 */
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function(target, key, receiver) {
    console.log(receiver, '代理对象')
    console.log(`监听到对象的${key}属性被访问了`, target, 'target代理的对象')
    return target[key]
  },

  // 设置值时的捕获器
  set: function(target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置值`, target, 'target代理的对象')
    target[key] = newValue
  }
})

console.log(objProxy.name)
console.log(objProxy.age)

objProxy.name = "kobe"
objProxy.age = 30

console.log(obj.name)
console.log(obj.age)
