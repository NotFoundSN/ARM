const db = require('../database/models');
const sequelize = db.sequelize;

let AdminRender = {
    login: (req,res) => {
        res.render('admin/login');
        /*let usuario = {
            usuario = req.body.user;
            pass = req.body.password;
        }*/
    },

    add: (req,res) => {
        res.render('admin/addProduct');
        /*let producto = {
            nombre = req.body.name;
            precio = req.body.price;
            descuento = req.body.discount;
            descripcion = req.body.description;
            image = req.body.image;
        };*/
    },

    edit: function(req,res){
        db.Producto.findByPk(req.params.id).then((producto)=>{
            return res.render('admin/editProduct.ejs',{producto});
        });
        /*let producto = {
            nombre = req.body.name;
            precio = req.body.price;
            descuento = req.body.discount;
            descripcion = req.body.description;
            image = req.body.image;
        }*/
    },
};

let AdminFunctions = {
    add: function (req,res) {
        if(req.file === undefined){
            return res.render('admin/addProduct');
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
        db.Producto.findByPk(req.params.id).then((producto)=>{
            return res.render('admin/editProduct.ejs',{producto});
        });
    },

    delete: (req,res) => {
        //
    },
};

module.exports = {
    adminRender : AdminRender,
    adminFunctions : AdminFunctions,
};