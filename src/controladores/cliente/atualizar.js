const { atualizarCliente } = require("../../servicos/repositorios/clientes/atualizar");

const atualizaCliente = async (req, res) => {
    const { id } = req.params;
    const clienteRequisicao = { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    clienteRequisicao.id = id;

    try {
        const clienteAtualizado = await atualizarCliente(clienteRequisicao);


        return res.status(clienteAtualizado.status).json(clienteAtualizado.resposta);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = atualizaCliente; 
