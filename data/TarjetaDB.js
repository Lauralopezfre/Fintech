const Colecciones = require('../data/Conexion');

const insertar = (tarjeta) =>{
    const insertarTarjeta = new Colecciones.tarjeta(tarjeta);

    insertarTarjeta.save().then( doc => {
        console.log('Se ha guardado la tarjeta: ' + doc);
    }).catch( error => {
        console.log('Ha ocurrido un error: '+ error);
    });
}
const remover = (tarjeta) =>{

}
const obtenerTodos = () =>{

}
const obtener = async (numero) =>{
    return await Colecciones.tarjeta.find({numero: numero}).sort();
}
const actualizar = (tarjeta) =>{

}

module.exports = TarjetaDB = {
    insertar: insertar,
    eliminar: remover,
    obtenerTodos: obtenerTodos,
    obtener: obtener,
    actualizar: actualizar
}
