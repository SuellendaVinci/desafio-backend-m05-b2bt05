const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens')

const excluirProduto = async (id) => {
  try {
    const produto = await knex('produtos').where({ id }).first();
    if (!produto) {
      return mensagens.produtoInvalido
    }

    await knex('produtos').del().where({ id })

    return mensagens.produtoExcluido
  } catch (error) {
    return error.message
  }
}

module.exports = excluirProduto