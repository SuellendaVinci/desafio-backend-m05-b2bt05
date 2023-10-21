const express = require("express");

const getCategorias = require('./controladores/categoria/listar');

const cadastrar = require("./controladores/usuarios/cadastrar");
const login = require("./controladores/usuarios/login");
const atualizar = require("./controladores/usuarios/atualizar");
const detalhar = require("./controladores/usuarios/detalhar");

const validaToken = require("./intermediarios/validaToken");

const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const schemaUsuario = require("./validacoes/schemaUsuario");
const schemaLogin = require("./validacoes/schemaLogin");
const schemaCliente = require("./validacoes/schemaCliente");

const postCliente = require("./controladores/cliente/cadastrar");
const putCliente = require("./controladores/cliente/atualizar");
const rotas = express();

rotas.get("/categoria", getCategorias);
rotas.post("/usuario", validarCorpoRequisicao(schemaUsuario), cadastrar);
rotas.post("/login", validarCorpoRequisicao(schemaLogin), login);

rotas.use(validaToken);

rotas.get('/usuario', detalhar)
rotas.put('/usuario', validarCorpoRequisicao(schemaUsuario), atualizar);

rotas.post('/cliente', validarCorpoRequisicao(schemaCliente), postCliente)
rotas.put('/cliente/:id', validarCorpoRequisicao(schemaCliente), putCliente)
module.exports = rotas;
