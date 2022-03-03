/*
 * @Author: korealu
 * @Date: 2022-02-24 14:41:41
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-03 14:15:44
 * @Description: file content
 * @FilePath: /js-height/23_Proxy-Reflect/04_Proxy对函数对象的监听.js
 */
function foo() {
  console.log(1)
}

const fooProxy = new Proxy(foo, {
  apply: function(target, thisArg, argArray) {
    console.log("对foo函数进行了apply调用")
    return target.apply(thisArg, argArray)
  },
  construct: function(target, argArray, newTarget) {
    console.log("对foo函数进行了new调用")
    return new target(...argArray)
  }
})

fooProxy.apply({}, ["abc", "cba"])
new fooProxy("abc", "cba")
