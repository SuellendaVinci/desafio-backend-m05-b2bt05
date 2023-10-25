const knex = require("../../bancoDeDados/conexao");
const { salvarImagem } = require("../../../utilitarios/imagem");
const { listarCategorias } = require("../categorias");
const { cadastroValido, categoriaInvalida, cadastroInvalido } = require("../../../utilitarios/mensagens");

const cadastrarProduto = async (produto) => {

  try {
    const { produto_imagem: imagem } = produto;

    const categoriaExiste = await listarCategorias(produto.categoria_id);

    if (!categoriaExiste.resposta[0]) return categoriaInvalida;

    if (imagem) {

      const { max: ultimoId } = await knex('produtos').max('id').first();

      const objImagem = await salvarImagem(
        `produtos/${ultimoId + 1}/${imagem.originalname}`,
        imagem.buffer,
        imagem.mimetype
      )
      produto.produto_imagem = objImagem;
    }

    const novoProduto = await knex("produtos").insert(produto).returning('*');

    cadastroValido.resposta = novoProduto;

    return cadastroValido

  } catch (error) {
    cadastroInvalido.resposta = error.message
    return cadastroInvalido;
  }
};

module.exports = cadastrarProduto;
