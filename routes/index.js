var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();
const {adminRender, adminFunction} = require('../controllers/adminController');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/carritoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// ADMIN
router.get('/admin', adminRender.loginAdmin);
router.get('/admin/addProduct', adminRender.addProduct);
router.get('/admin/editProduct', adminRender.editProduct);

// User
router.get('/login', userController.signIn);
router.get('logout', userController.signOff);
router.get('/register', userController.signUp);
router.get('/modUser', userController.updateUser);
router.get('/user', userController.getData);

// Productos
router.get('/producto/:id', productsController.getProduct);
router.get('/productos', productsController.listProducts); //este no seria el index?
router.get('/producto/:nombre', productsController.searchProduct);

// Carrito
router.get('/carrito', function(req, res, next) {
  res.render('carrito.ejs');
})
router.get('/carrito/add/:id', cartController.addProduct);


/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
