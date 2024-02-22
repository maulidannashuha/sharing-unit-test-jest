const { generateRandomId } = require('./random')

test('should generate random nano id', () => {
    const randomId = generateRandomId()

    expect(randomId).toBe('randomid')
})