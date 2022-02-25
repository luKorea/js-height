/*
 * @Author: korealu
 * @Date: 2022-02-11 14:26:29
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-24 10:13:41
 * @Description: file content
 * @FilePath: /js-height/newObject/继承内置类.js
 */

class MyArray extends Array {
    firstItem() {
        console.log(this.length)
        if (this.length === 0) {
            throw new TypeError('The Array Length No Zero')
        } else return this[0]
    }
    lastItem() {
        return this[this.length - 1]
    }
}

const array = new MyArray(1,2,3,4,5,6);
console.log(array.firstItem());
console.log(array.lastItem());
// console.log(array.flat([1,2,3, [4,5,6]]))