const atualizarProduto = require("../../servicos/repositorios/produtos/atualizar");

const atualizaProduto = async (req, res) => {

  const produtoRequisicao = { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  const { id } = req.params;
  const { file: imagem } = req;

  produtoRequisicao.id = Number(id)

  if (imagem) produtoRequisicao.produto_imagem = imagem;

  try {
    const produtoAtualizado = await atualizarProduto(produtoRequisicao);

    return res
      .status(produtoAtualizado.status)
      .json(produtoAtualizado.resposta);

  } catch (error) {
    return res.status(500).json(error.message);
  }

}

module.exports = atualizaProduto;


