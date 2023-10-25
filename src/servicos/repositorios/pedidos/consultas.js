const knex = require('../../bancoDeDados/conexao');

const consultarPedidos = async (id) => {

    try {

        const pedidosCompletos = [];
        const pedidos = await knex('pedidos').where((query) => {

            if (id) {
                query.where({ 'cliente_id': id });
            }
        });

        const produtos = await
            knex('pedidos as p')
                .join('pedido_produtos as pp', 'pp.pedido_id', '=', 'p.id')
                .join('produtos as pd', 'pd.id', '=', 'pp.produto_id')
                .select(['pd.id', 'pp.quantidade_produto', 'pd.valor as valor_produto', 'pp.pedido_id', 'pd.id as produto_id'])
                .where((query) => {

                    if (id) {
                        query.where({ 'p.cliente_id': id });
                    }
                });

        pedidos.forEach(pedido => {
            const itens = [];
            produtos.forEach(produto => {

                if (produto.pedido_id === pedido.id)
                    itens.push(produto);

            });

            pedidosCompletos.push({
                pedido,
                'pedido_produtos': itens
            });

        });


        return pedidosCompletos;

    } catch (error) {
        return error.message;
    }
}

module.exports = { consultarPedidos }
