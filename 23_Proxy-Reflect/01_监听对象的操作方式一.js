/*
 * @Author: korealu
 * @Date: 2022-02-24 14:41:39
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-03 10:19:53
 * @Description: file content
 * @FilePath: /js-height/23_Proxy-Reflect/01_监听对象的操作方式一.js
 */
const obj = {
  name: "why",
  age: 18
}

// 访问属性描述符 get, set
// Object.defineProperty(obj, "name", {
//   get: function() {
//     console.log("监听到obj对象的name属性被访问了")
//   },
//   set: function() {
//     console.log("监听到obj对象的name属性被设置值")
//   }
// })


Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`)
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 30

console.log(obj.name)
console.log(obj.age)

obj.height = 1.88
