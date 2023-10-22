const atualizarProduto = require("../../servicos/repositorios/produtos/atualizar");

const atualizaProduto = async (req, res) => {

    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const { id } = req.params;

    try {
        await atualizarProduto({
          id,
          descricao,
          quantidade_estoque,
          valor,
          categoria_id,
        });
    
        return res
          .status(201)
          .json({ mensagem: "Produto atualizado com sucesso!" });
      } catch (error) {
        return res.status(500).json(error.message);
      }

}

module.exports = atualizaProduto;


    