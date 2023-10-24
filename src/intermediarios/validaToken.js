const jwt = require('jsonwebtoken');
const knex = require('../servicos/bancoDeDados/conexao');

const validaToken = async (req, res, next) => {
  const { autorizacao, authorization } = req.headers;

  if (!autorizacao && !authorization) {
    return res.status(401).json({ mensagem: 'Não autorizado.' });
  }

  let token = "";

  if (autorizacao) {token = autorizacao} else {token = authorization.split(' ')[1]}

  try {
    const { id } = jwt.verify(token, process.env.JWT_PASSWORD);

    const usuario = await knex('usuarios').where({ id }).first();

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    const { senha: _, ...usuarioRestante } = usuario;

    req.usuario = usuarioRestante;

    next();
  } catch (error) {
    return res.status(401).json({ mensagem: 'Token inválido.' });
  }
};

module.exports = validaToken;
