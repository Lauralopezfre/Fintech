const ClienteBD = require('../data/ClienteDB')
const AdministradorBD = require('../data/AdministradorDB')
const CuentaBD = require('../data/CuentaDB')
const MovimientoBD = require('../data/MovimientoDB')
const TarjetaBD = require('../data/TarjetaDB')
const Cliente = require('../clases/Cliente')
const Administrador = require('../clases/Administrador')
const Tarjeta = require('../clases/Tarjeta')
const Cuenta = require('../clases/Cuenta')

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
        telefono);

    ClienteBD.insertar(cliente);
}

const actualizarCliente = (userId,
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
    telefono) => {

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
            telefono);
    
        ClienteBD.actualizar(cliente);
    }

const eliminarCliente = (userid) => {

    const cliente = new Cliente(
        userId,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null);
    ClienteBD.eliminar(cliente);
}

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
        telefono);

    AdministradorBD.insertar(administrador);
}

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
        titular);

    CuentaBD.insertar(cuenta);
}

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
        tipoTarjeta);

    TarjetaBD.insertar(tarjeta);
}

const obtenerTarjeta = (numero) => {
    TarjetaBD.obtener(numero).then(tarjetas => {
        return tarjetas[0]
    }).catch(error =>{
        console.log('No se puede obtener las tarjetas ' + error);
    });
}

module.exports = {
    cliente: {
        insertar: insertarCliente,
        actualizar: actualizarCliente
    },
    administrador: {
        insertar: insertarAdministrador,
    },
    cuenta: {
        insertar: insertarCuenta,
    },
    tarjeta: {
        insertar: insertarTarjeta,
        obtener: obtenerTarjeta
    }
}