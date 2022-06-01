const footballer = {
  fullName: 'Cristiano Ronaldo',
  attack: function () {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`)
    this.celebrate(sound)
  },
  celebrate(sound) {
    console.log(sound)
    return this.sound
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    )
  },
}
const attack = footballer.attack
const bindedAttack = attack.bind(footballer)
bindedAttack()

const score = footballer.scoreGoal
score.call(footballer, 'Сиииии')

const substitute = footballer.goToSubstitution.apply(footballer, [
  'Paulo Dibala',
])
