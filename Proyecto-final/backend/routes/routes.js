const route = require('../controllers/consultas');
const express = require("express");
const router = express.Router();

// Agregar usuarios

router.post('/usuarios', route.agregarUsuarios)

router.get("/usuarios", route.getUsuarios)

router.put("/usuarios/:id", route.editarUsuarios)

router.delete("/usuarios/:id", route.eliminarUsuarios)


// Agregar tareas

router.post('/tarea', route.agregarTarea)

router.get("/tarea", route.getTarea)

router.put("/tarea/:id", route.editarTarea)

router.delete("/tarea/:id", route.eliminarTarea)

// Agregar pagos

router.post('/pago', route.agregarPago)

router.get("/pago", route.getPago)

module.exports = router;