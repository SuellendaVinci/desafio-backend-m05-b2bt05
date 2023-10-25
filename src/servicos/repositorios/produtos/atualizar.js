const knex = require("../../bancoDeDados/conexao");

const atualizarProduto = async ({
  id,
  descricao,
  quantidade_estoque,
  valor,
  categoria_id,
}) => {
  try {
    const produtoExistente = await knex("produtos").where({ id }).first();

    if (!produtoExistente) {
      throw new Error("Produto inexistente");
    }

    const categoriaExistente = await knex("categorias")
      .where({ id: categoria_id })
      .first();

    if (!categoriaExistente) {
      throw new Error("Categoria inexistente.");
    }

    await knex("produtos")
      .update({ descricao, quantidade_estoque, valor, categoria_id })
      .where({ id });

    res.status(204).send();
  } catch (error) {
    return `mensagem: ${error.message}`;
  }
};

module.exports = atualizarProduto;
