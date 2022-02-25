/*
 * @Author: korealu
 * @Date: 2022-02-23 14:32:33
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-24 14:37:05
 * @Description: file content
 * @FilePath: /js-height/es-new-arr/use-class.js
 */

// 源码实现（阅读）ES6 - ES5
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}

// 随机名称年龄生成器
const nameList = [
    '贾泽如', '贡琚熙', '鲍伦松', '邹浩垚', '滑宁妲', '颜雁远', '霍奕诗',
    '惠颖珊', '贾辰烨', '牧震懿', '谭羽耿', '郜玥莲', '班颜朵', '雷骅晔',
    '郭习溪', '周赛将', '倪崴旗', '严莹振', '农晔好', '姜意昌', '杜艳默',
    '孟丁旦', '农珩煜', '劳琳萱', '高旦晗', '龙其望', '顾熹坦', '李鸣歌',
    '潘荷振', '房泽蓬', '纪萌凌', '戴兴渤', '舒鸿冠', '贾楠千', '邴若敏',
    '荣玲容', '翁程能', '韶桑亮', '万妹鸽', '李奕斐', '余群忻', '冯洵游',
    '裘靖鉴', '束尤芸', '林翠好', '宫雯惠', '汪尉其', '溥书双', '荤听枫',
    '香晓凡', '钊海融', '充典丽', '桑代巧', '镜伟秋', '遇雪柳', '邹初夏',
    '驹溥心', '詹萱彤'
]
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static createRadomName() {
        // 生成随机名字下标， 向下取整不包含数字最后一位，向上取整不包含0
        const nameIndex = Math.floor(Math.random() * nameList.length)
        const ageRadom = Math.ceil(Math.random() * 60)
        const name = nameList[nameIndex]
        return new Person(name, ageRadom)
    }
}

for (let i = 0; i < 30; i++) {
    const p = Person.createRadomName()
    console.log(`第${i + 1}位用户的随机姓名为：${p.name}, 随机年龄为： ${p.age}`)
}