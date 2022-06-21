var path = require('path');
var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
	destination: (req,file,callback) => {
		callback(null, path.join(__dirname,'../public/img/productosImagenes'))
	},
	filename: (req,file,callback) => {
		callback(null,'image-' + Date.now() + path.extname(file.originalname))
	} 
});
var upload = multer({storage});
var adminController = require('../controllers/adminController');

router.get('/',adminController.adminRender.home);
router.get('/login',adminController.adminRender.login);
router.get('/producto/edit/:id',adminController.adminRender.edit);
router.get('/producto/new',adminController.adminRender.add);
router.get('/producto/delete/:id',adminController.adminRender.login);

router.post('/producto/add',upload.single('image'), adminController.adminFunctions.add);
router.put('/producto/update',upload.single('image'), adminController.adminFunctions.update);
router.delete('/producto/update',upload.single('image'), adminController.adminFunctions.delete);
module.exports = router;