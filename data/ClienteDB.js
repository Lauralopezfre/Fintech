const Colecciones = require('../data/Conexion');

const insertar = (cliente) =>{
    const insertarCliente = new Colecciones.cliente(cliente);

    insertarCliente.save().then( doc => {
        console.log('Se ha guardado el cliente: ' + doc);
    }).catch( error => {
        console.log('Ha ocurrido un error: '+ error);
    });
}
const remover = (cliente) =>{
    const borrarCliente = async () => {
        return await Colecciones.cliente.deleteOne(cliente);
    }

    borrarCliente().then(()=>{
        console.log('El usuario ha sido borrado');
    }).catch(error => {
        console.log('El usuario no ha sido borrado por: ' + error);
    })

}
const obtenerTodos = async () =>{
    return await Colecciones.cliente.find().sort();
}

const obtener = async (userId) =>{
    return await Colecciones.cliente.findById(userId);
}
const actualizar = async (cliente) =>{
    const actualizarCliente = await Colecciones.cliente.updateOne(
        {userId: cliente.userId},
        {
            $set: {
                userId: cliente.userId,
                nombre: cliente.nombre,
                contrasenia: cliente.contrasenia,
                fechaRegistro: cliente.fechaRegistro,
                email: cliente.email,
                rfc: cliente.rfc,
                direccion: cliente.direccion,
                identificacion: cliente.identificacion,
                cantidadCuentas: cliente.cantidadCuentas,
                tipoCuentas: cliente.tipoCuentas,
                tipoTarjetas: cliente.tipoTarjetas,
                telefono: cliente.telefono
            }
        }
    )
    console.log(`${actualizarCliente.matchedCount} cliente va a ser modificado`);
    console.log(`${actualizarCliente.modifiedCount} cliente ha sido modificado`);
}

module.exports = ClienteDB = {
    insertar: insertar,
    eliminar: remover,
    obtenerTodos: obtenerTodos,
    obtener: obtener,
    actualizar: actualizar
}
