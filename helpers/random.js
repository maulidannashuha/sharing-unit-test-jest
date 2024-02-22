const { nanoid } = require('nanoid')

exports.generateRandomId = () => {
    return nanoid()
}