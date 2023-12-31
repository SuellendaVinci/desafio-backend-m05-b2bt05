const knex = require('../../bancoDeDados/conexao');
const { consultarPedidos } = require('./consultas');

const listarPedidos = async (id) => {

    try {
        const pedidos = await consultarPedidos(id);

        return pedidos;

    } catch (error) {
        return error.message;
    };
};

module.exports = listarPedidos;