const mensagens = require('../../../utilitarios/mensagens');
const knex = require('../../bancoDeDados/conexao');
const { consultarClientes } = require('./consultasClientes');

const atualizarCliente = async (clienteRequisicao) => {

    try {
        const clienteExiste = await consultarClientes({ id: clienteRequisicao.id });

        if (clienteExiste.length === 0) {

            return mensagens.clienteInvalido;

        }

        const consultaClientes = await consultarClientes(clienteRequisicao);

        const emailInvalido = consultaClientes.filter(
            obj =>
                obj.email === clienteRequisicao.email &&
                obj.id !== Number(clienteRequisicao.id));

        const cpfInvalido = consultaClientes.filter(
            obj =>
                obj.cpf === clienteRequisicao.cpf
                && obj.id !== Number(clienteRequisicao.id));

        if (emailInvalido.length !== 0) {

            return mensagens.emailInvalido;

        }

        if (cpfInvalido.length !== 0) {

            return mensagens.cpfInvalido;

        }

        const clienteAtualizado = await knex('clientes').update(clienteRequisicao).where({ id: clienteRequisicao.id })
            .returning(['id', 'nome', 'cpf', 'email', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado']);

        mensagens.clienteValido.resposta = clienteAtualizado;

        return mensagens.clienteValido;

    } catch (error) {
        return error.message;
    }
}

module.exports = { atualizarCliente }
