// 7 - примитивы (не ссылочный тип)
// 1 - не примитив - объект (ссылочный тип)

const setName = (entity, value) => {
  if (typeof entity === 'object') {
    entity.name = value
  } else {
    entity = value
    // name = value
  }
}

const developer = {
  name: 'Dimas',
}
let developerName = 'Dimas'

setName(developer, 'Dima')
setName(developerName, 'Dima')

// console.log('developer', developer)
// console.log('developerName', developerName)

const entity = {}
const entityCopy = entity

console.log(entity === entityCopy) // true // хранит ссылку, а ссылки равны

console.log({} === {}) // false
console.log([] === []) // false

console.log('hello' === 'hello') // true
console.log(5 === 5) // true
