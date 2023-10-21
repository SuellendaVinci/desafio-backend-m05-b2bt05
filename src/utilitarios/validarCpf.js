const { cpf } = require('cpf-cnpj-validator');
const { cpfInvalido } = require('./mensagens');

const validarCpf = (dado) => {
    const num = cpf.generate()
    const cpfSemCaractere = dado.replace('.', '').replace('-', '');
    const cpfValido = cpf.isValid(dado);

    if (!cpfValido) {
        return cpfInvalido
    }

    return cpf.format(cpfSemCaractere);
}

module.exports = validarCpf;