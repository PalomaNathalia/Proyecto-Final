CREATE DATABASE proyecto_bd;

\c proyecto_bd;

CREATE TABLE usuarios (id serial, nombre varchar(20) PRIMARY KEY, monto FLOAT);

CREATE TABLE tareas (id serial PRIMARY KEY, nombre_usuario varchar(20), descripcion varchar(30), fecha DATE, FOREIGN KEY (nombre_usuario) REFERENCES usuarios(nombre));

CREATE TABLE cuentas (id serial PRIMARY KEY, cuenta varchar(30), monto INT, nombre_usuario varchar(20), estado BOOLEAN DEFAULT false,  FOREIGN KEY (nombre_usuario) REFERENCES usuarios(nombre));


UPDATE cuentas SET estado = false;