const knex = require('../../bancoDeDados/conexao')

const consultaProdutos = async (id) => {
  try {
    const produtos = await knex('produtos').where((query) => {
      if (id) {
        query.where({ id })
      }
    });

    return produtos;
  } catch (error) {
    return error.message
  }
}

module.exports = consultaProdutos;