const Colecciones = require('../data/Conexion');

const insertar = (administrador) =>{
    const insertarAdministrador = new Colecciones.administrador(administrador);

    insertarAdministrador.save().then( doc => {
        console.log('Se ha guardado el administrador: ' + doc);
    }).catch( error => {
        console.log('Ha ocurrido un error: '+ error);
    });
}   

const remover = (administrador) =>{

}

const obtenerTodos = () =>{

}
const obtener = (userId) =>{

}
const actualizar = (administrador) =>{

}

module.exports = AdministradorsDB = {
    insertar: insertar,
    eliminar: remover,
    obtenerTodos: obtenerTodos,
    obtener: obtener,
    actualizar: actualizar
}