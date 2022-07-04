const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/',carritoController.show);
router.post('/add/:id',carritoController.addProduct);
router.post('/delete/:id',carritoController.deleteProduct);
router.post('/append/:id', carritoController.appendProduct);
router.post('/reduce/:id', carritoController.subtractProduct);
router.post('/buy',authMiddleware,carritoController.buy);

module.exports = router;