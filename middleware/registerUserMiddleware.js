const {body, check} = require("express-validator");

const registerUserMiddleware = [
    check("name")
        .notEmpty(),
    check("surname")
        .notEmpty(),
    check("email")
        .isEmail(),
    check("dni")
        .isLength({min:8}).isInt()
];

    /**** Fecha de nacimiento  ***
    if(trim(req.body.bornDate < Date.now()).length<1)
    {
        /* fecha de nacimiento invalida *
        errores++;
    }*/

module.exports = registerUserMiddleware;