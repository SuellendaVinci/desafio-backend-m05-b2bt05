const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens')

const listarProdutos = async (categoria_id, produto_id) => {
  try {
    if (categoria_id) {
      const categoriaExiste = await knex('categorias').where({ id: categoria_id }).first()
      if (!categoriaExiste) {
        return mensagens.categoriaInvalida
      }

      const produtosPorCategoria = await knex('produtos').where({ categoria_id })
      mensagens.produtoValido.resposta = produtosPorCategoria

      return mensagens.produtoValido
    }

    if (produto_id) {
      const produto = await knex('produtos').where({id: produto_id}).first();
      if (!produto) {
        return mensagens.produtoInvalido
      }

      mensagens.produtoValido.resposta = produto
      return mensagens.produtoValido
    }

    const produtos = await knex('produtos')
    mensagens.produtoValido.resposta = produtos

    return mensagens.produtoValido
  } catch (error) {
    mensagens.produtoInvalido.resposta = error.message
    return mensagens.produtoInvalido
  }
}

module.exports = { listarProdutos }