const joi = require('joi');
const mensagens = require("../utilitarios/mensagens");

const emailObrigatorio = mensagens.campoObrigatorio('email');
const senhaObrigatoria = mensagens.campoObrigatorio('senha');
const senhatipoString = mensagens.campoTipoString('senha');
const emailtipoString = mensagens.campoTipoString('senha');


const schemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'string.email': mensagens.formatoEmailInvalido,
        'any.required': emailObrigatorio,
        'string.base': emailtipoString
    }),
    senha: joi.string().required().messages({
        'any.required': senhaObrigatoria,
        'string.base': senhatipoString
    })
});

module.exports = schemaLogin;