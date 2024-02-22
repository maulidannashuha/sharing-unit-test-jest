const { mockRequest, mockResponse } = require("../tests/testingUtils")
const userController = require('../controllers/userController')

jest.mock('../models/userModel')

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

describe('userController.create', () => {
    test('success to create new user', async () => {
        const req = mockRequest({
            name: 'Doe'
        })
        const res = mockResponse()

        await userController.create(req, res)

        expect(res.status).toBeCalledWith(201)
        expect(res.json).toBeCalledWith({
            data: {"id":10,"name":"Doe","path":"path/to/file5"},
            msg: 'Berhasil menambahkan user'
        })
    })

    test('failed validation missing name when create new user', async () => {
        const req = mockRequest()
        const res = mockResponse()

        await userController.create(req, res)

        expect(res.status).toBeCalledWith(422)
        expect(res.json).toBeCalledWith({
            msg: 'Name is required'
        })
    })
})