console.log('Давайте начинать')

setTimeout(() => {
  console.log('Привет! Я setTimeout!')
}, 1000)

const promise = new Promise((resolve) => {
  console.log('Я в промисе')

  resolve('Возвращаю результат из промиса')
})

setTimeout(() => {
  console.log('Я тоже в setTimeout, только жду подольше')
}, 2000)

promise.then((result) => {
  console.log(result)
})

console.log('Давайте заканчивать')

// then, catch, finally - микрозадачи

// 1. Выполняется мАкрозадача(выполнение скрипта)(call stack)
// 2. Вызвать все, что есть в очереди мИкрозадач(microtask queue)
// 3. Вызвать все, что есть в очереди вызовов(callback queue)
