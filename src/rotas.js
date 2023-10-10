const express = require('express');
const categorias = require('./controladores/categorias');

const rotas = express();

rotas.get('/categoria', categorias.listarCategorias);

module.exports = rotas;
