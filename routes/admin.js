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

router.get('/',adminAuthMiddleware,adminController.Render.home);
router.get('/login',adminController.Render.login);
router.get('/producto/edit/:id',adminAuthMiddleware,adminController.Render.edit);
router.get('/producto/new',adminAuthMiddleware,adminController.Render.add);
router.get('/producto/delete/:id',adminAuthMiddleware,adminController.Render.login);
router.get('/producto/list',adminAuthMiddleware,adminController.Render.list);

//por si se buguea, y queda en estos links de funciones
router.get('/producto/add',adminAuthMiddleware,adminController.Render.home);
router.get('/producto/update',adminAuthMiddleware,adminController.Render.home);
router.get('/producto/update',adminAuthMiddleware,adminController.Render.home);

router.post('/login',adminController.Functions.login);
router.post('/producto/add',adminAuthMiddleware,upload.single('image'), adminController.Functions.add);
router.put('/producto/update',adminAuthMiddleware,upload.single('image'), adminController.Functions.update);
router.delete('/producto/update',adminAuthMiddleware,upload.single('image'), adminController.Functions.delete);

module.exports = router;