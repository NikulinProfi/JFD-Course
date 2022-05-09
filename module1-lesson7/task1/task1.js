let health = Number(prompt('Введите число параметра "здоровье" для персонажа'))
console.log('health', typeof health)
if (health <= 0 || !health) {
  console.log('health', health)
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`)
  console.log('health', health)
}
