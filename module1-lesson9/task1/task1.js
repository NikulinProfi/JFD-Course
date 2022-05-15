const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]
const queue = String(peopleWaiting.length)
console.log('В очереди -', queue, 'человек') // для себя

function giveParcel() {
  const client = peopleWaiting.shift()
  alert(
    `${client} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
  )
}

function leaveQueueWithoutParcel() {
  const client = peopleWaiting.pop()
  alert(`${client} не получил(а) посылку и ушел(ла) из очереди.`)
}

giveParcel()
giveParcel()
giveParcel()
leaveQueueWithoutParcel()
leaveQueueWithoutParcel()
leaveQueueWithoutParcel()
leaveQueueWithoutParcel()
