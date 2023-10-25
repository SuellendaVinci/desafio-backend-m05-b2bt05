const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens');
const consultaProdutos = require('./consultaProduto');
const { consultarPedidos } = require('../pedidos/consultas');

const excluirProduto = async (id) => {
  try {
    const produto = await consultaProdutos(id);
    if (!produto[0]) {
      return mensagens.produtoInvalido
    }

    const produtoEmUso = await knex('pedido_produtos').where({ produto_id: id });

    if (produtoEmUso.length > 0) {
      return mensagens.produtoEmUso
      
    }

    await knex('produtos').del().where({ id })

    return mensagens.produtoExcluido
  } catch (error) {
    return error.message
  }
}

module.exports = excluirProduto