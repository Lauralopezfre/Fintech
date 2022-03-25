var express = require("express");

const ServicioAdministrador = require("../api/ServicioAdministrador");
const ServicioCliente = require("../api/ServicioCliente");
const ServicioMovimiento = require("../api/ServicioMovimiento");
const ServicioCuenta = require("../api/ServicioCuenta");
const ServicioTarjeta = require("../api/ServicioTarjeta");

const routerAdministrador = express.Router();
const routerCliente = express.Router();
const routerCuenta = express.Router();
const routerMovimiento = express.Router();
const routerTarjeta = express.Router();

//Crear administrador
routerAdministrador.route("/").post(ServicioAdministrador.insert);
// Obtener todos los administradores
routerAdministrador.route("/").get(ServicioAdministrador.getAll);
// Obtener un administrador
routerAdministrador.route("/:userId").get(ServicioAdministrador.get);
// Borrar un administrador
routerAdministrador.route("/:userId").delete(ServicioAdministrador.delete);
// Actualizar un adminiostrador
routerAdministrador.route("/:userId").put(ServicioAdministrador.update);

//Crear cliente
routerCliente.route("/").post(ServicioCliente.insert);
// Obtener todos los cliente
routerCliente.route("/").get(ServicioCliente.getAll);
// Obtener un cliente
routerCliente.route("/:userId").get(ServicioCliente.get);
// Borrar un cliente
routerCliente.route("/:userId").delete(ServicioCliente.delete);
// Actualizar un cliete
routerCliente.route("/:userId").put(ServicioCliente.update);

//Crear cuenta
routerCuenta.route("/").post(ServicioCuenta.insert);
// Obtener todos las cuentas
routerCuenta.route("/").get(ServicioCuenta.getAll);
// Obtener una cuenta
routerCuenta.route("/:userId").get(ServicioCuenta.get);
// Borrar una cuenta
routerCuenta.route("/:userId").delete(ServicioCuenta.delete);
// Actualizar una cuenta
routerCuenta.route("/:userId").put(ServicioCuenta.update);

//Crear movimiento
routerMovimiento.route("/").post(ServicioMovimiento.insert);
// Obtener todos los clientes
routerMovimiento.route("/").get(ServicioMovimiento.getAll);
// Obtener un movimiento
routerMovimiento.route("/:idMovimiento").get(ServicioMovimiento.get);
// Borrar un movimiento
routerMovimiento.route("/:idMovimiento").delete(ServicioMovimiento.delete);
// Actualizar un movimiento
routerMovimiento.route("/:idMovimiento").put(ServicioMovimiento.update);

//Crear tarjeta
routerTarjeta.route("/").post(ServicioTarjeta.insert);
// Obtener todos las tarjetas
routerTarjeta.route("/").get(ServicioTarjeta.getAll);
// Obtener una tarjeta
routerTarjeta.route("/:numero").get(ServicioTarjeta.get);
// Borrar una tarjeta
routerTarjeta.route("/:numero").delete(ServicioTarjeta.delete);
// Actualizar una tarjeta
routerTarjeta.route("/:numero").put(ServicioTarjeta.update);

module.exports = {
    routerAdministrador: routerAdministrador,
    routerCliente: routerCliente,
    routerCuenta: routerCuenta,
    routerMovimiento: routerMovimiento,
    routerTarjeta: routerTarjeta,
}