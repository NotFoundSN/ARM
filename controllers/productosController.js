const sql = require('./dbController');

module.exports = {
    list: (req,res) => {
        let productos = sql.productos.findProducts();
        let categorias = sql.categorias.findCategorias();

        Promise.all([productos, categorias])
        .then(([productos, categorias])=>{
            res.render('index.ejs', {productos, categorias, req})    
        })
    },
    get: (req,res) => {
        let producto = sql.productos.findProductById(req.params.id);
        let categorias = sql.categorias.findCategorias();

        Promise.all([producto, categorias])
        .then(([producto, categorias])=>{
            res.render('productoDetalles.ejs', {producto, categorias, req});    
        });
    },
    filter: (req,res) => {
        let productos = sql.productos.findProductsByCategoria(req.params.id);
        let categorias = sql.categorias.findCategorias();

        Promise.all([productos,categorias])
        .then(([productos,categorias])=>{
            res.render('index.ejs', {productos, categorias, req});
        });
    },
}