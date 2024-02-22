const { mockRequest, mockResponse } = require("../tests/testingUtils")
const userController = require('../controllers/userController')

describe('userController.index', () => {
    test('success to get all users', async () => {
        const req = mockRequest()
        const res = mockResponse()

        await userController.index(req, res)

        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            data: [
                {"id":2,"name":"John Doe 1","path":"path/to/file5"}
            ]
        })
    })
})