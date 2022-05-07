// && (И)
// || (ИЛИ)
// ! (НЕ)

// && (И)

const userAge = 20
if (userAge > 5 && userAge <= 18) {
  console.log('Пользователь ходит в школу')
}

const programmingLanguage = 'JavaScript'
const experienceInYear = 0.5

if (programmingLanguage === 'JavaScript' && experienceInYear > 1) {
  console.log('Добро пожаловать в нашу компанию')
}

// || (ИЛИ)

const currentHours = 6
if (currentHours < 8 || currentHours > 20) {
  console.log('Наш офис закрыт. Приходите завтра')
} else {
  console.log('Добро пожаловать в офис')
}

const userNickname = null
const defaultNickname = 'User'
const nickname = userNickname || defaultNickname || 'noname' // если false - идет дальше, пока не будет true

const finalNickname = userNickname && 'Пользователь существует' // если false, то возвращается (true - идет дальше)

console.log('nickname', nickname)
console.log('finalNickname', finalNickname)

// ! (НЕ)

/*
const hasAccess = false
console.log('!hasAccess', !hasAccess)
if (!hasAccess) {
  console.log('Доступ закрыт')
} else {
  console.log('Доступ открыт')
}

const answer = prompt('Сколько Вам Лет?')
if (!answer) {
  alert('Введите Ваше полное количество лет')
} else {
  alert(`Вам ${answer} лет`)
}
// по умолчанию пустая строка false
*/

// Оператор объединения с null ?? похож на ||

// false, 0, '', NaN, undefined, null - ложные значение
console.log(false || 'Hello World') // Hello World

// null, undefined - ложные значение
console.log(false ?? 'Hello World') // false
