// bind - нативный метод в js, который позволяет привязывать контекст(если есть какой-то объект)

const person = {
  name: 'Dima',
}
function info() {
  console.log(`Имя: ${this.name}`)
}

console.log(info()) // undefined // нет ключа name
info.bind(person)() // Имя: Dima
