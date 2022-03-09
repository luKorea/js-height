/*
 * @Author: korealu
 * @Date: 2022-02-24 14:45:15
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-09 16:13:25
 * @Description: file content
 * @FilePath: /js-height/26_迭代器-生成器/12_生成器的throw抛出异常.js
 */
function* foo() {
  console.log("代码开始执行~")

  const value1 = 100
  try {
    yield value1
  } catch (error) {
    console.log("捕获到异常情况:", error)

    yield "abc"
  }

  console.log("第二段代码继续执行")
  const value2 = 200
  yield value2

  console.log("代码执行结束~")
}

const generator = foo()

const result = generator.next()
console.log(generator.throw("error message"))