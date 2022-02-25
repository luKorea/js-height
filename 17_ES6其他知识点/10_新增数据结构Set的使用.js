/*
 * @Author: korealu
 * @Date: 2022-02-24 14:44:40
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-25 14:57:18
 * @Description: file content
 * @FilePath: /code/17_ES6其他知识点/10_新增数据结构Set的使用.js
 */
// 10, 20, 40, 333
// 1.创建Set结构
const set = new Set()
set.add(10)
set.add(20)
set.add(40)
set.add(333)

set.add(10)

// 2.添加对象时特别注意: 添加不同的对象 
set.add({})
set.add({})

// 添加同一个对象，set中只会存在一个
const obj = {}
set.add(obj)
set.add(obj)

// console.log(set)

// 3.对数组去重(去除重复的元素)
const arr = [33, 10, 26, 30, 33, 26]
// const newArr = []
// for (const item of arr) {
//   if (newArr.indexOf(item) !== -1) {
//     newArr.push(item)
//   }
// }

const arrSet = new Set(arr)
// const newArr = Array.from(arrSet)
// const newArr = [...arrSet]
// console.log(newArr)

// 4.size属性
console.log(arrSet.size)

// 5.Set的方法
// add
arrSet.add(100)
console.log(arrSet)

// delete
arrSet.delete(33)
console.log(arrSet)

// has
console.log(arrSet.has(100))

// clear
// arrSet.clear()
console.log(arrSet)

// 6.对Set进行遍历
arrSet.forEach(item => {
  console.log(item)
})

for (const item of arrSet) {
  console.log(item)
}

