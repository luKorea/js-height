/*
 * @Author: korealu
 * @Date: 2022-02-11 14:32:50
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-24 10:15:46
 * @Description: file content
 * @FilePath: /js-height/newObject/js实现混入的效果.js
 */
//前提： js只支持单继承
class Person {
    eating() {
        console.log('eating ~~')
    }
}
class Student extends Person {
    study() {
        console.log('study ~~');
    }
}

// 实现类多继承
function mixinsClass(newClass) {
    class NewClass extends newClass {
        swimming() {
            console.log('游泳');
        }
    }
    return NewClass;
}
function mixinsClassToSugar(newClass) {
    return class extends newClass {
        shopping() {
            console.log('购物');
        }
    }
}
const NewClass = mixinsClass(mixinsClassToSugar(Student));
const korea = new NewClass();
korea.swimming(); // 混入方法
korea.eating(); // 父类方法
korea.study(); // 自己方法
korea.shopping(); // 混入多个父类