/*
 * @Author: korealu
 * @Date: 2022-02-24 14:45:11
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-09 15:58:13
 * @Description: file content
 * @FilePath: /js-height/26_迭代器-生成器/10_生成器的next传递参数.js
 */
function* foo(num) {
  console.log("函数开始执行~")

  const value1 = 100 * num
  console.log("第一段代码:", value1)
  const n = yield value1

  const value2 = 200 * n
  console.log("第二段代码:", value2)
  const count = yield value2

  const value3 = 300 * count
  console.log("第三段代码:", value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

// 生成器上的next方法可以传递参数
const generator = foo(5)
console.log(generator.next())
// // 第二段代码, 第二次调用next的时候执行的
console.log(generator.next(10))
console.log(generator.next(25))


