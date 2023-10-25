const knex = require("../../bancoDeDados/conexao");
const consultaProdutos = require("./consultaProduto");
const { listarCategorias } = require("../categorias");
const { deletarImagem, salvarImagem } = require("../../../utilitarios/imagem");
const { atualizacaoValida, atualizacaoInvalida, categoriaInvalida, produtoInvalido } = require("../../../utilitarios/mensagens");

const atualizarProduto = async (produto) => {

  try {

    const categoriaExistente = await listarCategorias(produto.categoria_id);

    if (!categoriaExistente.resposta[0]) return categoriaInvalida;

    if (produto.produto_imagem) {

      const { produto_imagem: imagem } = produto;

      const path = produtoExistente[0].produto_imagem.slice(produtoExistente[0].produto_imagem.indexOf("produtos"));

      await deletarImagem(path);

      const objImagem = await salvarImagem(
        `produtos/${produto.id}/${imagem.originalname}`,
        imagem.buffer,
        imagem.mimetype
      )

      produto.produto_imagem = objImagem;

    }

    const produtoAtualizado = await knex("produtos")
      .update(produto)
      .where({ id: produto.id }).returning("*");

    atualizacaoValida.resposta = produtoAtualizado;

    return atualizacaoValida;

  } catch (error) {
    atualizacaoInvalida.resposta = error.message

    return atualizacaoInvalida
  }
};

module.exports = atualizarProduto;