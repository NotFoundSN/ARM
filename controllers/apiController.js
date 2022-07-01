const sql = require('./dbController');

function respuesta(estado, dato) {
    return ({
        status: estado,
        data: dato
    })
};

module.exports = {
    productos: (req, res) => {                      //Devuelve los productos
        let productos = sql.productos.findProducts();
        Promise.all([productos])
            .then(([productos]) => {
                res.json(respuesta(200, productos))
            })
            .catch((error) => { console.log(error) });
    },
    producto: (req, res) => {                       //Devuelve 1 producto especifico
        let producto = sql.productos.findProductById(req.params.id)
        Promise.all([producto])
            .then(([producto]) => {
                (producto)
                    ? res.json(respuesta(200, producto))
                    : res.json(respuesta(404, 'Producto no existe'))
            })
            .catch((error) => { console.log(error) });
    },
    productosVendidos: (req, res) => {             //Devuelve cantidad de productos vendido de cada producto <--
        /*db.Producto.findByPk(req.params.id)
            .then(producto => {
                console.log(req.params.id);
                res.json(respuesta(200, producto));
            });*/
    },
    categorias: (req, res) => {                    //Devuelve lista de categorias
        let categorias = sql.categorias.findCategorias();
        Promise.all([categorias])
            .then(([categorias]) => {
                res.json(respuesta(200, categorias))
            });
    },
    productosEnCategoria: (req, res) => {         //Devuelve todos los productos de X categoria
        let lista = sql.productos.findProductsByCategoria(req.params.id);
        Promise.all([lista])
            .then(([lista]) => {
                (lista)
                    ? res.json(respuesta(200, lista))
                    : res.json(respuesta(404, 'lista vacia'))
            })
            .catch((error) => { console.log(error) });
    },
    productosCategoria: (req, res) => {          //Devuelve cantidad de productos en cada categoria
        let lista = sql.categorias.findCategoriasConProductos();
        Promise.all([lista])
            .then(([lista]) => {
                let resultado = lista.map(registro => {
                    let objeto = {
                        id: registro.id,
                        nombre: registro.nombre,
                        cant: registro.productoscat.length
                    }
                    return objeto;
                });
                res.json(respuesta(200, resultado));
            })
            .catch(error => {
                res.json(respuesta(200, error));
            });
    },
    usuarios: (req, res) => {                   //Devuelve cantidad de usuarios en la tabla
        let cant = sql.usuarios.countUsers();
        Promise.all([cant])             
        .then(([valor]) => {
            res.json(respuesta(200, valor));
        })
        .catch(error => {
            res.json(respuesta(200, error));
        });
    },
}