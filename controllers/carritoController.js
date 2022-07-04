const sql = require('./dbController');
const galleta = {                                                       //objeto con funciones para la cookie
    buscar: (list, buscar) =>                                           //busca el indice de un elemento en la cookie
    {
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
    show: async (req, res) =>                                               //Muestra/Renderiza el carrito
    {
        if (req.cookies.cart) {
            let indices = req.cookies.cart.map((cart) => {
                return parseInt(cart.id);
            });
            let lista = await sql.productos.findProductsById(indices);
            let productos = lista.map((elemento) => {
                return {
                    id: elemento.id,
                    nombre: elemento.nombre,
                    precio: elemento.precio,
                    descuento: elemento.descuento,
                    imagen: elemento.imagen,
                    cant: req.cookies.cart[galleta.buscar(req.cookies.cart, elemento.id)].cant,
                }
            });
            res.render('carrito/cart', { req, productos });
        }
    },
    addProduct: (req, res) =>                                               //Agrega un producto a la cookie del carrito
    {
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
    deleteProduct: (req, res) =>                                            //Borra un producto de la cookie
    {
        const lista = req.cookies.cart;
        if (galleta.buscar(lista, req.params.id) > -1) {
            lista.splice(galleta.buscar(lista, req.params.id), 1);
        }
        res.cookie('cart', lista);
        res.redirect('/carrito');
    },
    subtractProduct: (req, res) =>                                          //Resta 1 a la cantidad de un producto en la cookie
    {
        let lista = [];
        if (req.cookies.cart) {
            lista = req.cookies.cart;
            if (galleta.buscar(lista, req.params.id) > -1) {
                if (lista[galleta.buscar(lista, req.params.id)].cant > 1) {
                    lista[galleta.buscar(lista, req.params.id)].cant -= 1;
                }
                else {
                    lista.splice(galleta.buscar(lista, req.params.id), 1);
                }
            }
            else {
                lista.push({
                    id: req.params.id,
                    cant: 1
                });
            }
        }
        res.cookie('cart', lista);
        res.redirect('/carrito');
    },
    appendProduct: (req, res) =>                                            //Aumenta 1 a la cantidad de un producto en la cookie
    {
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
        res.redirect('/carrito');
    },
    buy: async (req, res) => {
        if (req.cookies.cart) {
            let indices = req.cookies.cart.map((cart) => {
                return parseInt(cart.id);
            });
            let lista = await sql.productos.findProductsById(indices);
            let productos = lista.map((elemento) => {
                return {
                    id: elemento.id,
                    nombre: elemento.nombre,
                    precio: elemento.precio,
                    descuento: elemento.descuento,
                    imagen: elemento.imagen,
                    cant: req.cookies.cart[galleta.buscar(req.cookies.cart, elemento.id)].cant,
                }
            });
            productos.forEach(async (producto) => {
                let compra = await sql.compras.create({
                    userId: req.session.user.id,
                    producto: producto.id,
                    precio: producto.precio,
                    descuento: producto.descuento,
                    cantidad: producto.cant
                })
            })
        }
        res.send('compra');
    }
};