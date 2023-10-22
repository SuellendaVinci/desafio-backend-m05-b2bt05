const jwt = require("jsonwebtoken");
const validarUsuarioExiste = require("./consultas");
const { validarSenha } = require("../../../utilitarios/utilitarios");
const { loginInvalido, usuarioValido } = require("../../../utilitarios/mensagens");


const efetuarLogin = async (email, senha) => {

    try {
        const usuarioEmail = await validarUsuarioExiste(email);

        if (!usuarioEmail) return res.status(loginInvalido.status).json(loginInvalido.resposta);

        const validacaoSenha = await validarSenha(senha, usuarioEmail.senha);

        if (!validacaoSenha) return res.status(loginInvalido.status).json(loginInvalido.resposta);

        const token = jwt.sign({ id: usuarioEmail.id }, process.env.JWT_PASSWORD, { expiresIn: "1d" });

        const { senha: _, ...usuario } = usuarioEmail;

        usuarioValido.resposta = {
            usuario,
            token
        }
        return usuarioValido;

    } catch (error) {
        return error.message;
    }
}

module.exports = { efetuarLogin }