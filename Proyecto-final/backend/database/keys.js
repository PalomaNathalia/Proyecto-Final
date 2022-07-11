const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "proyecto_bd",
    port: 5432,
  });

  module.exports = pool;