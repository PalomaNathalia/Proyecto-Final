const pool = require("../database/keys");

const route = {};

route.agregarUsuarios = async (req, res) => {
  try {
    const { nombre, monto } = req.body;
    await pool.query("INSERT INTO usuarios (nombre, monto) VALUES ($1, $2)", [
      nombre,
      monto,
    ]);
    res.send("agregado");
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

route.getUsuarios = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM usuarios");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

route.editarUsuarios = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, monto } = req.body;
    await pool.query("UPDATE usuarios SET nombre=$1, monto=$2 WHERE id=$3", [
      nombre,
      monto,
      id,
    ]);
    res.send("Editado con éxito!");
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

route.eliminarUsuarios = async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query("DELETE FROM usuarios WHERE id=$1", [id]);
    res.send("Eliminado con éxito!");
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

// Tareas

route.agregarTarea = async (req, res) => {
  try {
    const { nombre_usuario, descripcion, fecha } = req.body;
    await pool.query(
      "INSERT INTO tareas (nombre_usuario, descripcion ,fecha) VALUES ($1, $2, $3)",
      [nombre_usuario, descripcion, fecha]
    );
    res.send("agregado");
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

route.getTarea = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM tareas");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

route.editarTarea = async (req, res) => {
  try {
    const id = req.params.id;
    const { descripcion, fecha } = req.body;
    await pool.query("UPDATE tareas SET descripcion=$1, fecha=$2 WHERE id=$3", [
      descripcion,
      fecha,
      id
    ]);
    res.send("Editado con éxito!");
  } catch (error) {
    res.status(500).send(error);
    console.log("Error código: " + error.code);
  }
};

route.eliminarTarea = async (req, res) => {
    try {
      const id = req.params.id;
      await pool.query("DELETE FROM tareas WHERE id=$1", [id]);
      res.send("Eliminado con éxito!");
    } catch (error) {
      res.status(500).send(error);
      console.log("Error código: " + error.code);
    }
  };

  // Pagos

route.agregarPago = async (req, res) => {
    try {
      const { cuenta, monto, nombre_usuario } = req.body;
      await pool.query(
        "INSERT INTO cuentas (cuenta, monto, nombre_usuario) VALUES ($1, $2, $3)",
       [ cuenta, monto, nombre_usuario ]
      );
      res.send("agregado");
    } catch (error) {
      res.status(500).send(error);
      console.log("Error código: " + error.code);
    }
  };
  
  route.getPago = async (req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM cuentas");
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).send(error);
      console.log("Error código: " + error.code);
    }
  };
module.exports = route;
