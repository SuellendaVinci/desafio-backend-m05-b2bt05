const cadastrarProduto = require("../../servicos/repositorios/produtos/cadastrar");

const cadastraProduto = async (req, res) => {

  const { file: imagem } = req;
  const produto = { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  if (imagem) produto.produto_imagem = imagem;

  try {

    const novoProduto = await cadastrarProduto(produto);

    return res
      .status(novoProduto.status)
      .json(novoProduto.resposta);

  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = cadastraProduto;
