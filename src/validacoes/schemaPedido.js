const joi = require('joi');

const schemaPedido = joi.object({
    cliente_id: joi.number().integer().required(),
    observacao: joi.string().required(),
    pedido_produtos: joi.array()
        .items(joi.object({
            produto_id: joi.number().integer().required(),
            quantidade_produto: joi.number().integer().required(),
        }))
        .min(1) // Pelo menos um produto deve ser especificado
        .required(),
});

module.exports = schemaPedido;