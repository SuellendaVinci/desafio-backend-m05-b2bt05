const cadastrarPedido = require("../../servicos/repositorios/pedidos/cadastrar");

const cadastraPedido = async (req, res) => {
  const { cliente_id, observacao, pedido_produtos } = req.body;
  
  try {
    await cadastrarPedido({
        cliente_id, 
        observacao, 
        pedido_produtos
    });

    return res
      .status(201)
      .json({ mensagem: "Produto cadastrado com sucesso!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = cadastraPedido;