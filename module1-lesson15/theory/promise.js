const developer = {
  name: 'Maxim',
  isJSDev: true,
}

// setTimeout(() => {
//   console.log('setTimeout')
// }, 2000) // принимает коллбек и кол-во ms, через которе выполнится функция

// console.log(developer)

// setInterval // указывается каждый раз, через заданный интервал времени
// setInterval(() => {
//   console.log('setInterval')
// }, 1000)

// 3 статуса Promise:
// pending (ожидание)
// fulfilled (выполнен)
// reject (ошибка)

const promise = new Promise((resolve, reject) => {
  if (developer.isJSDev) {
    setTimeout(() => {
      resolve(`${developer.name} является JavaScript-разработчиком`)
    }, 3000)
  } else {
    reject(`${developer.name} не является JavaScript-разработчиком`)
  }
}) // resolve - вызывается, если функция выполнилась удачно, reject - неудачно

console.log(promise)

// then(возвращает промис), catch(обрабатывает ошибки), finnaly

promise
  .then((successMessage) => {
    console.log('successMessage', successMessage)
  })
  .catch((error) => {
    console.log('error', error)
  })
  .finally(() => {
    console.log('finally')
  })
