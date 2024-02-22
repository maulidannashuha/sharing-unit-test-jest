const { sum } = require('./calculator')

test('should sum 2+2=4', () => {
    const result = sum(2, 2)

    expect(result).toBe(4)
})

test('should sum 2+3=5', () => {
    const result = sum(2, 3)

    expect(result).toBe(5)
})