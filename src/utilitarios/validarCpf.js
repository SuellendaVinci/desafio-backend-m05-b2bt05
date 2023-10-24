
// const { validator, cpf } = require('cpf-cnpj-validator')
// const Joi = require('joi').extend(validator)

// const cpfSchema = Joi.document().cpf();

// const validarCpf = (documento) => {
//     let cpfValido = cpfSchema.validate(documento);

//     if (cpfValido.error) {
//         return false
//     }
//     cpfValido = cpf.format(cpfValido.value)

//     return cpfValido;
// }

// module.exports = validarCpf;