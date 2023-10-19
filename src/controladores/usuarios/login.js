const knex = require('../../servicos/bancoDeDados/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const camposObrigatorios = {
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

        const usuarioExistente = await knex('usuarios').where('email', email).first();

        if (!usuarioExistente) return res.status(401).json({ mensagem: 'E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente.' });

        const validacaoDeSenha = await bcrypt.compare(senha, usuarioExistente.senha);

        if (!validacaoDeSenha) return res.status(401).json({ mensagem: 'E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente.' });

        const token = jwt.sign({ id: usuarioExistente.id }, process.env.JWT_PASSWORD, {
            expiresIn: '1d',
        });

        const { senha: _, ...usuario } = usuarioExistente;

        return res.status(200).json({
            usuario,
            token
        });

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = login;