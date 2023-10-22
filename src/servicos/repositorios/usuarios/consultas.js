const knex = require('../../bancoDeDados/conexao');

const validarUsuarioExiste = async (email) => {
    try {
        return await knex("usuarios").where({ email }).first();
    } catch (error) {
        return error.message
    }
}

module.exports = validarUsuarioExiste;

// async function emailExistente(email) {
//     try {
//         const resultado = await knex("usuarios").where({ email }).first();

//         return resultado;
//     } catch (error) {
//         return error.message;
//     };
// }