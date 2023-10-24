DROP TABLE IF EXISTS usuarios;

DROP TABLE IF EXISTS categorias;

DROP TABLE IF EXISTS produtos;

DROP TABLE IF EXISTS clientes;

DROP TABLE IF EXISTS pedidos;

DROP TABLE IF EXISTS pedido_produtos;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR (255)NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor INTEGER NOT NULL,
    categoria_id INTEGER NOT NULL REFERENCES categorias(id),
    produto_imagem VARCHAR(255)
);

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    cep VARCHAR(8),
    rua VARCHAR(255),
    numero VARCHAR(10),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado CHAR(02)
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL REFERENCES clientes(id),
    observacao VARCHAR(255),
    valor_total INTEGER NOT NULL
);

CREATE TABLE pedido_produtos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL REFERENCES pedidos(id),
    produto_id INTEGER NOT NULL REFERENCES produtos(id),
    quantidade_produto INTEGER NOT NULL,
    valor_produto INTEGER NOT NULL
);