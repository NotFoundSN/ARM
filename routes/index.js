var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');

/* GET home page. */
router.get('/', productosController.list);
router.get('/home', productosController.list);

module.exports = router;
