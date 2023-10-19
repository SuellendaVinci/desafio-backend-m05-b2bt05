const knex = require('../../servicos/bancoDeDados/conexao');

async function emailExistente(email){
    const resultado = await knex("usuarios").where({ email }).first();

    return resultado
}

module.exports = emailExistente;
