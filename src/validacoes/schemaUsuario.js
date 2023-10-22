const joi = require("joi");
const mensagens = require("../utilitarios/mensagens");

const nomeObrigatorio = mensagens.campoObrigatorio('nome');
const emailObrigatorio = mensagens.campoObrigatorio('email');
const senhaObrigatoria = mensagens.campoObrigatorio('senha');
const nomeTipoString = mensagens.campoTipoString('nome');
const emailTipoString = mensagens.campoTipoString('email');
const senhaTipoString = mensagens.campoTipoString('senha');

const schemaUsuario = joi.object({
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
  senha: joi.string().min(8).required().messages({
    'string.empty': senhaObrigatoria,
    'any.required': senhaObrigatoria,
    'string.min': mensagens.formatoSenhaInvalido,
    'string.base': senhaTipoString
  }),
});

module.exports = schemaUsuario;
