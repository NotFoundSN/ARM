var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var apiController = require('../controllers/apiController');

//router.get('/');
router.get('/productos', apiController.productos);                  //devuelve los productos
router.get('/productos/:id', apiController.producto);               //devuelve 1 producto especifico
router.get('/categorias', apiController.categorias);                //devuelve lista de categorias
router.get('/categorias/:id', apiController.productosCategoria);    //devuelve todos los productos de X categoria
router.get('/usuarios', apiController.usuarios);                    //devuelve cantidad de usuarios en la tabla

module.exports = router;