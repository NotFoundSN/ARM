// const { TINYINT, INTEGER } = require("sequelize/types");
module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            //
        },
        nombre: {
            //
        },
        apellido: {
            //
        },
        password: {
            //
        },
        fechanacimiento: {
            //
        },
        email: {
            //
        },
        dni: {
            //
        },
        admin: {
            //
        }
    };
    let config = {
        // Configuracion
    }
    const Users = sequelize.define(alias, cols, config);

    Users.associate = function(models) {
        // Declaracion de relaciones
        Users.hasMany(models.Movie, {
            //Ejemplo relacion
        })
    }

    return Users
};