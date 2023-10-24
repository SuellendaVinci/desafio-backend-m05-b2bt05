const atualizacaoDeUsuarioInvalida = {
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

const campoObrigatorio = (campo) => {
    return `O campo ${campo} é obrigatório.`
}

const campoTipoString = (campo) => {
    return `O campo ${campo} precisa ser do tipo string.`
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
    'O campo cep deve ter no máximo 9 dígitos.'

const formatoCpfInvalido =
    cpfInvalido.resposta

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

const produtoExcluido = {
    status: 200,
    resposta: { 'mensagem': 'Produto excluído com sucesso.' }
}

const produtoInvalido = {
    status: 404,
    resposta: { 'mensagem': 'Produto não encontrado.' }
}

const produtoValido = {
    status: 200,
    resposta: ''
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

    atualizacaoDeUsuarioInvalida,
    atualizacaoValida,
    cadastroValido,
    campoObrigatorio,
    campoTipoString,
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
    produtoExcluido,
    produtoInvalido,
    produtoValido,
    servidor,
    usuarioNaEncontrado,
    usuarioValido
}