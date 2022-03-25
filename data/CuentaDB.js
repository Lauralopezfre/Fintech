const Colecciones = require("../data/Conexion");

const insertar = async(cuenta) => {
  try{
    const c = await new Colecciones.cuenta(cuenta);
    c.save()
    return await c
  }catch(error) {
    console.log("Ha ocurrido un error: " + error);
    return null
  }
};

const remover = (cuenta) => {
  const borrarCuenta = async () => {
    return await Colecciones.cuenta.deleteOne(cuenta);
  };

  borrarCuenta()
    .then(() => {
      console.log("La cuenta ha sido borrado");
    })
    .catch((error) => {
      console.log("La cuenta no ha sido borrado por: " + error);
    });
};

const obtenerTodos = async () => {
  return await Colecciones.cuenta.find().sort();
};

const obtener = async (titular) => {
  return await Colecciones.cuenta.find({ titular: titular }).sort();
};

const actualizar = async (cuenta) => {
  const actualizarCuenta = await Colecciones.cuenta.updateOne(
    { titular: cuenta.titular },
    {
      $set: {
        balance: cuenta.balance,
        estadoCuenta: cuenta.estadoCuenta,
        reporte: cuenta.reporte,
        tarjetaDebito: cuenta.tarjetaDebito,
        tipoCuenta: cuenta.tipoCuenta,
        titular: cuenta.titular,
      },
    }
  );
  console.log(`${actualizarCuenta.matchedCount} cliente va a ser modificado`);
  console.log(`${actualizarCuenta.modifiedCount} cliente ha sido modificado`);
};

module.exports = CuentaDB = {
  insertar: insertar,
  eliminar: remover,
  obtenerTodos: obtenerTodos,
  obtener: obtener,
  actualizar: actualizar,
};
