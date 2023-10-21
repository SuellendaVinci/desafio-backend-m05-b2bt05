const knex = require('../../bancoDeDados/conexao');

const consultarClientes = async (filtro) => {

    const { id } = filtro;
    const { email } = filtro;
    const { cpf } = filtro;

    try {
        const retornoConsultaCliente = await knex('clientes')
            .where((query) => {

                if (id) {
                    query.where({ id });
                }

                if (email) {
                    query.orWhere({ email });
                }

                if (cpf) {
                    query.orWhere({ cpf })
                }
            });

        return retornoConsultaCliente;

    } catch (error) {
        return error.message;
    }
}

module.exports = { consultarClientes }
