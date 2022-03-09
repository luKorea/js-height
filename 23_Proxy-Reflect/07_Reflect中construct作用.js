/*
 * @Author: korealu
 * @Date: 2022-02-24 14:41:39
 * @LastEditors: korealu
 * @LastEditTime: 2022-03-03 15:27:52
 * @Description: file content
 * @FilePath: /js-height/23_Proxy-Reflect/07_Reflect中construct作用.js
 */
function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

// const stu = new Student("why", 18)
// console.log(stu)
// console.log(stu.__proto__ === Student.prototype)

// 执行Student函数中的内容, 但是创建出来对象是Teacher对象
const teacher = Reflect.construct(Student, ["why", 18], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)
  
