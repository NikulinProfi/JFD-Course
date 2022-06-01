const developerInfo = {
  age: 25,
  experience: 3,
  name: 'Maxim',
}

// Опциональная цепочка ?.

const developerExtraInfo = {
  heigh: 180,
  isJunior: false,
  name: 'Dima',
}

// ... - объединение объектов, как и массивов
// если ключи одинаковые, то применится, который в последнем объекте

// const array = [
//   ...array1,
//   ...array2,
// ]

// 1

const developer = {
  ...developerInfo,
  ...developerExtraInfo,
  name: 'Nastya',
}
console.log('developer', developer)

// 2 Object.assign

const developer2 = Object.assign(developerInfo, developerExtraInfo)
console.log('developer2', developer2)
