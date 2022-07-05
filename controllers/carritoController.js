const db = require('../database/models');
const sequelize = db.sequelize;
//const productosController = require('./controllers/productosController');

module.exports = {
    addProduct: (req,res) => {
        let productoParticular = productosController.get(req, res);
        if(Array.isArray(req.session.carrito))
        req.session.carrito.productos.push(productoParticular);


    },
    deleteProduct: (req,res) => {
        //
    },
    cantModify: (req,res) => {
        //
    },
    checkDiscount: (req,res) => {
        //
    },
    confirmCompra: (req,res) => {
        //
    },
    emptyCarrito: (req,res) => {
        //
    },
};