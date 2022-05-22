const goodInfo = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes',
}

console.log('goodInfo', goodInfo)

// for in - устаревший

// for (const key in goodInfo) {
//   console.log('key', key)
//   const value = goodInfo[key]
//   console.log('value', value)
// }

// Object.keys - создает массив из ключей

const keys = Object.keys(goodInfo)
console.log('keys', keys)

// Object.values - создает массив из значений
const values = Object.values(goodInfo)
console.log('values', values)

// Object.entries - объединяет keys и values
const entries = Object.entries(goodInfo)
console.log('entries', entries)
console.log(entries[1])
