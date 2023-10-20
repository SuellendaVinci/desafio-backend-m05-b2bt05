const bcrypt = require("bcrypt");
const { emailInvalido } = require("../../utilitarios/mensagens");
const { validarUsuarioExiste, atualizarUsuario } = require("../../servicos/repositorios/atualizarUsuario");

const atualizar = async (req, res) => {
  const { id } = req.usuario;
  const { nome, email, senha } = req.body;

  try {
    const usuarioExiste = await validarUsuarioExiste(email)

    if (usuarioExiste && usuarioExiste.id !== id) {
      return res.status(emailInvalido.status).json(emailInvalido.resposta);
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await atualizarUsuario(id, nome, email, senhaCriptografada)

    return res.status(usuario.status).json(usuario.resposta);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = atualizar;
