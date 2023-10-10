const knex = require("../../conexao");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordJWT = require('../../passwordJWT');

const login = async (req, res) => {
    const {email, senha} = req.body;

    try {
        if (!email || !senha) return res.status(400).json({mensagem: "Todos os dados são obrigatórios."});
        
        const usuarioExistente = await knex('usuarios').where('email', email).first();

        if (!usuarioExistente) return res.status(401).json({mensagem:"E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente."});

       const validamentoDeSenha = await bcrypt.compare(senha, usuarioExistente.senha);

        if (!validamentoDeSenha) return res.status(401).json({mensagem:"E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente."});

        const token = jwt.sign({id: usuarioExistente.id}, passwordJWT, {
            expiresIn: "1d",
        });

        const {senha:_, ...usuario} = usuarioExistente;

        return res.status(200).json({
            usuario,
            token
        });

    } catch (error) {
        return res.status(500).json({mensagem: "Erro interno do servidor"});
    };
};

module.exports = login;