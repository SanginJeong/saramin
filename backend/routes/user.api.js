const express = require("express");
const router = express.Router();
const userController = require('../controller/user.controller');

router.post('/', userController.register);
router.post('/check', userController.checkUserId);
router.post('/login', userController.login);
router.get('/', userController.getUserInfo);
router.patch('/', userController.updateUserInfo);
router.delete('/', userController.delete);

module.exports = router;
