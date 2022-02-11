/*
 * @Author: korealu
 * @Date: 2022-02-10 15:47:59
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-11 16:42:05
 * @Description: file content
 * @FilePath: /js-height/es-new-arr/es6.js
 */
//  1. 对象字面量增强写法
// const age = 29;
// const info = 'korea'
// let obj = {
//     name: 'korea',
//     age,
//     [info]: 'kobe',
//     bar() {
//         console.log(this.name, this.age, this.korea);
//     }
// }
// console.log(obj);
// obj.bar()
//  数组解构 (根据索引进行赋值)
const list = [1, 3, 4];
const [one, two, three] = list; // 赋值解构
console.log(one, two, three);
const [, n, m] = list; // 占位解构
console.log(n, m);
const [a, ...newList] = list; // 剩余参数解构到一个新的数组中
console.log(a, newList);
const [b, c, d, e, f = 5] = list; // 多余的参数进行默认赋值
console.log(b, c, d, e, f);
// 对象解构 （根据key进行赋值）
const objectInfo = {
    name: 'korea',
    age: 22,
    height: 170,
    weight: '65kg'
}
const {
    name,
    age,
    height,
    weight
} = objectInfo;
console.log(name, age, height, weight);
const {name: newName} = objectInfo; // 重新命名
console.log(newName);
const {skill = '吃饭'} = objectInfo; // 默认值配置
console.log(skill);