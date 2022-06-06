var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');

router.get('/',productosController.list);
router.get('/:id',productosController.get);
router.get('/search/:categories',productosController.search);

module.exports = router;