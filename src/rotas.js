const express = require('express');
const getCategorias = require('./controladores/categoria/listar');
const cadastrar = require('./controladores/usuarios/cadastrar');
const login = require('./controladores/usuarios/login');
const atualizar = require('./controladores/usuarios/atualizar');
const validaToken = require('./intermediarios/validaToken');
const detalhar = require('./controladores/usuarios/detalhar');

const rotas = express();

rotas.get('/categoria', getCategorias);
rotas.post('/usuario', cadastrar);
rotas.post('/login', login);

rotas.use(validaToken);

rotas.get('/usuario', detalhar)
rotas.put('/usuario', atualizar);

module.exports = rotas;
