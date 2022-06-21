const {body, check} = require("express-validator");

const addProductMiddleware = [
    check("name")
        .notEmpty().whitMessage("el campo nombre no debe estar vacio"),
    check("price")
        .notEmpty().whitMessage("El campo precio no debe estar vacio")
];


/* const addProductMiddleware = (req,res,next) => {
    let errores = 0;

    //**** nombre  ****
    if(trim(req.body.name).length<1)
    {
        //* nombre vacio *
        errores++;
    }
    //**** precio  ****
    if(req.body.price>0)
    {
        //* precio invalido *
        errores++;
    }
    //**** descuento  ****
    if((req.body.discount<0) || (req.body.discount>100))
    {
        //* descuento invalido *
        errores++;
    }
    //**** precio  ****
    if(trim(req.body.image).length<1)
    {
        //* link invalido *
        errores++;
    }

    if(errores==0)
    {
        next();
    }
    else
    {
        res.send('Tiene errores en el formulario');
    }
};*/
module.exports = addProductMiddleware;