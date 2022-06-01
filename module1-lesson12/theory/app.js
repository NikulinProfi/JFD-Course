function hello() {
  console.log('Hello', this)
}

hello() // Hello Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const person = {
  name: 'Dima',
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Job is ${phone}`)
    console.groupEnd()
  },
}
/*
console.log(person) //{name: 'Dima', age: 30, sayHello: ƒ}
console.log(person.sayHello()) //Hello {name: 'Dima', age: 30, sayHello: ƒ}
console.log(window.hello()) //Hello Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(person.sayHelloWindow()) //Hello {name: 'Dima', age: 30, sayHello: ƒ, sayHelloWindow: ƒ}
console.log(this) /// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this === window) // true
console.log(person.logInfo()) //Name is Dima

const lena = {
  name: 'Elena',
  age: 23,
}

person.logInfo.bind(lena, 'Frontend', '8-999-213-11-22')() // bind вызывает новую функцию, которая привязала новый контекст // Name is Elena Age is 23 //  Name is Elena Age is 23 Job is Frontend Job is 89992131122
person.logInfo.call(lena, 'Frontend', '8-999-213-11-22') // без вызова функции // в call можно передавать бесконечное число параметров
person.logInfo.apply(lena, ['Frontend', '8-999-213-11-22']) // в apply передаем только 2 параметра в массиве

*/

const array = [1, 2, 3, 4, 5]
// написать функцию, которая позволит умножить каждое из значений массива на определенное число, которое будем передавать.

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n
//   })
// }

Array.prototype.multBy = function (n) {
  console.log('multBy', this) // multBy (5) [1, 2, 3, 4, 5]
  return this.map(function (i) {
    return i * n
  })
}

// console.log(multBy(array, 2)) // 5) [2, 4, 6, 8, 10]

console.log(array.multBy(2)) // (5) [2, 4, 6, 8, 10]
