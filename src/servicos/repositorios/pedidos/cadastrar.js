const { enviarEmailPedido } = require("../../../utilitarios/email");
const knex = require("../../bancoDeDados/conexao");

const cadastrarPedido = async ({ cliente_id, observacao, pedido_produtos }) => {
  try {
    const clienteExistente = await knex("clientes")
      .where("id", cliente_id)
      .first();
    if (!clienteExistente) {
      throw new Error("Cliente inexistente.");
    }

    let valor_total = 0;
    let valor_produto_list = [];
    let produtos = [];

    for (let i = 0; i < pedido_produtos.length; i++) {
      const produtoExistente = await knex("produtos")
        .where("id", pedido_produtos[i].produto_id)
        .first();

      if (!produtoExistente) {
        throw new Error("Produto inexistente.");
      }

      if (
        produtoExistente.quantidade_estoque <
        pedido_produtos[i].quantidade_produto
      ) {
        throw new Error(
          "A quantidade no estoque é menor do que a quantidade requerida."
        );
      }

      valor_produto_list.push(produtoExistente.valor);

      valor_total +=
        pedido_produtos[i].quantidade_produto * produtoExistente.valor;

      produtos[i] = produtoExistente;
    }

    const pedido = await knex("pedidos")
      .insert({
        cliente_id,
        observacao,
        valor_total,
      })
      .returning(["id"]);

    const itensPedido = [];

    for (let i = 0; i < pedido_produtos.length; i++) {
      await knex("pedido_produtos").insert({
        pedido_id: pedido[0].id,
        produto_id: pedido_produtos[i].produto_id,
        quantidade_produto: pedido_produtos[i].quantidade_produto,
        valor_produto: valor_produto_list[i],
      });

      itensPedido.push({
        produto: produtos[i],
        pedido_id: pedido[0].id,
        produto_id: pedido_produtos[i].produto_id,
        quantidade_produto: pedido_produtos[i].quantidade_produto,
        valor_produto: valor_produto_list[i],
        descricao: produtos[i].descricao
      })
    }

    const dadosEmail = {
      id: pedido[0].id,
      cliente_id,
      nome: clienteExistente.nome,
      email: clienteExistente.email,
      observacao: observacao ? observacao : "",
      valor_total,
      itensPedido
    }

    enviarEmailPedido(dadosEmail);

    return dadosEmail;

  } catch (error) {
    throw error;
  }
};

module.exports = cadastrarPedido;