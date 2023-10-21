const excluirProduto = require("../../servicos/repositorios/produtos/excluir")

const excluiProduto = async (req, res) => {
  const { id } = req.params

  try {
    const produto = await excluirProduto(id)

    return res.status(produto.status).json(produto.resposta)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = excluiProduto