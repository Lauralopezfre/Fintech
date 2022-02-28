const Usuario = require('../clases/Usuario')

module.exports= class Administrador extends Usuario{
    constructor(
        userId,
        nombre,
        contrasenia,
        fechaRegistro,
        email,
        nombreAdministrador,
        area,
        puesto,
        telefono
    ){
        super(userId, nombre, contrasenia, fechaRegistro, email);
        this.nombreAdministrador = nombreAdministrador
        this.area = area
        this.puesto = puesto
        this.telefono = telefono
    }

    consignarCuenta(){

    }

    validarCliente(){
        
    }
}