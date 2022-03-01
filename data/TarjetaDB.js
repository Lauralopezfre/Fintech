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
    const borrarTarjeta = async () => {
        return await Colecciones.tarjeta.deleteOne(tarjeta);
    }

    borrarTarjeta().then(()=>{
        console.log('La tarjeta ha sido borrado');
    }).catch(error => {
        console.log('La tarjeta no ha sido borrado por: ' + error);
    })
}

const obtenerTodos = async() =>{
    return await Colecciones.tarjeta.find().sort();
}

const obtener = async (numero) =>{
    return await Colecciones.tarjeta.find({numero: numero}).sort();
}

const actualizar = async(tarjeta) =>{
    const actualizarTarjeta = await Colecciones.tarjeta.updateOne(
        {numero: tarjeta.numero},
        {
            $set: {
                numero: tarjeta.numero,
                chip: tarjeta.chip,
                cvv: tarjeta.cvv,
                fechaVencimiento: tarjeta.fechaVencimiento,
                entidadBancaria: tarjeta.entidadBancaria,
                clabeInterbancaria: tarjeta.clabeInterbancaria,
                tipoTarjeta: tarjeta.tipoTarjeta
            }
        }
    )
    console.log(`${actualizarTarjeta.matchedCount} cliente va a ser modificado`);
    console.log(`${actualizarTarjeta.modifiedCount} cliente ha sido modificado`);
}

module.exports = TarjetaDB = {
    insertar: insertar,
    eliminar: remover,
    obtenerTodos: obtenerTodos,
    obtener: obtener,
    actualizar: actualizar
}
