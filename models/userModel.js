const users = require('../db/user.json')
const fs = require('fs')

exports.getAll = () => {
    return users
}

exports.getById = (id) => {
    return users.filter(user => user.id == id)
}

exports.insert = (name) => {
    const user = {
        id: users.length+1,
        name,
        path: 'default-path'
    }

    users.push(user)

    fs.writeFileSync('./db/user.json', JSON.stringify(users), 'utf8')

    return user
}

exports.updateAvatar = (id, path) => {
    console.log(users)
    const index = users.findIndex((user) => {
        return user.id == id
    })
    users[index].path = path

    fs.writeFileSync('./db/user.json', JSON.stringify(users), 'utf8')

    return users[index]
}