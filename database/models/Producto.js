module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id:{
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: dataTypes.STRING
        },
        precio:{
            type: dataTypes.INTEGER
        },
        descuento:{
            type: dataTypes.TINYINT
        },
        descripcion:{
            type: dataTypes.STRING
        },
        imagen:{
            type: dataTypes.STRING
        },
        moneda:{
            type: dataTypes.TEXT('tiny')
        }
    };
    let config = {
        tableName : 'products',
        timestamps : false,
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsToMany(models.Categoria, {
            as : 'categorias',
            through : 'categoria_producto',
            foreignKey : 'id_producto',
            otherKey : 'id_categoria',
            timestamps : false,
        });
        Producto.belongsTo(models.Compra, {
            as : 'compras',
            foreignKey : 'id',
        });

    }

    return Producto;
};