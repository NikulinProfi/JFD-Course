const patients = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Николай' },
  { id: 3, name: 'Ангелина' },
  { id: 4, name: 'Виталий' },
]
const orders = [4, 2, 1, 3]

function giveTalonsInOrder(patients, orders) {
  return patients.sort((a, b) => orders.indexOf(a.id) - orders.indexOf(b.id))
}

const result = giveTalonsInOrder(patients, orders)
console.log('result', result)
