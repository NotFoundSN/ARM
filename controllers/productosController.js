const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: (req,res) => {
        let productos = db.Producto.findAll()
        .then(productos => {
            return productos;
        })
        let categorias = db.Categoria.findAll().then(categorias => {
            return categorias;
        })

        Promise.all([productos, categorias]).then(([productos, categorias])=>{
            res.render('index.ejs', {productos, categorias, req})    
        })
    },
    get: (req,res) => {
        let producto = db.Producto.findByPk(req.params.id)
        .then(producto => {
            return producto;
        });
        let categorias = db.Categoria.findAll().then(categorias => {
            return categorias;
        });

        Promise.all([producto, categorias]).then(([producto, categorias])=>{
            res.render('productoDetalles.ejs', {producto, categorias, req});    
        });
    },
    search: (req,res) => {
        let productos = db.Producto.findAll({
            include:['categorias'],
        }).then(productos => {
            console.log(productos);
            return productos.filter((product)=>{
                return product.categorias.filter((categoria)=>{
                    return categoria.id == req.params.id;
                }).length;
            });
        });

        let categorias = db.Categoria.findAll().then(categorias => {
            return categorias;
        });

        Promise.all([productos,categorias]).then(([productos,categorias])=>{
            res.render('index.ejs', {productos, categorias, req});
        });
    },
}