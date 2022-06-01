class Developer {
  constructor(fullName, age, position) {
    ;(this.fullName = fullName),
      (this.age = age),
      (this.position = position),
      (this.technologies = [])
  }

  code() {}
  learnNewTechnologies(technology) {
    this.technologies.push(technology)
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age, position) {
    super(fullName, age, (position = 'Junior'))
    this.technologies = ['HTML', 'CSS', 'JavaScript']
  }
  code() {
    console.log('Junior разработчик пишет код...')
  }
}

class MiddleDeveloper extends Developer {
  constructor(fullName, age, position) {
    super(fullName, age, (position = 'Middle'))
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
  }
  code() {
    console.log('Middle разработчик пишет код...')
  }
}

class SeniorDeveloper extends Developer {
  constructor(fullName, age, position) {
    super(fullName, age, (position = 'Senior'))
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
  }
  code() {
    console.log('Senior разработчик пишет код...')
  }
}

// const result = new Deveveloper('Java', 20, 'Junior')
// console.log(result)
// console.log(result.learnNewTechnologies('C++'))

const juniorDeveloper = new JuniorDeveloper('Никита', 16)
const middleDeveloper = new MiddleDeveloper('Сергей', 40)
const seniorDeveloper = new SeniorDeveloper('Абдували', 23)

juniorDeveloper.code() // Junior разработчик пишет код...
middleDeveloper.code() // Middle разработчик пишет код...
seniorDeveloper.code() // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies('Docker')

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position,
  juniorDeveloper.technologies
)
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position,
  middleDeveloper.technologies
)
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position,
  seniorDeveloper.technologies
)
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
