const express = require('express');
const router = express.Router();
const { handleRegister, handleLogin } = require('../controllers/loginController');

router.post('/register', handleRegister);

router.post('/', handleLogin);

module.exports = router;