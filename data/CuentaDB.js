const Colecciones = require('../data/Conexion');

const insertar = (cuenta) =>{
    const insertarCuenta = new Colecciones.cuenta(cuenta);

    insertarCuenta.save().then( doc => {
        console.log('Se ha guardado la cuenta: ' + doc);
    }).catch( error => {
        console.log('Ha ocurrido un error: '+ error);
    });
}
const remover = (cuenta) =>{

}
const obtenerTodos = () =>{

}
const obtener = (userId) =>{

}
const actualizar = (cuenta) =>{

}

module.exports = CuentaDB = {
    insertar: insertar,
    eliminar: remover,
    obtenerTodos: obtenerTodos,
    obtener: obtener,
    actualizar: actualizar
}
