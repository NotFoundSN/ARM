const db = require('../database/models');
const { validationResult, body } = require("express-validator");
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');

module.exports = {
    // Iniciar sesion
    signIn: (req, res) => {
        db.Categoria.findAll()
            .then(categorias => {
                console.log(categorias);
                res.render('login.ejs', { categorias });
            })
    },
    login: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            db.Categoria.findAll()
                .then(categorias => {
                    console.log(categorias);
                    res.render('login.ejs', { mensajesDeError: errors.mapped(), categorias });
                })
        }

        db.Usuario.findAll().then((usuario) => {
            let userData = users.find((user) => user.username == req.body.name);
            if (userData) {
                let passValid = bcryptjs.compareSync(req.body.password, userToLogin.password)
                if (passValid) {
                    req.session.user = userData;
                    res.render('index.ejs');
                }
            }
        })
    },
    // Cerrar sesion
    signOff: (req, res) => {
        res.render('index.ejs');
    },
    // Registrarse
    signUpForm: (req, res) => {
        res.render('register.ejs');
    },
    signUp: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            db.Categoria.findAll()
                .then(categorias => {
                    console.log(categorias);
                    res.render('register.ejs.ejs', { mensajesDeError: errores.mapped(), categorias });
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
                res.redirect('/usuario/login');
            }
            else {
                db.Categoria.findAll()
                    .then(categorias => {
                        console.log(categorias);
                        errores = [{ msg: 'Ambas contrasenias deben coincidir' }];
                        res.render('register.ejs.ejs', { mensajesDeError: errores.mapped(), categorias });
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