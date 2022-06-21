var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');
const { check, validationResult } = require('express-validator');

//VALIDACIONES
const registerUserValidator = [
    check("name")
        .notEmpty().withMessage("Nombre Vacio"),
    check("surname")
        .notEmpty().withMessage("Apellido Vacio"),
    check("email")
        .isEmail().withMessage("Correo Invalido"),
    check("dni")
        .isLength({min:8}).isInt().withMessage("DNI invalido")
];

//GET
router.get('/login',usuarioController.signIn);
router.get('/register',usuarioController.signUpForm);
router.get('/close',usuarioController.signOff);

//POST
router.post("/register",registerUserValidator,usuarioController.signUp);



module.exports = router;
