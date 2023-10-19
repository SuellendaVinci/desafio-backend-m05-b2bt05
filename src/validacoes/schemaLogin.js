const joi = require('joi');

const schemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'string.email': 'O campo e-mail precisa ter um formato válido.',
        'any.required': 'O campo e-mail é obrigatório.',
        'string.base': 'O campo e-mail precisa ser do tipo string.'
    }),
    senha: joi.string().min(8).required().messages({
        'string.min': 'A senha precisa conter, no mínimo, 8 caracteres.',
        'any.required': 'O campo senha é obrigatório.',
        'string.base': 'O campo senha precisa ser do tipo string.'
    })
});

module.exports = schemaLogin;