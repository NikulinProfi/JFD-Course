const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав'
  },
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик'
  },
}

function makeDomestic(isDomestic) {
  alert(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
  switch (isDomestic) {
    case true:
      this.isDomestic = true
      break
    case false:
      this.isDomestic = false
      break
  }
  console.log(this)
  return this
}

const bindedMakeDomestic = makeDomestic.bind(dog, true) // вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// // Выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"
bindedMakeDomestic()

makeDomestic.call(bird, false) // вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// Выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"
