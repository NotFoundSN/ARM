var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');

const registerUserMiddleware = require('../middleware/registerUserMiddleware');

/* GET home page. */
router.get('/', productosController.list);
router.get('/home', (req,res) => {res.redirect('/');} );

module.exports = router;
