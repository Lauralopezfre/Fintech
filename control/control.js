const ClienteBD = require("../data/ClienteDB");
const AdministradorBD = require("../data/AdministradorDB");
const CuentaBD = require("../data/CuentaDB");
const MovimientoBD = require("../data/MovimientoDB");
const TarjetaBD = require("../data/TarjetaDB");
const Cliente = require("../clases/Cliente");
const Movimiento = require("../clases/Movimiento");
const Administrador = require("../clases/Administrador");
const Tarjeta = require("../clases/Tarjeta");
const Cuenta = require("../clases/Cuenta");

//** CLIENTE */

const insertarCliente = async(
  userId,
  nombre,
  contrasenia,
  fechaRegistro,
  email,
  rfc,
  direccion,
  identificacion,
  cantidadCuentas,
  tiposCuentas,
  tipoTarjetas,
  telefono
) => {
  const cliente = new Cliente(
    userId,
    nombre,
    contrasenia,
    fechaRegistro,
    email,
    rfc,
    direccion,
    identificacion,
    cantidadCuentas,
    tiposCuentas,
    tipoTarjetas,
    telefono
  );

  return await ClienteBD.insertar(cliente);
};

const actualizarCliente = async(
  userId,
  nombre,
  contrasenia,
  fechaRegistro,
  email,
  rfc,
  direccion,
  identificacion,
  cantidadCuentas,
  tiposCuentas,
  tipoTarjetas,
  telefono
) => {
  const cliente = new Cliente(
    userId,
    nombre,
    contrasenia,
    fechaRegistro,
    email,
    rfc,
    direccion,
    identificacion,
    cantidadCuentas,
    tiposCuentas,
    tipoTarjetas,
    telefono
  );

  await ClienteBD.actualizar(cliente);
};

const obtenerTodosClientes = async () => {
  return await ClienteBD.obtenerTodos();
};

const obtenerCliente = async (userId) => {
  return await ClienteBD.obtener(userId);
};

const eliminarCliente = async(userId) => {
  const cliente = await obtenerCliente(userId)
  await ClienteBD.eliminar(cliente[0]);
};

//** ADMINISTRADOR */

const insertarAdministrador = async (
  userId,
  nombre,
  contrasenia,
  fechaRegistro,
  email,
  nombreAdministrador,
  area,
  puesto,
  telefono
) => {
  const administrador = new Administrador(
    userId,
    nombre,
    contrasenia,
    fechaRegistro,
    email,
    nombreAdministrador,
    area,
    puesto,
    telefono
  );

  return await AdministradorBD.insertar(administrador);
};

const actualizarAdministrador = async(
  userId,
  nombre,
  contrasenia,
  fechaRegistro,
  email,
  nombreAdministrador,
  area,
  puesto,
  telefono
) => {
  const administrador = new Administrador(
    userId,
    nombre,
    contrasenia,
    fechaRegistro,
    email,
    nombreAdministrador,
    area,
    puesto,
    telefono
  );

  await AdministradorBD.actualizar(administrador);
};

const obtenerTodosAdministradores = async () => {
  return await AdministradorBD.obtenerTodos();
};

const obtenerAdministrador =  async (userId) => {
  return await AdministradorBD.obtener(userId);
};

const eliminarAdministrador = async(userId) => {
  const admin = await obtenerAdministrador(userId)
  await AdministradorBD.eliminar(admin);
};

//** CUENTA */

const insertarCuenta = async(
  balance,
  estadoCuenta,
  reporte,
  tarjetaDebito,
  tipoCuenta,
  titular
) => {
  const cuenta = new Cuenta(
    balance,
    estadoCuenta,
    reporte,
    tarjetaDebito,
    tipoCuenta,
    titular
  );

  return await CuentaBD.insertar(cuenta);
};

const actualizarCuenta = async(
  balance,
  estadoCuenta,
  reporte,
  tarjetaDebito,
  tipoCuenta,
  titular
) => {
  const cuenta = new Cuenta(
    balance,
    estadoCuenta,
    reporte,
    tarjetaDebito,
    tipoCuenta,
    titular
  );

  await CuentaBD.actualizar(cuenta);
};

const obtenerTodasCuentas = async() => {
  return await CuentaBD.obtenerTodos();
};

const obtenerCuenta = async(titular) => {
  return await CuentaBD.obtener(titular);
};

const eliminarCuenta = async(titular) => {
  const c = await obtenerCuenta(titular)
  await CuentaBD.eliminar(c[0]);
};

//** TARJETA */

const insertarTarjeta = async(
  numero,
  chip,
  cvv,
  fechaVencimiento,
  entidadBancaria,
  clabeInterbancaria,
  tipoTarjeta
) => {
  const tarjeta = new Tarjeta(
    numero,
    chip,
    cvv,
    fechaVencimiento,
    entidadBancaria,
    clabeInterbancaria,
    tipoTarjeta
  );

  return await TarjetaBD.insertar(tarjeta);
};

const actualizarTarjeta = async(
  numero,
  chip,
  cvv,
  fechaVencimiento,
  entidadBancaria,
  clabeInterbancaria,
  tipoTarjeta
) => {
  const tarjeta = new Tarjeta(
    numero,
    chip,
    cvv,
    fechaVencimiento,
    entidadBancaria,
    clabeInterbancaria,
    tipoTarjeta
  );

  await TarjetaBD.actualizar(tarjeta);
};

const obtenerTodasTarjetas = async() => {
  return await TarjetaBD.obtenerTodos();
};

const obtenerTarjeta = async(numero) => {
  return await TarjetaBD.obtener(numero);
};

const eliminarTarjeta = async(numero) => {
  const t = await obtenerTarjeta(numero)
  await TarjetaBD.eliminar(t[0]);
};

//** MOVIMIENTO */

const insertarMovimiento = async(
  idMovimiento,
  cantidad,
  claveRastreo,
  fechaHora,
  bancoReceptor
) => {
  const mov = new Movimiento(
    idMovimiento,
    cantidad,
    claveRastreo,
    fechaHora,
    bancoReceptor
  );

  return await MovimientoBD.insertar(mov);
};

const actualizarMovimiento = (
  idMovimiento,
  cantidad,
  claveRastreo,
  fechaHora,
  bancoReceptor
) => {
  const mov = new Movimiento(
    idMovimiento,
    cantidad,
    claveRastreo,
    fechaHora,
    bancoReceptor
  );

  MovimientoBD.actualizar(mov);
};

const obtenerTodosMovimientos = () => {
  return MovimientoBD.obtenerTodos();
};

const obtenerMovimiento = (idMovimiento) => {
  return MovimientoBD.obtener(idMovimiento);
};

const eliminarMovimiento = async (idMovimiento) => {
  const mov = await obtenerMovimiento(idMovimiento)
  await MovimientoBD.eliminar(mov[0]);
};

module.exports = {
  cliente: {
    insertar: insertarCliente,
    actualizar: actualizarCliente,
    eliminar: eliminarCliente,
    obtenerTodos: obtenerTodosClientes,
    obtener: obtenerCliente,
  },
  administrador: {
    insertar: insertarAdministrador,
    actualizar: actualizarAdministrador,
    eliminar: eliminarAdministrador,
    obtenerTodos: obtenerTodosAdministradores,
    obtener: obtenerAdministrador,
  },
  cuenta: {
    insertar: insertarCuenta,
    actualizar: actualizarCuenta,
    eliminar: eliminarCuenta,
    obtenerTodos: obtenerTodasCuentas,
    obtener: obtenerCuenta,
  },
  tarjeta: {
    insertar: insertarTarjeta,
    actualizar: actualizarTarjeta,
    eliminar: eliminarTarjeta,
    obtenerTodos: obtenerTodasTarjetas,
    obtener: obtenerTarjeta,
  },
  movimiento: {
    insertar: insertarMovimiento,
    actualizar: actualizarMovimiento,
    eliminar: eliminarMovimiento,
    obtenerTodos: obtenerTodosMovimientos,
    obtener: obtenerMovimiento,
  },
};
