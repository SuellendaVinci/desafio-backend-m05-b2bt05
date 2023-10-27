const joi = require('joi');
const mensagens = require('../utilitarios/mensagens');

const nomeObrigatorio = mensagens.campoObrigatorio('nome');
const emailObrigatorio = mensagens.campoObrigatorio('email');
const cpfObrigatorio = mensagens.campoObrigatorio('cpf');

const nomeTipoString = mensagens.campoTipoString('nome');
const emailTipoString = mensagens.campoTipoString('email');
const cpfTipoString = mensagens.campoTipoString('cpf');
const cepTipoString = mensagens.campoTipoString('cep');
const ruaTipoString = mensagens.campoTipoString('rua');
const numeroTipoString = mensagens.campoTipoString('numero');
const bairroTipoString = mensagens.campoTipoString('bairro');
const cidadeTipoString = mensagens.campoTipoString('cidade');
const estadoTipoString = mensagens.campoTipoString('estado');

const schemaCliente = joi.object({
    nome: joi.string().required().messages({
        'string.empty': nomeObrigatorio,
        'any.required': nomeObrigatorio,
        'string.base': nomeTipoString
    }),
    email: joi.string().email().required().messages({
        'string.empty': emailObrigatorio,
        'string.email': mensagens.formatoEmailInvalido,
        'any.required': emailObrigatorio,
        'string.base': emailTipoString
    }),
    cpf: joi.string().min(11).max(14).required().messages({
        'string.empty': cpfObrigatorio,
        'string.min': mensagens.formatoCpfInvalido,
        'string.max': mensagens.formatoCpfInvalido,
        'string.pattern.base': mensagens.formatoCpfInvalido,
        'any.required': cpfObrigatorio,
        'string.limit': mensagens.formatoCpfInvalido,
        'string.base': cpfTipoString
    }),
    cep: joi.string().min(8).max(9).messages({
        // 'string.length': mensagens.formatoCepInvalido,
        'string.min': mensagens.formatoCepInvalido,
        'string.max': mensagens.formatoCepInvalido,
        'string.base': cepTipoString
    }),
    rua: joi.string().messages({
        'string.base': ruaTipoString
    }),
    numero: joi.string().messages({
        'string.base': numeroTipoString
    }),
    bairro: joi.string().messages({
        'string.base': bairroTipoString
    }),
    cidade: joi.string().messages({
        'string.base': cidadeTipoString
    }),
    estado: joi.string().messages({
        'string.base': estadoTipoString
    })
});


module.exports = schemaCliente;