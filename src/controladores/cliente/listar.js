const listagens = require('../../servicos/repositorios/clientes/listagemCliente');

const listarClientes = async (req, res) => {
    const { cliente_id } = req.query;

    try {

        const listagemDeClientes = await listagens(cliente_id);

        return res.status(listagemDeClientes.status).json(listagemDeClientes.resposta);

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = listarClientes;