const joi = require("joi");
const { mensagens } = require("../utilitarios/mensagens");

const schemaUsuario = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  senha: joi.string().min(8).required().messages(mensagens),
});

module.exports = schemaUsuario;
