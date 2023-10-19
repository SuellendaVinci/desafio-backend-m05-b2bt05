const knex = require("../../servicos/bancoDeDados/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailExistente = require("../../servicos/repositorios/emailExistente");

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {

    const usuarioEmail = await emailExistente(email);

    if (!usuarioEmail)return res.status(400).json({mensagem:"E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente."});

    const validacaoSenha = await bcrypt.compare(senha, usuarioEmail.senha);

    if (!validacaoSenha)return res.status(400).json({mensagem:"E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente."});

    const token = jwt.sign({ id: usuarioEmail.id }, process.env.JWT_PASSWORD, {expiresIn: "1d"});

    const { senha: _, ...usuario } = usuarioEmail;

    return res.status(200).json({
      usuario,
      token,
    });

  } catch (error) {

    return res.status(500).json(error.message);
    
  }
};

module.exports = login;
