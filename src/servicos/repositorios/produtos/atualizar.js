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
      return res.status(400).json("Produto inexistente");
    }

    const categoriaExistente = await knex("categorias")
      .where({ id: categoria_id })
      .first();

    if (!categoriaExistente) {
      return res.status(400).json("Categoria inexistente.");
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
