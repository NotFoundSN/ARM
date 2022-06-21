const db = require('../database/models');
const sequelize = db.sequelize;

function respuesta(estado, dato) {
    return ({
        status: estado,
        data: dato
    })
};

module.exports = {
    //Listar productos
    productos: (req, res) => {
        db.Producto.findAll()
            .then(productos => {
                res.json(respuesta(200, productos));
            })
    },
    //Listar 1 producto en especifico
    producto: (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                console.log(req.params.id);
                res.json(respuesta(200, producto));
            });
    },
    //Agregar producto nuevo
    addProducto: (req, res) => {
        let imagenFile = req.file;
        if (imagenFile === undefined) {
            return res.json(respuesta(406, 'Error al subir la imagen'));
        }
        db.Producto.create({
            nombre : req.body.nombre,
            precio : req.body.precio,
            descuento : req.body.descuento,
            descripcion : req.body.descripcion,
            imagen : req.file.filename,
            moneda : req.body.moneda,
        }).then(() => {
            return res.json(respuesta(201, this.producto))
        })
            .catch(error => res.json(400, error));
    },
    //Borrar producto especifico
    deleteProduct: (req, res) => {
        //
    },
    //Editar producto especifico
    editProduct: (req, res) => {
        //
    },
    //Listar Categorias
    categorias: (req, res) => {
        db.Categoria.findAll()
            .then(categorias => {
                res.json(respuesta(200, categorias));
            })
    },
}