const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "proyecto_BD",
    port: 5432,
  });