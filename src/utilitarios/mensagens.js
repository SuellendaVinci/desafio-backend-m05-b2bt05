const atualizacaoInvalida = {
    status: 400,
    resposta: ''
}

const atualizacaoValida = {
    status: 200,
    resposta: ''
}

const cadastroValido = {
    status: 201,
    resposta: true
}

const cadastroInvalido = {
    status: 400,
    resposta: ''
}

const campoObrigatorio = (campo) => {
    return `O campo ${campo} é obrigatório.`
}

const campoTipoString = (campo) => {
    return `O campo ${campo} precisa ser do tipo string.`
}
const campoTipoNumber = (campo) => {
    return `O campo ${campo} precisa ser um número inteiro válido e positivo.`
}

const categoriaInvalida = {
    status: 404,
    resposta: { 'mensagem': 'Categoria não encontrada.' }
}

const categoriaValida = {
    status: 200,
    resposta: ''
}

const cepInValido = {
    status: 400,
    resposta: { 'mensagem': 'O cep infomado é inválido.' }
}

const clienteInvalido = {
    status: 404,
    resposta: { 'mensagem': 'Cliente não encontrado.' }
}

const clienteJaCadastrado = {
    status: 404,
    resposta: { 'mensagem': 'Cliente já cadastrado.' }
}

const clientesSemCadastro = {
    status: 404,
    resposta: { 'mensagem': 'Não existem clientes cadastrados.' }
};

const clienteValido = {
    status: 200,
    resposta: true
}

const cpfCadastrado = {
    status: 404,
    resposta: { 'mensagem': 'O cpf informado já possui cadastro.' }
}

const cpfInvalido = {
    status: 404,
    resposta: { 'mensagem': 'O campo cpf deve ser um número válido' }
}

const emailInvalido = {
    status: 400,
    resposta: { 'mensagem': 'O email informado já possui cadastro.' }
}

const formatoCepInvalido =
    'O campo cep deve ter no mínimo 8 e no máximo 9 dígitos.'

const formatoCpfInvalido =
    cpfInvalido.resposta.mensagem

const formatoEmailInvalido =
    'O campo e-mail deve ter um formato válido.'

const formatoSenhaInvalido =
    'A campo senha precisa conter, no mínimo, 8 caracteres.'

const loginInvalido = {
    status: 400,
    resposta: { 'mensagem': "E-mail ou senha estão inseridos incorretamente, faça as mudanças e tente novamente." }
}

const naoAutorizado = {
    status: 404,
    resposta: { 'mensagem': 'Não autorizado.' }
}

const pedidoMinimo =
    'O pedido deve ter ao menos um produto para ser válido.'

const produtoEmArray =
    'O(s) produto(s) deve(m) ser enviados em um array.'

const produtoExcluido = {
    status: 200,
    resposta: { 'mensagem': 'Produto excluído com sucesso.' }
}

const produtoNaoCadastrado = {
    status: 400,
    resposta: { 'mensagem': 'Produto não cadastrado.' }
}

const produtoInvalido = {
    status: 404,
    resposta: { 'mensagem': 'Produto não encontrado.' }
}

const produtoValido = {
    status: 200,
    resposta: ''
}

const produtoEmUso = {
    status: 409,
    resposta: { 'mensagem': 'Produto em uso.' }
}

const servidor = {
    status: 500,
    resposta: { 'mensagem': 'Erro interno do servidor.' }
}

const usuarioNaEncontrado = {
    status: 400,
    resposta: { 'mensagem': 'Usuário não encontrado.' }
}

const usuarioValido = {
    status: 200,
    resposta: true
}

module.exports = {

    atualizacaoInvalida,
    atualizacaoValida,
    cadastroValido,
    cadastroInvalido,
    campoObrigatorio,
    campoTipoString,
    campoTipoNumber,
    categoriaInvalida,
    categoriaValida,
    cepInValido,
    clienteInvalido,
    clienteJaCadastrado,
    clientesSemCadastro,
    clienteValido,
    cpfCadastrado,
    cpfInvalido,
    emailInvalido,
    formatoCepInvalido,
    formatoCpfInvalido,
    formatoEmailInvalido,
    formatoSenhaInvalido,
    loginInvalido,
    naoAutorizado,
    pedidoMinimo,
    produtoExcluido,
    produtoEmArray,
    produtoInvalido,
    produtoNaoCadastrado,
    produtoValido,
    produtoEmUso,
    servidor,
    usuarioNaEncontrado,
    usuarioValido
}