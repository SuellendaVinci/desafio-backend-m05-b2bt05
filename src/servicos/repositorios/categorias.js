const knex = require('../../servicos/bancoDeDados/conexao');
const mensagem = require('../../utilitarios/mensagens');

const listarCategorias = async (id) => {

    try {

        const categoria = await knex("categorias")
            .where((query) => {
                if (id) {
                    query.where('id', "=", id);
                }
            });

        mensagem.categoriaValida.resposta = categoria;

        return mensagem.categoriaValida;

    } catch (error) {
        
        return error.message;

    }

}

module.exports = { listarCategorias };