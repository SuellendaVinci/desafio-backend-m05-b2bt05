const bcrypt = require('bcrypt');
const knex = require('../../conexao');

const cadastrar = async (req, res) => {

  const { nome, email, senha } = req.body;

  const camposObrigatorios = {
    nome: 'O nome é um campo obrigatório!',
    email: 'O email é um campo obrigatório!',
    senha: 'A senha é um campo obrigatório!',
  };

  const camposFaltantes = [];

  for (const campo in camposObrigatorios) {
    if (!req.body[campo]) {
      camposFaltantes.push(camposObrigatorios[campo]);
    }
  }

  if (camposFaltantes.length > 0) {
    return res.status(400).json({ mensagem: camposFaltantes });
  }

  try {
    const emailExiste = await knex('usuarios').where('email', email).first();

    if (emailExiste) {
      return res.status(400).json({
        mensagem: 'Este email já está cadastrado!',
      });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await knex('usuarios')
      .insert({ nome, email, senha: senhaCriptografada })
      .returning(['id', 'nome', 'email']);

    return res.status(201).json(usuario);

  } catch (error) {
    return res.status(500).json(error.message);
  }

}

module.exports = cadastrar;