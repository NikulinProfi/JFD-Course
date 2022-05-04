// 1. string
let myName = 'Dima'
console.log(Number(myName), Boolean(myName), String(myName))

// 2. number
let age = 18
console.log(Number(age), Boolean(age), String(age))

// 3. boolean
let isWoman = false
console.log(Number(isWoman), Boolean(isWoman), String(isWoman))

// 4. null
let isNull = null
console.log(Number(isNull), Boolean(isNull), String(isNull))

// 5. undefined
let myFavoriteBook
console.log(
  Number(myFavoriteBook),
  Boolean(myFavoriteBook),
  String(myFavoriteBook)
)

// 6. object
const myInfo = {
  myName: 'Дмитрий',
  age: 29,
  myFavoriteBook,
}
console.log(Number(myInfo), Boolean(myInfo), String(myInfo))

// 7. symbol
const myId = Symbol('sum')
console.log(Boolean(myId), String(myId))

// 8. bigint
const bigIntNumber = 1000n
console.log(Number(bigIntNumber), Boolean(bigIntNumber), String(bigIntNumber))
