const joi = require('joi');
const mensagens = require('../utilitarios/mensagens');

const cliente_idObrigatorio = mensagens.campoObrigatorio('id do cliente');
const produto_idObrigatorio = mensagens.campoObrigatorio('id do produto');
const quantidade_produtoObrigatorio = mensagens.campoObrigatorio('quantidade de produto');

const cliente_idNumber = mensagens.campoTipoNumber('id do cliente');
const produto_idNumber = mensagens.campoTipoNumber('id do produto');
const quantidade_produtoNumber = mensagens.campoTipoNumber('quantidade de produto');
const itemDoPedidoNumber = mensagens.campoTipoNumber('item do pedido');

const schemaPedido = joi.object({
    cliente_id: joi.number().integer().positive().required().messages({
        'number.empty': cliente_idObrigatorio,
        'any.required': cliente_idObrigatorio,
        'number.base': cliente_idNumber,
        'number.positive': cliente_idNumber
    }),
    observacao: joi.string(),
    pedido_produtos: joi.array()
        .items(joi.object({
            produto_id: joi.number().integer().required().positive().messages({
                'number.empty': produto_idObrigatorio,
                'any.required': produto_idObrigatorio,
                'number.base': produto_idNumber,
                'number.integer': produto_idNumber,
                'number.positive': produto_idNumber
            }),
            quantidade_produto: joi.number().integer().positive().required().messages({
                'number.empty': quantidade_produtoObrigatorio,
                'any.required': quantidade_produtoObrigatorio,
                'number.base': quantidade_produtoNumber,
                'number.integer': quantidade_produtoNumber,
                'number.positive': quantidade_produtoNumber
            }),
        }))
        .min(1)
        .required().messages({
            'number.empty': mensagens.pedidoMinimo,
            'any.required': mensagens.pedidoMinimo,
            'number.positive': itemDoPedidoNumber,
            'array.base': mensagens.produtoEmArray
        }),
});

module.exports = schemaPedido;