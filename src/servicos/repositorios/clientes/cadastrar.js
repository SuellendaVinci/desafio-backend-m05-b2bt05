const mensagens = require('../../../utilitarios/mensagens');
const knex = require('../../bancoDeDados/conexao');
const { consultarClientes } = require('./consultasClientes');

const cadastrarCliente = async (cliente) => {

    try {

        const dadosInvalidos = await consultarClientes(cliente);

        if (dadosInvalidos.length !== 0) {

            if (cliente.email === dadosInvalidos[0].email) {

                return mensagens.emailInvalido;
            }

            if (cliente.cpf === dadosInvalidos[0].cpf) {
                return mensagens.cpfInvalido;
            }

        }

        const novoUsuario = await knex('clientes').insert(cliente)
            .returning(['id', 'nome', 'cpf', 'email', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado']);

        mensagens.clienteValido.resposta = novoUsuario;

        return mensagens.clienteValido;

    } catch (error) {
        return error.message;
    }
}

module.exports = { cadastrarCliente }