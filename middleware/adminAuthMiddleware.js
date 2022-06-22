module.exports = (req, res, next) => {
    if(!(req.session.rol=='admin')){
        res.redirect('/admin/login');
    }
    next();
}