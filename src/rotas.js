const express = require("express");
const getCategorias = require('./controladores/categoria/listar');
const cadastrar = require("./controladores/usuarios/cadastrar");
const login = require("./controladores/usuarios/login");
const atualizar = require("./controladores/usuarios/atualizar");
const validaToken = require("./intermediarios/validaToken");
const detalhar = require("./controladores/usuarios/detalhar");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const schemaUsuario = require("./validacoes/schemaUsuario");
const schemaLogin = require("./validacoes/schemaLogin");

const rotas = express();

rotas.get("/categoria", getCategorias);
rotas.post("/usuario", validarCorpoRequisicao(schemaUsuario), cadastrar);
rotas.post("/login", validarCorpoRequisicao(schemaLogin), login);

rotas.use(validaToken);

rotas.get('/usuario', detalhar)
rotas.put('/usuario', atualizar);

module.exports = rotas;
