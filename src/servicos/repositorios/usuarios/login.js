const jwt = require("jsonwebtoken");
const validarUsuarioExiste = require("./consultas");
const { validarSenha } = require("../../../utilitarios/utilitarios");
const { loginInvalido, usuarioValido } = require("../../../utilitarios/mensagens");


const efetuarLogin = async (email, senha) => {

    try {
        const usuarioEmail = await validarUsuarioExiste(email);

        if (!usuarioEmail) return loginInvalido;

        const validacaoSenha = await validarSenha(senha, usuarioEmail.senha);

        if (!validacaoSenha) return loginInvalido;

        const token = jwt.sign({ id: usuarioEmail.id }, process.env.JWT_PASSWORD, { expiresIn: "1d" });

        usuarioValido.resposta = { token }

        return usuarioValido;

    } catch (error) {
        return error.message;
    }
}

module.exports = { efetuarLogin }