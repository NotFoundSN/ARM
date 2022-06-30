const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    /**************/
    /* CATEGORIAS */
    /**************/
    categorias: {
        findCategorias: () => {                         //Busca todas las categorias
            return db.Categoria.findAll()
                .then((categorias) => {
                    return categorias
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        findCategoriasConProductos: () => {
            return db.Categoria.findAll({
                include: [{
                    model: db.Producto,
                    as: 'productoscat',
                    required: false,
                }],
            })
                .then((categorias) => {
                    return categorias
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        createCategoria: (cat) => {                    //Crea una nueva categoria                 
            return db.Categoria.create(cat)
                .then((newCat) => {
                    return newCat.id;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateCategoria: (idCat, cat) => {             //Modifica una categoria
            return db.Categoria.update({
                cat
            },
                {
                    where: { id: idCat }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    /*************/
    /* PRODUCTOS */
    /*************/
    productos: {
        findProducts: () => {                               //Busca todos los productos
            return db.Producto.findAll()
                .then( (productos) => {
                    return productos;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        findProductsByCategoria: (cat) => {                 //Busca los productos de 1 categoria
            return db.Producto.findAll({
                include: [{
                    model: db.Categoria,
                    as: 'categoriasprod',
                    requiered: false,
                    where: {
                        id: cat
                    }
                }],
            }).then( (productos) => {
                return productos;
            })
                .catch((error) => {
                    console.log(error);
                });
        },
        findProductById: (idProd) => {                            //Busca un producto con id especifico
            return db.Producto.findByPk(idProd)
                .then( (producto) => {
                    return producto;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        createProduct: (prod) => {                          //Crea un nuevo producto
            return db.Producto.create({
                nombre: prod.nombre,
                precio: prod.precio,
                descuento: prod.descuento,
                descripcion: prod.descripcion,
                imagen: prod.imagen,
                moneda: prod.moneda,
            })
                .then((newProd) => {
                    return newProd.id;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateProduct: (idProd, prod) => {                  //Modifica un producto
            return db.Producto.update({
                prod
            },
                {
                    where: { id: idProd }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    /************/
    /* USUARIOS */
    /************/
    usuarios: {
        countUsers: () => {                              //Cuenta la cantidad de usuarios
            return db.Usuario.count()
                .then( (user) => {
                    return user;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        findUsers: () => {                              //Busca todos los usuarios
            return db.Usuario.findAll()
                .then((usuarios) => {
                    return usuarios
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        findUsersByMail: (mail) => {                    //Busca un usuario por mail
            return db.Usuario.findAll({
                where: { email: mail }
            })
                .then((usuario) => {
                    return usuario[0];
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        findUsersByUsername: (username) => {             //Busca un usuario por username
            return db.Usuario.findAll({
                where: { username: username }
            })
                .then((user) => {
                    return user[0];
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        createUser: (user) => {                         //Crea un nuevo usuario
            return db.Usuario.create({
                nombre: user.nombre,
                apellido: user.apellido,
                username: user.username,
                password: user.password,
                fechanacimiento: user.fechanacimiento,
                email: user.email,
                admin: 0
            })
                .then((newUser) => {
                    return newUser.id;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateUser: (idUser, user) => {                 //Modifica un usuario
            return db.Usuario.update(user,
                {
                    where: { id: idUser }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    categoriasProducto: {
        create: (idProd, idCat) => {
            return db.CategoriaProducto.create({
                id_producto: idProd,
                id_categoria: idCat
            })
            .then((newValue) => {
                return newValue.id_producto;
            })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}