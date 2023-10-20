const bcrypt = require("bcrypt");
const knex = require("../../servicos/bancoDeDados/conexao");
const { emailInvalido } = require("../../utilitarios/mensagens");

const atualizar = async (req, res) => {
  const usuario = req.usuario;
  const { nome, email, senha } = req.body;

  try {
    const usuarioExiste = await knex("usuarios").where({ email }).first();

    if (usuarioExiste && usuarioExiste.id !== usuario.id) {
      return res
        .status(emailInvalido.status)
        .json(emailInvalido.resposta);
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioAtualizado = await knex("usuarios")
      .update({ nome, email, senha: senhaCriptografada })
      .where({ id: usuario.id })
      .returning(["id", "nome", "email"]);

    return res.status(200).json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = atualizar;
