const cadastrarProduto = require("../../servicos/repositorios/produtos/cadastrar");

const cadastraProduto = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {
    await cadastrarProduto({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    });

    return res
      .status(201)
      .json({ mensagem: "Produto cadastrado com sucesso!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = cadastraProduto;
