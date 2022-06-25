module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoriaProducto';
    let cols = {
        id_producto : {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
        },
        id_categoria : {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
        },
    };
    let config = {
        tableName : 'categoria_producto',
        timestamps : false,
    }

    const CategoriaProducto = sequelize.define(alias, cols, config);
    
    return CategoriaProducto
};