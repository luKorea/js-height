/*
 * @Author: korealu
 * @Date: 2022-02-11 14:26:29
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-11 14:35:52
 * @Description: file content
 * @FilePath: /js-height/newObject/继承内置类.js
 */

class MyArray extends Array {
    firstItem() {
        return this[0]
    }
    lastItem() {
        return this[this.length - 1]
    }
}

const array = new MyArray(1,2,3);
console.log(array.lastItem());
console.log(array.firstItem());