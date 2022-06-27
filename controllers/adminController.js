const db = require('../database/models');
const sequelize = db.sequelize;
const bcryptjs = require('bcryptjs');
const session = require("express-session");

let AdminRender = {
    login: (req, res) => {
        res.render('admin/login', { req });
    },

    home: (req, res) => {
        res.render('admin/home', { req });
    },

    add: (req, res) => {
        let categorias = db.Categoria.findAll().then((categorias) => {
            return categorias;
        });
        Promise.all([categorias]).then(([categorias]) => {
            res.render('admin/addProduct', { req, categorias });
        });
    },

    edit: function (req, res) {
        let categorias = db.Categoria.findAll()
            .then((categorias) => {
                return categorias;
            });
        let producto = db.Producto.findByPk(req.params.id)
            .then((producto) => {
                return producto
            });
        Promise.all([categorias, producto])
            .then(([categorias,producto]) => {
                res.render('admin/editProduct.ejs', { producto, req, categorias });
        });
    },
    list: (req, res) => {
        db.Producto.findAll()
            .then((productos) => {
                res.render('admin/listProducts.ejs', { productos, req });
            });
    }
};

let AdminFunctions = {
    login: (req, res) => {
        db.Usuario.findAll()
            .then((usuarios) => {
                const user = usuarios.find(usuario => usuario.username == req.body.name);
                console.log(user);
                if (user) {
                    let passValid = bcryptjs.compareSync(req.body.pass, user.password)
                    if (passValid && (user.admin == 1)) {
                        req.session.user = user;
                        req.session.admin = true;
                        console.log(req.session);
                        res.redirect('/admin');
                    }
                    else {
                        res.send('pass invalido');
                    }
                }
                else {
                    res.send('usuario no existe');
                }
            })
    },
    add: function (req, res) {
        if (req.file === undefined) {
            return res.render('admin/addProduct', { req });
        }

        let producto = db.Producto.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            moneda: req.body.moneda,
        })
            .catch((error) => {
                res.send(error);
            });

        Promise.all([producto]).then(([produc]) => {
            let categoria = db.CategoriaProducto.create({
                id_producto: produc.id,
                id_categoria: req.body.categoria
            }).catch((error) => {
                res.send(error);
            }).then(() => {
                res.redirect('/productos/' + produc.id);
            });
        });
    },

    update: (req, res) => {
        db.Producto.findByPk(req.params.id, { include: ['categorias', 'compras'] }).then((producto) => {
            return res.render('admin/editProduct.ejs', { producto });
        });
    },

    delete: (req, res) => {
        //
    },
};

module.exports = {
    adminRender: AdminRender,
    adminFunctions: AdminFunctions,
};