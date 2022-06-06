const db = require('../database/models');
const sequelize = db.sequelize;
    
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