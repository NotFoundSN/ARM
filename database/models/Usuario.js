// const { TINYINT, INTEGER } = require("sequelize/types");
module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        username: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        fechanacimiento: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        /*dni: {
            type: dataTypes.STRING,
        },*/
        admin: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName : 'users',
        timestamps : false,
    }
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        // Declaracion de relaciones
        Usuario.hasMany(models.Compra, {
            as : 'compras',
            foreignKey : 'id_user'
        });
    }

    return Usuario
};