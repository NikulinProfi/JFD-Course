// 3.Полиморфизм - это одно действие и несколько реализаций

class Animal {
  constructor(name) {
    this.name = name
  }
  makeSound() {} // действие
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  makeSound() {
    // реализация 1
    console.log('Гав-гав')
  }
}

class Horse extends Animal {
  constructor(name) {
    super(name)
  }
  makeSound() {
    // реализация 2
    console.log('Иго-го-го')
  }
}

const cat = new Animal('cat')
console.log(cat) // Animal {name: 'cat'}
