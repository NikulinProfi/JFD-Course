// static - нужен, чтобы создавать поля и методы, которые принадлежат именно классу, а не каким-то конкретно его объектам

// нельзя использовать this, тогда он не будет статическим

class Car {
  static isCar(car) {
    // для доступа к static не надо писать new
    // проверяем, является ли наша машина машиной
    return car instanceof Car // является ли наш объект машины экземпляром от Car
  }

  static #initialParams = {
    // не принадлежит какому-то объекту, а принадлежит всему классу
    name: 'Audi',
    maxSpeed: 150,
  }

  constructor(name, maxSpeed) {
    this.name = name || Car.#initialParams.name
    this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed
  }
  drive() {
    console.log(`Машина ${this.name} сейчас в пути`)
  }
}

// const car = new Car('BMW', 200) //объект, экземпляр объекта
const car = new Car() // Car {name: 'Audi', maxSpeed: 150}
const car1 = new Car()
const car2 = new Car()
const animal = {}
const isCar = Car.isCar(animal) // false
// const isCar = Car.isCar(car) // true

console.log(isCar) // true
console.log(car) // Car {name: 'BMW', maxSpeed: 200}

// car.isCar(animal) // car.isCar is not a function

Car.isCar()

Car.#initialParams // Private field '#initialParams' must be declared in an enclosing class
