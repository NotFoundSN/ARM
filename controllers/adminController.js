const db = require('../database/models');
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');
const session = require("express-session");

let AdminRender = {
    login: (req,res) => {
        res.render('admin/login', {req});
    },

    home: (req,res) => {
        res.render('admin/home', {req});
    },

    add: (req,res) => {
        res.render('admin/addProduct', {req});
    },

    edit: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then((producto)=>{
            res.render('admin/editProduct.ejs',{producto, req});
        });
    },
};

let AdminFunctions = {
    login: (req,res) => {
        db.Usuario.findAll()
        .then((usuarios) => {
            const user = usuarios.find(usuario => usuario.nombre == req.body.name);
            console.log(user);
            if(user)
            {
                let passValid = bcryptjs.compareSync(req.body.pass, user.password)
                if(passValid && (user.admin==1))
                {
                    req.session.user = user;
                    req.session.admin = true;
                    console.log(req.session);
                    res.redirect('/admin', {req});
                }
                else
                {
                    res.send('pass invalido');
                }
            }
            else
            {
                res.send('usuario no existe');
            }
        })
    },
    add: function (req,res) {
        if(req.file === undefined){
            return res.render('admin/addProduct', {req});
        }

        db.Producto.create({
            nombre : req.body.nombre,
            precio : req.body.precio,
            descuento : req.body.descuento,
            descripcion : req.body.descripcion,
            imagen : req.file.filename,
            moneda : req.body.moneda,
        }).then((product)=>{
            res.redirect('/productos/' + product.id);
        }).catch((error)=>{
            res.send(error);
        });
    },

    update: (req,res) => {
        //
    },

    delete: (req,res) => {
        //
    },
};

module.exports = {
    adminRender : AdminRender,
    adminFunctions : AdminFunctions,
};