var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController');

router.get('/',carritoController.show);
router.post('/add/:id',carritoController.addProduct);
//router.delete('/delete/:id',carritoController.delete);
//router.post('/confirm',carritoController.confirm);

module.exports = router;