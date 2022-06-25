module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoriaProducto';
    let cols = {
        id_producto : {
            type: dataTypes.BIGINT(10),
            foreignKey: true,
        },
        id_categoria : {
            type: dataTypes.BIGINT(10),
            foreignKey: true,
        },
    };
    let config = {
        tableName : 'categoria_producto',
        timestamps : false,
    }

    const CategoriaProducto = sequelize.define(alias, cols, config);

    console.log(CategoriaProducto);

    CategoriaProducto.associate = function(models) {
        CategoriaProducto.belongsToMany(models.Producto, {
            as : 'productos',
            through : 'categoria_producto',
            foreignKey : 'id_categoria',
            otherKey : 'id_producto',
            timestamps : false,
        });
    }
    
    return CategoriaProducto
};