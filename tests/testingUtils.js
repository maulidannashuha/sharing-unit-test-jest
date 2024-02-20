const mockRequest = (body = {}, params = {}, query = {}, file = undefined, files = undefined) => {
    return {
        body, params, query, file, files
    }
}

const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
}

module.exports = {
    mockRequest, mockResponse
}