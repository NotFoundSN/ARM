module.exports = (sequelize, dataTypes) => {
    let alias = 'Compra';
    let cols = {
        id:{
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        id_user:{
        	type: dataTypes.BIGINT(10),
        },
        id_producto:{
        	type: dataTypes.BIGINT(10),
        },
        precio:{
        	type: dataTypes.INTEGER,
        },
        descuento:{
        	type: dataTypes.BIGINT(10),
        },
        cantidad:{
        	type: dataTypes.BIGINT(10),
        },        
    };
    let config = {
        tableName : 'compras',
        timestamps : false,
    }

    const Compra = sequelize.define(alias, cols, config);

    Compra.associate = function(models) {
        // Declaracion de relaciones
        Compra.hasOne(models.Producto, {
            as : 'producto',
            foreignKey : 'id',
        });
        Compra.hasOne(models.Usuario, {
            as : 'usuario',
            foreignKey : 'id',
        });
    }

    return Compra
};