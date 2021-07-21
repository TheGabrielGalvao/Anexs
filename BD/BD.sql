
CREATE DATABASE anexs;

USE anexs;

CREATE TABLE cliente(
	id bigint auto_increment primary key NOT NULL,
	Nome varchar(255),
    Email varchar(255),
	CPF varchar(12),
    Telefone varchar(15),
	CEP varchar(10),
	Rua varchar(255),
	Numero varchar(8),
	Cidade varchar(255),
	Estado varchar(2) 
); 


 


