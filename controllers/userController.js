module.exports = {
    // Iniciar sesion
    signIn: (req,res) => {
        res.render('login');
    },
    // Cerrar sesion
    signOff: (req,res) => {
        res.render('index');
    },
    // Registrarse
    signUp: (req,res) => {
        res.render('userRegister.ejs');
        /*let usuario = {
                        nombre = req.body.name;
                        apellido = req.body.surname;
                        mail = req.body.mail;
                        pass = req.body.pass;
                        pass2 = req.body.pass2;
                        dni = req.body.dni;
                        fecha = req.body.bornDate;
                    }*/
    },
    updateUser: (req,res) => {
        res.render('update');
    },
    getData: (req,res) => {
        res.render('info');
    },
}