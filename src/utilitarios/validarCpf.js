
const { validator } = require('cpf-cnpj-validator')
const Joi = require('joi').extend(validator)

const { formatoCpfInvalido } = require('./mensagens');

const cpfSchema = Joi.document().cpf();

const validarCpf = (dado) => {
    const cpfValido = cpfSchema.validate(dado);

    if (cpfValido.error) {
        return formatoCpfInvalido
    }

    return cpfValido;
}

module.exports = validarCpf;