const mensagens = require('../../../utilitarios/mensagens');
// const validarCpf = require('../../../utilitarios/validarCpf');
const knex = require('../../bancoDeDados/conexao');
const { consultarClientes } = require('./consultasClientes');

const cadastrarCliente = async (cliente) => {

    try {
        // const formatoCpfValido = validarCpf(cliente.cpf);

        // if (!formatoCpfValido) return mensagens.cpfInvalido;

        // cliente.cpf = formatoCpfValido;

        const dadosInvalidos = await consultarClientes(cliente);

        if (dadosInvalidos.length !== 0) {

            if (cliente.email === dadosInvalidos[0].email) return mensagens.emailInvalido;

            if (cliente.cpf === dadosInvalidos[0].cpf) return mensagens.cpfCadastrado;

        }

        // cliente.cpf = formatoCpfValido;

        const novoCliente = await knex('clientes').insert(cliente)
            .returning(['id', 'nome', 'cpf', 'email', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado']);

        mensagens.cadastroValido.resposta = novoCliente[0];

        return mensagens.cadastroValido;

    } catch (error) {

        return error.message;
    }
}

module.exports = { cadastrarCliente }