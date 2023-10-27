const transportador = require("../servicos/nodemail");
const compiladorHtml = require("../utilitarios/compiladorHtml");

const enviarEmailPedido = async (pedido) => {
    const { email, nome, observacao, valor_total, itensPedido, id, produtos } = pedido;

    const dadosPedido = {
        id,
        itensPedido,
        observacao,
        valor_total,
        produtos
    }

    const textoEmail = compilaTexto(dadosPedido)

    try {
        const htmlPedido = await compiladorHtml('./src/templates/pedido.html', {
            usuario: nome,
            texto1: textoEmail.primeiroParagrafo,
            texto2: textoEmail.segundoParagrafo,
            texto3: textoEmail.terceiroParagrafo,
            texto4: textoEmail.quartoParagrafo,
        });

        await transportador.sendMail({
            from: 'pedido@pdv.com',
            to: `${nome} <${email}>`,
            subject: `PEDIDO ${id}`,
            html: htmlPedido
        });

    } catch (error) {

        return error.message;
    }
}

const compilaTexto = (dadosPedido) => {
    const { id, itensPedido, observacao, valor_total } = dadosPedido;
    let linhaPedido = "";

    itensPedido.forEach(item => {

        linhaPedido = linhaPedido +
            (`${item.descricao} - ${item.quantidade_produto} - R$ ${item.valor_produto / 100},00 - R$ ${(item.valor_produto * item.quantidade_produto) / 100},00`)
    });

    const primeiroParagrafo = `Obrigado por comprar conosco.
    O pedido ${id} foi efetuado com sucesso e logo
    será entregue. Abaixo, maiores informações sobre ele:`;


    const segundoParagrafo = linhaPedido;

    const terceiroParagrafo = `R$ ${valor_total / 100},00`;
    const quartoParagrafo = `Observações: ${observacao}`;

    const texto = { primeiroParagrafo, segundoParagrafo, terceiroParagrafo, quartoParagrafo };

    return texto
}

module.exports = {
    enviarEmailPedido
}