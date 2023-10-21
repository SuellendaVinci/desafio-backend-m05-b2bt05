const { listarProdutos } = require("../../servicos/repositorios/produtos/listar");

const listaProdutos = async (req, res) => {
  try {

    const produtos = await listarProdutos(req.query.categoria_id, req.params.id)

    return res.status(produtos.status).json(produtos.resposta)

  } catch (error) {
    return res.status(500).json(error.message)
  }

}

module.exports = listaProdutos