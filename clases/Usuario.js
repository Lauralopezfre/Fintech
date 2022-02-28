module.exports = class Usuario {
  constructor(userId, nombre, contrasenia, fechaRegistro, email) {
    (this.userId = userId),
      (this.nombre = nombre),
      (this.contrasenia = contrasenia),
      (this.fechaRegistro = fechaRegistro),
      (this.email = email);
  }

  verificacionLogin() {}
}
