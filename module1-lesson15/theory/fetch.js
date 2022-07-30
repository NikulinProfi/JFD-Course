// fetch - это специальная функция, с помощью которой мы можем получать данные по URL

//fetch(url)

// GET, POST, DELETE

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const createTodoElement = (text) => {
  const todoElement = document.createElement('li')
  const todoElementAnchor = document.createElement('a')
  todoElementAnchor.href = '#'
  todoElementAnchor.textContent = text
  todoElement.append(todoElementAnchor)

  return todoElement
}

const toogleLoader = () => {
  const loaderHTML = document.querySelector('#loader')
  const isHidden = loaderHTML.hasAttribute('hidden')
  if (isHidden) {
    loaderHTML.removeAttribute('hidden')
  } else {
    loaderHTML.setAttribute('hidden', '')
  }
}

const dataContainer = document.querySelector('#data-container')

const getAllTodos = () => {
  toogleLoader()
  const result = fetch(TODOS_URL, {
    method: 'GET',
  })

  console.log('result', result)

  result
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error('ОШИБКА запроса') // throw специальный оператор, который выдает ошибку и сразу переходит в .catch
      }
      return response.json()
    })
    .then((todos) => {
      console.log(todos)
      todos.forEach((todo) => {
        const todoHTML = createTodoElement(todo.title)
        dataContainer.append(todoHTML)
      })
    })
    .catch((error) => {
      console.log('error', error)
    })
    .finally(() => {
      toogleLoader()
    })
}

getAllTodos()
