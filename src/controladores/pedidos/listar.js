const listarPedidos = require('../../servicos/repositorios/pedidos/listar');

const listar = async (req, res) => {
    const { id } = req.params;

    try {

        const pedidos = await listarPedidos(id);

        return res.status(200).json(pedidos);

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = listar