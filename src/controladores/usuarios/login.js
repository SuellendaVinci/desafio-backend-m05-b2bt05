const { efetuarLogin } = require('../../servicos/repositorios/usuarios/login')

const login = async (req, res) => {

  const { email, senha } = req.body;

  try {

    const loginUsuario = await efetuarLogin(email, senha);

    return res.status(loginUsuario.status).json(loginUsuario.resposta);

  } catch (error) {

    return res.status(500).json(error.message);

  }
};

module.exports = login;
