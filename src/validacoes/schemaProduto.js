const joi = require("joi");

const schemaProduto = joi.object({
  descricao: joi.string().required(),
  quantidade_estoque: joi.number().integer().required(),
  valor: joi.number().required(),
  categoria_id: joi.number().integer().required(),
});

module.exports = schemaProduto;
