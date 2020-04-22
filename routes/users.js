const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/register', userController.post.register);
router.post('/login', userController.post.login);

module.exports = router;
