const bcrypt = require('bcrypt');
const knex = require('../../conexao');

const atualizar = async (req, res) => {
  const usuario = req.usuario;
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
    const usuarioExiste = await knex('usuarios').where({ email }).first();

    if (usuarioExiste && usuarioExiste.id !== usuario.id) {
      return res
        .status(400)
        .json({ mensagem: 'Este email já está cadastrado!', });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioAtualizado = await knex('usuarios')
      .update({ nome, email, senha: senhaCriptografada })
      .where({ id: usuario.id })
      .returning(['id', 'nome', 'email']);

    return res.status(200).json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = atualizar;
