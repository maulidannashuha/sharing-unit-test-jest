const userModel = require('../models/userModel')

exports.index = (req, res) => {
    res.status(200).json({
        data: userModel.getAll()
    })
}

exports.create = (req, res) => {
    const { name } = req.body

    // if (!name)
    //     return res.status(422).json({
    //         msg: 'Name is required'
    //     })

    const user = userModel.insert(name)

    return res.status(201).json({
        data: user,
        msg: 'Berhasil menambahkan user'
    })
}