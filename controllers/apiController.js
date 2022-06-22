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
    categorias: (req, res) => {                 //Devuelve lista de categorias
        db.Categoria.findAll()
            .then(categorias => {
                res.json(respuesta(200, categorias));
            })
    },
    productosCategoria: (req, res) => {         //Devuelve todos los productos de X categoria
        
    },
    usuarios: (req, res) => {         //Devuelve cantidad de usuarios en la tabla
        db.Usuario.count()
            .then(user => {
                res.json(respuesta(200, user));
            })
    },
}