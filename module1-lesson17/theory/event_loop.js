// event loop - это событийный цикл

function sayHello(name) {
  console.log(`Hello, ${name}`)
}

console.log('start')
sayHello('Maxim')
setTimeout(() => {
  sayHello('Charlie')
}, 0)

sayHello('Antony')
console.log('end')

// Web Api
// setTimeout setInterval

// const banana = ('b' + 'a' + +'a' + 'a').toUpperCase()
// console.log(banana)

// function val(val) {
//   return val.toString()
// }

// console.log(val(4))

// let b = 8 % 9
// console.log(b)

// let c = 1 / 2
// console.log(c)
