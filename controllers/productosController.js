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
            /*where: {
                
            },*/
            include:[{
                model: CategoriaProducto,
                where: {
                    id_categoria: req.params.id
                }
            }]
        /*JOIN categoria_producto on products.id=categoria_producto.id_producto
WHERE categoria_producto.id_categoria=1*/
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