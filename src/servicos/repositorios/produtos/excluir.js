const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens');
const consultaProdutos = require('./consultaProduto');

const excluirProduto = async (id) => {
  try {
    const produto = await consultaProdutos(id);
    if (!produto[0]) {
      return mensagens.produtoInvalido
    }

    await knex('produtos').del().where({ id })

    return mensagens.produtoExcluido
  } catch (error) {
    return error.message
  }
}

module.exports = excluirProduto