var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var apiController = require('../controllers/apiController');

//router.get('/');
router.get('/productos', apiController.productos);
router.get('/productos/:id', apiController.producto);
router.get('/categorias', apiController.categorias);

module.exports = router;