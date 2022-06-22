const db = require('../database/models');
const { validationResult, body } = require("express-validator");
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');
const session = require("express-session");

module.exports = {
    // Iniciar sesion
    signIn: (req, res) => {
        db.Categoria.findAll()
            .then(categorias => {
                console.log(categorias);
                res.render('login.ejs', { categorias, req });
            })
    },
    login: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            db.Categoria.findAll()
                .then(categorias => {
                    console.log(categorias);
                    res.render('login.ejs', { mensajesDeError: errors.mapped(), categorias, req});
                })
        }

        db.Usuario.findAll()
        .then((usuario) => {
            let userData = usuario.find((user) => user.username == req.body.name);
            console.log(userData);
            if (userData) {
                let passValid = bcryptjs.compareSync(req.body.pass, userData.password)
                if (passValid) {
                    req.session.user = userData;
                    req.session.admin = false;
                    res.redirect('/');
                }
            }
        })
    },
    // Cerrar sesion
    signOff: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },
    // Registrarse
    signUpForm: (req, res) => {
        res.render('register.ejs', {req});
    },
    signUp: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            db.Categoria.findAll()
                .then(categorias => {
                    console.log(categorias);
                    res.render('register.ejs.ejs', { mensajesDeError: errores.mapped(), categorias, req });
                })
            //mostrar errores
        }
        else {
            if (req.body.pass == req.body.pass2) {
                //registrar en la base de datos
                db.Usuario.create({
                    nombre: req.body.name,
                    apellido: req.body.surname,
                    username: req.body.userName,
                    password: bcryptjs.hashSync(req.body.pass, 10),
                    fechanacimiento: req.body.bornDate,
                    email: req.body.mail
                });
                //redirecciono a login
                res.redirect('/usuario/login', {req});
            }
            else {
                db.Categoria.findAll()
                    .then(categorias => {
                        console.log(categorias);
                        errores = [{ msg: 'Ambas contrasenias deben coincidir' }];
                        res.render('register.ejs.ejs', { mensajesDeError: errores.mapped(), categorias, req});
                    })
                //mostrar errores de password no coinciden
            }

        }
        //res.render('register.ejs');
    },
    updateUser: (req, res) => {
        res.render('update');
    },
    getData: (req, res) => {
        res.render('info');
    },
}