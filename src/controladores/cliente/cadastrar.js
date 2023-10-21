const { cadastrarCliente } = require("../../servicos/repositorios/clientes/cadastrar");
const validarCpf = require("../../utilitarios/validarCpf");

const postCliente = async (req, res) => {
    const cliente =
        { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    const cpfValido = validarCpf(cpf);
    console.log(cpfValido)
    try {
        // const novoCliente = await cadastrarCliente(cliente);

        // return res.status(novoCliente.status).json(novoCliente.resposta);
        return res.status(200).json(cpfValido);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = postCliente; 