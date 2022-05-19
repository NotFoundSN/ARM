var express = require('express');
var router = express.Router();
const {adminRender, adminFunction} = require('../controllers/adminController');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/carritoController');

const registerUserMiddleware = require('../middleware/registerUserMiddleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/home', function(req, res, next) {
  res.render('index');
});

// ADMIN
router.get('/admin', adminRender.loginAdmin);
router.post('/admin', /* logica para login */)

router.get('/admin/addProduct', adminRender.addProduct);
router.post('/admin/addProduct', /* logica agregar producto*/);

router.get('/admin/editProduct/:id', adminRender.editProduct);
router.put('/admin/editProduct/:id', /* logica de editar producto*/);

router.delete(/*borrar*/)


// User
router.get('/login', userController.signIn);
router.post('/login', /* logica login */)
router.get('logout', userController.signOff);

router.get('/register', userController.signUp);
router.post('/register', registerUserMiddleware, /*logica registro*/);

router.get('/user', userController.getData);
router.put('/user/update', userController.updateUser);

// Productos
router.get('/productos/:id', productsController.getProduct);
router.get('/productos', productsController.listProducts); 
router.get('/productos/:nombre', productsController.searchProduct);

// Carrito
router.get('/carrito', function(req, res, next) {
  res.render('carrito.ejs');
})
router.get('/carrito/add/:id', cartController.addProduct);


/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
