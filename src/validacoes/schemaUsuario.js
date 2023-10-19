const joi = require("joi");

const schemaUsuario = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  senha: joi.string().min(8).required(),
});

module.exports = schemaUsuario;
