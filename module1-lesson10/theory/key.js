// string | symbol

const id = Symbol('id')
const id2 = Symbol('id2')

const user = {
  // [Symbol('id')]: 1,
  // [Symbol('id')]: 2,
  // [Symbol('id')]: 3,
  [id]: 1,
  name: 'Dima',
  name: 'Igor',
  // 10: '123',
  // undefined: undefined,
  // [false]: false,
}
console.log('user', user)
console.log(Object.keys(user))

console.log(user[id])

// in - проверяет, существует ли какой-то ключ в объекте
console.log('name' in user) // true
console.log('name1' in user) // false

console.log(id in user) // true
console.log(id2 in user) // false
