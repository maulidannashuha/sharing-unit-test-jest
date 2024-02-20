var express = require('express');
var router = express.Router();
const fileController = require('../controllers/fileController')

router.post('/put-object', fileController.create);

module.exports = router;
