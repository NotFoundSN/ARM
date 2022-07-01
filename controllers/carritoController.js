const sql = require('./dbController');
const galleta = {
    buscar: (list, buscar) => {
        let elemento = list.find(element => element.id == buscar);
        return list.indexOf(elemento);
    },
    armar: (prod) => {
        let resultado = sql.productos.findProductById(prod.id);
        let devolver;
                devolver = {
                    id: retornar.id,
                    nombre: retornar.nombre,
                    precio: retornar.precio,
                    descuento: retornar.descuento,
                    descripcion: retornar.descripcion,
                    imagen: retornar.imagen,
                    cant: prod.cant
                }
    }
}

module.exports = {
    show: async (req, res) => {
        if (req.cookies.cart) {
            try {
                let productos = await req.cookies.cart.map(async (cart) => {
                    try {
                        let elemento = await sql.productos.findProductById(cart.id);
                        return elemento
                    } catch (error) {
                        console.error(error);
                    }
                })
                console.log(productos);
                res.send(productos);
            } catch (error) {
                console.error(error);
            }
        }
    },
    addProduct: (req, res) => {
        let lista = [];
        if (req.cookies.cart) {
            lista = req.cookies.cart;
            if (galleta.buscar(lista, req.params.id) > -1) {
                lista[galleta.buscar(lista, req.params.id)].cant += 1;
            }
            else {
                lista.push({
                    id: req.params.id,
                    cant: 1
                });
            }
        }
        else {
            lista.push({
                id: req.params.id,
                cant: 1
            });
        }
        res.cookie('cart', lista);
        res.redirect('/');
    },
    deleteProduct: (req, res) => {
        const lista = req.cookies.cart;
        if (galleta.buscar(lista, req.params.id) > -1) {
            lista.splice(galleta.buscar(lista, req.params.id), 1);
        }
        res.cookie('cart', lista);
    },
    cantModify: (req, res) => {
        //
    },
    checkDiscount: (req, res) => {
        //
    },
    confirmCompra: (req, res) => {
        //
    },
    emptyCarrito: (req, res) => {
        //
    },
};