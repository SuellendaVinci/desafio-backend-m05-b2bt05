const knex = require("../../bancoDeDados/conexao");
const { salvarImagem } = require("../../../utilitarios/imagem");
const { listarCategorias } = require("../categorias");
const { cadastroValido, categoriaInvalida, cadastroInvalido, produtoNaoCadastrado } = require("../../../utilitarios/mensagens");

const cadastrarProduto = async (produto) => {

  try {

    const { produto: imagem, ...produtoSemImagem } = produto;

    const categoriaExiste = await listarCategorias(produto.categoria_id);

    if (!categoriaExiste.resposta[0]) return categoriaInvalida;

    const novoProduto = await knex("produtos").insert(produtoSemImagem).returning('*');

    if (!novoProduto[0]) return produtoNaoCadastrado;

    if (imagem) {

      const objImagem = await salvarImagem(
        `${novoProduto[0].id}`,
        imagem.buffer,
        imagem.mimetype
      )

      await knex("produtos")
        .update({ produto_imagem: objImagem })
        .where({ id: novoProduto[0].id });

      novoProduto[0].produto_imagem = objImagem;
    }

    cadastroValido.resposta = novoProduto[0];

    return cadastroValido

  } catch (error) {
    cadastroInvalido.resposta = error.message
    return cadastroInvalido;
  }
};

module.exports = cadastrarProduto;
