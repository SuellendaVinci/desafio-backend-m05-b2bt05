const bcrypt = require("bcrypt");
const knex = require("../../servicos/bancoDeDados/conexao");

const cadastrar = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const emailExiste = await knex("usuarios").where("email", email).first();

    if (emailExiste) {
      return res.status(400).json({
        mensagem: "Este email já está cadastrado!",
      });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await knex("usuarios")
      .insert({ nome, email, senha: senhaCriptografada })
      .returning(["id", "nome", "email"]);

    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = cadastrar;
