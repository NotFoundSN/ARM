const db = require('../database/models');
const sequelize = db.sequelize;

function respuesta(estado, dato) {
    return ({
        status: estado,
        data: dato
    })
};

module.exports = {
    productos: (req, res) => {                     //Devuelve los productos
        db.Producto.findAll()
            .then(productos => {
                res.json(respuesta(200, productos));
            })
    },
    producto: (req, res) => {                      //Devuelve 1 producto especifico
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                console.log(req.params.id);
                res.json(respuesta(200, producto));
            });
    },
    productosVendidos: (req, res) => {             //Devuelve cantidad de productos vendido de cada producto <--
        /*db.Producto.findByPk(req.params.id)
            .then(producto => {
                console.log(req.params.id);
                res.json(respuesta(200, producto));
            });*/
    },
    categorias: (req, res) => {                    //Devuelve lista de categorias
        db.Categoria.findAll()
            .then(categorias => {
                res.json(respuesta(200, categorias));
            })
    },
    productosEnCategoria: (req, res) => {         //Devuelve todos los productos de X categoria
        db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categoriasprod',
                required: true,
                where: {
                    id: req.params.id
                }
            }]
        })
            .then(prod => {
                res.json(respuesta(200, prod));
            })
            .catch(error => {
                res.json(respuesta(404, error));
            })
    },
    productosCategoria: (req, res) => {          //Devuelve cantidad de productos en cada categoria
        db.Categoria.findAll({
            include: [{
                model: db.Producto,
                as: 'productoscat',
                required: false,
            }],
        })
            .then(consulta => {
                let resultado = consulta.map(registro => {
                    console.log(registro.id);
                    console.log(registro);
                    console.log('------------------');
                    console.log(registro.productoscat);
                    console.log('------------------');
                    console.log('------------------');
                    let objeto = {
                        id : registro.id,
                        nombre : registro.nombre,
                        cant : registro.productoscat.length
                    }
                    return objeto;
                });
                res.json(respuesta(200, resultado));
            })
            .catch(error => {
                res.json(respuesta(200, error));
            })
    },
    usuarios: (req, res) => {                   //Devuelve cantidad de usuarios en la tabla
        db.Usuario.count()
            .then(user => {
                res.json(respuesta(200, user));
            })
    },
}