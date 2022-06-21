const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: (req,res) => {
        db.Producto.findAll()
        .then(productos => {
            console.log(productos);
            res.render('index.ejs', {productos})
        })
    },
    get: (req,res) => {
        db.Producto.findByPk(req.params.id)
        .then(producto => {
            console.log(req.params.id);
            res.render('productoDetalles.ejs', {producto});
        });
    },
    search: (req,res) => {
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
    },
}