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
    let errores = 0;

    /**** nombre  ****/
    if(trim(req.body.name).length<1)
    {
        /* nombre vacio */
        errores++;
    }
    /**** precio  ****/
    if(req.body.price>0)
    {
        /* precio invalido */
        errores++;
    }
    /**** descuento  ****/
    if((req.body.discount<0) || (req.body.discount>100))
    {
        /* descuento invalido */
        errores++;
    }
    /**** precio  ****/
    if(trim(req.body.image).length<1)
    {
        /* link invalido */
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
};

module.exports = addProductMiddleware;