const joi = require('joi');
const mensagens = require('../utilitarios/mensagens');

const nomeObrigatorio = mensagens.campoObrigatorio('nome');
const emailObrigatorio = mensagens.campoObrigatorio('email');
const cpfObrigatorio = mensagens.campoObrigatorio('cpf');

const schemaCliente = joi.object({
    nome: joi.string().required().messages({
        'string.empty': nomeObrigatorio,
        'any.required': nomeObrigatorio
    }),
    email: joi.string().email().required().messages({
        'string.empty': emailObrigatorio,
        'string.email': mensagens.formatoEmailInvalido,
        'any.required': emailObrigatorio
    }),
    cpf: joi.string().max(14).required()
        .pattern(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/).messages({
            'string.empty': cpfObrigatorio,
            'string.pattern.base': mensagens.formatoCpfInvalido,
            'any.required': cpfObrigatorio,
            'string.limit': mensagens.formatoCpfInvalido
        }),
    cep: joi.string().max(9).messages({
        'string.length': mensagens.formatoCepInvalido
    }),
    rua: joi.string(),
    numero: joi.string(),
    bairro: joi.string(),
    cidade: joi.string(),
    estado: joi.string()
});


module.exports = schemaCliente;