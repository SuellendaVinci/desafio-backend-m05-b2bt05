const express = require("express");
const categorias = require("./controladores/categoria/categorias");
const cadastrar = require("./controladores/usuarios/cadastrar");
const login = require("./controladores/usuarios/login");
const atualizar = require("./controladores/usuarios/atualizar");
const validaToken = require("./intermediarios/validaToken");

const rotas = express();

rotas.get("/categoria", categorias.listarCategorias);
rotas.post("/usuario", cadastrar);
rotas.post("/login", login);

rotas.use(validaToken);

rotas.put("/usuario", atualizar);

module.exports = rotas;
