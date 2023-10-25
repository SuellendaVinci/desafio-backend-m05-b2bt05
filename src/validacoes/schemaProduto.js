const joi = require("joi");
const mensagens = require('../utilitarios/mensagens');

const descricaoObrigatorio = mensagens.campoObrigatorio('descrição');
const quantidade_estoqueObrigatorio = mensagens.campoObrigatorio('quantidade em estoque');
const valorObrigatorio = mensagens.campoObrigatorio('valor');
const categoria_idObrigatorio = mensagens.campoObrigatorio('id da categoria');

const descricaoTipoString = mensagens.campoTipoString('descricao');
const quantidade_estoqueTipoNumber = mensagens.campoTipoNumber('quantidade_estoque');
const valorTipoNumber = mensagens.campoTipoNumber('valor');
const categoria_idTipoNumber = mensagens.campoTipoNumber('id da categoria');


const schemaProduto = joi.object({
  descricao: joi.string().required().messages({
    'string.empty': descricaoObrigatorio,
    'any.required': descricaoObrigatorio,
    'string.base': descricaoTipoString
  }),
  quantidade_estoque: joi.number().integer().positive().required().messages({
    'any.empty': quantidade_estoqueObrigatorio,
    'any.required': quantidade_estoqueObrigatorio,
    'number.base': quantidade_estoqueTipoNumber,
    'number.positive': quantidade_estoqueTipoNumber
  }),
  valor: joi.number().positive().required().messages({
    'any.empty': valorObrigatorio,
    'any.required': valorObrigatorio,
    'number.base': valorTipoNumber,
    'number.positive': valorTipoNumber
  }),
  categoria_id: joi.number().integer().positive().required().messages({
    'any.empty': categoria_idObrigatorio,
    'any.required': categoria_idObrigatorio,
    'number.base': categoria_idTipoNumber,
    'number.positive': categoria_idTipoNumber
  })
});

module.exports = schemaProduto;
