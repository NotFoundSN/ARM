var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');

router.get('/login',usuarioController.signIn);
router.get('/register',usuarioController.signUp);
router.get('/close',usuarioController.signOff);

module.exports = router;