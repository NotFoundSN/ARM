module.exports = {
    // Iniciar sesion
    signIn: (req,res) => {
        res.render('login');
        //
    },
    // Cerrar sesion
    signOff: (req,res) => {
        res.render('index');
    },
    // Registrarse
    signUp: (req,res) => {
        res.render('signup');
    },
    updateUser: (req,res) => {
        res.render('update');
    },
    getData: (req,res) => {
        res.render('info');
    },
}