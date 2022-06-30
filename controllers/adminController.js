const bcryptjs = require('bcryptjs');
const session = require("express-session");
const sql = require('./dbController');

module.exports = {
    Render: {
        login: (req, res) => {
            res.render('admin/login', { req });
        },

        home: (req, res) => {
            res.render('admin/home', { req });
        },

        add: (req, res) => {
            let categorias = sql.categorias.findCategorias();

            Promise.all([categorias]).then(([categorias]) => {
                res.render('admin/addProduct', { req, categorias });
            });
        },

        edit: function (req, res) {
            let categorias = sql.categorias.findCategorias();
            let producto = sql.productos.findProductById(req.params.id);
            Promise.all([categorias, producto])
                .then(([categorias, producto]) => {
                    let prod = producto
                    res.render('admin/editProduct.ejs', { producto, req, categorias });
                });
        },
        list: (req, res) => {
            let productos = sql.productos.findProducts();

            Promise.all([productos])
                .then(([productos]) => {
                    res.render('admin/listProducts.ejs', { productos, req });
                });
        }
    },
    Functions: {
        login: (req, res) => {
            let usuario = sql.usuarios.findUsersByUsername(req.body.name);

            Promise.all([usuario])
                .then(([userData]) => {
                    if (userData) {
                        let passValid = bcryptjs.compareSync(req.body.pass, userData.password);
                        if (passValid) {
                            req.session.user = userData;
                            req.session.admin = true;
                            res.redirect('/admin');
                        }
                        else {
                            res.send('no pass');
                        }
                    }
                    else {
                        res.send('no usuario');
                    }
                })
        },
        add: function (req, res) {
            if (req.file === undefined) {
                return res.render('admin/addProduct', { req });
            }
            let producto = sql.productos.createProduct({
                nombre: req.body.nombre,
                precio: req.body.precio,
                descuento: req.body.descuento,
                descripcion: req.body.descripcion,
                imagen: req.file.filename,
            });

            Promise.all([producto])
                .then(([product]) => {
                    let enlace = sql.categoriasProducto.create(product, req.body.categoria)
                    Promise.all([enlace])
                        .then(([enlace]) => {
                            res.redirect('/productos/' + product);
                        });
                });
        },

        update: (req, res) => {
            /*db.Producto.findByPk(req.params.id, { include: ['categorias', 'compras'] }).then((producto) => {
                return res.render('admin/editProduct.ejs', { producto });
            });*/
        },

        delete: (req, res) => {
            //
        },
    },
};