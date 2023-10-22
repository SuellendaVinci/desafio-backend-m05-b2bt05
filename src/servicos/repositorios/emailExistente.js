const knex = require('../../servicos/bancoDeDados/conexao');

async function emailExistente(email){
    try {
        const resultado = await knex("usuarios").where({ email }).first();

        return resultado;
    } catch (error) {
        return error.message;
    };
}

module.exports = emailExistente;
