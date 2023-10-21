const knex = require("../../bancoDeDados/conexao");

const cadastrarProduto = async (produto) => {
  try {
    const categoriaExiste = await knex("categorias")
      .where("id", categoria_id)
      .first();
    if (!categoriaExiste) {
      return "A categoria informada não existe.";
    }

    await knex("produtos").insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    });

    return "Produto cadastrado com sucesso.";
  } catch (error) {
    return `mensagem: ${error.message}`;
  }
};

module.exports = cadastrarProduto;
