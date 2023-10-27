const knex = require("../../bancoDeDados/conexao");
const consultaProdutos = require("./consultaProduto");
const { listarCategorias } = require("../categorias");
const { deletarImagem, salvarImagem } = require("../../../utilitarios/imagem");
const { atualizacaoValida, atualizacaoInvalida, categoriaInvalida, produtoInvalido } = require("../../../utilitarios/mensagens");

const atualizarProduto = async (produto) => {

  try {
    const produtoExistente = await consultaProdutos(produto.id);

    if (!produtoExistente[0]) return produtoInvalido

    const categoriaExistente = await listarCategorias(produto.categoria_id);

    if (!categoriaExistente.resposta[0]) return categoriaInvalida;

    let imagem = null;

    await deletarImagem(`${produto.id}`);

    if (produto.produto_imagem)
      imagem = await salvarImagem(
        `${produto.id}`,
        produto.produto_imagem.buffer,
        produto.produto_imagem.mimetype
      )

    produto.produto_imagem = imagem;

    const produtoAtualizado = await knex("produtos")
      .update(produto)
      .where({ id: produto.id }).returning("*");

    atualizacaoValida.resposta = produtoAtualizado[0];

    return atualizacaoValida;

  } catch (error) {
    atualizacaoInvalida.resposta = error.message

    return atualizacaoInvalida
  }
};

module.exports = atualizarProduto;