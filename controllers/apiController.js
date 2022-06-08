const db = require('../database/models');
const sequelize = db.sequelize;

function respuesta(dato) {
    return ({
        status: 200,
        data: dato
    })
};

module.exports = {
    productos: (req,res) => {
        db.Producto.findAll()
        .then(productos => {
            res.json(respuesta(productos));
        })
    },
    producto: (req,res) => {
        db.Producto.findByPk(req.params.id)
        .then(producto => {
            console.log(req.params.id);
            res.json(respuesta(producto));
        });
    },
    categorias: (req,res) => {
        db.Categoria.findAll()
        .then(categorias => {
            res.json(respuesta(categorias));
        })
    },
    /*search: (req,res) => {
        db.Producto.findAll({
            where: {
                rating : {
                    [db.Sequelize.Op.gte] : 2,
                }
            }
        })
        .then(productos => {
            res.render('index.ejs', {productos})
        })
    },*/
}