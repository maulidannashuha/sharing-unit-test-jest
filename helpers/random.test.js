const { generateRandomId } = require('./random')

test('should generate random nano id', () => {
    const randomId = generateRandomId()

    console.log(randomId)
})