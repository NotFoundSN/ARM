const db = require('../database/models');
const sequelize = db.sequelize;
const {validationResult} = require("express-validator");
    
module.exports = {
    // Iniciar sesion
    signIn: (req,res) => {
        res.render('login.ejs');
    },
    // Cerrar sesion
    signOff: (req,res) => {
        res.render('index.ejs');
    },
    // Registrarse
    signUpForm: (req,res) => {
        res.render('register.ejs');
    },
    signUp: (req,res) => {
        let errores = validationResult(req);
        console.log(errores);
        if (!errores.isEmpty()){
            res.send("fallo algo");
            //mostrar errores
        }
        else
        {
            res.send("todo ok");
            //registrarlo
        }
        //res.render('register.ejs');
    },
    updateUser: (req,res) => {
        res.render('update');
    },
    getData: (req,res) => {
        res.render('info');
    },
}