const session = require("express-session");

module.exports = (req, res, next) => {
    console.log(req.session.admin);
    if(req.session.admin){
        console.log('entro y voy a hacer next');
        next();
    }
    else
    {
        console.log('no soy admin, voy a redireccionar');
        res.redirect('/admin/login');
    }
}