const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: (req,res) => {
        db.Producto.findAll()
        .then(productos => {
            console.log(productos);
            db.Categoria.findAll()
            .then(categorias => {
                console.log(categorias);
                res.render('index.ejs', {productos, categorias, req})
            })
            
        })
    },
    get: (req,res) => {
        db.Producto.findByPk(req.params.id)
        .then(producto => {
            console.log(req.params.id);
            db.Categoria.findAll()
            .then(categorias => {
                console.log(categorias);
                res.render('productoDetalles.ejs', {producto, categorias, req});
            })
            
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
            db.Categoria.findAll()
            .then(categorias => {
                console.log(categorias);
                res.render('index.ejs', {productos, categorias, req})
            })
        })
    },
}