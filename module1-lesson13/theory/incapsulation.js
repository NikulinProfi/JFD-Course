// 2.Инкапсуляция - скрытие данных у доступа вне класса либо при наследовании

// public
// доступны через точку и в дочернем классе

// private # - для работы в одном классе
// к private полям и методам нет доступа через точку и нет доступа в дочерний класс

// get - получить значение приватного поля
// set - установка нового значения

class Developer {
  #salary
  constructor(name, programmingLanguage) {
    this.name = name
    this.programmingLanguage = programmingLanguage
    this.#salary = 3000 // private
  }

  get devSalary() {
    return this.#salary
  }

  set setSalary(salary) {
    this.#salary = salary
  }

  startCoding() {
    console.log(this.#salary)
    this.#printProgrammingLanguage()
    console.log(`${this.name} начинает писать код`)
  }

  #printProgrammingLanguage() {
    console.log(`Язык программирования: ${this.programmingLanguage}`)
  }
}

class JuniorDeveloper extends Developer {
  constructor(name, programmingLanguage) {
    super(name, programmingLanguage)
  }
}

const juniorDeveloper = new JuniorDeveloper('Никита', 'JavaScript')
// juniorDeveloper.#printProgrammingLanguage() // Язык программирования: JavaScript

const developer = new Developer('Дима', 'JavaScript')
console.log(developer.startCoding()) // Developer {name: 'Дима', programmingLanguage: 'JavaScript'}
// console.log(developer.name) // Дима
// console.log(developer.programmingLanguage) // JavaScript
// developer.startCoding() // Дима начинает писать код
// developer.#printProgrammingLanguage()

console.log(developer.devSalary)
developer.setSalary = 5000
console.log(developer.devSalary)
