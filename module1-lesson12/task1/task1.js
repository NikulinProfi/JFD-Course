const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
    this.level += 1
    switch (this.level) {
      case 2:
        this.stack.push('CSS')
        break
      case 3:
        this.stack.push('JavaScript')
        break
      case 4:
        this.stack.push('React')
        break
      case 5:
        this.stack.push('NodeJS')
        break
      case 6:
        alert('Студент выучил все технологии!')
        break
    }
    return this
  },
}

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()

console.log(student)
// console.log(student.improveLevel())
// console.log(student.level)
// console.log(student.stack)
