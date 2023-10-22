const { emailInvalido, usuarioValido } = require("../../../utilitarios/mensagens");
const { criptografarSenha } = require("../../../utilitarios/utilitarios");
const knex = require("../../bancoDeDados/conexao");
const validarUsuarioExiste = require("./consultas");

const efetuarCadastro = async (usuario) => {

    try {
        const emailExiste = await validarUsuarioExiste(usuario.email);

        if (emailExiste) {
            return emailInvalido;
        }

        const senhaCriptografada = criptografarSenha(usuario.senha);

        usuario.senha = await senhaCriptografada;

        const usuarioNovo = await knex("usuarios")
            .insert(usuario)
            .returning(["id", "nome", "email"]);

        usuarioValido.resposta = usuarioNovo

        return usuarioValido;

    } catch (error) {
        console.error(error.message)
        return error.message;
    }
}

module.exports = { efetuarCadastro }