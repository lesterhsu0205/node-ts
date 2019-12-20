import Konoha = require('./module/konoha') // 木葉村 module
import Generics = require('./module/generics')
import Enum = require('./module/enum')

// 封裝，繼承
const Ninja = Konoha.Ninja

// const sasuke = new Ninja('Sasuke', 'thunder', 'Naruto')
// sasuke.age = 21
// sasuke.gender = 'male'
// sasuke.setSkill('豪火球之術')
// sasuke.sleep(100)
// sasuke.nameGetSet
// console.log(sasuke)

// const naruto = new Ninja('Naruto', 'mouth', 'Sasuke')
// naruto.age = 20
// naruto.gender = undefined
// naruto.setSkill('螺旋手裡劍')
// console.log(naruto)

// 多型
// abstract class
// const naruto_sage = Konoha.naruto_sage
// naruto_sage.setMode("仙人·九喇嘛模式")
// console.log(naruto_sage.getMode())

// interface
// const naruto = new Ninja('Naruto', 'mouth', 'Sasuke')
// console.log(naruto)
// naruto.setMind('火之意志')
// console.log(naruto)

// const Civilian = Konoha.Civilian
// const p = new Civilian()
// p.setMind('火之意志')
// console.log(p)

// 泛型
const generics = new Generics(123)
// const array = generics.createArray(3, '123')
// const s = generics.swap([1, "one"])
// const l = generics.validateLength({length: 1})
// const arrayImpl = generics.createArrayImpl(5, {length: 1})
console.log(generics)

// enum
// console.log(`今天是 ${Enum.Month.Dec} 20日 ${Enum.Day.Fri}`)

