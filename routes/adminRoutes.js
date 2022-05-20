var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');

router.get('/admin', adminController.adminRender.loginAdmin);
router.get('/admin/addProduct', adminController.adminRender.addProduct);
router.get('/admin/editProduct', adminController.adminRender.editProduct);
router.get('/admin/productos', productsController.listProducts);

module.exports = router;