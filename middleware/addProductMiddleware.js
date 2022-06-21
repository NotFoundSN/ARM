<<<<<<< HEAD
const {body, check} = require("express-validator");

const addProductMiddleware = [
    check("name")
        .notEmpty().whitMessage("el campo nombre no debe estar vacio"),
    check("price")
        .notEmpty().whitMessage("El campo precio no debe estar vacio")
];


/* const addProductMiddleware = (req,res,next) => {
=======
/***frontend**
product != null
price> 0
0<= discount <= 100
image sea url
**backend
product != null && no exista
price > 0
0<= discount <= 100
image sea url */
const addProductMiddleware = (req,res,next) => {
>>>>>>> 9c0fdf6f6cc0aa7fff7ffc1bb05d0e833413a15d
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