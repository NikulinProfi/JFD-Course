// Callback - функция, которая передается, как параметр внутри другой функции

const promise = new Promise(() => {})

setTimeout(() => {}, 3000)

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1'

const getTodo = (callback) => {
  fetch(FIRST_TODO_URL)
    .then((response) => response.json())
    .then((todo) => {
      // console.log('todo', todo)
      callback(todo)
    })
    .catch((error) => {
      console.log('error', error)
    })
}

getTodo((todoItem) => {
  console.log('todoItem', todoItem)
  getTodo((todoItem) => {
    console.log('todoItem', todoItem)
  })
  getTodo((todoItem) => {
    console.log('todoItem', todoItem)
  })
})
