const emailInvalido = {
    status: 400,
    resposta: 'O email informado já possui cadastro.'
}

const usuarioNaEncontrado = {
    status: 400,
    resposta: 'Usuário não encontrado.'
}

const loginInvalido = {
    status: 400,
    resposta: 'Usuário e/ou senha inválidos.'
}

const servidor = {
    status: 500,
    resposta: 'Erro interno do servidor.'
}

const naoAutorizado = {
    status: 404,
    resposta: 'Não autorizado.'
}

const atualizacaoDeUsuarioValida = {
    status: 200,
    resposta: ''
}

const atualizacaoDeUsuarioInvalida = {
    status: 400,
    resposta: ''
}

const categoriaValida = {
    status: 200,
    resposta: ''
}

const categoriaInvalida = {
    status: 404,
    resposta: 'Categoria não encontrada.'
}

const produtoValido = {
    status: 200,
    resposta: ''
}

const produtoInvalido = {
    status: 404,
    resposta: 'Produto não encontrada.'
}

const cpfInvalido = {
    status: 404,
    resposta: 'O cpf informado já possui cadastro.'
}

const produtoExcluido = {
    status: 200,
    resposta: 'Produto excluído com sucesso.'
}

const clienteInvalido = {
    status: 404,
    resposta: 'Cliente não encontrado.'
}

const clientesSemCadastro = {
    status: 404,
    resposta: 'Não existem clientes cadastrados.'
};

const clienteJaCadastrado = {
    status: 404,
    resposta: 'Cliente já cadastrado.'
}

const clienteValido = {
    status: 200,
    resposta: true
}

const campoObrigatorio = (campo) => {
    return `O campo ${campo} é obrigatório.`
}

const formatoEmailInvalido =
    'O campo e-mail deve ter um formato válido.'


const formatoCpfInvalido =
    'O campo cpf deve ter no máximo 14 dígitos.'


const formatoCepInvalido =
    'O campo cep deve ter no máximo 9 dígitos.'


module.exports = {
    emailInvalido,
    cpfInvalido,
    usuarioNaEncontrado,
    loginInvalido,
    naoAutorizado,
    servidor,
    atualizacaoDeUsuarioValida,
    atualizacaoDeUsuarioInvalida,
    categoriaInvalida,
    categoriaValida,
    produtoValido,
    produtoInvalido,
    produtoExcluido,
    clienteInvalido,
    clienteJaCadastrado,
    clienteValido,
    campoObrigatorio,
    formatoCepInvalido,
    formatoCpfInvalido,
    formatoEmailInvalido,
    clientesSemCadastro
}