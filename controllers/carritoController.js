const { productos } = require('./dbController');
const sql = require('./dbController');
const galleta = {
    buscar: (list, buscar) => {
        let elemento = list.find(element => element.id == buscar);
        return list.indexOf(elemento);
    },
    armar: (prod) => {
        let resultado = sql.productos.findProductById(prod.id);
        let devolver;
        Promise.all(([resultado]))
            .then(([retornar]) => {
                devolver = {
                    id: retornar.id,
                    nombre: retornar.nombre,
                    precio: retornar.precio,
                    descuento: retornar.descuento,
                    descripcion: retornar.descripcion,
                    imagen: retornar.imagen,
                    cant: prod.cant
                }
            })
            .then(() => {
                return devolver;
            })
    }
}

module.exports = {
    show: (req, res) => {
        //res.send(req.cookies.cart)
        if (req.cookies.cart) {
            let lista = req.cookies.cart;
            let productsList = [];
            let tiempo = lista.map((carro) => {
                let product = sql.productos.findProductById(carro.id);
                return Promise.all([product])
                    .then(([product]) => {
                        return({
                            id: product.id,
                            nombre: product.nombre,
                            precio: product.precio,
                            descuento: product.descuento,
                            descripcion: product.descripcion,
                            imagen: product.imagen,
                            cant: carro.cant
                        });
                    });
            });       
            //console.log(productsList);
            Promise.all([tiempo])
                .then(([tiem]) => {
                    console.log('***********');
                    console.log(tiem);
                    console.log('***********');
                    res.send(productsList);
                })
            /*lista.map((producto) => {
                let product = sql.productos.findProductById(producto.id);
                let retornar;
                Promise.all([product])
                    .then((prod) => {
                        retornar = prod;
                    })
                return retornar;
            })
            Promise.all([productos])
                .then((list) => { res.send(list); });*/
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