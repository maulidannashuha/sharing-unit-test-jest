const userModel = require('../models/userModel')
const cephStorage = require('../libs/cephStorage')

exports.index = (req, res) => {
    res.status(200).json({
        data: userModel.getAll()
    })
}

exports.show = (req, res) => {
    const { id } = req.params

    const user = userModel.getById(id)

    return res.json({
        data: user,
    })
}

exports.create = (req, res) => {
    const { name } = req.body

    const user = userModel.insert(name)

    return res.json({
        data: user,
        msg: 'Berhasil menambahkan user'
    })
}

exports.updateAvatar = async (req, res) => {
    const file = req.body
    const { id } = req.params

    const ceph = await cephStorage.uploadToCeph(file)

    const user = userModel.updateAvatar(id, ceph.path)

    return res.json({
        msg: 'Berhasil update avatar',
        path: user.path
    })
}