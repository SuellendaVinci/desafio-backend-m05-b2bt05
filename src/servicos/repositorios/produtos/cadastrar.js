const knex = require("../../bancoDeDados/conexao");

const cadastrarProduto = async ({descricao, quantidade_estoque, valor, categoria_id}) => {
  try {
    const categoriaExiste = await knex("categorias")
      .where("id", categoria_id)
      .first();
    if (!categoriaExiste) {
      throw new Error("A categoria informada não existe.");
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
