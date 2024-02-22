const users = require('../db/user.json')
const fs = require('fs')

exports.getAll = () => {
    return users
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