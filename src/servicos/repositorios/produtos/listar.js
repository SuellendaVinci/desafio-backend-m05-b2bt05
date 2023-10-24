const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens')
const {listarCategorias} = require('../categorias');
const consultaProdutos = require('./consultaProduto');

const listarProdutos = async (categoria_id, produto_id) => {
  try {
    if (categoria_id) {
      const categoriaExiste = await listarCategorias(categoria_id);
      if (!categoriaExiste.resposta[0]) {
        return mensagens.categoriaInvalida
      }

      const produtosPorCategoria = await knex('produtos').where({ categoria_id })
      mensagens.produtoValido.resposta = produtosPorCategoria

      return mensagens.produtoValido
    }

    if (produto_id) {
      const produto = await consultaProdutos(produto_id);
      if (!produto[0]) {
        return mensagens.produtoInvalido
      }

      mensagens.produtoValido.resposta = produto
      return mensagens.produtoValido
    }

    const produtos = await consultaProdutos();
    mensagens.produtoValido.resposta = produtos

    return mensagens.produtoValido
  } catch (error) {
    mensagens.produtoInvalido.resposta = error.message
    return mensagens.produtoInvalido
  }
}

module.exports = { listarProdutos }