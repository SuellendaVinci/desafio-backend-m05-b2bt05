const { efetuarCadastro } = require("../../servicos/repositorios/usuarios/cadastrar");

const cadastrar = async (req, res) => {
  const usuario = { nome, email, senha } = req.body;

  try {
    const usuarioNovo = await efetuarCadastro(usuario);

    return res.status(usuarioNovo.status).json(usuarioNovo.resposta);

  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = cadastrar;
