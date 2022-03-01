/*
 * @Author: korealu
 * @Date: 2022-02-11 15:31:37
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-11 15:45:06
 * @Description: file content
 * @FilePath: /js-height/newObject/多态.js
 */
// 前提： 1. 继承是多态的前提 2. 必须有重写（子类重写父类的方法） 3. 必须有父类引用指向子类对象
class People {
    getAge() {
        console.log('父类的年龄');
    }
}

class Student extends People {
    getAge() {
        console.log('学生的年龄');
    }
}

class Teacher extends People {
    getAge() {
        console.log('老师的年龄');
    }
}
function immediateFun(fun) {
    fun.getAge();
}

const korea = new Student();
const jame = new Teacher();
immediateFun(korea);
immediateFun(jame);