var mongoose = require("mongoose");
var Tarjeta = require("../clases/Tarjeta");
var Cliente = require("../clases/Cliente");
require('dotenv').config();

// Conexión con la base de datos
const conexion = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/fintech');
    console.log("Conexión exitosa");
  } catch (error) {
    console.log("No se pudó conectar por: " + error);
  }
};

//Creación de la collection
const crearColecciones = () => {

    conexion();
    let colecciones = [];

    //Cliente
    colecciones.push(
        mongoose.Schema({
            userId: String,
            nombre: String,
            contrasenia: String,
            fechaRegistro: String,
            email: String,
            rfc: String,
            direccion: String,
            identificacion: String,
            cantidadCuentas: Number,
            tipoCuentas: String,
            tipoTarjetas: String,
            telefono: String
        })
    );

    //Administrador
    colecciones.push(
        mongoose.Schema({
            userId: String,
            nombre: String,
            contrasenia: String,
            fechaRegistro: String,
            email: String,
            nombreAdministrador: String,
            area: String,
            puesto: String,
            telefono: String
        })
    );

    //Tarjeta
    colecciones.push(
        mongoose.Schema({
            numero: String,
            chip: String,
            cvv: Number,
            fechaVencimiento: String,
            entidadBancaria: String,
            clabeInterbancaria: String,
            tipoTarjeta: String
        })
    );

    // Cuenta
    colecciones.push(
        mongoose.Schema({
            balance: Number,
            estadoCuenta: String,
            reporte: Object,
            tarjetaDebito: Object,
            tipoCuenta: String,
            titular: Object
        })
    );

    // Movimiento
    colecciones.push(
        mongoose.Schema({
            idMovimiento: String,
            cantidad: Number,
            claveRastreo: String,
            fechaHora: String,
            bancoReceptor: String
        })
    );

    return colecciones
};

const colecciones = crearColecciones();

//Se genera una instancia del modelo
const crearModelos = () => {
    let modelos = []
    modelos.push(mongoose.model("clientes", colecciones[0]));
    modelos.push(mongoose.model("administradores", colecciones[1]));
    modelos.push(mongoose.model("tarjetas", colecciones[2]));
    modelos.push(mongoose.model("cuentas", colecciones[3]));
    modelos.push(mongoose.model("movimientos", colecciones[4]));

    return modelos
};

const modelos = crearModelos();

module.exports = {
    cliente: modelos[0],
    administrador: modelos[1],
    tarjeta: modelos[2],
    cuenta: modelos[3],
    movimiento: modelos[4]
}
