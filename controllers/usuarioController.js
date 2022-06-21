const db = require('../database/models');
const { validationResult, body } = require("express-validator");
const sequelize = db.sequelize;
    
module.exports = {
    // Iniciar sesion
    signIn: (req,res) => {
        res.render('login.ejs');
    },
    login: (req,res) => {
        let errors = validationResult(req);

        if(!errors.isEmpty()){
            this.signIn();
        }

        db.Usuario.findAll().then((usuario) => {
            let userData = users.find((user) => user.username == req.body.username);
            if(userData){
                let passValid = bcryptjs.compareSync(req.body.password, userToLogin.password)
                if(passValid){
                    req.session.user = userData;
                    res.render('index.ejs');
                }
            }

        })
    },
    // Cerrar sesion
    signOff: (req,res) => {
        res.render('index.ejs');
    },
    // Registrarse
    signUp: (req,res) => {
        res.render('register.ejs');
    },
    updateUser: (req,res) => {
        res.render('update');
    },
    getData: (req,res) => {
        res.render('info');
    },
}