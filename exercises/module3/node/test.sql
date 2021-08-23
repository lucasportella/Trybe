CREATE INDEX nome_index ON tabela(coluna);
CREATE FULLTEXT INDEX nome_index ON tabela(coluna);

CREATE DATABASE IF NOT EXISTS pizzaria;
USE pizaria;

CREATE TABLE pizzas(
    pizza_id INT PRIMARY KEY,
    sabor VARCHAR(100),
    preco DECIMAL(5,2),
    INDEX sabor_index(sabor)
) ENGINE=InnoDB;

ALTER TABLE nome_tabela
ADD INDEX nome_index(nome_coluna);
USE sakila;