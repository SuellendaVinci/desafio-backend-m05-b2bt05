const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens')

const listarProdutos = async (categoria_id) => {
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

    const produtos = await knex('produtos')
    mensagens.produtoValido.resposta = produtos

    return mensagens.produtoValido
  } catch (error) {
    mensagens.produtoInvalido.resposta = error.message
    return mensagens.produtoInvalido
  }
}

module.exports = { listarProdutos }