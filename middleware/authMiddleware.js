const session = require("express-session");

module.exports = (req, res, next) => {
    if(req.session.user){
        next();
    }
    else
    {
        res.redirect('/usuario/login');
    }
}