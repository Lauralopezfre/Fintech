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

const insertarCliente = (
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

  ClienteBD.insertar(cliente);
};

const actualizarCliente = (
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

  ClienteBD.actualizar(cliente);
};

const obtenerTodosClientes = () => {
  return ClienteBD.obtenerTodos();
};

const obtenerCliente = (userId) => {
  return ClienteBD.obtener(userId);
};

const eliminarCliente = (userId) => {
  obtenerCliente(userId).then((cliente) => {
    ClienteBD.eliminar(cliente[0]);
  });
};

//** ADMINISTRADOR */

const insertarAdministrador = (
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

  return AdministradorBD.insertar(administrador);
};

const actualizarAdministrador = (
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

  AdministradorBD.actualizar(administrador);
};

const obtenerTodosAdministradores = () => {
  return AdministradorBD.obtenerTodos();
};

const obtenerAdministrador = (userId) => {
  return AdministradorBD.obtener(userId);
};

const eliminarAdministrador = (userId) => {
  obtenerAdministrador(userId).then((administrador) => {
    AdministradorBD.eliminar(administrador[0]);
  });
};

//** CUENTA */

const insertarCuenta = (
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

  CuentaBD.insertar(cuenta);
};

const actualizarCuenta = (
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

  CuentaBD.actualizar(cuenta);
};

const obtenerTodasCuentas = () => {
  return CuentaBD.obtenerTodos();
};

const obtenerCuenta = (titular) => {
  return CuentaBD.obtener(titular);
};

const eliminarCuenta = (titular) => {
  obtenerCuenta(titular).then(cuenta => {
    CuentaBD.eliminar(cuenta[0]);
  });
};

//** TARJETA */

const insertarTarjeta = (
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

  TarjetaBD.insertar(tarjeta);
};

const actualizarTarjeta = (
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

    TarjetaBD.actualizar(tarjeta);
  };
  
  const obtenerTodasTarjetas = () => {
    return TarjetaBD.obtenerTodos();
  };
  
  const obtenerTarjeta = (numero) => {
    return TarjetaBD.obtener(numero);
  };
  
  const eliminarTarjeta = (numero) => {
    obtenerTarjeta(numero).then(tarjeta => {
        TarjetaBD.eliminar(tarjeta[0]);
    });
  };

//** MOVIMIENTO */

const insertarMovimiento = (
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

  MovimientoBD.insertar(mov);
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
  
  const eliminarMovimiento = (idMovimiento) => {
    obtenerMovimiento(idMovimiento).then(mov => {
      MovimientoBD.eliminar(mov[0]);
    });
  };

module.exports = {
  cliente: {
    insertar: insertarCliente,
    actualizar: actualizarCliente,
    eliminar: eliminarCliente,
    obtenerTodos: obtenerTodosClientes,
    obtener: obtenerCliente
  },
  administrador: {
    insertar: insertarAdministrador,
    actualizar: actualizarAdministrador,
    eliminar: eliminarAdministrador,
    obtenerTodos: obtenerTodosAdministradores,
    obtener: obtenerAdministrador
  },
  cuenta: {
    insertar: insertarCuenta,
    actualizar: actualizarCuenta,
    eliminar: eliminarCuenta,
    obtenerTodos: obtenerTodasCuentas,
    obtener: obtenerCuenta
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
  }
};
