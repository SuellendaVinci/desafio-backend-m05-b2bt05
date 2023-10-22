const knex = require('../../bancoDeDados/conexao')
const mensagens = require("../../../utilitarios/mensagens")

const atualizarUsuario = async (id, nome, email, senha) => {
  try {

    const usuario = await knex("usuarios")
      .update({ nome, email, senha })
      .where({ id })
      .returning(["id", "nome", "email"]);

    mensagens.atualizacaoDeUsuarioValida.resposta = usuario
    return mensagens.atualizacaoDeUsuarioValida

  } catch (error) {

    mensagens.atualizacaoDeUsuarioInvalida.resposta = error.message
    return mensagens.atualizacaoDeUsuarioInvalida

  }
}

module.exports = { atualizarUsuario }