const db = require('../database/models');
const sequelize = db.sequelize;

function respuesta(estado, dato) {
    return ({
        status: estado,
        data: dato
    })
};

module.exports = {
    productos: (req, res) => {                  //Devuelve los productos
        db.Producto.findAll()
            .then(productos => {
                res.json(respuesta(200, productos));
            })
    },
    producto: (req, res) => {                   //Devuelve 1 producto especifico
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                console.log(req.params.id);
                res.json(respuesta(200, producto));
            });
    },
    productosVendidos: (req, res) => {          //Devuelve cantidad de productos vendido de cada producto <--
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                console.log(req.params.id);
                res.json(respuesta(200, producto));
            });
    },
    categorias: (req, res) => {                 //Devuelve lista de categorias
        db.Categoria.findAll()
            .then(categorias => {
                res.json(respuesta(200, categorias));
            })
    },
    productosEnCategoria: (req, res) => {         //Devuelve cantidad de productos en cada categoria  <==
        db.CategoriaProducto.findAll()
            .then(datos => {
                res.json(respuesta(200, datos));
            })
    },
    productosCategoria: (req, res) => {         //Devuelve todos los productos de X categoria
        db.CategoriaProducto.findAll()
            .then(datos => {
                res.json(respuesta(200, datos));
            })
    },
    usuarios: (req, res) => {         //Devuelve cantidad de usuarios en la tabla
        db.Usuario.count()
            .then(user => {
                res.json(respuesta(200, user));
            })
    },
}