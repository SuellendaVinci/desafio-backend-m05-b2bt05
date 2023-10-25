const { cadastrarCliente } = require("../../servicos/repositorios/clientes/cadastrar");

const cadastraCliente = async (req, res) => {
    const cliente =
        { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        const novoCliente = await cadastrarCliente(cliente);

        return res.status(novoCliente.status).json(novoCliente.resposta);

    } catch (error) {

        return res.status(500).json(error.message);
    }
}

module.exports = cadastraCliente; 