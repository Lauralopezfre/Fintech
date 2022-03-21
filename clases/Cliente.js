const Usuario = require("../clases/Usuario");

module.exports = class Cliente extends Usuario {
  constructor(
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
  ) {
    super(userId, nombre, contrasenia, fechaRegistro, email);
    this.rfc = rfc;
    this.direccion = direccion;
    this.identificacion = identificacion;
    this.cantidadCuentas = cantidadCuentas;
    this.tiposCuentas = tiposCuentas;
    this.tipoTarjetas = tipoTarjetas;
    this.telefono = telefono;
  }

  consultar() {}

  retirar() {}

  consignar() {}

  cambirClave() {}
};
