const db = require('../database/models');
const sequelize = db.sequelize;

let AdminRender = {
    login: (req,res) => {
        res.render('admin/login');
    },
    addProduct: (req,res) => {
        res.render('admin/addProduct');
    },
    editProduct: function(req,res){
        res.render('admin/editProduct');
    },
};

let AdminFunctions = {
    addProducto: function (req,res) {
        let imagenFile = req.file;
        if(imagenFile === undefined){
            return res.send('No ingreso la imagen del producto');
        }
        db.Producto.create( {
            nombre : req.body.nombre,
            precio : req.body.precio,
            descuento : req.body.descuento,
            descripcion : req.body.descripcion,
            imagen : req.body.imagen,
        }).then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error));
    },
    deleteProduct: (req,res) => {
        //
    },
    editProduct: (req,res) => {
        //
    },
};

module.exports = {
    adminRender : AdminRender,
    adminFunctions : AdminFunctions,
};