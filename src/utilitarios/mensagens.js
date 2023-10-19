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

const categoriaValida = {
    status: 200,
    resposta: ''
}

const categoriaInvalida = {
    status: 404,
    resposta: 'Categoria não encontrada.'
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

const clienteJaCadastrado = {
    status: 404,
    resposta: 'Cliente já cadastrado.'
}
const clienteValido = {
    status: 200,
    resposta: true
}

module.exports = {
    emailInvalido,
    cpfInvalido,
    usuarioNaEncontrado,
    loginInvalido,
    naoAutorizado,
    servidor,
    categoriaInvalida,
    categoriaValida,
    produtoInvalido,
    produtoExcluido,
    clienteInvalido,
    clienteJaCadastrado,
    clienteValido
}