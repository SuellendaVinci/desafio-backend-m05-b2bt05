const listarPedidos = require('../../servicos/repositorios/pedidos/listar');

const listar = async (req, res) => {
    const { cliente_id } = req.query;

    try {

        const pedidos = await listarPedidos(Number(cliente_id));

        return res.status(200).json(pedidos);

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = listar