const knex = require('../../bancoDeDados/conexao')
const mensagens = require('../../../utilitarios/mensagens')

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

const validarUsuarioExiste = async (email) => {
  try {
    return await knex("usuarios").where({ email }).first();
  } catch (error) {
    return error.message
  }
}

module.exports = {atualizarUsuario, validarUsuarioExiste}