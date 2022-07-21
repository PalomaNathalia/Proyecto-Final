const route = require('../controllers/consultas');
const express = require("express");
const router = express.Router();

// Agregar usuarios

router.post('/usuarios', route.agregarUsuarios)

router.get("/usuarios", route.getUsuarios)

router.delete("/usuarios", route.eliminarUsuarios)


// Agregar tareas

router.post('/tarea', route.agregarTarea)

router.get("/tarea", route.getTarea)

router.put("/tarea", route.editarTarea)

router.delete("/tarea", route.eliminarTarea)

// Agregar pagos

router.post('/pago', route.agregarPago)

router.put("/pago", route.editarPago)

router.get("/pago", route.getPago)

router.delete("/pago", route.eliminarPago)

module.exports = router;