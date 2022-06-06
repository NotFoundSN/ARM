var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
	destination: (req,file,callback) => {
		callback(null, path.join(__dirname,'../public/img/productosImagenes'))
	},
	filename: (req,file,callback) => {
		callback(null,'image-' + Date.now() + path.extname(file.originalname))
	}
});
var upload = multer({storage});

router.get('/',adminController.adminRender.login);
router.get('/login',adminController.adminRender.login);
router.get('/producto/new',adminController.adminRender.addProduct);
router.get('/producto/edit/:id',adminController.adminRender.login);
router.get('/producto/delete/:id',adminController.adminRender.login);

router.get('/producto/add',upload.single('image'), adminController.adminFunctions.addProducto);
module.exports = router;