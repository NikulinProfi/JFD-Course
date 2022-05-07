const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'
const userLogin = prompt('Введите логин').trim()
console.log(userLogin)
const userPassword = prompt('Введите пароль').trim()
console.log(userPassword)

// Способ 1
// if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
//   alert(`Добро пожаловать, ${userLogin}!`)
// } else {
//   alert('Логин и (или) Пароль введены неверно!')
// }

// Способ 2
const checkUsers =
  userLogin === existingUserLogin && userPassword === existingUserPassword
    ? `Добро пожаловать, ${userLogin}!`
    : 'Логин и (или) Пароль введены неверно!'
alert(checkUsers)
