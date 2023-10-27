const knex = require('../../bancoDeDados/conexao');
const { clienteValido, clienteInvalido, clientesSemCadastro } = require("../../../utilitarios/mensagens");
const { consultarClientes } = require("./consultasClientes");

const listagens = async (id) => {

    try {
        if (id) {

            const clienteExistente = await consultarClientes({ id });

            if (clienteExistente.length < 1) return clienteInvalido;

            clienteValido.resposta = clienteExistente[0];

            return clienteValido;

        } else {
            const clientesExistentes = await knex('*').from('clientes');

            if (clientesExistentes.length < 1) return clientesSemCadastro;

            clienteValido.resposta = clientesExistentes;

            return clienteValido;
        };
    } catch (error) {
        return error.message;
    };
};

module.exports = listagens;