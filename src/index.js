require("dotenv").config();
const knex = require("./conexao");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(500).json("Iniciando Desafio Módulo 05!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
