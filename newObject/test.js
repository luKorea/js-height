/*
 * @Author: korealu
 * @Date: 2022-02-23 17:13:07
 * @LastEditors: korealu
 * @LastEditTime: 2022-02-23 17:57:56
 * @Description: file content
 * @FilePath: /js-height/newObject/test.js
 */

const data = [
    {
        createTime: "2022-02-23 16:35:34",
        id: 744,
        imei: "an679435109451182080",
        ip: "107.167.3.124",
        loginTime: "2022-02-23 16:35:34",
        mobileBrand: "samsung",
        mobileVersion: "10",
        nickId: "P26789275",
        osType: 0,
        state: 0,
        suid: "651499809647374336",
        uid: 651499809647374300,
        version: "102",
    },
    {
        createTime: "2022-02-23 16:35:34",
        id: 733,
        imei: "an679435109451182080",
        ip: "107.167.3.124",
        loginTime: "2022-02-23 16:35:34",
        mobileBrand: "samsung",
        mobileVersion: "10",
        nickId: "P26789275",
        osType: 0,
        state: 0,
        suid: "651499809647374336",
        uid: 651499809647374300,
        version: "103",
    },
]
const formItems = [
    { prop: 'id', label: 'ID', sortable: true, minWidth: '50' },
    { prop: 'imei', label: '设备ID' }
  ]
// formItems.forEach(item => {
//    const obj = []
//    data.forEach(ch => {
//        obj.push({
//            ...item,
//            ...ch
//        })
//    })
//    console.log(obj)
// })
const d = []
let item = null
let c = null
for (let i = 0 ; i < formItems.length; i ++) {
    item = formItems[i]
    for (let j = 0; j < data.length; j++) {
        c = data[j]
    }
    d.push({
        ...item,
        ...c
    })
}
const r = []
d.forEach(item => {
    Object.keys(item).map(key => {
        if(item.prop === key) {
            r.push({
                [item.label]: item[key]
            })
        }
    })
})
console.log(r)
// console.log(result)
// const l = formItems.map(item => {
//     let key = null
//     let value = null
//     let obj = {}
//     Object.keys(item).map(i => {
//         if (i === 'label') {
//             key = item[i]
//             // console.log(key)
//         }
//         data.forEach(c => {
//             Object.keys(c).map(l => {
//                 if(l == item[i]) {
//                     value = c[l]
//                 }
//             })
//         })
//     })
//     obj = {[key]: value}
//    return obj
// })
// console.log(l)