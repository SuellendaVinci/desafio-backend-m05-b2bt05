const express = require('express');
const categorias = require('./controladores/categoria/categorias');
const cadastrar = require('./controladores/usuarios/cadastrar');

const rotas = express();

rotas.get('/categoria', categorias.listarCategorias);
rotas.post('/usuario', cadastrar)

module.exports = rotas;
