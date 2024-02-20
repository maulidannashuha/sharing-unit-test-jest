var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.post('/:id/update-avatar', userController.updateAvatar);

module.exports = router;
