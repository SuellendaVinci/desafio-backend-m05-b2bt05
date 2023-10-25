const express = require("express");

const listaCategorias = require('./controladores/categoria/listar');

const cadastrar = require("./controladores/usuarios/cadastrar");
const login = require("./controladores/usuarios/login");
const atualizar = require("./controladores/usuarios/atualizar");
const detalhar = require("./controladores/usuarios/detalhar");

const validaToken = require("./intermediarios/validaToken");

const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const schemaUsuario = require("./validacoes/schemaUsuario");
const schemaLogin = require("./validacoes/schemaUsuarioLogin");
const schemaProduto = require("./validacoes/schemaProduto");
const schemaCliente = require("./validacoes/schemaCliente");

const cadastraCliente = require("./controladores/cliente/cadastrar");
const atualizaCliente = require("./controladores/cliente/atualizar");
const listarClientes = require("./controladores/cliente/listar");

const cadastraProduto = require("./controladores/produtos/cadastrar");
const listaProdutos = require("./controladores/produtos/listar");
const atualizaProduto = require("./controladores/produtos/atualizar");
const excluiProduto = require("./controladores/produtos/excluir");

const listar = require("./controladores/pedidos/listar");

const rotas = express();

const multer = require('./multer');

rotas.get("/categoria", listaCategorias);
rotas.post("/usuario", validarCorpoRequisicao(schemaUsuario), cadastrar);
rotas.post("/login", validarCorpoRequisicao(schemaLogin), login);

rotas.use(validaToken);

rotas.get('/usuario', detalhar)
rotas.put('/usuario', validarCorpoRequisicao(schemaUsuario), atualizar);

rotas.post('/produto', multer.single('imagem'), validarCorpoRequisicao(schemaProduto), cadastraProduto)
rotas.put('/produto/:id', multer.single('imagem'), validarCorpoRequisicao(schemaProduto), atualizaProduto)
rotas.get('/produto', listaProdutos)
rotas.get('/produto/:id', listaProdutos)
rotas.delete('/produto/:id', excluiProduto)

rotas.post('/cliente', validarCorpoRequisicao(schemaCliente), cadastraCliente);
rotas.put('/cliente/:id', validarCorpoRequisicao(schemaCliente), atualizaCliente);
rotas.get(['/cliente', '/cliente/:id'], listarClientes);

rotas.get(['/pedido', '/pedido/:id'], listar);

module.exports = rotas;
