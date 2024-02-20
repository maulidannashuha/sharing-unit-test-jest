const axios = require('axios');

exports.uploadToCeph = async (file) => {
    const ceph = await axios.post('http://localhost:3000/ceph/put-object', {
        file: file
    })

    return ceph.data
}