const express = require('express');
const categorias = require('./controladores/categoria/categorias');
const cadastrar = require('./controladores/usuarios/cadastrar');
const login = require('./controladores/usuarios/login');

const rotas = express();

rotas.get('/categoria', categorias.listarCategorias);
rotas.post('/usuario', cadastrar)
rotas.post('/login', login)

module.exports = rotas;
