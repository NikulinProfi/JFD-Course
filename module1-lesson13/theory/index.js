// ООП

// function и class

// function Animal(name) {
//   this.name = name

//   this.getName = function () {
//     return this.name
//   }
// }

// constructor - специальная функция, которая вызывается в первый же момент.(главная цель: инициализация начальных значений)
class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

// new для создания объекта
// const result = Animal('кот')
// console.log('result', result) // result undefined

const cat = new Animal('кот')
const dog = new Animal('собака')
console.log('dog', dog) // dog Animal {name: 'собака'}

// console.log('cat', cat) // cat Animal {name: 'кот', getName: ƒ}
// console.log(cat.name) // кот
// console.log(cat.getName) //ƒ () {  return this.name}
