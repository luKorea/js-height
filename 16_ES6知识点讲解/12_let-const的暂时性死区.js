/*
 * @Author: korealu
 * @Date: 2022-02-24 14:44:04
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-24 16:04:37
 * @Description: file content
 * @FilePath: /code/16_ES6知识点讲解/12_let-const的暂时性死区.js
 */
var foo = "foo"

// if (true) {
//   console.log(foo)

//   let foo = "abc"
// }


function bar() {
  console.log(foo)
  
  let foo = "abc"
}

bar()


// 作用域提升，自动挂载到window对象上
var name1 = "abc"
let name2 = "cba"
const name3 = "nba"


// 构建工具的基础上创建项目\开发项目 webpack/vite/rollup
// babel
// ES6 -> ES5

const info = {name: "why"}

info = {name: "kobe"}
