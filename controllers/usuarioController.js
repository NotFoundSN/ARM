const { validationResult, body } = require("express-validator");
const bcryptjs = require('bcryptjs');
const session = require("express-session");

const sql = require('./dbController');

/*    
    updateUser: (req, res) => {
        res.render('update');
    },
    getData: (req, res) => {
        res.render('info');
    }
*/
module.exports = {
    render: {
        login: (req, res) => {                                         //Renderiza Login
            res.render('login.ejs', { req });
        },
        register: (req, res) => {                                 //Renderiza formulario de registracion
            res.render('register.ejs', { req });
        },
    },
    function: {
        login: (req, res) => {                                          //Accion de login
            let errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                res.render('login.ejs', { mensajesDeError: errors.mapped(), req });
            }
            let usuario = sql.usuarios.findUsersByUsername(req.body.name);
    
            Promise.all([usuario])
                .then(([userData]) => {
                    if (userData) {
                        let passValid = bcryptjs.compareSync(req.body.pass,userData.password);
                        if (passValid) {
                            req.session.user = userData;
                            req.session.admin = false;
                            console.log(req.session);
                            res.redirect('/');
                        }
                        else
                        {
                            res.send('no pass');
                        }
                    }
                    else {
                        res.send('no usuario');
                    }
                })
        },
        signOff: (req, res) => {                                    //Cerrar sesion
            req.session.destroy();
            res.redirect('/');
        },
        register: (req, res) => {                                     //Accion de registrarse
            let errores = validationResult(req);
    
            if (!errores.isEmpty()) {
                res.render('register.ejs', { mensajesDeError: errores.mapped(), req });
            }
            else {
                let correo = sql.usuarios.findUsersByMail(req.body.mail);
                let apodo = sql.usuarios.findUsersByUsername(req.body.userName);
    
                Promise.all([correo, apodo])
                    .then(([correo, apodo]) => {
                        console.log('-------------');
                        console.log(correo);
                        console.log(apodo);
                        console.log('-------------');
                        if (correo) {
                            console.log(correo);
                            //mail en uso
                            res.send('mail en uso');
                        }
                        else if (apodo) {
                            //el username esta en uso
                            res.send('username en uso');
                        }
                        else if (req.body.pass == req.body.pass2) {              //registrar en la base de datos
                            let newId = sql.usuarios.createUser({
                                nombre: req.body.name,
                                apellido: req.body.surname,
                                username: req.body.userName,
                                password: bcryptjs.hashSync(req.body.pass, 10),
                                fechanacimiento: req.body.bornDate,
                                email: req.body.mail,
                            });
                            Promise.all([newId])
                                .then(([id]) => {
                                    console.log(id);
                                    res.redirect('/usuario/login');                //redirecciono a login
                                })
                                .catch((error) => console.log(error));
                        }
                        else {
                            errores = [{ msg: 'Ambas contrasenias deben coincidir' }];
                            res.render('register.ejs', { mensajesDeError: errores.mapped(), req });
                            //mostrar errores de password no coinciden
                        }
                    })
            }
        },
    }
}