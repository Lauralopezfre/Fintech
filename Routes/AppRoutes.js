var express = require("express");

const ServicioAdministrador = require("../api/ServicioAdministrador");
const router = express.Router();

//Crear administrador
router.route("/").post(ServicioAdministrador.insert);
// Obtener todos los administradores
router.route("/").get(ServicioAdministrador.getAll);
// Obtener un administrador
router.route("/:userId").get(ServicioAdministrador.get);
// Borrar un administrador
router.route("/:userId").delete(ServicioAdministrador.delete);
// Actualizar un adminiostrador
router.route("/:userId").put(ServicioAdministrador.update);

module.exports = router;
