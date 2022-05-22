const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
]

const usersOnlineNames = []
users.forEach((user) => {
  if (user.status === 'online') {
    usersOnlineNames.push(user.username)
  }
})

console.log(usersOnlineNames)
const updatedUsers = usersOnlineNames.join(', ')
console.log(updatedUsers)

alert(`Сейчас в онлайн следующие пользователи: ${updatedUsers}`)
