exports.create = (req, res) => {
    console.log(req.body.file)

    return res.json({
        msg: 'File berhasil diupload',
        path: 'path/to/file' + (Math.floor(Math.random() * 10) + 1)
    })
}