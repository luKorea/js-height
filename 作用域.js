// 面试题一
// var n = 100
// function a() { n = 200 }
// a()
// console.log(n)

// 面试题二
// function foo() {
//   console.log(n)
//   var n = 200
//   console.log(n)
// }
// var n = 100
// foo()
//面试题三
// var n = 100
// function foo1 () {
//   console.log(n) // 100 Ao = null GO = 100
// }
// function foo2 () {
//   var n = 200 // AO= {n: 200}
//   console.log(n) // 200 AO
//   foo1()
// }
// foo2()
// console.log(n) // 100 GO = 100

// 面试题四
// var a = 100
// function foo() {
//   console.log(a)
//   return // 函数执行才会去管return，后面声明的东西会被放到AO中
//   var a = 100
// }
// foo()

/*面试题五*/
// function foo() {
//   var a = b = 100 // 转换为 vcr a = 100 b = 100 a在函数中定义，只能在函数中找到，全局没有，b会被挂载到GO上
// }
// foo()
// console.log(a)
// console.log(b)
