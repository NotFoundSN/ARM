var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController');

router.get('/carrito', function(req, res, next) {
  res.render('carrito.ejs');
})
router.get('/carrito/add/:id', cartController.addProduct);
