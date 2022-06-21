module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoriaProducto';
    let cols = {
        id_producto : {
            type: dataTypes.BIGINT(10),
        },
        id_categoria : {
            type: dataTypes.BIGINT(10),
        },
    };
    let config = {
        tableName : 'categoria_producto',
        timestamps : false,
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.belongsToMany(models.Producto, {
            as : 'productos',
            through : 'categoria_producto',
            foreignKey : 'id_categoria',
            otherKey : 'id_producto',
            timestamps : false,
        });
    }

    return Categoria
};