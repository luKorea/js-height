/*
 * @Author: korealu
 * @Date: 2022-02-23 15:18:37
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-23 15:41:15
 * @Description: file content
 * @FilePath: /js-height/es-new-arr/class-extend.js
 */
class Student {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('吃东西')
        console.log('测试东西')
        console.log('调离东西')
    }
    static fun() {
        console.log('父类的静态方法')
    }
}

class Join extends Student {
    constructor(name, age, scope) {
        super(name)
        this.age = age;
        this.scope = scope;
    }
    run() {
        console.log('跑步')
    }
    resetEat() {
        super.eat(); // 复用父类方法，
        console.log('子类扩展父类方法')
    }
    static funChildren() {
        super.fun();
        console.log('子类调用父类的静态方法，并且扩展')
    }
}
const a = new Join('korea', 22, '100分');
console.log(a)
// a.eat()
a.run()
a.resetEat()
Join.funChildren()