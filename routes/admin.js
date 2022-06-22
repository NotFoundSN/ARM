const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req,file,callback) => {
		callback(null, path.join(__dirname,'../public/img/productosImagenes'))
	},
	filename: (req,file,callback) => {
		callback(null,'image-' + Date.now() + path.extname(file.originalname))
	} 
});
const upload = multer({storage});
const adminController = require('../controllers/adminController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');


router.get('/',adminController.adminRender.home);
router.get('/login',adminController.adminRender.login);
router.get('/producto/edit/:id',adminAuthMiddleware,adminController.adminRender.edit);
router.get('/producto/new',adminAuthMiddleware,adminController.adminRender.add);
router.get('/producto/delete/:id',adminAuthMiddleware,adminController.adminRender.login);

router.post('/producto/add',adminAuthMiddleware,upload.single('image'), adminController.adminFunctions.add);
router.put('/producto/update',adminAuthMiddleware,upload.single('image'), adminController.adminFunctions.update);
router.delete('/producto/update',adminAuthMiddleware,upload.single('image'), adminController.adminFunctions.delete);

module.exports = router;