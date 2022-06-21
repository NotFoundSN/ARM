var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');
const { check, validationResult } = require('express-validator');

//VALIDACIONES
const registerUserValidator = [
    check("userName")
        .isLength({min:6}).withMessage("Nombre Vacio"),
    check("name")
        .notEmpty().withMessage("Nombre Vacio"),
    check("surname")
        .notEmpty().withMessage("Apellido Vacio"),
    check("mail")
        .isEmail().withMessage("Correo Invalido"),
    
];

//GET
router.get('/login',usuarioController.signIn);
router.get('/register',usuarioController.signUpForm);
router.get('/close',usuarioController.signOff);

//POST
router.post("/register",registerUserValidator,usuarioController.signUp);



module.exports = router;
