module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName : 'categorias',
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