const knex = require('../../bancoDeDados/conexao');

const validarUsuarioExiste = async (email) => {
    try {
        return await knex("usuarios").where({ email }).first();
    } catch (error) {
        return error.message
    }
}

module.exports = validarUsuarioExiste;
