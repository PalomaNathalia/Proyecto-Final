const pool = require("../database/keys");

const route = {};

route.agregarUsuarios = async (req, res) => {
  try {
    const { nombre_usuario, monto } = req.body;
    await pool.query("INSERT INTO usuarios (nombre_usuario, monto) VALUES ($1, $2)", [
      nombre_usuario,
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


route.eliminarUsuarios = async (req, res) => {
  try {
    const { id }= req.query;
    const rows = await pool.query(`DELETE FROM usuarios WHERE id=${id};`);
    res.status(200).json(rows);
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
    const {id}= req.query;
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
      const {id} = req.query;
      const { rows } = await pool.query(`DELETE FROM tareas WHERE id=${id}`);
      // res.send("Eliminado con éxito!");
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).send(error);
      console.log("Error código: " + error.code);
    }
  };

  // Pagos

route.agregarPago = async (req, res) => {
  const { cuenta, monto, nombre_usuario} = req.body;
    try {
      const pago = {
        text: "INSERT INTO cuentas (cuenta, monto, nombre_usuario) VALUES ($1, $2, $3)",
       values: [ cuenta, monto, nombre_usuario ],
      };
      const emisor = {
        text: "UPDATE usuarios SET monto = monto + $2 WHERE nombre_usuario = $1",
        values: [nombre_usuario, monto],
      };
      console.log(emisor)
        await pool.query("BEGIN");
        await pool.query(pago);
        await pool.query(emisor);
        await pool.query("COMMIT");
        res.send("agregado");
    } catch (error) {
      // res.status(500).send(error);
      await pool.query("ROLLBACK");
      throw error;
      console.log("Error código: " + error.code);
      throw error;
    }
  };

  route.editarPago = async (req, res) => {
    try {
      const {id}= req.query;
      const { estado} = req.body;
      await pool.query("UPDATE cuentas SET estado=true WHERE id=$1", [
        estado,
        id
      ]);
      res.send("Editado con éxito!");
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
  
  route.eliminarPago = async (req, res) => {
    try {
      const {id} = req.query;
      const { rows } = await pool.query(`DELETE FROM cuentas WHERE id=${id}`);
      // res.send("Eliminado con éxito!");
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).send(error);
      console.log("Error código: " + error.code);
    }
  };
module.exports = route;
