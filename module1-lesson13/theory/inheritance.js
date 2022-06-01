// 1.Наследование - создание дочерних классов на основе базовых

class Plane {
  // класс Самолет
  constructor(type, numberOfPassangers) {
    // конструктор для инициализации начальных параметров
    this.type = type
    this.numberOfPassangers = numberOfPassangers
  }

  startFlight() {
    // метод startFlight для взлета самолета
    console.log('Полетели!')
  }

  // setNumberOfGuns() {
  //   // метод для военного самолета
  // }
}

class MilitaryPlane extends Plane {
  // MilitaryPlane - дочерний класс, а Plane - родительский
  constructor(type) {
    super(type, 0) // ключевое слово super вызывает конструктор родительского класса, в данном случае Plane
    this.numberOfGuns = 0 // параметр numberOfGuns
  }

  startFlight() {
    console.log('Полетели в атаку!')
  }

  setNumberOfGuns(numberOfGuns) {
    this.numberOfGuns = numberOfGuns
  }

  shoot() {
    console.log('Стреляем!')
  }
}

// const plane = new Plane('Пассажирский', 100)
// console.log(plane)
// plane.startFlight()

const militaryPlane = new MilitaryPlane('military')
// console.log('militaryPlane', militaryPlane)

militaryPlane.startFlight()
militaryPlane.setNumberOfGuns(4)
militaryPlane.shoot()
console.log('militaryPlane', militaryPlane)

// instanceof - проверяет принадлежит ли объект какому-то классу(true or false)

class Dog {}
console.log(militaryPlane instanceof MilitaryPlane) // true
console.log(militaryPlane instanceof Dog) // false
