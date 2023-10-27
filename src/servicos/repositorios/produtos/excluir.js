const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens');
const consultaProdutos = require('./consultaProduto');
const { consultarPedidos } = require('../pedidos/consultas');
const { deletarImagem } = require('../../../utilitarios/imagem');

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

    const imagem = produto[0].produto_imagem;

    await knex('produtos').del().where({ id });

    if (imagem) {
      await deletarImagem(`${id}`);
    }

    return mensagens.produtoExcluido
  } catch (error) {
    return error.message
  }
}

module.exports = excluirProduto