const loginMiddleware = (req,res,next) => {
    let errores = 0;

    /**** usuario  ****/
    if(trim(req.body.user).length<1)
    {
        /* usuario vacio */
        errores++;
    }
    /**** contrasenia  ****/
    if(trim(req.body.password).length<1)
    {
        /* usuario vacio */
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

module.exports = loginMiddleware;