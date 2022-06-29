CREATE DATABASE proyecto_BD;

\c proyecto_BD;

CREATE TABLE usuario (id serial PRIMARY KEY NOT NULL, nombre varchar(20) NOT NULL, password varchar(20) NOT NULL, email varchar(30)NOT NULL);

CREATE TABLE personas (id serial PRIMARY KEY NOT NULL, nombre varchar(20), monto INT, FOREIGN KEY id_usurio REFERENCES usuario(id));

CREATE TABLE tareas (nombre varchar(20), fecha DATE, tarea varchar(30), FOREIGN KEY id_personas REFERENCES personas(id));

CREATE TABLE cuenta (nombre varchar(20), cuenta varchar(30), monto INT, fecha_pago DATE, FOREIGN KEY id_personas REFERENCES personas(id));