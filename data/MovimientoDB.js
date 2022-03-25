const Colecciones = require("../data/Conexion");

const insertar = async(movimiento) => {
  try{
    const c = await new Colecciones.movimiento(movimiento);
    c.save()
    return await c
  }catch(error) {
    console.log("Ha ocurrido un error: " + error);
    return null
  }
};

const remover = (cuenta) => {
  const borrarCuenta = async () => {
    return await Colecciones.movimiento.deleteOne(cuenta);
  };

  borrarCuenta()
    .then(() => {
      console.log("El movimiento ha sido borrado");
    })
    .catch((error) => {
      console.log("El movimiento no ha sido borrado por: " + error);
    });
};

const obtenerTodos = async () => {
  return await Colecciones.movimiento.find().sort();
};

const obtener = async (idMovimiento) => {
  return await Colecciones.movimiento
    .find({ idMovimiento: idMovimiento })
    .sort();
};

const actualizar = async (movi) => {
  const actualizarCuenta = await Colecciones.movimiento.updateOne(
    { idMovimiento: movi.idMovimiento },
    {
      $set: {
        idMovimiento: movi.idMovimiento,
        cantidad: movi.cantidad,
        claveRastreo: movi.claveRastreo,
        fechaHora: movi.fechaHora,
        bancoReceptor: movi.bancoReceptor,
      },
    }
  );
  console.log(`${actualizarCuenta.matchedCount} cliente va a ser modificado`);
  console.log(`${actualizarCuenta.modifiedCount} cliente ha sido modificado`);
};

module.exports = MovimientoDB = {
  insertar: insertar,
  eliminar: remover,
  obtenerTodos: obtenerTodos,
  obtener: obtener,
  actualizar: actualizar,
};
