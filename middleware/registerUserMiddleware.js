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
=======
/***frontend**
trim(name).length > 0
trim(surname).length > 0
mail != null && formato
pass != null && segura
pass2 == pass && segura
dni typeof Number && dni.length >=8
bornDate(fechanacimiento) < now()
**backend
trim(name).length > 0
trim(surname).length > 0
mail != null && formato && no exista en la base
pass != null && segura?
dni typeof Number && dni.length >=8
bornDate(fechanacimiento) < now()*/
/*const registerUserMiddleware = (req, res, next) => {
    let errores=0;
    /**** Nombre  ****
    if(trim(req.body.name).length<1)
    {
        /* nombre vacio *
        errores++;
    }
    /**** Apellido  ****
    if(trim(req.body.surname).length<1)
    {
        /* apellido vacio *
        errores++;
    }
    /**** Mail  ****
    if(trim(req.body.mail).length<1)
    {
        /* mail vacio *
        errores++;
    }
    /**** DNI  ****
    if(typeof req.body.dni !== 'number')
    {
        /* tipo de dni invalido *
        errores++;
    }
    else if ((req.body.dni.length!=8))
    {
        /* cantidad de digitos invalido *
        errores++;
    }
    /**** Fecha de nacimiento  ****
>>>>>>> 9c0fdf6f6cc0aa7fff7ffc1bb05d0e833413a15d
    if(trim(req.body.bornDate < Date.now()).length<1)
    {
        /* fecha de nacimiento invalida *
        errores++;
    }*/

module.exports = registerUserMiddleware;